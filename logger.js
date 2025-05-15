const { createLogger, format, transports } = require('winston');

const logger = createLogger({
  level: 'debug',
  format: format.combine(
    format.timestamp(),
    format.errors({ stack: true }),
    format.printf(({ timestamp, level, message, stack }) =>
      `${timestamp} [${level.toUpperCase()}]: ${stack || message}`
    )
  ),
  transports: [
    new transports.Console(),
    new transports.File({ filename: './data/bot.log' }),
  ],
});

const botLogger = createLogger({
  level: 'info',
  format: logger.format,
  transports: logger.transports,
});

const txLogger = createLogger({
  level: 'info',
  format: logger.format,
  transports: [new transports.Console(), new transports.File({ filename: './data/transactions.log' })],
});

module.exports = { logger, botLogger, txLogger };
