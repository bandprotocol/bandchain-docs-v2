---
sidebar_position: 3
---

# On Client Libraries

## BandChain.js

Along with the Standard Dataset, we have also released a new version of our [BandChain.js](https://github.com/bandprotocol/bandchain.js) 🪄 JavaScript client library. This new version comes with a new `getReferenceData` function that allows developers to query data from the Dataset.

To get started, the library needs to be installed:

```bash
npm install @bandprotocol/bandchain.js
```

Then, the library can be imported and used as follows:

```js
const { Client } = require('@bandprotocol/bandchain.js')

// BandChain's Proof-of-Authority REST endpoint
const endpoint = 'https://laozi-testnet6.bandchain.org/grpc-web'
const client = new Client(endpoint)

const minCount = 3
const askCount = 4

// This example demonstrates how to query price data from
// Band's standard dataset
async function exampleGetReferenceData() {
  const rate = await client.getReferenceData(
    ['BTC/USD', 'BTC/ETH', 'EUR/USD', 'EUR/ETH'],
    minCount,
    askCount
  )
  return rate
}

;(async () => {
  console.log(await exampleGetReferenceData())
})()
```

For a full tutorial and more usage on BandChain.js, please refer to the [Getting Started](<(/develop/developer-tools/bandchain.js/getting-started)>) section.
