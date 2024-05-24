const { createLogger, format, transports } = require('winston');
const path = require('path');

const logsDir = path.join(__dirname, 'logs');

// Ensure logs directory exists
const fs = require('fs');
if (!fs.existsSync(logsDir)) {
  fs.mkdirSync(logsDir);
}

const botLogger = createLogger({
  level: 'info',
  format: format.combine(
    format.timestamp(),
    format.printf(({ timestamp, level, message }) => `${timestamp} [${level.toUpperCase()}]: ${message}`)
  ),
  transports: [
    new transports.File({ filename: path.join(logsDir, 'bot.log') }),
    new transports.Console()
  ]
});

const txLogger = createLogger({
  level: 'info',
  format: format.combine(
    format.timestamp(),
    format.printf(({ timestamp, level, message }) => `${timestamp} [${level.toUpperCase()}]: ${message}`)
  ),
  transports: [
    new transports.File({ filename: path.join(logsDir, 'tx.log') })
  ]
});

module.exports = {
  botLogger,
  txLogger
};
