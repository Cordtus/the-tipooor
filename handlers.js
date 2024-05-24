const utils = require('./utils');
const { botLogger, txLogger } = require('./logger');

async function registerHandlers(bot) {
  bot.command('faucet', async (ctx) => {
    const userId = ctx.from.id.toString();
    const userSession = await ctx.session;

    const currentTime = Date.now();
    const twentyFourHours = 24 * 60 * 60 * 1000;

    // Check if user has claimed in the last 24 hours
    if (userSession.lastClaim && currentTime - userSession.lastClaim < twentyFourHours) {
      userSession.pendingRequest = true;
      userSession.requestTime = currentTime;
      return ctx.reply('You have already received tokens in the past 24 hours. If someone vouches for you using /vouch @yourusername, you can receive tokens again.');
    }

    const messageParts = ctx.message.text.split(' ');
    if (messageParts.length < 2) {
      return ctx.reply('Please provide an osmo wallet address. Usage: /faucet osmo1...').then(sentMessage => {
        ctx.session.awaitingAddress = true;
      });
    }

    const address = messageParts[1];
    if (!address.startsWith('osmo1')) {
      return ctx.reply('Invalid address. Please provide a valid osmo address.');
    }

    // Process the transaction
    try {
      const wallet = await utils.initWallet();
      const result = await utils.sendTokens(wallet, address);
      if (result.code !== 0) {
        txLogger.error(`Failed transaction for ${address}: ${JSON.stringify(result)}`);
        return ctx.reply('Failed to send tokens. Please try again later.');
      }
      ctx.session.lastClaim = currentTime;
      ctx.session.pendingRequest = false;
      txLogger.info(`Successfully sent 10 tokens to ${address}. Transaction hash: ${result.transactionHash}`);
      const explorerLink = `https://chainsco.pe/osmosis/tx/${result.transactionHash}`;
      return ctx.reply(`Successfully sent 10 tokens to ${address}. [Transaction hash](${explorerLink})`, { parse_mode: 'Markdown' });
    } catch (error) {
      botLogger.error('Error sending tokens:', error);
      return ctx.reply('Failed to send tokens. Please try again later.');
    }
  });

  // Handle responses to address requests
  bot.on('text', async (ctx) => {
    if (ctx.session.awaitingAddress && ctx.message.text.startsWith('osmo1')) {
      ctx.session.awaitingAddress = false;
      const address = ctx.message.text;

      try {
        const wallet = await utils.initWallet();
        const result = await utils.sendTokens(wallet, address);
        if (result.code !== 0) {
          txLogger.error(`Failed transaction for ${address}: ${JSON.stringify(result)}`);
          return ctx.reply('Failed to send tokens. Please try again later.');
        }
        ctx.session.lastClaim = Date.now();
        txLogger.info(`Successfully sent 10 tokens to ${address}. Transaction hash: ${result.transactionHash}`);
        const explorerLink = `https://chainsco.pe/osmosis/tx/${result.transactionHash}`;
        return ctx.reply(`Successfully sent 10 tokens to ${address}. [Transaction hash](${explorerLink})`, { parse_mode: 'Markdown' });
      } catch (error) {
        botLogger.error('Error sending tokens:', error);
        return ctx.reply('Failed to send tokens. Please try again later.');
      }
    }
  });

  // Advertise bot's wallet address and balance
  bot.command('balance', async (ctx) => {
    try {
      const wallet = await utils.initWallet();
      const balances = await utils.getBalances(wallet);
      const address = (await wallet.getAccounts())[0].address;
      let balanceMessage = `Bot's wallet address: ${address}\nBalances:\n`;
      balances.forEach(balance => {
        balanceMessage += `${balance.amount} ${balance.denom}\n`;
      });
      return ctx.reply(balanceMessage);
    } catch (error) {
      botLogger.error('Error fetching balances:', error);
      return ctx.reply('Failed to fetch balances. Please try again later.');
    }
  });

  // Vouch system
  bot.command('vouch', async (ctx) => {
    const messageParts = ctx.message.text.split(' ');
    if (messageParts.length < 2) {
      return ctx.reply('Please mention the user you are vouching for. Usage: /vouch @username');
    }

    const vouchedUsername = messageParts[1].replace('@', '');
    const vouchedUser = ctx.message.entities.find(entity => entity.type === 'mention' && entity.user.username === vouchedUsername);

    if (!vouchedUser) {
      return ctx.reply('Could not find the mentioned user.');
    }

    const vouchedUserId = vouchedUser.user.id.toString();
    const vouchedUserSession = await ctx.getSession(vouchedUserId);

    if (!vouchedUserSession.pendingRequest) {
      return ctx.reply('The mentioned user has not requested tokens in the last 24 hours or has already been vouched for.');
    }

    const wallet = await utils.initWallet();
    const address = vouchedUserSession.awaitingAddress;

    if (!address || !address.startsWith('osmo1')) {
      return ctx.reply('Invalid or no address found for the vouched user.');
    }

    try {
      const result = await utils.sendTokens(wallet, address);
      if (result.code !== 0) {
        txLogger.error(`Failed transaction for ${address} (vouched by ${ctx.from.username}): ${JSON.stringify(result)}`);
        return ctx.reply('Failed to send tokens. Please try again later.');
      }
      vouchedUserSession.lastClaim = Date.now();
      vouchedUserSession.pendingRequest = false;
      txLogger.info(`Successfully sent 10 tokens to ${address} for user @${vouchedUsername}. Transaction hash: ${result.transactionHash}`);
      const explorerLink = `https://chainsco.pe/osmosis/tx/${result.transactionHash}`;
      return ctx.reply(`Successfully sent 10 tokens to ${address} for user @${vouchedUsername}. [Transaction hash](${explorerLink})`, { parse_mode: 'Markdown' });
    } catch (error) {
      botLogger.error('Error sending tokens:', error);
      return ctx.reply('Failed to send tokens. Please try again later.');
    }
  });
}

module.exports = {
  registerHandlers
};
