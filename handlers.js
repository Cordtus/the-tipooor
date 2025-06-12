const {
  loadSessionData,
  handleFaucetCommand,
  handleVouchCommand,
  handleStatusCommand,
  calculateEligibleAmount,
  updateUserAmount,
  checkWalletLock,
  saveSessionData,
  getSession,
  isAddressValid
} = require('./sessionManager');
const { initWallet, sendTokens } = require('./utils');
const { botLogger } = require('./logger');

function registerHandlers(bot) {
  loadSessionData();

  bot.command('faucet', async ctx => {
    await handleFaucetCommand(ctx);
  });

  bot.command('vouch', async ctx => {
    await handleVouchCommand(ctx);
  });

  bot.command('status', async ctx => {
    await handleStatusCommand(ctx);
  });

  // Handle address replies when user is awaiting address input
  bot.on('text', async ctx => {
    const key = `${ctx.chat.id}:${ctx.from.id}`;
    const userId = ctx.from.id.toString();
    const session = getSession(key).data;

    if (session.awaitingAddress && isAddressValid(ctx.message.text)) {
      const address = ctx.message.text.trim();
      session.awaitingAddress = false;

      try {
        // Check wallet locking first
        const lockCheck = checkWalletLock(address, userId);
        if (!lockCheck.allowed) {
          return ctx.reply(
            `Cannot send to this address: ${lockCheck.reason}`,
            { reply_to_message_id: ctx.message.message_id }
          );
        }

        // Get the eligible amount using the decay system
        const { amount, multiplier } = calculateEligibleAmount(userId);

        const wallet = await initWallet();
        const res = await sendTokens(wallet, address, amount);

        if (res.success) {
          // Update user amount tracking
          updateUserAmount(userId, true);

          session.lastClaim = Date.now();
          session.lastReceived = session.lastReceived || {};
          session.lastReceived[address] = Date.now();

          saveSessionData();

          const explorerLink = res.transactionHash
            ? `https://celatone.osmosis.zone/${process.env.CHAIN_ID}/txs/${res.transactionHash}`
            : `https://celatone.osmosis.zone/${process.env.CHAIN_ID}`;

          const multiplierInfo = multiplier < 1.0
            ? ` (${(multiplier * 100).toFixed(1)}% of base amount due to recent requests)`
            : '';

          return ctx.reply(
            `Successfully sent ${amount} ${process.env.DENOM} to ${address}${multiplierInfo}. [Details](${explorerLink})`,
            { parse_mode: 'Markdown' }
          );
        } else {
          throw new Error('Failed to send tokens');
        }
      } catch (err) {
        botLogger.error('Error in address reply handler:', err);
        if (err.message.includes('out of gas')) {
          return ctx.reply(
            'Transaction failed due to out of gas. Please try again later with higher gas.'
          );
        }
        return ctx.reply('Failed to send tokens. Please try again later.');
      }
    }
  });
}

module.exports = { registerHandlers };