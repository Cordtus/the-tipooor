require('dotenv').config();
const axios = require('axios');
const { botLogger } = require('./logger');
const { getSession, saveSessionData } = require('./sessionManager');

// EVM library
const ethers = require("ethers");

const rpcUrl = process.env.EVM_RPC_URL;
const privateKey = process.env.FAUCET_PRIVATE_KEY;

if (!rpcUrl || !privateKey) {
  botLogger.error('Environment variables are not properly set');
  throw new Error('Environment variables are not properly set');
}

const provider = new ethers.providers.JsonRpcProvider(rpcUrl);
const wallet = new ethers.Wallet(privateKey, provider);

async function sendTokens(recipientAddress) {
  try {
    const transaction = {
      to: recipientAddress,
      value: ethers.utils.parseEther(process.env.FAUCET_AMOUNT), // Sending 1 Sei
      maxPriorityFeePerGas: ethers.utils.parseUnits("100", "gwei"),
      maxFeePerGas: ethers.utils.parseUnits("100", "gwei"),
      gasLimit: ethers.utils.hexlify(21000), // No need to estimate EVM transfer
    };

    const txResponse = await wallet.sendTransaction(transaction);
    await txResponse.wait(1); // Wait for 1 confirm

    botLogger.info(`Transaction successful: ${txResponse.hash}`);
    return {
      success: true,
      transactionHash: txResponse.hash,
    };
  } catch (error) {
    botLogger.error('Error sending tokens:', error);
    return {
      success: false,
      error: error.message,
    };
  }
}

const promiseQueue = []; // Sequential queue to avoid nonce collisions

async function processFaucetRequest(ctx, userId, address) {
  const session = getSession(userId);

  const promise = async () => {
    try {
      const result = await sendTokens(address);
      if (result.success) {
        session.data.lastClaim = Date.now();
        session.data.lastReceived = session.data.lastReceived || {};
        session.data.lastReceived[address] = Date.now();
        saveSessionData();
        botLogger.info(`Successfully sent 1 Sei to ${address}. Transaction hash: ${result.transactionHash}`);
        const transactionHash = result.transactionHash || "unknown";
        const explorerLink = transactionHash !== "unknown" ?
          `https://seitrace.com/tx/${result.transactionHash}?chain=atlantic-2` :
          `https://seitrace.com/?chain=atlantic-2`;
        return ctx.reply(`Successfully sent 1 Sei to ${address}. [Transaction details](${explorerLink})`, { parse_mode: 'Markdown' });
      } else {
        throw new Error('Failed to send tokens. Please try again later.');
      }
    } catch (error) {
      botLogger.error('Error sending tokens:', error);
      if (error.message.includes("out of gas")) {
        return ctx.reply('Transaction failed due to out of gas. Please try again later with a higher gas limit.');
      }
      return ctx.reply('Failed to send tokens. Please try again later.');
    }
  };

  promiseQueue.push(promise);

  // If the queue length is 1, it means no other promises are being processed
  if (promiseQueue.length === 1) {
    // Process the queue
    while (promiseQueue.length > 0) {
      const currentPromise = promiseQueue[0]; // Get the first promise
      await currentPromise(); // Execute it and wait for it to finish
      promiseQueue.shift(); // Remove it from the queue once finished
    }
  }
}

module.exports = {
  sendTokens,
  processFaucetRequest,
};
