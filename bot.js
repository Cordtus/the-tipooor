require('dotenv').config();
const { Telegraf } = require('telegraf');
const LocalSession = require('telegraf-session-local');
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

logger.info('Starting bot...');

const bot = new Telegraf(process.env.BOT_TOKEN);

const localSession = new LocalSession({ database: 'session_db.json' });

const allowedGroupId = process.env.ALLOWED_GROUP_ID;

bot.use(localSession.middleware());

bot.use((ctx, next) => {
  logger.info(`Received update of type: ${ctx.updateType}`);
  return next();
});

bot.use((ctx, next) => {
  if (ctx.chat) {
    logger.info(`Message from chat: ${ctx.chat.id}`);
    if (ctx.chat.id.toString() === allowedGroupId) {
      logger.info(`Message is from the allowed group: ${allowedGroupId}`);
      return next();
    } else {
      logger.info(`Message is not from the allowed group: ${ctx.chat.id}`);
      return ctx.leaveChat();  // Make the bot leave any other chat
    }
  }
  return next();
});

bot.on('text', (ctx) => {
  logger.info(`Received a text message in chat ${ctx.chat.id}: ${ctx.message.text}`);
  ctx.reply('Message received');
});

// Register command handlers
handlers.registerHandlers(bot);

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
