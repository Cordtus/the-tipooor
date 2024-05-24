require('dotenv').config();
const { Telegraf } = require('telegraf');
const { RedisSession } = require('telegraf-session-redis');
const redis = require('redis');
const { spawn } = require('child_process');
const handlers = require('./handlers');
const { botLogger } = require('./logger');

// Start Redis server
const redisServer = spawn('redis-server');

redisServer.stdout.on('data', (data) => {
  console.log(`Redis server stdout: ${data}`);
});

redisServer.stderr.on('data', (data) => {
  console.error(`Redis server stderr: ${data}`);
});

redisServer.on('close', (code) => {
  console.log(`Redis server process exited with code ${code}`);
});

// Delay bot startup to ensure Redis is running
setTimeout(() => {
  const bot = new Telegraf(process.env.BOT_TOKEN);
  const redisClient = redis.createClient();
  const session = new RedisSession({
    store: redisClient
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
    redisServer.kill();
  });
  process.once('SIGTERM', () => {
    botLogger.info('SIGTERM received, stopping bot...');
    bot.stop('SIGTERM');
    redisServer.kill();
  });
}, 3000); // Adjust this delay as needed to ensure Redis is fully started
