// handlers.js

const { botLogger, txLogger } = require('./logger');
const utils = require('./utils');
const { handleFaucetCommand, handleVouchCommand, isAddressValid, getSession, saveSessionData } = require('./sessionManager');

async function registerHandlers(bot) {
  bot.command('faucet', async (ctx) => {
    const messageParts = ctx.message.text.split(' ');
    if (messageParts.length < 2) {
      botLogger.info(`User did not provide an address.`);
      return ctx.reply('Please provide a wallet address (Sei or EVM). Usage: /faucet <address>');
    }

    const address = messageParts[1];
    if (!isAddressValid(address)) {
      return ctx.reply('Invalid address. Please provide a valid Sei or EVM address.');
    }

    const userId = `${ctx.chat.id}:${ctx.from.id}`;
    await updateSessionWithLinkedAddresses(userId, address); // Update linked address data
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
        updateSessionWithLinkedAddresses(`${ctx.chat.id}:${ctx.from.id}`, address); // Update linked address data
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
