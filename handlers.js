// handlers.js

const { botLogger, txLogger } = require('./logger');
const utils = require('./utils');
const { handleFaucetCommand, handleVouchCommand, isAddressValid, getSession, saveSessionData } = require('./sessionManager');

async function registerHandlers(bot) {
  bot.command('faucet', async (ctx) => {
    await handleFaucetCommand(ctx, utils);
  });

  bot.on('text', async (ctx) => {
    const session = getSession(`${ctx.chat.id}:${ctx.from.id}`);
    if (session.data.awaitingAddress && isAddressValid(ctx.message.text)) {
      session.data.awaitingAddress = false;
      const address = ctx.message.text;

      try {
        botLogger.info(`Processing transaction for address (text response): ${address}`);
        await utils.processFaucetRequest(ctx, `${ctx.chat.id}:${ctx.from.id}`, address);
      } catch (error) {
        botLogger.error('Error processing faucet request:', error);
        return ctx.reply('Failed to send tokens. Please try again later.');
      }
      saveSessionData();
    }
  });

  bot.command('vouch', async (ctx) => {
    await handleVouchCommand(ctx, utils);
  });
}

module.exports = {
  registerHandlers
};
