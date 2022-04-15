# Subgraph Fetch Price Server

This is an express server for requesting the price of tokens from the CoinGecko API. Prices are returned in USD.

## Paths

There are two paths for requesting prices, one for the current price and one for the historical price:

### GET Current price

This gets the current price of the token. The tokenId must be included in the request, a list of valid tokenIds are [here](./tokenIdList.json). An up to date list can be requested from CoinGecko `GET https://api.coingecko.com/api/v3/coins/list`

```
/ipfs/QmTkzDwWqPbnAh5YiV5VwcTLnGdwSNsNTn2aDxdXBFca7D/:tokenId
```

Example Request:

```
http://localhost:3000/ipfs/QmTkzDwWqPbnAh5YiV5VwcTLnGdwSNsNTn2aDxdXBFca7D/ocean-protocol
```

Example response:

```
{
    "usd": 0.491975
}
```

### GET Historical Price

This request gets the historical price of the token. The tokenId must be included in the request, a list of valid tokenIds are [here](./tokenIdList.json). An up to date list can be requested from CoinGecko `GET https://api.coingecko.com/api/v3/coins/list`. The request must also include the date in dd-mm-yyyy format (eg. 30-12-2017)

```
/ipfs/QmTkzDwWqPbnAh5YiV5VwcTLnGdwSNsNTn2aDxdXBFca7D/:tokenId/:date
```

Example Request:

```
http://localhost:3000/ipfs/QmTkzDwWqPbnAh5YiV5VwcTLnGdwSNsNTn2aDxdXBFca7D/ocean-protocol/30-12-2021
```

Example response:

```
{
    "usd": 0.8320073253954497
}
```

## Development

Run the following command to start the server in development mode with nodemon:

```Bash
npm run dev
```

Run the following command to build the server:

```Bash
npm run build
```

Run the following command to start the server in development:

```Bash
npm run start
```

## Testing

Run the following command to run all tests:

```Bash
npm run test
```

Run the following command to run the formatting and linting tests:

```Bash
npm run test:format
```

Run the following command to run the integration tests:

```Bash
npm run test:integration
```

## ✨ Code Style

Code style is automatically enforced through [ESLint](https://eslint.org) & [Prettier](https://prettier.io) rules:

- Git pre-commit hook runs `prettier` on staged files, setup with [Husky](https://typicode.github.io/husky)
- VS Code suggested extensions and settings for auto-formatting on file save

For running linting and auto-formatting manually, you can use from the root of the project:

```bash
# linting check, also runs Typescript typings check
npm run lint

# auto format all files in the project with prettier, taking all configs into account
npm run format
```
