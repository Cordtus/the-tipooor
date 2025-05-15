const { botLogger } = require('./logger');
const utils = require('./utils');
const {
  handleFaucetCommand,
  isAddressValid,
  getSession,
  saveSessionData,
} = require('./sessionManager');

async function handleVouchCommand(ctx, utils) {
  botLogger.info(`Vouch command from ${ctx.from.id}`);

  // 1) Resolve the target user (reply-chain or @mention)
  let targetUserId;
  let targetUsername;

  if (ctx.message.reply_to_message) {
    const replied = ctx.message.reply_to_message;
    const original = replied.reply_to_message || replied;
    targetUserId = original.from.id;
    targetUsername = original.from.username;
  } else {
    const mention = ctx.message.entities?.find(e => e.type === 'mention');
    if (!mention) {
      return ctx.reply(
        'Reply to a denial or use `/vouch @username`.',
        { parse_mode: 'Markdown' }
      );
    }
    const username = ctx.message.text.slice(
      mention.offset + 1,
      mention.offset + mention.length
    );
    try {
      const member = await ctx.telegram.getChatMember(ctx.chat.id, `@${username}`);
      targetUserId = member.user.id;
      targetUsername = username;
    } catch {
      return ctx.reply(`Could not find @${username} in this chat.`);
    }
  }

  // 2) Prevent self-vouch
  if (targetUserId === ctx.from.id) {
    return ctx.reply('You cannot vouch for yourself.');
  }

  const sessionKey = `${ctx.chat.id}:${targetUserId}`;

  // 3) Check that user has a pending request
  const session = getSession(sessionKey);
  if (!session.data.pendingRequest) {
    return ctx.reply(
      `@${targetUsername || targetUserId} has no pending faucet request.`
    );
  }

  // 4) Validate and send
  const address = session.data.pendingAddress;
  if (!address || !isAddressValid(address)) {
    return ctx.reply('Invalid or missing pending address.');
  }

  try {
    const wallet = await utils.initWallet();
    const result = await utils.sendTokens(wallet, address);
    if (!result.success) throw new Error('tx failed');

    // update session
    session.data.lastClaim = Date.now();
    session.data.lastReceived = session.data.lastReceived || {};
    session.data.lastReceived[address] = Date.now();
    session.data.pendingRequest = false;
    saveSessionData();

    const txHash = result.transactionHash;
    const link = txHash
      ? `https://celatone.osmosis.zone/${process.env.CHAIN_ID}/txs/${txHash}`
      : `https://celatone.osmosis.zone/${process.env.CHAIN_ID}`;

    return ctx.reply(
      `Sent tokens to ${address} for @${targetUsername || targetUserId}. [Details](${link})`,
      { parse_mode: 'Markdown' }
    );
  } catch (err) {
    botLogger.error('Vouch tx error:', err);
    return ctx.reply('Failed to send tokens. Please try again later.');
  }
}

async function registerHandlers(bot) {
  bot.command('faucet', ctx => handleFaucetCommand(ctx, utils));

  bot.command('vouch', ctx => handleVouchCommand(ctx, utils));

  bot.on('text', async ctx => {
    const id = `${ctx.chat.id}:${ctx.from.id}`;
    const session = getSession(id);
    if (session.data.awaitingAddress && isAddressValid(ctx.message.text)) {
      session.data.awaitingAddress = false;
      await utils.processFaucetRequest(ctx, id, ctx.message.text);
      saveSessionData();
    }
  });
}

module.exports = { registerHandlers };
