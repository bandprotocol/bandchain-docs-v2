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

For a full tutorial and more usage on BandChain.js, please refer to the [Getting Started](/develop/developer-tools/bandchain.js/getting-started) section.

## PyBand

```py

from pyband.client import Client

def main():
    # Step 1
    grpc_url = "<GRPC>" # ex.laozi-testnet6.bandchain.org(without https://)
    c = Client(grpc_url)

    # Step 2
    print(c.get_reference_data(["BTC/USD", "ETH/USD"], 3, 4))

if __name__ == "__main__":
    main()

```

And running the code above should return a result that looks like this.

```py
[
  ReferencePrice(
    (pair = "BTC/USD"),
    (rate = 34614.1),
    (updated_at = ReferencePriceUpdated((base = 1625655764), (quote = 1625715134)))
  ),
  ReferencePrice(
    (pair = "ETH/USD"),
    (rate = 2372.53),
    (updated_at = ReferencePriceUpdated((base = 1625655764), (quote = 1625715134)))
  )
]

```

For a full tutorial and more usage on PyBand, please refer to the [Getting Started](/develop/developer-tools/pyband/getting-started) section.
