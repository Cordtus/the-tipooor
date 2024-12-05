// utils.js

require('dotenv').config();
const axios = require('axios');
const { DirectSecp256k1HdWallet } = require('@cosmjs/proto-signing');
const { SigningStargateClient } = require('@cosmjs/stargate');
const { botLogger, txLogger } = require('./logger');
const { getSession, saveSessionData } = require('./sessionManager');

// EVM library
const ethers = require("ethers");

const rpcUrl = process.env.EVM_RPC_URL;
const privateKey = process.env.FAUCET_PRIVATE_KEY;
const faucetAmount = {
  denom: process.env.DENOM,
  amount: '10000000' // 10 tokens in micro units
};

const seiRpcUrl = process.env.RPC_URL;
const chainId = process.env.CHAIN_ID;
const memo = "make test";

if (!rpcUrl || !privateKey || !seiRpcUrl || !chainId || !process.env.FAUCET_MNEMONIC || !process.env.DENOM) {
  botLogger.error('Environment variables are not properly set');
  throw new Error('Environment variables are not properly set');
}

const provider = new ethers.providers.JsonRpcProvider(rpcUrl);
const wallet = new ethers.Wallet(privateKey, provider);

async function initWallet() {
  botLogger.info('Initializing wallet with provided mnemonic');
  const wallet = await DirectSecp256k1HdWallet.fromMnemonic(process.env.FAUCET_MNEMONIC, { prefix: 'sei' });
  const [firstAccount] = await wallet.getAccounts();
  botLogger.info(`Initialized wallet address: ${firstAccount.address}`);
  return wallet;
}

async function sendSeiTokens(wallet, recipientAddress) {
  try {
    const [firstAccount] = await wallet.getAccounts();
    botLogger.info(`Sending tokens from ${firstAccount.address} to ${recipientAddress}`);

    const client = await SigningStargateClient.connectWithSigner(seiRpcUrl, wallet);

    const messages = [{
      typeUrl: '/cosmos.bank.v1beta1.MsgSend',
      value: {
        fromAddress: firstAccount.address,
        toAddress: recipientAddress,
        amount: [faucetAmount],
      },
    }];

    // Hard-coded gas price and gas limit
    const gasPrice = 0.02; // 0.02 usei
    const gasLimit = 150000; // Hard-coded gas limit

    const feeAmount = {
      denom: faucetAmount.denom,
      amount: Math.ceil(gasLimit * gasPrice).toString(),
    };
    const fee = {
      amount: [feeAmount],
      gas: gasLimit.toString(),
    };

    botLogger.info(`Sending transaction with fee: ${JSON.stringify(fee)}`);
    const result = await client.sendTokens(firstAccount.address, recipientAddress, [faucetAmount], fee, memo);

    if (result.code === 0) {
      txLogger.info(`Broadcasted transaction: ${result.transactionHash}`);
      return {
        success: true,
        transactionHash: result.transactionHash
      };
    } else if (result.rawLog && result.rawLog.includes('transaction indexing is disabled')) {
      txLogger.warn(`Transaction indexing is disabled: ${result.rawLog}`);
      return {
        success: true,
        transactionHash: null,
        indexingWarning: true
      };
    } else {
      txLogger.error(`Transaction failed with code ${result.code}: ${result.rawLog}`);
      throw new Error(`Transaction failed with code ${result.code}`);
    }
  } catch (error) {
    if (error.message.includes("transaction indexing is disabled")) {
      txLogger.warn(`Transaction indexing is disabled, assuming success.`);
      return {
        success: true,
        transactionHash: null,
        indexingWarning: true
      };
    }
    txLogger.error(`Error sending tokens: ${error}`);
    throw error;
  }
}

async function sendEvmTokens(recipientAddress) {
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
  const isCosmos = address.startsWith("sei");

  const promise = async () => {
    try {
      let result;
      if (isCosmos) {
        const wallet = await initWallet();
        result = await sendSeiTokens(wallet, address);
      } else {
        result = await sendEvmTokens(address);
      }

      if (result.success) {
        session.data.lastClaim = Date.now();
        session.data.lastReceived = session.data.lastReceived || {};
        session.data.lastReceived[address] = Date.now();
        saveSessionData();
        botLogger.info(`Successfully sent tokens to ${address}. Transaction hash: ${result.transactionHash}`);
        const transactionHash = result.transactionHash || "unknown";
        const explorerLink = transactionHash !== "unknown" ? 
          (isCosmos ? `https://sei.explorer/tx/${transactionHash}` : `https://seitrace.com/tx/${transactionHash}?chain=atlantic-2`) :
          (isCosmos ? 'https://sei.explorer' : 'https://seitrace.com/?chain=atlantic-2');
        return ctx.reply(`Successfully sent tokens to ${address}. [Transaction details](${explorerLink})`, { parse_mode: 'Markdown' });
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
  initWallet,
  sendSeiTokens,
  sendEvmTokens,
  processFaucetRequest, // Export processFaucetRequest
};
