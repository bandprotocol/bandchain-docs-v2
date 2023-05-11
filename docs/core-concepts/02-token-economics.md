---
id: token-economics
title: BAND Token
---

# BAND

BAND is BandChain's native staking token. Staked holders can govern and decide the future of the protocol.

## BandChain Tokenomics

### Inflation

BandChain applies an inflationary model to the BAND token, which incentivizes network participation by token holders. The aim is to encourage token holders to stake their coins on the network, rather than focusing solely on trading or leaving their coins idle.

The specific inflation parameters currently mirror those of the Cosmos network. The annual inflation rate ranges from 7% to 20% and is adjusted to target having 66% of the total supply of BAND tokens staked.

To illustrate how inflation incentivizes staking, consider a network participant with a certain amount of holdings. With inflation, if the participant chooses not to use their coins to participate in the network's activities, they will find that the percentage of their holdings with respect to the total supply decreases over time. However, if they decide to stake their coins, they will receive a share of coins proportional to the inflation, meaning their total token holding ratio will remain relatively unchanged.

### Validators and Stakers

Similar to other Cosmos-based blockchains, one of the responsibilities of BandChain validators is to provision new blocks and process transactions. By performing these tasks, they earn BAND tokens as a reward. In the case of block provisioning, the reward comes from newly minted tokens on that block. Conversely, the reward for processing transactions comes from the [fees](#gas-and-network-fee) that each validator chooses to set. Note that a percentage of the total block reward is diverted to the [community fund pool](#community-spending-pool).

Those who do not wish to become validators can still earn a portion of the validator rewards by becoming delegators. This is done by staking their holdings on the network's validators. By doing so, they will share the revenue earned by those validators.

The amount of reward each validator receives is based on the total amount of tokens staked to them. Before this revenue is distributed to their delegators, a validator can apply a commission. In other words, delegators pay a commission to their validators on the revenue they earn.

However, while delegators share the revenue of their validators, they also share the risks. Therefore, it is imperative for potential delegators to understand those risks, and that being a delegator is not a passive task.

Some actions that a delegator should perform are:

- **Perform due diligence on the validators you wish to stake on before committing:** If a validator you staked on misbehaves, a portion of the validator's stake, including those of their delegators, are slashed. Therefore, it is advisable for delegators to carefully consider their staking choices.
- **Actively monitor the validators you've committed to:** Delegators should ensure that the validators they delegate to behave correctly, meaning that they have good uptime, do not double sign or get compromised, and participate in governance.
- **Participate in network governance:** Delegators are expected to participate in network governance activities. A delegator’s voting power is proportional to the size of their bonded stake. If a delegator does not cast their vote, they will inherit the vote of the validators they staked on. If they do vote, they instead override the vote of those validators. Delegators, therefore, act as an important counterbalance to their validators.

### Community Fund Pool

Two percent of the total block rewards are diverted to the community fund pool. The funds are intended to promote the long-term sustainability of the ecosystem. These funds can be distributed in accordance with the decisions made by the governance system.

### Slashing

If a validator misbehaves, their delegated stake will be partially slashed.

There are three reasons why a validator may be slashed:

- Excessive downtime
- Double signing, and
- Unresponsiveness.

The first two are derived from the Cosmos SDK, while the third is specific to BandChain.

#### Excessive Downtime

One of the validators' primary functions is to propose and subsequently commit new blocks onto the chain. Thus, if a validator has not participated in more than `[MIN_SIGNED_PER_WINDOW]` of the last `[SIGNED_BLOCK_WINDOW]` block proposals and commits, we will consider that they are not performing their function properly. Consequently, we will slash the total value staked to them by `[SLASH_FRACTION_DOWNTIME]`.

#### Double Signing

During a double signing, the block proposer in the consensus round attempts to create two conflicting blocks and broadcast them to the network. If there are any other validators who stand to profit from this double block-proposal, they will vote for both blocks.

If the votes pass, nodes on the network will see two different blocks at the same height, each with different contents and hashes. From this point on, the network has **“forked”**. The consequence of this is that there will now be two versions of the **“truth”**.

To prevent such attempts at double signing, Cosmos, and by extension BandChain, is implemented so that any validator that double-signs is slashed, with the slashed amount being `[SLASH_FRACTION_DOUBlESIGNING]` of all tokens bonded to them.

#### Unresponsiveness

Finally, we also slash validators if they consistently fail to respond to data requests. If a validator fails to respond to `[CONSECUTIVE_UNRESPONSIVE_REQUESTS]` consecutive requests, they will be slashed an amount equal to `[SLASH_FRACTION_UNRESPONSIVENESS]`.
