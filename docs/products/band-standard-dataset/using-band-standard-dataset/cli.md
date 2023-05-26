---
sidebar_position: 5
---

# On REST API Endpoint

The service allows users to easily query for recent price updates via a REST API.

Our REST Endpoints can be found in this [Section](/develop/api-endpoints).

## Get Latest Price on Standard Price Reference

**Method**: `GET`

**Path**: `/oracle/v1/request_prices`

**Parameters**: `?ask_count={askCount}&min_count={minCount}&symbols={symbol-1}&symbols={symbol-2}&...&symbols={symbols-n}`

```bash
$ curl -X GET "${REST_API}/oracle/v1/request_prices?symbols=BTC&symbols=ETH&ask_count=4&min_count=3"
{
  "price_results": [
    {
      "symbol": "BTC",
      "multiplier": "100",
      "px": "4822795",
      "request_id": "235866",
      "resolve_time": "1631766659"
    },
    {
      "symbol": "ETH",
      "multiplier": "100",
      "px": "303321",
      "request_id": "245820",
      "resolve_time": "1632163802"
    }
  ]
}
```

For more usage example of our REST API, can be found in [Band CLI and REST Endpoints](/develop/band-cli-rest-endpoints) Section.
