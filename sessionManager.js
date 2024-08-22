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
  return sessionData.sessions.some(session => session.data.lastReceived && session.data.lastReceived[address] && currentTime - session.data.lastReceived[address] < FAUCET_TIMEOUT);
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
      console.log(seiAddress)
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
      ctx.reply('Please provide a Sei EVM wallet address. Usage: /faucet 0x0...');
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
      return ctx.reply('Invalid address. Please provide a valid EVM address.');
    }

    if (!checkAssociation(address)) {
      botLogger.info(`User ${userId} provided an unassociated EVM address: ${address}`);
      return ctx.reply('Please associate your EVM address on the Sei website..');
    }

    await utils.processFaucetRequest(ctx, userId, address);
    return;
  }

  const messageParts = ctx.message.text.split(' ');
  if (messageParts.length < 2) {
    botLogger.info(`User ${userId} did not provide an address.`);
    session.data.awaitingAddress = true;
    ctx.reply('Please provide a Sei EVM wallet address. Usage: /faucet 0x0...');
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
    return ctx.reply('Invalid address. Please provide a valid Sei EVM wallet address.');
  }

  if (!checkAssociation(address)) {
    botLogger.info(`User ${userId} provided an unassociated EVM address: ${address}`);
    return ctx.reply('Please associate your EVM address on the Sei website..');
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

async function handleVouchCommand(ctx, utils) {
  botLogger.info(`Vouch command received from user: ${ctx.from.id}`);

  if (!ctx.message.reply_to_message) {
    return ctx.reply('Please reply to the message of the user you want to vouch for.');
  }

  const vouchedUserId = `${ctx.chat.id}:${ctx.message.reply_to_message.from.id}`;
  const vouchedUserSession = getSession(vouchedUserId);

  if (vouchedUserId === `${ctx.chat.id}:${ctx.from.id}`) {
    return ctx.reply('You cannot vouch for yourself.');
  }

  if (vouchedUserSession && vouchedUserSession.data.pendingRequest) {
    const address = vouchedUserSession.data.pendingAddress;

    if (!address || !ethers.utils.isAddress(address)) {
      return ctx.reply('Invalid or no address found for the vouched user.');
    }

    if (!checkAssociation(address)) {
      botLogger.info(`User ${userId} provided an unassociated EVM address: ${address}`);
      return ctx.reply('Please associate your EVM address on the Sei website..');
    }

    try {
      const result = await utils.sendTokens(address);
      if (result.success) {
        vouchedUserSession.data.lastClaim = Date.now();
        vouchedUserSession.data.lastReceived = vouchedUserSession.data.lastReceived || {};
        vouchedUserSession.data.lastReceived[address] = Date.now();
        vouchedUserSession.data.pendingRequest = false;
        vouchedUserSession.data.awaitingAddress = false;
        saveSessionData();
        const explorerLink = result.transactionHash ?
          `https://seitrace.com/tx/${result.transactionHash}?chain=atlantic-2` :
          `https://seitrace.com/?chain=atlantic-2`;
        return ctx.reply(`Successfully sent 10 tokens to ${address} for user @${ctx.message.reply_to_message.from.username}. [Transaction details](${explorerLink})`, { parse_mode: 'Markdown' });
      } else {
        throw new Error('Failed to send tokens. Please try again later.');
      }
    } catch (error) {
      if (error.message.includes("out of gas")) {
        return ctx.reply('Transaction failed due to out of gas. Please try again later with a higher gas limit.');
      }
      return ctx.reply('Failed to send tokens. Please try again later.');
    }
  } else {
    return ctx.reply(`The mentioned user has not requested tokens in the last ${FAUCET_TIMEOUT_HOURS} hours or has already been vouched for.`);
  }
}

// Load session data on startup
loadSessionData();

module.exports = {
  handleFaucetCommand,
  handleVouchCommand,
  isAddressValid,
  checkAssociation,
  loadSessionData,
  getSession,
  saveSessionData,
  isWhitelisted,
  hasUserClaimedRecently,
  hasAddressReceivedRecently,
  setPendingRequest,
};
