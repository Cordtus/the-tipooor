require('dotenv').config();
const { Telegraf } = require('telegraf');

const bot = new Telegraf(process.env.BOT_TOKEN);

// Register handlers
registerHandlers(bot);

// Launch the bot
bot.launch()
    .then(() => console.log('Bot started'))
    .catch(err => console.error('Failed to start bot:', err));

bot.start(async (ctx) => {
    const userId = ctx.from.id.toString();
    sessionUtils.updateUserLastAction(userId, { action: 'request' });

});

// Handle graceful shutdown
process.once('SIGINT', () => {
    console.log('SIGINT received, stopping bot...');
    bot.stop('SIGINT');
});
process.once('SIGTERM', () => {
    console.log('SIGTERM received, stopping bot...');
    bot.stop('SIGTERM');
});
