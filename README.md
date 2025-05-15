# the-tipooor

Telegram faucet bot for Cosmos SDK chains. Runs in [nodeJS](https://nodejs.org/en) using [yarn](https://yarnpkg.com/). Built with new or non-developers in mind,  
simple to configure and use, provides extensive logging [Default full process + tx logs to console and file] for debugging.  
Uses tendermint RPC + REST endpoint [one of each] for querying and broadcasting transactions.

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
FAUCET_TIMEOUT_HOURS='12'
```

*ensure the `.gitignore` file in this directory contains `.env` so this file does not get pushed to github when it contains your mnemonic + bot API key!*

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

*to-add* – block explorer prefix as config parameter

## Anti-abuse features

### Cooldown Timer

In order to prevent abuse of the faucet a simple rate limit is in place. The cooldown period is adjustable by setting the time (in hours) in your `.env` file.
You can also 'whitelist' users to enable unlimited uses.

Conditions:

* The whitelist is first checked; any IDs here bypass all further checks.
* The cooldown applies to both the wallet *and* the user ID that requested it.
* User sessions persist through bot restarts or crashes, so spamming will not work.

### 'Vouch' for other users

Sometimes the limits are too low, and can become a barrier to development. To bypass this limit, one user can "vouch" for another using the `/vouch` command.
To do this, simply reply `/vouch` to the (denied) `/faucet` request message of another user and it will send another serving of tokens to the wallet they requested.

Conditions:

* The `/vouch` command must be a reply to a message or use `/vouch @username`.
* The user being vouched for must have a pending request.
* The user sending the `/vouch` command cannot vouch for themselves.
* The address in the pending request must be valid.

*to-add* – restrict this ability to only select users for added abuse resistance
