const { botLogger, txLogger } = require('./logger');
const utils = require('./utils');
const { handleFaucetCommand, handleVouchCommand, isAddressValid } = require('./sessionManager');

async function registerHandlers(bot) {
  bot.command('faucet', async (ctx) => {
    await handleFaucetCommand(ctx, utils);
  });

  bot.on('text', async (ctx) => {
    if (ctx.session.awaitingAddress && isAddressValid(ctx.message.text)) {
      ctx.session.awaitingAddress = false;
      const address = ctx.message.text;

      try {
        botLogger.info(`Processing transaction for address (text response): ${address}`);
        await utils.processFaucetRequest(ctx, ctx.from.id, address);
      } catch (error) {
        botLogger.error('Error processing faucet request:', error);
        return ctx.reply('Failed to send tokens. Please try again later.');
      }
    }
  });

  bot.command('vouch', async (ctx) => {
    await handleVouchCommand(ctx, utils);
  });
}

module.exports = {
  registerHandlers
};
