require('dotenv').config();
const { Telegraf } = require('telegraf');
const RedisSession = require('telegraf-session-redis'); // Correct import
const redis = require('redis');
const handlers = require('./handlers');
const { botLogger } = require('./logger');

// Use the existing Redis server on port 6379
const redisPort = 6379; // Default Redis port
const redisHost = '127.0.0.1'; // Default Redis host

const bot = new Telegraf(process.env.BOT_TOKEN);
const session = new RedisSession({
  store: { port: redisPort, host: redisHost }
});

const allowedGroupId = process.env.ALLOWED_GROUP_ID;

bot.use(session.middleware());

// Middleware to restrict bot to a specific group
bot.use((ctx, next) => {
  if (ctx.chat && ctx.chat.id.toString() === allowedGroupId) {
    return next();
  } else {
    return ctx.leaveChat();  // Make the bot leave any other chat
  }
});

// Register command handlers
handlers.registerHandlers(bot);

// Start the bot
bot.launch()
  .then(() => botLogger.info('Bot started'))
  .catch(err => botLogger.error('Failed to start bot:', err));

// Handle graceful shutdown
process.once('SIGINT', () => {
  botLogger.info('SIGINT received, stopping bot...');
  bot.stop('SIGINT');
});
process.once('SIGTERM', () => {
  botLogger.info('SIGTERM received, stopping bot...');
  bot.stop('SIGTERM');
});
