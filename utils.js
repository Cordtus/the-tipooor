const { DirectSecp256k1HdWallet } = require('@cosmjs/proto-signing');
const { SigningStargateClient } = require('@cosmjs/stargate');
const axios = require('axios');

const faucetAmount = {
  denom: process.env.DENOM,
  amount: '10000000' // 10 tokens in micro units
};

const lcdUrl = process.env.LCD_URL;

// Function to initialize the wallet
async function initWallet() {
  return await DirectSecp256k1HdWallet.fromMnemonic(process.env.FAUCET_MNEMONIC, { prefix: 'osmo' });
}

// Function to send tokens using LCD endpoint
async function sendTokens(wallet, recipientAddress) {
  const [firstAccount] = await wallet.getAccounts();
  const client = await SigningStargateClient.connectWithSigner(lcdUrl, wallet);

  const sendMsg = {
    fromAddress: firstAccount.address,
    toAddress: recipientAddress,
    amount: [faucetAmount],
  };

  const fee = {
    amount: [{ denom: faucetAmount.denom, amount: '5000' }], // minimal fee
    gas: '200000',
  };

  const result = await client.sendTokens(firstAccount.address, recipientAddress, [faucetAmount], fee, "Here's your test tokens!");
  return result;
}

// Function to get balances
async function getBalances(wallet) {
  const [firstAccount] = await wallet.getAccounts();
  const response = await axios.get(`${lcdUrl}/cosmos/bank/v1beta1/balances/${firstAccount.address}`);
  return response.data.balances;
}

module.exports = {
  initWallet,
  sendTokens,
  getBalances
};
