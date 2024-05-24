require('dotenv').config();
const { Telegraf } = require('telegraf');
const RedisSession = require('telegraf-session-redis');
const { createLogger, format, transports } = require('winston');
const handlers = require('./handlers');

// Setup logging
const logger = createLogger({
  level: 'info',
  format: format.combine(
    format.timestamp(),
    format.printf(({ timestamp, level, message }) => `${timestamp} [${level.toUpperCase()}]: ${message}`)
  ),
  transports: [
    new transports.Console(),
    new transports.File({ filename: 'bot.log' })
  ]
});

const bot = new Telegraf(process.env.BOT_TOKEN);

// Use the existing Redis server on port 6379
const session = new RedisSession({
  store: { port: 6379, host: '127.0.0.1' }
});

const allowedGroupId = process.env.ALLOWED_GROUP_ID;

bot.use(session.middleware());

bot.use((ctx, next) => {
  logger.info(`Message from chat: ${ctx.chat.id}`);
  if (ctx.chat && ctx.chat.id.toString() === allowedGroupId) {
    return next();
  } else {
    logger.info(`Leaving chat: ${ctx.chat.id}`);
    return ctx.leaveChat();  // Make the bot leave any other chat
  }
});

// Register command handlers
handlers.registerHandlers(bot);

bot.on('text', (ctx) => {
  logger.info(`Received a text message: ${ctx.message.text}`);
});

bot.launch()
  .then(() => logger.info('Bot started'))
  .catch(err => logger.error('Failed to start bot:', err));

// Handle graceful shutdown
process.once('SIGINT', () => {
  logger.info('SIGINT received, stopping bot...');
  bot.stop('SIGINT');
});
process.once('SIGTERM', () => {
  logger.info('SIGTERM received, stopping bot...');
  bot.stop('SIGTERM');
});
