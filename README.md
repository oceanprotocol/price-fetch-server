# Subgraph Fetch Price Server

This is an express server for requesting the price of tokens from the CoinGecko API. Prices are returned in USD.

## Use Case

This server has been created for cases where the CoinGecko API can't be called directly. Instead, a call to this server can be made via IPFS, which will trigger the request to CoinGecko and this server will then return the requested token prices.

For example, the subgraph cannot make HTTP calls so it can use this server as an alternative way of requesting prices for tokens.

## Running locally

clone this repo:

```Bash
git clone git@github.com:oceanprotocol/subgraph-fetch-price.git
```

Change directory:

```Bash
cd subgraph-fetch-price
```

Install the dependencies:

```Bash
npm install
```

Start the server locally

```Bash
npm run start
```

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

This request gets the historical price of the token. The tokenId must be included in the request, a list of valid tokenIds are [here](./tokenIdList.json). An up to date list can be requested from CoinGecko `GET https://api.coingecko.com/api/v3/coins/list`. The request must also include the timestamp in unix timestamp format (eg. 1550245790).

```
/ipfs/QmTkzDwWqPbnAh5YiV5VwcTLnGdwSNsNTn2aDxdXBFca7D/:tokenId/:timestamp
```

Example Request:

```
http://localhost:3000/ipfs/QmTkzDwWqPbnAh5YiV5VwcTLnGdwSNsNTn2aDxdXBFca7D/ocean-protocol/1620245790
```

Example response:

```
{
    "usd": 1.4499657614470953
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

## Run in Docker

Run the following command to build the service in a Docker container:

```Bash
npm run build:docker
```

Next, run the following command to start running the RBAC service in the Docker container:

```Bash
npm run start:docker
```

Now you are ready to send requests to the server via postman. Make sure to replace the URL to http://localhost:49160 in your requests.

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
