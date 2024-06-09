const { botLogger, txLogger } = require('./logger');
const utils = require('./utils');

const WHITELISTED_USER_IDS = ['1705203106']; // Add the specific user ID(s) here

async function registerHandlers(bot) {
  bot.command('faucet', async (ctx) => {
    botLogger.info(`Faucet command received from user: ${ctx.from.id} in group: ${ctx.chat.id}`);
    const userId = ctx.from.id.toString();
    const sessions = ctx.session;

    const currentTime = Date.now();
    const twentyFourHours = 24 * 60 * 60 * 1000;

    // Check if the user is whitelisted
    if (!WHITELISTED_USER_IDS.includes(userId)) {
      // Check across all sessions if the user has claimed tokens in the last 24 hours
      let hasClaimed = false;
      for (const session of Object.values(sessions)) {
        if (session.data && session.data.lastClaim && session.id.includes(userId)) {
          if (currentTime - session.data.lastClaim < twentyFourHours) {
            hasClaimed = true;
            break;
          }
        }
      }

      if (hasClaimed) {
        const userSession = sessions[`${ctx.chat.id}:${userId}`];
        userSession.pendingRequest = true;
        userSession.requestTime = currentTime;
        botLogger.info(`User ${userId} already claimed tokens in the last 24 hours.`);
        return ctx.reply('You have already received tokens in the past 24 hours. If someone vouches for you using /vouch, you can receive tokens again.');
      }
    }

    const messageParts = ctx.message.text.split(' ');
    if (messageParts.length < 2) {
      botLogger.info(`User ${userId} did not provide an address.`);
      ctx.session.awaitingAddress = true;
      ctx.reply('Please provide an osmo wallet address. Usage: /faucet osmo1...');
      setTimeout(() => {
        if (ctx.session.awaitingAddress) {
          ctx.session.awaitingAddress = false;
          botLogger.info(`Cleared awaiting address state for user ${userId} due to timeout.`);
          ctx.reply('Request timed out. Please try again.');
        }
      }, 10000);
      return;
    }

    const address = messageParts[1];
    if (!address.startsWith('osmo1')) {
      botLogger.info(`User ${userId} provided an invalid address: ${address}`);
      return ctx.reply('Invalid address. Please provide a valid osmo address.');
    }

    try {
      botLogger.info(`Processing transaction for address: ${address}`);
      const wallet = await utils.initWallet();
      const result = await utils.sendTokens(wallet, address);
      if (result.code !== 0) {
        txLogger.error(`Failed transaction for ${address}: ${JSON.stringify(result)}`);
        if (result.rawLog.includes("out of gas")) {
          return ctx.reply('Transaction failed due to out of gas. Please try again later with a higher gas limit.');
        }
        return ctx.reply('Failed to send tokens. Please try again later.');
      }
      if (result.indexingWarning) {
        botLogger.warn(`Transaction indexing is disabled, assuming success.`);
        return ctx.reply('Tokens sent successfully, but transaction indexing is disabled. Please verify the transaction manually.');
      }
      ctx.session.lastClaim = currentTime;
      ctx.session.pendingRequest = false;
      botLogger.info(`Successfully sent 10 tokens to ${address}. Transaction hash: ${result.transactionHash}`);
      const explorerLink = `https://celatone.osmosis.zone/osmo-test-5/txs/${result.transactionHash}`;
      return ctx.reply(`Successfully sent 10 tokens to ${address}. [Transaction hash](${explorerLink})`, { parse_mode: 'Markdown' });
    } catch (error) {
      botLogger.error('Error sending tokens:', error);
      if (error.message.includes("out of gas")) {
        return ctx.reply('Transaction failed due to out of gas. Please try again later with a higher gas limit.');
      }
      return ctx.reply('Failed to send tokens. Please try again later.');
    }
  });

  bot.on('text', async (ctx) => {
    if (ctx.session.awaitingAddress && ctx.message.text.startsWith('osmo1')) {
      ctx.session.awaitingAddress = false;
      const address = ctx.message.text;

      try {
        botLogger.info(`Processing transaction for address (text response): ${address}`);
        const wallet = await utils.initWallet();
        const result = await utils.sendTokens(wallet, address);
        if (result.code !== 0) {
          txLogger.error(`Failed transaction for ${address}: ${JSON.stringify(result)}`);
          if (result.rawLog.includes("out of gas")) {
            return ctx.reply('Transaction failed due to out of gas. Please try again later with a higher gas limit.');
          }
          return ctx.reply('Failed to send tokens. Please try again later.');
        }
        if (result.indexingWarning) {
          botLogger.warn(`Transaction indexing is disabled, assuming success.`);
          return ctx.reply('Tokens sent successfully, but transaction indexing is disabled. Please verify the transaction manually.');
        }
        ctx.session.lastClaim = Date.now();
        botLogger.info(`Successfully sent 10 tokens to ${address}. Transaction hash: ${result.transactionHash}`);
        const explorerLink = `https://celatone.osmosis.zone/osmo-test-5/txs/${result.transactionHash}`;
        return ctx.reply(`Successfully sent 10 tokens to ${address}. [Transaction hash](${explorerLink})`, { parse_mode: 'Markdown' });
      } catch (error) {
        botLogger.error('Error sending tokens:', error);
        if (error.message.includes("out of gas")) {
          return ctx.reply('Transaction failed due to out of gas. Please try again later with a higher gas limit.');
        }
        return ctx.reply('Failed to send tokens. Please try again later.');
      }
    }
  });

  bot.command('vouch', async (ctx) => {
    botLogger.info(`Vouch command received from user: ${ctx.from.id}`);
    console.log(`Vouch command received from user: ${ctx.from.id}`);
    
    if (!ctx.message.reply_to_message) {
      botLogger.info(`Vouch command not a reply, received from user: ${ctx.from.id}`);
      console.log(`Vouch command not a reply, received from user: ${ctx.from.id}`);
      return ctx.reply('Please reply to the message of the user you want to vouch for.');
    }

    const vouchedUserId = ctx.message.reply_to_message.from.id.toString();
    const messageId = ctx.message.message_id;
    const repliedMessageId = ctx.message.reply_to_message.message_id;

    botLogger.info(`Vouch command details: userId ${ctx.from.id}, messageId ${messageId}, repliedMessageId ${repliedMessageId}`);
    console.log(`Vouch command details: userId ${ctx.from.id}, messageId ${messageId}, repliedMessageId ${repliedMessageId}`);

    if (vouchedUserId === ctx.from.id.toString()) {
      botLogger.info(`User ${ctx.from.id} cannot vouch for themselves.`);
      console.log(`User ${ctx.from.id} cannot vouch for themselves.`);
      return ctx.reply('You cannot vouch for yourself.');
    }

    // Find the session for the vouched user across all chats
    const vouchedUserSessions = Object.values(ctx.session).filter(session => session.id.includes(vouchedUserId));
    let vouchedUserSession = null;
    for (const session of vouchedUserSessions) {
      if (session.data && session.data.pendingRequest) {
        vouchedUserSession = session.data;
        break;
      }
    }

    console.log(`Vouched user session: ${JSON.stringify(vouchedUserSession)}`);

    if (!vouchedUserSession || !vouchedUserSession.pendingRequest) {
      botLogger.info(`No pending request for user: ${vouchedUserId}`);
      console.log(`No pending request for user: ${vouchedUserId}`);
      return ctx.reply('The mentioned user has not requested tokens in the last 24 hours or has already been vouched for.');
    }

    const wallet = await utils.initWallet();
    const address = vouchedUserSession.awaitingAddress;

    if (!address || !address.startsWith('osmo1')) {
      botLogger.info(`Invalid or no address found for vouched user: ${vouchedUserId}`);
      console.log(`Invalid or no address found for vouched user: ${vouchedUserId}`);
      return ctx.reply('Invalid or no address found for the vouched user.');
    }

    try {
      const result = await utils.sendTokens(wallet, address);
      if (result.code !== 0) {
        txLogger.error(`Failed transaction for ${address} (vouched by ${ctx.from.username}): ${JSON.stringify(result)}`);
        console.log(`Failed transaction for ${address} (vouched by ${ctx.from.username}): ${JSON.stringify(result)}`);
        if (result.rawLog.includes("out of gas")) {
          return ctx.reply('Transaction failed due to out of gas. Please try again later with a higher gas limit.');
        }
        return ctx.reply('Failed to send tokens. Please try again later.');
      }
      if (result.indexingWarning) {
        botLogger.warn(`Transaction indexing is disabled, assuming success.`);
        console.log(`Transaction indexing is disabled, assuming success.`);
        return ctx.reply('Tokens sent successfully, but transaction indexing is disabled. Please verify the transaction manually.');
      }
      vouchedUserSession.lastClaim = Date.now();
      vouchedUserSession.pendingRequest = false;
      vouchedUserSession.awaitingAddress = false;
      botLogger.info(`Successfully sent 10 tokens to ${address} for user @${ctx.message.reply_to_message.from.username}. Transaction hash: ${result.transactionHash}`);
      console.log(`Successfully sent 10 tokens to ${address} for user @${ctx.message.reply_to_message.from.username}. Transaction hash: ${result.transactionHash}`);
      const explorerLink = `https://celatone.osmosis.zone/osmo-test-5/txs/${result.transactionHash}`;
      return ctx.reply(`Successfully sent 10 tokens to ${address} for user @${ctx.message.reply_to_message.from.username}. [Transaction hash](${explorerLink})`, { parse_mode: 'Markdown' });
    } catch (error) {
      botLogger.error('Error sending tokens:', error);
      console.log('Error sending tokens:', error);
      if (error.message.includes("out of gas")) {
        return ctx.reply('Transaction failed due to out of gas. Please try again later with a higher gas limit.');
      }
      return ctx.reply('Failed to send tokens. Please try again later.');
    }
  });
}

module.exports = {
  registerHandlers
};
