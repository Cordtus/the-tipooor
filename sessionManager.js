const fs = require('fs');
const path = require('path');
const { botLogger } = require('./logger');
const { initWallet, sendTokens } = require('./utils');

const SESSION_DB_PATH = path.join(__dirname, 'session_db.json');
const WHITELISTED_USER_IDS = (process.env.WHITELISTED_USER_IDS || '')
  .split(',')
  .map(id => id.trim())
  .filter(Boolean);
const FAUCET_TIMEOUT_HOURS =
  parseInt(process.env.FAUCET_TIMEOUT_HOURS, 10) || 12;
const FAUCET_TIMEOUT = FAUCET_TIMEOUT_HOURS * 60 * 60 * 1000;

let sessionData = { sessions: [] };

function loadSessionData() {
  if (fs.existsSync(SESSION_DB_PATH)) {
    sessionData = JSON.parse(fs.readFileSync(SESSION_DB_PATH));
  }
}

function saveSessionData() {
  fs.writeFileSync(SESSION_DB_PATH, JSON.stringify(sessionData, null, 2));
}

function getSession(id) {
  let s = sessionData.sessions.find(x => x.id === id);
  if (!s) {
    s = { id, data: {} };
    sessionData.sessions.push(s);
  }
  return s;
}

function isAddressValid(address) {
  return address.startsWith('osmo1');
}

function hasUserClaimedRecently(id) {
  const s = getSession(id).data;
  return s.lastClaim && Date.now() - s.lastClaim < FAUCET_TIMEOUT;
}

function hasAddressReceivedRecently(address) {
  return sessionData.sessions.some(s => {
    const r = s.data.lastReceived || {};
    return r[address] && Date.now() - r[address] < FAUCET_TIMEOUT;
  });
}

function setPendingRequest(id, address) {
  const d = getSession(id).data;
  d.pendingRequest = true;
  d.requestTime = Date.now();
  d.pendingAddress = address;
  saveSessionData();
}

// --- Faucet flow ---
async function handleFaucetCommand(ctx, utils) {
  const userKey = `${ctx.chat.id}:${ctx.from.id}`;
  const session = getSession(userKey);
  botLogger.info(`[/faucet] ${userKey}`);

  // parse address
  const parts = ctx.message.text.split(' ');
  if (parts.length < 2 || !isAddressValid(parts[1])) {
    session.data.awaitingAddress = true;
    saveSessionData();
    return ctx.reply(
      'Please provide a valid osmo address: `/faucet osmo1...`',
      { parse_mode: 'Markdown', reply_to_message_id: ctx.message.message_id }
    );
  }
  const address = parts[1];

  // cooldown checks
  if (!WHITELISTED_USER_IDS.includes(ctx.from.id.toString())) {
    if (hasUserClaimedRecently(userKey)) {
      setPendingRequest(userKey, address);
      return ctx.reply(
        `Already claimed in last ${FAUCET_TIMEOUT_HOURS}h. Ask someone to reply to your original request message with "/vouch" to bypass.`,
        { reply_to_message_id: ctx.message.message_id }
      );
    }
    if (hasAddressReceivedRecently(address)) {
      setPendingRequest(userKey, address);
      return ctx.reply(
        `Address used in last ${FAUCET_TIMEOUT_HOURS}h. Ask someone to reply to your original request message with "vouch" to bypass.`,
        { reply_to_message_id: ctx.message.message_id }
      );
    }
  }

  // process request
  try {
    const wallet = await initWallet();
    const res = await sendTokens(wallet, address);
    if (res.success) {
      session.data.lastClaim = Date.now();
      session.data.lastReceived = session.data.lastReceived || {};
      session.data.lastReceived[address] = Date.now();
      session.data.pendingRequest = false;
      saveSessionData();

      const link = res.transactionHash
        ? `https://celatone.osmosis.zone/${process.env.CHAIN_ID}/txs/${res.transactionHash}`
        : `https://celatone.osmosis.zone/${process.env.CHAIN_ID}`;

      return ctx.reply(
        `Sent ${process.env.AMOUNT} ${process.env.DENOM} to ${address}. [Details](${link})`,
        { parse_mode: 'Markdown' }
      );
    }
    throw new Error('tx failed');
  } catch (err) {
    botLogger.error('Faucet error', err);
    return ctx.reply('Failed to send tokens. Try again later.');
  }
}

// --- Vouch flow ---
async function handleVouchCommand(ctx, utils) {
  const userKey = `${ctx.chat.id}:${ctx.from.id}`;
  botLogger.info(`[/vouch] ${userKey}`);

  // resolve target
  let targetId, targetName;
  if (ctx.message.reply_to_message) {
    const replied = ctx.message.reply_to_message;
    const original = replied.reply_to_message || replied;
    targetId = original.from.id;
    targetName = original.from.username || original.from.id;
  } else {
    const mention = ctx.message.entities?.find(e => e.type === 'mention');
    if (!mention) {
      return ctx.reply(
        'Reply or `/vouch @username` to vouch.',
        { parse_mode: 'Markdown' }
      );
    }
    const name = ctx.message.text.substring(
      mention.offset + 1,
      mention.offset + mention.length
    );
    try {
      const member = await ctx.telegram.getChatMember(ctx.chat.id, `@${name}`);
      targetId = member.user.id;
      targetName = name;
    } catch {
      return ctx.reply(`User @${name} not found.`);
    }
  }

  // no self-vouch
  if (targetId === ctx.from.id) {
    return ctx.reply('You cannot vouch for yourself.');
  }

  // lookup session
  const targetKey = `${ctx.chat.id}:${targetId}`;
  const session = getSession(targetKey).data;
  if (!session.pendingRequest) {
    return ctx.reply(`@${targetName} has no pending request.`);
  }

  const addr = session.pendingAddress;
  if (!addr || !isAddressValid(addr)) {
    return ctx.reply('Invalid pending address.');
  }

  // execute vouch
  try {
    const wallet = await initWallet();
    const res = await sendTokens(wallet, addr);
    if (res.success) {
      const s = getSession(targetKey).data;
      s.lastClaim = Date.now();
      s.lastReceived = s.lastReceived || {};
      s.lastReceived[addr] = Date.now();
      s.pendingRequest = false;
      saveSessionData();

      const link = res.transactionHash
        ? `https://celatone.osmosis.zone/${process.env.CHAIN_ID}/txs/${res.transactionHash}`
        : `https://celatone.osmosis.zone/${process.env.CHAIN_ID}`;

      return ctx.reply(
        `Vouched: sent ${process.env.AMOUNT} ${process.env.DENOM} to ${addr}. [Details](${link})`,
        { parse_mode: 'Markdown' }
      );
    }
    throw new Error('tx failed');
  } catch (err) {
    botLogger.error('Vouch error', err);
    return ctx.reply('Failed to send tokens. Try again later.');
  }
}

module.exports = {
  loadSessionData,
  handleFaucetCommand,
  handleVouchCommand,
  saveSessionData,
};
