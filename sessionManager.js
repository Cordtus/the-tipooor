// sessionManager.js

const fs = require('fs');
const path = require('path');
const { botLogger } = require('./logger');

const SESSION_DB_PATH = path.join(__dirname, 'session_db.json');
const WHITELISTED_USER_IDS = (process.env.WHITELISTED_USER_IDS || '').split(',').map(id => id.trim()).filter(Boolean);
const FAUCET_TIMEOUT_HOURS = parseInt(process.env.FAUCET_TIMEOUT_HOURS, 10) || 12;
const FAUCET_TIMEOUT = FAUCET_TIMEOUT_HOURS * 60 * 60 * 1000;

// EVM library
const ethers = require("ethers");

const provider = new ethers.providers.JsonRpcProvider(process.env.EVM_RPC_URL);

const ADDRESS_CONVERTER_ADDRESS = "0x0000000000000000000000000000000000001004";
const ADDRESS_CONVERTER_ABI = require("./abis/addressConverter.json");
const ADDRESS_CONVERTER = new ethers.Contract(ADDRESS_CONVERTER_ADDRESS, ADDRESS_CONVERTER_ABI, provider);

let sessionData = {};

function loadSessionData() {
  if (fs.existsSync(SESSION_DB_PATH)) {
    const rawData = fs.readFileSync(SESSION_DB_PATH);
    sessionData = JSON.parse(rawData);
  } else {
    sessionData = { sessions: [] };
  }
}

function saveSessionData() {
  fs.writeFileSync(SESSION_DB_PATH, JSON.stringify(sessionData, null, 2));
}

function getSession(userId) {
  const session = sessionData.sessions.find(session => session.id === userId);
  if (!session) {
    const newSession = { id: userId, data: {} };
    sessionData.sessions.push(newSession);
    return newSession;
  }
  return session;
}

function isWhitelisted(userId) {
  botLogger.info(`Checking if user ${userId} is whitelisted.`);
  const whitelisted = WHITELISTED_USER_IDS.includes(userId);
  botLogger.info(`User ${userId} whitelisted: ${whitelisted}`);
  return whitelisted;
}

function hasUserClaimedRecently(userId) {
  const currentTime = Date.now();
  const session = getSession(userId);
  return session.data && session.data.lastClaim && currentTime - session.data.lastClaim < FAUCET_TIMEOUT;
}

function hasAddressReceivedRecently(address) {
  const currentTime = Date.now();
  const linkedAddress = getLinkedAddress(address);

  // Check both the given address and its linked counterpart
  return sessionData.sessions.some(session => {
    return (session.data.lastReceived && session.data.lastReceived[address] && currentTime - session.data.lastReceived[address] < FAUCET_TIMEOUT) ||
           (linkedAddress && session.data.lastReceived[linkedAddress] && currentTime - session.data.lastReceived[linkedAddress] < FAUCET_TIMEOUT);
  });
}

async function getLinkedAddress(address) {
  try {
    if (address.startsWith("sei")) {
      const evmAddress = await ADDRESS_CONVERTER.getEvmAddr(address);
      return evmAddress;
    } else if (ethers.utils.isAddress(address)) {
      const seiAddress = await ADDRESS_CONVERTER.getSeiAddr(address);
      return seiAddress;
    }
  } catch (error) {
    botLogger.error(`Error retrieving linked address for ${address}: ${error.message}`);
    return null;
  }
  return null;
}

function updateSessionWithLinkedAddresses(userId, address) {
  const session = getSession(userId);
  getLinkedAddress(address).then(linkedAddress => {
    if (linkedAddress) {
      session.data.linkedAddresses = session.data.linkedAddresses || {};
      session.data.linkedAddresses[address] = linkedAddress;
      session.data.linkedAddresses[linkedAddress] = address; // Keep bidirectional linkage
      saveSessionData();
    }
  }).catch(error => {
    botLogger.error(`Failed to update linked addresses for ${address}: ${error.message}`);
  });
}

function setPendingRequest(userId, address) {
  const session = getSession(userId);
  session.data.pendingRequest = true;
  session.data.requestTime = Date.now();
  session.data.pendingAddress = address;
  saveSessionData();
}

async function checkAssociation(address) {
  try {
    const seiAddress = await ADDRESS_CONVERTER.getSeiAddr(address);
    if (seiAddress) {
      return true;
    } else {
      return false;
    }
  } catch (error) {
    return false;
  }
}

function isAddressValid(address) {
  return ethers.utils.isAddress(address);
}

async function handleFaucetCommand(ctx, utils) {
  const userId = `${ctx.chat.id}:${ctx.from.id}`;
  const session = getSession(userId);

  botLogger.info(`Faucet command received from user: ${ctx.from.id} in group: ${ctx.chat.id}`);

  if (isWhitelisted(ctx.from.id.toString())) {
    botLogger.info(`User ${ctx.from.id} is whitelisted.`);
    const messageParts = ctx.message.text.split(' ');
    if (messageParts.length < 2) {
      botLogger.info(`User ${userId} did not provide an address.`);
      session.data.awaitingAddress = true;
      ctx.reply('Please provide a Sei or EVM wallet address. Usage: /faucet <address>');
      setTimeout(() => {
        if (session.data.awaitingAddress) {
          session.data.awaitingAddress = false;
          botLogger.info(`Cleared awaiting address state for user ${userId} due to timeout.`);
          ctx.reply('Request timed out. Please try again.');
        }
        saveSessionData();
      }, 10000);
      saveSessionData();
      return;
    }

    const address = messageParts[1];
    if (!isAddressValid(address)) {
      botLogger.info(`User ${userId} provided an invalid address: ${address}`);
      return ctx.reply('Invalid address. Please provide a valid Sei or EVM address.');
    }

    updateSessionWithLinkedAddresses(userId, address); // Update linked address data

    if (!await checkAssociation(address)) {
      botLogger.info(`User ${userId} provided an unassociated address: ${address}`);
      return ctx.reply('Please associate your address on the Sei website.');
    }

    await utils.processFaucetRequest(ctx, userId, address);
    return;
  }

  // Non-whitelisted users
  const messageParts = ctx.message.text.split(' ');
  if (messageParts.length < 2) {
    botLogger.info(`User ${userId} did not provide an address.`);
    session.data.awaitingAddress = true;
    ctx.reply('Please provide a Sei or EVM wallet address. Usage: /faucet <address>');
    setTimeout(() => {
      if (session.data.awaitingAddress) {
        session.data.awaitingAddress = false;
        botLogger.info(`Cleared awaiting address state for user ${userId} due to timeout.`);
        ctx.reply('Request timed out. Please try again.');
      }
      saveSessionData();
    }, 10000);
    saveSessionData();
    return;
  }

  const address = messageParts[1];
  if (!isAddressValid(address)) {
    botLogger.info(`User ${userId} provided an invalid address: ${address}`);
    return ctx.reply('Invalid address. Please provide a valid Sei or EVM address.');
  }

  updateSessionWithLinkedAddresses(userId, address); // Update linked address data

  if (!await checkAssociation(address)) {
    botLogger.info(`User ${userId} provided an unassociated address: ${address}`);
    return ctx.reply('Please associate your address on the Sei website.');
  }

  if (hasUserClaimedRecently(userId)) {
    const timeRemaining = FAUCET_TIMEOUT - (Date.now() - session.data.lastClaim);
    const hoursRemaining = Math.floor(timeRemaining / (60 * 60 * 1000));
    const minutesRemaining = Math.floor((timeRemaining % (60 * 60 * 1000)) / (60 * 1000));
    setPendingRequest(userId, address);
    return ctx.reply(`You have already received tokens in the past ${FAUCET_TIMEOUT_HOURS} hours. Please wait ${hoursRemaining} hours and ${minutesRemaining} minutes or get another user to vouch for you using /vouch.`);
  }

  if (hasAddressReceivedRecently(address)) {
    const timeRemaining = FAUCET_TIMEOUT - (Date.now() - session.data.lastReceived[address]);
    const hoursRemaining = Math.floor(timeRemaining / (60 * 60 * 1000));
    const minutesRemaining = Math.floor((timeRemaining % (60 * 60 * 1000)) / (60 * 1000));
    setPendingRequest(userId, address);
    return ctx.reply(`This address has already received tokens in the past ${FAUCET_TIMEOUT_HOURS} hours. Please wait ${hoursRemaining} hours and ${minutesRemaining} minutes or get another user to vouch for you using /vouch.`);
  }

  await utils.processFaucetRequest(ctx, userId, address);
}

module.exports = {
  handleFaucetCommand,
  isAddressValid,
  checkAssociation,
  loadSessionData,
  getSession,
  saveSessionData,
  isWhitelisted,
  hasUserClaimedRecently,
  hasAddressReceivedRecently,
  setPendingRequest,
  updateSessionWithLinkedAddresses,
};
