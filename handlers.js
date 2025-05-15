const { botLogger } = require('./logger');
const utils = require('./utils');
const {
  isAddressValid,
  getSession,
  saveSessionData,
} = require('./sessionManager');

// Faucet handler with logging and reply_to_message_id on denials
async function handleFaucetCommand(ctx, utils) {
  const userId = `${ctx.chat.id}:${ctx.from.id}`;
  const session = getSession(userId);
  botLogger.info(`Faucet command from ${ctx.from.id} in chat ${ctx.chat.id} (session: ${userId})`);

  const parts = ctx.message.text.split(' ');
  if (parts.length < 2) {
    session.data.awaitingAddress = true;
    saveSessionData();
    botLogger.debug(`Awaiting address for ${userId}`);
    return ctx.reply(
      'Please provide an osmo wallet address. Usage: /faucet osmo1...',
      { reply_to_message_id: ctx.message.message_id }
    );
  }

  const address = parts[1];
  if (!isAddressValid(address)) {
    botLogger.warn(`Invalid address provided by ${userId}: ${address}`);
    return ctx.reply(
      'Invalid address. Please provide a valid osmo address.',
      { reply_to_message_id: ctx.message.message_id }
    );
  }

  const now = Date.now();
  const timeoutMs = Number(process.env.FAUCET_TIMEOUT_HOURS) * 3600000;

  if (session.data.lastClaim) {
    botLogger.debug(`lastClaim for ${userId}: ${session.data.lastClaim}, now: ${now}`);
  }

  if (session.data.lastClaim && now - session.data.lastClaim < timeoutMs) {
    session.data.pendingRequest = true;
    session.data.pendingAddress = address;
    saveSessionData();
    botLogger.info(`Cooldown active for ${userId}, set pendingRequest`);
    return ctx.reply(
      `You have already claimed recently. Reply /vouch or wait until timeout.`,
      { reply_to_message_id: ctx.message.message_id }
    );
  }

  if (
    session.data.lastReceived &&
    session.data.lastReceived[address] &&
    now - session.data.lastReceived[address] < timeoutMs
  ) {
    session.data.pendingRequest = true;
    session.data.pendingAddress = address;
    saveSessionData();
    botLogger.info(`Address ${address} used recently, set pendingRequest for ${userId}`);
    return ctx.reply(
      `This address was used recently. Reply /vouch or wait until timeout.`,
      { reply_to_message_id: ctx.message.message_id }
    );
  }

  botLogger.info(`Processing normal faucet for ${userId} -> ${address}`);
  await utils.processFaucetRequest(ctx, userId, address);
}

// Vouch handler
async function handleVouchCommand(ctx, utils) {
  botLogger.info(`Vouch command from ${ctx.from.id}`);
  let targetUserId, targetUsername;

  if (ctx.message.reply_to_message) {
    const replied = ctx.message.reply_to_message;
    const original = replied.reply_to_message || replied;
    targetUserId = original.from.id;
    targetUsername = original.from.username;
  } else {
    const mention = ctx.message.entities?.find(e => e.type === 'mention');
    if (!mention) {
      return ctx.reply('Reply to denial or use /vouch @username.', { parse_mode: 'Markdown' });
    }
    const uname = ctx.message.text.slice(mention.offset + 1, mention.offset + mention.length);
    try {
      const member = await ctx.telegram.getChatMember(ctx.chat.id, `@${uname}`);
      targetUserId = member.user.id;
      targetUsername = uname;
    } catch {
      return ctx.reply(`Could not find @${uname} in this chat.`);
    }
  }

  if (targetUserId === ctx.from.id) {
    botLogger.warn(`Self-vouch attempt by ${ctx.from.id}`);
    return ctx.reply('You cannot vouch for yourself.');
  }

  const sessionKey = `${ctx.chat.id}:${targetUserId}`;
  const session = getSession(sessionKey);

  if (!session.data.pendingRequest) {
    botLogger.info(`No pendingRequest for ${sessionKey}`);
    return ctx.reply(
      `@${targetUsername || targetUserId} has no pending faucet request.`,
      { parse_mode: 'Markdown' }
    );
  }

  const address = session.data.pendingAddress;
  if (!address || !isAddressValid(address)) {
    botLogger.error(`Invalid pending address for ${sessionKey}: ${address}`);
    return ctx.reply('Invalid or missing pending address.');
  }

  try {
    botLogger.info(`Vouching for ${sessionKey} -> ${address}`);
    const wallet = await utils.initWallet();
    const result = await utils.sendTokens(wallet, address);
    if (!result.success) throw new Error('Transaction failed');

    session.data.lastClaim = Date.now();
    session.data.lastReceived = session.data.lastReceived || {};
    session.data.lastReceived[address] = Date.now();
    session.data.pendingRequest = false;
    saveSessionData();

    const link = result.transactionHash
      ? `https://celatone.osmosis.zone/${process.env.CHAIN_ID}/txs/${result.transactionHash}`
      : `https://celatone.osmosis.zone/${process.env.CHAIN_ID}`;

    return ctx.reply(
      `Sent tokens to ${address} for @${targetUsername || targetUserId}. [Details](${link})`,
      { parse_mode: 'Markdown' }
    );
  } catch (err) {
    botLogger.error('Vouch error:', err);
    return ctx.reply('Failed to send tokens. Please try again later.');
  }
}

function registerHandlers(bot) {
  bot.command('faucet', ctx => handleFaucetCommand(ctx, utils));
  bot.command('vouch', ctx => handleVouchCommand(ctx, utils));
  bot.on('text', async ctx => {
    const key = `${ctx.chat.id}:${ctx.from.id}`;
    const session = getSession(key);
    if (session.data.awaitingAddress && isAddressValid(ctx.message.text)) {
      session.data.awaitingAddress = false;
      botLogger.info(`Received address reply for ${key}: ${ctx.message.text}`);
      await utils.processFaucetRequest(ctx, key, ctx.message.text);
      saveSessionData();
    }
  });
}

module.exports = { registerHandlers };
