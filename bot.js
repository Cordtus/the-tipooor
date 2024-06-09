require('dotenv').config();
const { Telegraf } = require('telegraf');
const LocalSession = require('telegraf-session-local');
const { logger } = require('./logger');
const { registerHandlers } = require('./handlers');

logger.info('Starting bot...');

const botToken = process.env.BOT_TOKEN;
if (!botToken) {
  throw new Error('BOT_TOKEN is not defined in the environment variables');
}

const bot = new Telegraf(botToken);

const localSession = new LocalSession({
  database: 'session_db.json',
  storage: LocalSession.storageFileAsync,
  format: {
    serialize: (value) => JSON.stringify(value, (key, val) => (typeof val === 'bigint' ? val.toString() : val)),
    deserialize: (value) => JSON.parse(value, (key, val) => (typeof val === 'string' && /^\d+n$/.test(val) ? BigInt(val.slice(0, -1)) : val))
  }
});

const allowedGroupIds = (process.env.ALLOWED_GROUP_IDS || '').split(',').map(id => id.trim()).filter(Boolean);

bot.use(localSession.middleware());

bot.use((ctx, next) => {
  logger.info(`Received update of type: ${ctx.updateType}`);
  return next();
});

bot.use((ctx, next) => {
  if (ctx.chat) {
    logger.info(`Message from chat: ${ctx.chat.id}`);
    if (allowedGroupIds.includes(ctx.chat.id.toString())) {
      logger.info(`Message is from an allowed group: ${ctx.chat.id}`);
      return next();
    } else {
      logger.info(`Message is not from an allowed group: ${ctx.chat.id}`);
      return ctx.reply(`Sorry, I am only allowed to operate in the groups with IDs: ${allowedGroupIds.join(', ')}`);
    }
  }
  return next();
});

// Register command handlers
registerHandlers(bot);

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
