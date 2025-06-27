# the-tipooor

Telegram faucet bot for Cosmos SDK chains. Runs in [nodeJS](https://nodejs.org/en) using [yarn](https://yarnpkg.com/). Built with new or non-developers in mind,  
simple to configure and use, provides extensive logging [Default full process + tx logs to console and file] for debugging.  
Uses tendermint RPC + REST endpoint [one of each] for querying and broadcasting transactions.

Features token decay/recovery system to prevent abuse while allowing legitimate development use.

## Setup

### Initial setup, config & development + production mode

#### Clone this repo

```shell
cd && git clone https://github.com/Cordtus/the-tipooor.git
````

#### Install packages & dependencies

```shell
cd the-tipooor
yarn add @cosmjs/proto-signing @cosmjs/stargate axios dotenv telegraf winston
yarn add -D nodemon
```

#### Create `.env` file

Create a file in the root of the directory labelled `.env`
`nano ./.env`

Add mnemonic, bot API key etc.
(**do not** use an existing wallet—create a new one specifically for the bot)

```shell
BOT_TOKEN='api_key_from_telegram_botfather'
GRPC_URL='not_currently_used'
RPC_URL='required'
LCD_URL='required'
FAUCET_MNEMONIC=''
CHAIN_ID='osmo-test-5'
DENOM='uosmo'
AMOUNT='1000000'
ALLOWED_GROUP_IDS='group_id,another_group_id'
WHITELISTED_USER_IDS='user_id,another_user_id'
```

*ensure the `.gitignore` file in this directory contains `.env` so this file does not get pushed to github when it contains your mnemonic + bot API key!*

*Note:* `FAUCET_TIMEOUT_HOURS` is no longer used - replaced by advanced decay/recovery system

*to-add* – move configurables to dedicated config file

#### Run the bot

For development & testing, run with `yarn dev`.
Bot will restart upon changes to any of the working files.

To run normally, run with `yarn start`

To run as a persistent service, create a *systemd* service file

```bash
#!/bin/bash

sudo tee /etc/systemd/system/faucetbot.service > /dev/null <<EOL
[Unit]
Description=OsmoFaucet
After=network.target

[Service]
ExecStart=/usr/bin/node $HOME/repos/the-tipooor/bot.js
Restart=always
User=$USER
Environment=PATH=/usr/bin:/usr/local/bin
Environment=NODE_ENV=production
WorkingDirectory=$HOME/repos/the-tipooor

[Install]
WantedBy=multi-user.target
EOL

# Reload systemd and enable the service
sudo systemctl daemon-reload
sudo systemctl start faucetbot.service
sudo systemctl enable faucetbot.service
```

## Using the bot

After the bot is set up and configured, add your bot to a Telegram group \[don't forget to add the chat ID to `.env`] and write:

```text
/faucet <wallet_address>
```

The bot should send tokens and return a response to indicate success or failure, and a block explorer link with the tx hash. Full details can be seen in the console or in the bot logfile.

### New commands

*added in 1.5.0*

Check your current status and eligible token amount:

```text
/status
```

This shows your current multiplier, eligible amount, last request time, and recovery information.

*to-add* – block explorer prefix as config parameter

## Anti-abuse features

### Token Decay/Recovery System

The bot now uses an advanced system that dynamically adjusts token amounts based on usage patterns instead of simple cooldowns.

**How it works:**

* First request: Users get 100% of the base amount
* Subsequent requests within 48 hours: Amount halves each time (exponential decay)
* Recovery period: Amount doubles every 24 hours without requests (up to 100%)
* Example: 1000 → 500 → 250 → wait 24h → 500 → wait 24h → 1000

**Benefits:**

* No hard blocks - users can always request tokens
* Automatic recovery encourages spacing out requests
* Legitimate developers aren't permanently blocked
* Heavy users get reduced amounts, light users get full amounts

### Wallet Locking

To prevent address sharing abuse, wallets are now "locked" to the first user who requests tokens to that address.

Conditions:

* First user to request tokens to an address "owns" that wallet
* Wallet owner can always request tokens to their locked wallet \[subject to decay system]
* Other users can request tokens to locked wallets once every 72 hours
* Cross-user requests are tracked separately per wallet

### Whitelisted Users

You can still 'whitelist' users to bypass all restrictions entirely.

Conditions:

* The whitelist is first checked; any IDs here bypass all restrictions
* Whitelisted users get full amount every time, no decay
* User sessions persist through bot restarts or crashes

### 'Vouch' for other users

Users can still "vouch" for others to bypass current restrictions using the `/vouch` command.
To do this, simply reply `/vouch` to the (denied) `/faucet` request message of another user and it will send tokens to the wallet they requested.

Conditions:

* The `/vouch` command must be a reply to a message or use `/vouch @username`
* The user being vouched for must have a pending request (they must have a recently rejected request)
* The user sending the `/vouch` command cannot vouch for themselves
* The address in the pending request must be valid
* Vouching bypasses both decay system and wallet locking

### Parameters

The decay/recovery system uses these default values \[configurable in sessionManager.js]:

* **Decay window**: 48 hours \[requests within this window trigger amount reduction]
* **Recovery period**: 24 hours \[amount doubles every period without requests]
* **Wallet lock period**: 72 hours \[time other users must wait for locked wallets]

*to-do* – move these parameters to .env configuration
