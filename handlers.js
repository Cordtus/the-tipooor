const sessionManager = require('./sessionManager');
const utils = require('./utils');

function registerHandlers(bot) {
  sessionManager.loadSessionData();

  bot.command('faucet', async ctx => {
    await sessionManager.handleFaucetCommand(ctx, utils);
  });

  bot.command('vouch', async ctx => {
    await sessionManager.handleVouchCommand(ctx, utils);
  });

  bot.on('text', async ctx => {
    // handle address reply
    const key = `${ctx.chat.id}:${ctx.from.id}`;
    const session = sessionManager.getSession(key).data;
    if (session.awaitingAddress && /^osmo1/.test(ctx.message.text)) {
      session.awaitingAddress = false;
      await utils.processFaucetRequest(ctx, key, ctx.message.text);
      sessionManager.saveSessionData();
    }
  });
}

module.exports = { registerHandlers };
