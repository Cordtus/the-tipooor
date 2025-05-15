require('dotenv').config();
const { Telegraf } = require('telegraf');
const { logger } = require('./logger');
const { registerHandlers } = require('./handlers');

if (!process.env.BOT_TOKEN) throw new Error('BOT_TOKEN missing');
const bot = new Telegraf(process.env.BOT_TOKEN);

const allowed = (process.env.ALLOWED_GROUP_IDS || '')
  .split(',').map(x => x.trim());

bot.use((ctx, next) => {
  if (ctx.chat && !allowed.includes(ctx.chat.id.toString())) {
    return ctx.reply(`Allowed groups: ${allowed.join(',')}`);
  }
  return next();
});

registerHandlers(bot);

bot.launch().then(() => logger.info('Bot started'));
process.once('SIGINT', () => bot.stop());
process.once('SIGTERM', () => bot.stop());
