"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.sendTokens = exports.checkAccountBalance = exports.initWallet = void 0;
require('dotenv').config();
const tx_pb_1 = require("cosmos/tx/v1beta1/tx_pb");
const service_pb_1 = require("cosmos/tx/v1beta1/service_pb");
const grpc = __importStar(require("@grpc/grpc-js"));
const proto_signing_1 = require("@cosmjs/proto-signing");
const stargate_1 = require("@cosmjs/stargate");
const axios_1 = __importDefault(require("axios"));
const logger_1 = require("./logger");
const faucetAmount = {
    denom: process.env.DENOM,
    amount: '10000000' // 10 tokens in micro units
};
const rpcUrl = process.env.RPC_URL;
const lcdUrl = process.env.LCD_URL;
const chainId = process.env.CHAIN_ID;
const grpcUrl = process.env.GRPC_URL;
const memo = "make test";
if (!rpcUrl || !lcdUrl || !chainId || !grpcUrl || !process.env.FAUCET_MNEMONIC || !process.env.DENOM) {
    throw new Error('Environment variables are not properly set');
}
async function initWallet() {
    logger_1.botLogger.info('Initializing wallet with provided mnemonic');
    const wallet = await proto_signing_1.DirectSecp256k1HdWallet.fromMnemonic(process.env.FAUCET_MNEMONIC, { prefix: 'osmo' });
    const [firstAccount] = await wallet.getAccounts();
    logger_1.botLogger.info(`Initialized wallet address: ${firstAccount.address}`);
    console.log(`Initialized wallet address: ${firstAccount.address}`);
    return wallet;
}
exports.initWallet = initWallet;
async function checkAccountBalance(address) {
    try {
        const response = await axios_1.default.get(`${lcdUrl}/cosmos/bank/v1beta1/balances/${address}`);
        const balances = response.data.balances;
        logger_1.botLogger.info(`Fetched balances for ${address}: ${JSON.stringify(balances)}`);
        console.log(`Fetched balances for ${address}: ${JSON.stringify(balances)}`);
        return balances;
    }
    catch (error) {
        logger_1.botLogger.error(`Error fetching balances for ${address}: ${error}`);
        console.error(`Error fetching balances for ${address}: ${error}`);
        throw error;
    }
}
exports.checkAccountBalance = checkAccountBalance;
async function sendTokens(wallet, recipientAddress) {
    var _a, _b;
    try {
        const [firstAccount] = await wallet.getAccounts();
        logger_1.botLogger.info(`Sending tokens from ${firstAccount.address} to ${recipientAddress}`);
        console.log(`Sending tokens from ${firstAccount.address} to ${recipientAddress}`);
        const client = await stargate_1.SigningStargateClient.connectWithSigner(rpcUrl, wallet);
        const fee = [{ denom: faucetAmount.denom, amount: '5000' }];
        logger_1.botLogger.info(`Fetching account and sequence numbers for ${firstAccount.address}`);
        console.log(`Fetching account and sequence numbers for ${firstAccount.address}`);
        const account = await client.getAccount(firstAccount.address);
        if (!account) {
            const balances = await checkAccountBalance(firstAccount.address);
            if (!balances || balances.length === 0) {
                throw new Error('Account does not exist on chain. Send some tokens there before trying to query sequence.');
            }
        }
        logger_1.botLogger.info(`Account number: ${account === null || account === void 0 ? void 0 : account.accountNumber}, Sequence number: ${account === null || account === void 0 ? void 0 : account.sequence}`);
        console.log(`Account number: ${account === null || account === void 0 ? void 0 : account.accountNumber}, Sequence number: ${account === null || account === void 0 ? void 0 : account.sequence}`);
        const txBody = {
            typeUrl: '/cosmos.tx.v1beta1.TxBody',
            value: {
                messages: [
                    {
                        typeUrl: '/cosmos.bank.v1beta1.MsgSend',
                        value: {
                            fromAddress: firstAccount.address,
                            toAddress: recipientAddress,
                            amount: [faucetAmount],
                        },
                    },
                ],
                memo,
            },
        };
        const registry = new proto_signing_1.Registry([...stargate_1.defaultRegistryTypes]);
        const txBodyBytes = registry.encode(txBody);
        const authInfoBytes = (0, proto_signing_1.makeAuthInfoBytes)([{ pubkey: (0, proto_signing_1.encodePubkey)(firstAccount.pubkey), sequence: account.sequence }], fee, 1, '', '');
        const signDoc = (0, proto_signing_1.makeSignDoc)(txBodyBytes, authInfoBytes, chainId, account.accountNumber);
        const { signature } = await wallet.signDirect(firstAccount.address, signDoc);
        const txRaw = new tx_pb_1.TxRaw();
        txRaw.setBodyBytes(txBodyBytes);
        txRaw.setAuthInfoBytes(authInfoBytes);
        txRaw.addSignatures(signature.signature);
        const request = {
            txBytes: txRaw.finish(),
            mode: 1, // Broadcast mode: 1 for SYNC
        };
        const clientOptions = {
            'grpc.max_send_message_length': 1024 * 1024 * 10,
            'grpc.max_receive_message_length': 1024 * 1024 * 10,
        };
        const grpcClient = new grpc.Client(grpcUrl, grpc.credentials.createInsecure(), clientOptions);
        const response = await new Promise((resolve, reject) => {
            grpcClient.makeUnaryRequest('/cosmos.tx.v1beta1.Service/BroadcastTx', Buffer.from, Buffer.from, Buffer.from(JSON.stringify(request)), (error, response) => {
                if (error) {
                    reject(error);
                }
                else {
                    resolve(service_pb_1.BroadcastTxResponse.deserializeBinary(response));
                }
            });
        });
        logger_1.botLogger.info(`Broadcasted transaction: ${(_a = response.getTxResponse()) === null || _a === void 0 ? void 0 : _a.getTxhash()}`);
        console.log(`Broadcasted transaction: ${(_b = response.getTxResponse()) === null || _b === void 0 ? void 0 : _b.getTxhash()}`);
    }
    catch (error) {
        logger_1.botLogger.error(`Error sending tokens: ${error}`);
        console.error(`Error sending tokens: ${error}`);
        throw error;
    }
}
exports.sendTokens = sendTokens;
