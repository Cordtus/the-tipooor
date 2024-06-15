require('dotenv').config();
const axios = require('axios');
const { DirectSecp256k1HdWallet } = require('@cosmjs/proto-signing');
const { SigningStargateClient } = require('@cosmjs/stargate');
const { botLogger, txLogger } = require('./logger');
const { getSession, saveSessionData } = require('./sessionManager'); // Import the functions

const faucetAmount = {
  denom: process.env.DENOM,
  amount: '10000000' // 10 tokens in micro units
};

const rpcUrl = process.env.RPC_URL;
const lcdUrl = process.env.LCD_URL;
const chainId = process.env.CHAIN_ID;
const memo = "make test";

if (!rpcUrl || !lcdUrl || !chainId || !process.env.FAUCET_MNEMONIC || !process.env.DENOM) {
  botLogger.error('Environment variables are not properly set');
  throw new Error('Environment variables are not properly set');
}

async function initWallet() {
  botLogger.info('Initializing wallet with provided mnemonic');
  console.log('Initializing wallet with provided mnemonic');
  const wallet = await DirectSecp256k1HdWallet.fromMnemonic(process.env.FAUCET_MNEMONIC, { prefix: 'osmo' });
  const [firstAccount] = await wallet.getAccounts();
  botLogger.info(`Initialized wallet address: ${firstAccount.address}`);
  console.log(`Initialized wallet address: ${firstAccount.address}`);
  return wallet;
}

async function getMinGasPrice() {
  try {
    const url = `${lcdUrl}/osmosis/txfees/v1beta1/cur_eip_base_fee`;
    botLogger.info(`Sending request to get minimum gas price from ${url}`);
    console.log(`Sending request to get minimum gas price from ${url}`);
    const response = await axios.get(url);
    const baseFee = parseFloat(response.data.base_fee);
    botLogger.info(`Base fee response: ${JSON.stringify(response.data)}`);
    console.log(`Base fee response: ${JSON.stringify(response.data)}`);
    return baseFee;
  } catch (error) {
    botLogger.error('Error fetching minimum gas price:', error);
    console.error('Error fetching minimum gas price:', error);
    throw new Error('Failed to fetch minimum gas price');
  }
}

async function simulateTransaction(client, firstAccount, messages, memo) {
  try {
    botLogger.info(`Simulating transaction with messages: ${JSON.stringify(messages)}`);
    console.log(`Simulating transaction with messages: ${JSON.stringify(messages)}`);
    const simulatedResult = await client.simulate(firstAccount.address, messages, memo);
    botLogger.info(`Simulated result: ${JSON.stringify(simulatedResult)}`);
    console.log(`Simulated result: ${JSON.stringify(simulatedResult)}`);

    let gasUsed;
    if (simulatedResult && simulatedResult.gas_info && simulatedResult.gas_info.gas_used) {
      gasUsed = simulatedResult.gas_info.gas_used;
    } else if (simulatedResult && simulatedResult.gasUsed) {
      gasUsed = simulatedResult.gasUsed;
    } else if (typeof simulatedResult === 'number') {
      gasUsed = simulatedResult;
    } else {
      gasUsed = simulatedResult;
    }

    botLogger.info(`Extracted gas used: ${gasUsed}`);
    console.log(`Extracted gas used: ${gasUsed}`);

    if (!gasUsed) {
      throw new Error(`Gas used not found in simulated result: ${JSON.stringify(simulatedResult)}`);
    }
    return gasUsed;
  } catch (error) {
    botLogger.error('Error simulating transaction:', error);
    console.error('Error simulating transaction:', error);
    throw new Error('Failed to simulate transaction');
  }
}

async function sendTokens(wallet, recipientAddress) {
  try {
    const [firstAccount] = await wallet.getAccounts();
    botLogger.info(`Sending tokens from ${firstAccount.address} to ${recipientAddress}`);
    console.log(`Sending tokens from ${firstAccount.address} to ${recipientAddress}`);

    const client = await SigningStargateClient.connectWithSigner(rpcUrl, wallet);

    const messages = [{
      typeUrl: '/cosmos.bank.v1beta1.MsgSend',
      value: {
        fromAddress: firstAccount.address,
        toAddress: recipientAddress,
        amount: [faucetAmount],
      },
    }];

    const baseFee = await getMinGasPrice();
    console.log(`Fetched base fee: ${baseFee}`);
    const gasEstimation = await simulateTransaction(client, firstAccount, messages, memo);
    console.log(`Gas estimation returned: ${gasEstimation}`);
    const gasLimit = Math.ceil(gasEstimation * 1.15); // Adding 15% buffer
    console.log(`Gas estimation: ${gasEstimation}, Gas limit: ${gasLimit}`);
    const feeAmountValue = Math.ceil(gasLimit * baseFee);
    console.log(`Calculated fee amount value: ${feeAmountValue}`);
    const feeAmount = {
      denom: 'uosmo',
      amount: feeAmountValue.toString(),
    };
    const fee = {
      amount: [feeAmount],
      gas: gasLimit.toString(),
    };

    botLogger.info(`Sending transaction with fee: ${JSON.stringify(fee)}`);
    console.log(`Sending transaction with fee: ${JSON.stringify(fee)}`);
    const result = await client.sendTokens(firstAccount.address, recipientAddress, [faucetAmount], fee, memo);

    console.log(`Transaction result: ${JSON.stringify(result, (key, value) => typeof value === 'bigint' ? value.toString() : value)}`);
    if (result.code === 0) {
      txLogger.info(`Broadcasted transaction: ${result.transactionHash}`);
      console.log(`Broadcasted transaction: ${result.transactionHash}`);
      return {
        success: true,
        transactionHash: result.transactionHash
      };
    } else if (result.rawLog && result.rawLog.includes('transaction indexing is disabled')) {
      txLogger.warn(`Transaction indexing is disabled: ${result.rawLog}`);
      console.log(`Transaction indexing is disabled: ${result.rawLog}`);
      return {
        success: true,
        transactionHash: null,
        indexingWarning: true
      };
    } else {
      txLogger.error(`Transaction failed with code ${result.code}: ${result.rawLog}`);
      console.error(`Transaction failed with code ${result.code}: ${result.rawLog}`);
      throw new Error(`Transaction failed with code ${result.code}`);
    }
  } catch (error) {
    if (error.message.includes("transaction indexing is disabled")) {
      txLogger.warn(`Transaction indexing is disabled, assuming success.`);
      console.warn(`Transaction indexing is disabled, assuming success.`);
      return {
        success: true,
        transactionHash: null,
        indexingWarning: true
      };
    }
    txLogger.error(`Error sending tokens: ${error}`);
    console.error(`Error sending tokens: ${error}`);
    throw error;
  }
}

async function processFaucetRequest(ctx, userId, address) {
  const session = getSession(userId);

  try {
    const wallet = await initWallet();
    const result = await sendTokens(wallet, address);
    if (result.success) {
      session.data.lastClaim = Date.now();
      session.data.lastReceived = session.data.lastReceived || {};
      session.data.lastReceived[address] = Date.now();
      saveSessionData();
      botLogger.info(`Successfully sent 10 tokens to ${address}. Transaction hash: ${result.transactionHash}`);
      const transactionHash = result.transactionHash || "unknown";
      const explorerLink = transactionHash !== "unknown" ? 
        `https://celatone.osmosis.zone/osmo-test-5/txs/${transactionHash}` :
        'https://celatone.osmosis.zone/osmo-test-5';
      return ctx.reply(`Successfully sent 10 tokens to ${address}. [Transaction details](${explorerLink})`, { parse_mode: 'Markdown' });
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
}

module.exports = {
  initWallet,
  sendTokens,
  processFaucetRequest, // Export processFaucetRequest
};
