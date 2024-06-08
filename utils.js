require('dotenv').config();
const axios = require('axios');
const { DirectSecp256k1HdWallet } = require('@cosmjs/proto-signing');
const { SigningStargateClient } = require('@cosmjs/stargate');
const { botLogger, txLogger } = require('./logger');

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
  const wallet = await DirectSecp256k1HdWallet.fromMnemonic(process.env.FAUCET_MNEMONIC, { prefix: 'osmo' });
  const [firstAccount] = await wallet.getAccounts();
  botLogger.info(`Initialized wallet address: ${firstAccount.address}`);
  return wallet;
}

async function getMinGasPrice() {
  try {
    const url = `${lcdUrl}/osmosis/txfees/v1beta1/cur_eip_base_fee`;
    botLogger.info(`Sending request to get minimum gas price from ${url}`);
    const response = await axios.get(url);
    const baseFee = parseFloat(response.data.base_fee);
    botLogger.info(`Base fee response: ${JSON.stringify(response.data)}`);
    console.log(`Base fee: ${baseFee}`);
    return baseFee;
  } catch (error) {
    botLogger.error('Error fetching minimum gas price:', error);
    throw new Error('Failed to fetch minimum gas price');
  }
}

async function simulateTransaction(client, firstAccount, messages, memo) {
  try {
    botLogger.info(`Simulating transaction with messages: ${JSON.stringify(messages)}`);
    const simulatedResult = await client.simulate(firstAccount.address, messages, memo);
    botLogger.info(`Simulated result: ${JSON.stringify(simulatedResult)}`);
    console.log(`Full simulated result: ${JSON.stringify(simulatedResult, null, 2)}`);

    // Extract gas used directly from the simulated result
    const gasUsed = simulatedResult.gas_info ? simulatedResult.gas_info.gas_used : simulatedResult;
    console.log(`Extracted gas used: ${gasUsed}`);
    if (!gasUsed) {
      throw new Error(`Gas used not found in simulated result: ${JSON.stringify(simulatedResult)}`);
    }
    return gasUsed;
  } catch (error) {
    botLogger.error('Error simulating transaction:', error);
    throw new Error('Failed to simulate transaction');
  }
}

async function sendTokens(wallet, recipientAddress) {
  try {
    const [firstAccount] = await wallet.getAccounts();
    botLogger.info(`Sending tokens from ${firstAccount.address} to ${recipientAddress}`);

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
    const gasEstimation = await simulateTransaction(client, firstAccount, messages, memo);
    const gasLimit = Math.ceil(gasEstimation * 1.15); // Add a 15% buffer to the estimated gas
    const feeAmountValue = Math.ceil(gasLimit * baseFee);
    const feeAmount = {
      denom: 'uosmo',
      amount: feeAmountValue.toString(),
    };
    const fee = {
      amount: [feeAmount],
      gas: gasLimit.toString(),
    };

    botLogger.info(`Sending transaction with fee: ${JSON.stringify(fee)}`);
    const result = await client.sendTokens(firstAccount.address, recipientAddress, [faucetAmount], fee, memo);

    if (result.code === 0) {
      txLogger.info(`Broadcasted transaction: ${result.transactionHash}`);
      console.log(`Broadcasted transaction: ${result.transactionHash}`);
      return result;
    } else if (result.rawLog && result.rawLog.includes('transaction indexing is disabled')) {
      txLogger.warn(`Transaction indexing is disabled: ${result.rawLog}`);
      console.log(`Transaction indexing is disabled: ${result.rawLog}`);
      return {
        ...result,
        indexingWarning: true,
      };
    } else {
      txLogger.error(`Transaction failed with code ${result.code}: ${result.rawLog}`);
      throw new Error(`Transaction failed with code ${result.code}`);
    }
  } catch (error) {
    if (error.message.includes("transaction indexing is disabled")) {
      txLogger.warn(`Transaction indexing is disabled, assuming success.`);
      return { code: 0, message: error.message, indexingWarning: true };
    } else if (error.message.includes("out of gas")) {
      txLogger.error(`Transaction failed due to out of gas: ${error.message}`);
      throw new Error('Transaction failed due to out of gas. Please increase the gas limit.');
    }
    txLogger.error(`Error sending tokens: ${error}`);
    console.log(`Error sending tokens: ${error}`);
    throw error;
  }
}

module.exports = {
  initWallet,
  sendTokens,
};
