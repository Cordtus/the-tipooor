// utils.js

require('dotenv').config();
const axios = require('axios');
const { DirectSecp256k1HdWallet } = require('@cosmjs/proto-signing');
const { SigningStargateClient } = require('@cosmjs/stargate');
const { botLogger, txLogger } = require('./logger');
const { getSession, saveSessionData } = require('./sessionManager');

const faucetAmount = {
  denom: process.env.DENOM,
  amount: process.env.AMOUNT,
};

const rpcUrl = process.env.RPC_URL;
const lcdUrl = process.env.LCD_URL;
const chainId = process.env.CHAIN_ID;
const memo = 'make test';

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
    botLogger.info(`Fetching base fee from ${url}`);
    const resp = await axios.get(url);
    return parseFloat(resp.data.base_fee);
  } catch (err) {
    botLogger.error('Error fetching minimum gas price:', err);
    throw new Error('Failed to fetch minimum gas price');
  }
}

async function simulateTransaction(client, firstAccount, messages, memo) {
  try {
    botLogger.info(`Simulating tx for ${firstAccount.address}`);
    const simResult = await client.simulate(firstAccount.address, messages, memo);
    const gasUsed =
      simResult.gas_info?.gas_used ||
      simResult.gasUsed ||
      (typeof simResult === 'number' ? simResult : null);
    if (!gasUsed) throw new Error('Gas used not found in simulation');
    return gasUsed;
  } catch (err) {
    botLogger.error('Error simulating transaction:', err);
    throw new Error('Failed to simulate transaction');
  }
}

async function sendTokens(wallet, recipientAddress) {
  try {
    const [firstAccount] = await wallet.getAccounts();
    const client = await SigningStargateClient.connectWithSigner(rpcUrl, wallet);
    const messages = [
      {
        typeUrl: '/cosmos.bank.v1beta1.MsgSend',
        value: {
          fromAddress: firstAccount.address,
          toAddress: recipientAddress,
          amount: [faucetAmount],
        },
      },
    ];

    const baseFee = await getMinGasPrice();
    const gasEstimation = await simulateTransaction(client, firstAccount, messages, memo);
    const gasLimit = Math.ceil(gasEstimation * 1.15);
    const feeAmount = {
      denom: process.env.DENOM,
      amount: Math.ceil(gasLimit * baseFee).toString(),
    };
    const fee = { amount: [feeAmount], gas: gasLimit.toString() };

    botLogger.info(`Broadcasting tx with fee: ${JSON.stringify(fee)}`);
    const result = await client.sendTokens(firstAccount.address, recipientAddress, [faucetAmount], fee, memo);

    if (result.code === 0) {
      txLogger.info(`Tx hash: ${result.transactionHash}`);
      return { success: true, transactionHash: result.transactionHash };
    } else if (result.rawLog?.includes('transaction indexing is disabled')) {
      txLogger.warn('Indexing disabled warning');
      return { success: true, transactionHash: null };
    } else {
      throw new Error(`Tx failed: ${result.rawLog}`);
    }
  } catch (err) {
    txLogger.error('Error sending tokens:', err);
    if (err.message.includes('transaction indexing is disabled')) {
      return { success: true, transactionHash: null };
    }
    throw err;
  }
}

async function processFaucetRequest(ctx, userId, address) {
  const session = getSession(userId);

  try {
    const wallet = await initWallet();
    const res = await sendTokens(wallet, address);
    if (res.success) {
      session.data.lastClaim = Date.now();
      session.data.lastReceived = session.data.lastReceived || {};
      session.data.lastReceived[address] = Date.now();
      saveSessionData();

      const explorerLink = res.transactionHash
        ? `https://celatone.osmosis.zone/${chainId}/txs/${res.transactionHash}`
        : `https://celatone.osmosis.zone/${chainId}`;

      return ctx.reply(
        `Successfully sent 10 tokens to ${address}. [Details](${explorerLink})`,
        { parse_mode: 'Markdown' }
      );
    } else {
      throw new Error('Failed to send tokens');
    }
  } catch (err) {
    botLogger.error('Error sending tokens:', err);
    if (err.message.includes('out of gas')) {
      return ctx.reply(
        'Transaction failed due to out of gas. Please try again later with higher gas.'
      );
    }
    return ctx.reply('Failed to send tokens. Please try again later.');
  }
}

module.exports = { initWallet, sendTokens, processFaucetRequest };
