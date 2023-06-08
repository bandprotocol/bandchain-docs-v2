# Become a Validator

This step provides procedures to register the node as a validator.

### Step 1: Create a new Account to be Used as Validator

```bash
# Request new coins from faucet
curl --location --request POST "${FAUCET_URL}" \
--header 'Content-Type: application/json' \
--data-raw "{
 \"address\": \"$(bandd keys show $WALLET_NAME -a)\"
}"
```

### Step 2: Stake Tokens with the Validator Account

```bash
bandd tx staking create-validator \
    --amount 1000000uband \
    --commission-max-change-rate 0.01 \
    --commission-max-rate 0.2 \
    --commission-rate 0.1 \
    --from $WALLET_NAME \
    --gas-prices 0.0025uband \
    --min-self-delegation 1 \
    --moniker "$MONIKER" \
    --pubkey $(bandd tendermint show-validator) \
    --chain-id $CHAIN_ID
```

After becoming a validator, the validator node will be shown on Block Explorer [here](https://laozi-testnet6.cosmoscan.io/validators).

### Step 3: Register Reporters and Become Oracle Provider

Now, Yoda has multiple reporters. To grant the reporters be able to report data for the validator, the following commands should be run.

Firstly, reporter accounts must be created on Bandchain by supplying some small amount of BAND tokens.

```bash
# Send 1uband from a wallet to each reporter.
bandd tx multi-send 1uband $(yoda keys list -a) \
  --from $WALLET_NAME \
  --gas-prices 0.0025uband \
  --chain-id $CHAIN_ID
```

Secondly, grant all reporters for the validator, so that oracle requests for validator can be sent by the reporters.

```bash
bandd tx oracle add-reporters $(yoda keys list -a) \
  --from $WALLET_NAME \
  --gas-prices 0.0025uband \
  --chain-id $CHAIN_ID
```

Finally, activate the validator to become an oracle provider

```bash
bandd tx oracle activate \
  --from $WALLET_NAME \
  --gas-prices 0.0025uband \
  --chain-id $CHAIN_ID
```

If all procedures are successful, then the oracle provider status for the validator should be `active`.

```bash
bandd query oracle validator $(bandd keys show -a $WALLET_NAME --bech val)

# {
#   "is_active": true,
#   "since": ...
# }
```

And now you have become a validator on Bandchain Laozi testnet.
