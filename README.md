# the-tipooor
Telegram faucet bot for Cosmos SDK chains. Built to be simple fast and provide excellent console logs for debugging and error tracking. Uses an RPC + REST endpoint for querying and broadcasting transactions.

## Setup

### Initial setup & development/testing
Clone the repo and install required modules

```shell
git clone https://github.com/Cordtus/the-tipooor.git && cd the-tipooor
yarn && yarn dev
```

## Anti-abuse features

### Cooldown Timer

In order to prevent abuse of the faucet a simple rate limit is in place. The cooldown period is adjustable by setting the time (in hours) in your `.env` file. 
You can also 'whitelist' users to enable unlimited uses.

Conditions:
 - The whitelist is first checked, any IDs here bypass all further checks.
 - The cooldown applies to both the wallet, *and* user ID that requested for that wallet.
 - The user sessions are handled in a way that persists through bot restarts or crashing, so spamming the bot in attempt to get more tokens will not work.

### 'Vouch' for other users

However, sometimes the limits are too low and this can become a barrier to development. In order to bypass this limit, one user can "vouch" for another using the `/vouch` commmand.
To do this, simply reply `/vouch` to the (denied) `/faucet` request message of another user and it will send another serving of tokens to the wallet they requested for.

Conditions:
 - The `/vouch` command must be a reply to a message.
 - The user being vouched for must have a pending request.
 - The user sending the `/vouch` command cannot vouch for themselves.
 - The address in the pending request must be valid.

 *to add* - restrict this ability to only select users for added abuse resistance