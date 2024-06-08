"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
require('dotenv').config();
const telegraf_1 = require("telegraf");
const telegraf_session_local_1 = __importDefault(require("telegraf-session-local"));
const logger_1 = require("./logger");
const handlers_1 = require("./handlers");
logger_1.logger.info('Starting bot...');
const botToken = process.env.BOT_TOKEN;
if (!botToken) {
    throw new Error('BOT_TOKEN is not defined in the environment variables');
}
const bot = new telegraf_1.Telegraf(botToken);
const localSession = new telegraf_session_local_1.default({ database: 'session_db.json' });
const allowedGroupIds = (process.env.ALLOWED_GROUP_IDS || '').split(',').map(id => id.trim()).filter(Boolean);
bot.use(localSession.middleware());
bot.use((ctx, next) => {
    logger_1.logger.info(`Received update of type: ${ctx.updateType}`);
    return next();
});
bot.use((ctx, next) => {
    if (ctx.chat) {
        logger_1.logger.info(`Message from chat: ${ctx.chat.id}`);
        if (allowedGroupIds.includes(ctx.chat.id.toString())) {
            logger_1.logger.info(`Message is from an allowed group: ${ctx.chat.id}`);
            return next();
        }
        else {
            logger_1.logger.info(`Message is not from an allowed group: ${ctx.chat.id}`);
            return ctx.reply(`Sorry, I am only allowed to operate in the groups with IDs: ${allowedGroupIds.join(', ')}`);
        }
    }
    return next();
});
// Register command handlers
(0, handlers_1.registerHandlers)(bot);
bot.launch()
    .then(() => logger_1.logger.info('Bot started'))
    .catch(err => logger_1.logger.error('Failed to start bot:', err));
// Handle graceful shutdown
process.once('SIGINT', () => {
    logger_1.logger.info('SIGINT received, stopping bot...');
    bot.stop('SIGINT');
});
process.once('SIGTERM', () => {
    logger_1.logger.info('SIGTERM received, stopping bot...');
    bot.stop('SIGTERM');
});
