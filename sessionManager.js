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

// New constants for decay/recovery system
const DECAY_WINDOW_HOURS = 48; // Requests within 48 hours trigger decay
const DECAY_WINDOW = DECAY_WINDOW_HOURS * 60 * 60 * 1000;
const RECOVERY_PERIOD_HOURS = 24; // Amount doubles every 24 hours of no requests
const RECOVERY_PERIOD = RECOVERY_PERIOD_HOURS * 60 * 60 * 1000;
const WALLET_LOCK_HOURS = 72; // Other users can only request locked wallets once per 72 hours
const WALLET_LOCK_PERIOD = WALLET_LOCK_HOURS * 60 * 60 * 1000;

let sessionData = {
  sessions: [],
  walletLocks: {}, // Maps wallet address to { ownerId, crossUserRequests: { userId: timestamp } }
  userAmounts: {} // Maps userId to { multiplier, lastRequestTime, lastUpdateTime }
};

function loadSessionData() {
  if (fs.existsSync(SESSION_DB_PATH)) {
    const loaded = JSON.parse(fs.readFileSync(SESSION_DB_PATH));
    sessionData = {
      sessions: loaded.sessions || [],
      walletLocks: loaded.walletLocks || {},
      userAmounts: loaded.userAmounts || {}
    };
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

// Calculate current eligible amount based on decay/recovery
function calculateEligibleAmount(userId) {
  const baseAmount = parseInt(process.env.AMOUNT, 10);
  const userAmount = sessionData.userAmounts[userId];

  if (!userAmount) {
    // First time user, full amount
    return { amount: baseAmount, multiplier: 1.0 };
  }

  const now = Date.now();
  const { multiplier, lastRequestTime, lastUpdateTime } = userAmount;

  // Calculate recovery based on time since last request
  const timeSinceLastRequest = now - lastRequestTime;
  const recoveryPeriods = Math.floor(timeSinceLastRequest / RECOVERY_PERIOD);

  // Recovery: multiplier doubles every RECOVERY_PERIOD, capped at 1.0
  let newMultiplier = multiplier;
  for (let i = 0; i < recoveryPeriods; i++) {
    newMultiplier = Math.min(1.0, newMultiplier * 2);
  }

  const amount = Math.floor(baseAmount * newMultiplier);

  botLogger.info(`Amount calculation for ${userId}: base=${baseAmount}, multiplier=${newMultiplier.toFixed(3)}, amount=${amount}`);

  return { amount, multiplier: newMultiplier };
}

// Update user amount data after a request
function updateUserAmount(userId, isActualRequest = true) {
  const now = Date.now();
  const current = calculateEligibleAmount(userId);

  if (isActualRequest) {
    const { multiplier } = current;
    const timeSinceLastRequest = sessionData.userAmounts[userId]
    ? now - sessionData.userAmounts[userId].lastRequestTime
    : Infinity;

    // If request is within decay window, halve the multiplier for next time
    const newMultiplier = timeSinceLastRequest < DECAY_WINDOW
    ? Math.max(0.0001, multiplier / 2) // Minimum to prevent going to 0
    : multiplier;

    sessionData.userAmounts[userId] = {
      multiplier: newMultiplier,
      lastRequestTime: now,
      lastUpdateTime: now
    };

    botLogger.info(`Updated user amount for ${userId}: newMultiplier=${newMultiplier.toFixed(3)}, timeSinceLastRequest=${timeSinceLastRequest}ms`);
  }
}

// Check wallet locking rules
function checkWalletLock(address, requestingUserId) {
  const lock = sessionData.walletLocks[address];

  if (!lock) {
    // First time this address is used, lock it to this user
    sessionData.walletLocks[address] = {
      ownerId: requestingUserId,
      crossUserRequests: {}
    };
    return { allowed: true, isOwner: true };
  }

  if (lock.ownerId === requestingUserId) {
    // User owns this wallet
    return { allowed: true, isOwner: true };
  }

  // Check if this user has requested this locked wallet recently
  const lastCrossUserRequest = lock.crossUserRequests[requestingUserId];
  if (lastCrossUserRequest && Date.now() - lastCrossUserRequest < WALLET_LOCK_PERIOD) {
    return {
      allowed: false,
      isOwner: false,
      reason: `This wallet is locked to another user. You can request it again in ${Math.ceil((WALLET_LOCK_PERIOD - (Date.now() - lastCrossUserRequest)) / (60 * 60 * 1000))} hours.`
    };
  }

  // Allow the request but record it
  lock.crossUserRequests[requestingUserId] = Date.now();
  return { allowed: true, isOwner: false };
}

function setPendingRequest(id, address) {
  const d = getSession(id).data;
  d.pendingRequest = true;
  d.requestTime = Date.now();
  d.pendingAddress = address;
  saveSessionData();
}

// --- Status command ---
async function handleStatusCommand(ctx) {
  const userId = ctx.from.id.toString();
  const userKey = `${ctx.chat.id}:${ctx.from.id}`;
  botLogger.info(`[/status] ${userKey}`);

  const { amount, multiplier } = calculateEligibleAmount(userId);
  const baseAmount = parseInt(process.env.AMOUNT, 10);
  const userAmount = sessionData.userAmounts[userId];

  let statusMessage = `**Your Faucet Status:**\n`;
  statusMessage += `• Current eligible amount: **${amount} ${process.env.DENOM}**\n`;
  statusMessage += `• Base amount: ${baseAmount} ${process.env.DENOM}\n`;
  statusMessage += `• Current multiplier: **${(multiplier * 100).toFixed(1)}%**\n\n`;

  if (userAmount && userAmount.lastRequestTime) {
    const timeSinceLastRequest = Date.now() - userAmount.lastRequestTime;
    const hoursSince = Math.floor(timeSinceLastRequest / (60 * 60 * 1000));
    const nextRecoveryHours = RECOVERY_PERIOD_HOURS - (hoursSince % RECOVERY_PERIOD_HOURS);

    statusMessage += `• Last request: ${hoursSince} hours ago\n`;

    if (multiplier < 1.0) {
      statusMessage += `• Next recovery in: ${nextRecoveryHours} hours\n`;
      statusMessage += `• Amount after next recovery: ${Math.min(baseAmount, amount * 2)} ${process.env.DENOM}\n`;
    }
  } else {
    statusMessage += `• This would be your first request\n`;
  }

  statusMessage += `\n💡 **How it works:**\n`;
  statusMessage += `• Requesting within ${DECAY_WINDOW_HOURS}h halves your next amount\n`;
  statusMessage += `• Amount doubles every ${RECOVERY_PERIOD_HOURS}h without requests\n`;
  statusMessage += `• Wallets get locked to first user for ${WALLET_LOCK_HOURS}h per other user`;

  return ctx.reply(statusMessage, { parse_mode: 'Markdown' });
}

// --- Faucet flow ---
async function handleFaucetCommand(ctx, utils) {
  const userKey = `${ctx.chat.id}:${ctx.from.id}`;
  const userId = ctx.from.id.toString();
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

  // Check wallet locking
  const lockCheck = checkWalletLock(address, userId);
  if (!lockCheck.allowed) {
    setPendingRequest(userKey, address);
    return ctx.reply(
      lockCheck.reason + ' Ask someone to reply to your request with "/vouch" to bypass.',
      { reply_to_message_id: ctx.message.message_id }
    );
  }

  // Calculate eligible amount
  const { amount, multiplier } = calculateEligibleAmount(userId);

  // cooldown checks (skip for whitelisted users)
  if (!WHITELISTED_USER_IDS.includes(userId)) {
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
        `Address used in last ${FAUCET_TIMEOUT_HOURS}h. Ask someone to reply to your original request message with "/vouch" to bypass.`,
        { reply_to_message_id: ctx.message.message_id }
      );
    }
  }

  // process request
  try {
    const wallet = await initWallet();
    const res = await sendTokens(wallet, address, amount); // Pass custom amount
    if (res.success) {
      // Update user amount tracking
      updateUserAmount(userId, true);

      session.data.lastClaim = Date.now();
      session.data.lastReceived = session.data.lastReceived || {};
      session.data.lastReceived[address] = Date.now();
      session.data.pendingRequest = false;
      saveSessionData();

      const link = res.transactionHash
      ? `https://celatone.osmosis.zone/${process.env.CHAIN_ID}/txs/${res.transactionHash}`
      : `https://celatone.osmosis.zone/${process.env.CHAIN_ID}`;

      const multiplierInfo = multiplier < 1.0
      ? ` (${(multiplier * 100).toFixed(1)}% of base amount due to recent requests)`
      : '';

      return ctx.reply(
        `Sent ${amount} ${process.env.DENOM} to ${address}${multiplierInfo}. [Details](${link})`,
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
  const vouchingUserId = ctx.from.id.toString();
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

  const targetUserId = targetId.toString();

  // no self-vouch
  if (targetUserId === vouchingUserId) {
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

  // Check wallet locking for vouching
  const lockCheck = checkWalletLock(addr, vouchingUserId);
  if (!lockCheck.allowed) {
    return ctx.reply(`Cannot vouch: ${lockCheck.reason}`);
  }

  // Calculate amount for the original requester
  const { amount, multiplier } = calculateEligibleAmount(targetUserId);

  // execute vouch
  try {
    const wallet = await initWallet();
    const res = await sendTokens(wallet, addr, amount); // Pass custom amount
    if (res.success) {
      // Update the target user's amount tracking
      updateUserAmount(targetUserId, true);

      const s = getSession(targetKey).data;
      s.lastClaim = Date.now();
      s.lastReceived = s.lastReceived || {};
      s.lastReceived[addr] = Date.now();
      s.pendingRequest = false;
      saveSessionData();

      const link = res.transactionHash
      ? `https://celatone.osmosis.zone/${process.env.CHAIN_ID}/txs/${res.transactionHash}`
      : `https://celatone.osmosis.zone/${process.env.CHAIN_ID}`;

      const multiplierInfo = multiplier < 1.0
      ? ` (${(multiplier * 100).toFixed(1)}% of base amount due to recent requests)`
      : '';

      return ctx.reply(
        `Vouched: sent ${amount} ${process.env.DENOM} to ${addr}${multiplierInfo}. [Details](${link})`,
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
  handleStatusCommand,
  saveSessionData,
  calculateEligibleAmount,
  updateUserAmount,
  checkWalletLock,
  getSession,
  get sessionData() { return sessionData; }, // Getter for sessionData
};
