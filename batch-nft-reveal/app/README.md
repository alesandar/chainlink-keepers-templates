# Batch NFT Reveal App

[LIVE DEMO](#)

This is a companion app for the [Chainlink Keepers Template: Batch NFT Reveal](https://github.com/hackbg/chainlink-keepers-templates/tree/main/batch-nft-reveal) contract repo. It helps you setup and play with batch-revealed NFT collections powered by Chainlink VRF & Keepers.

## Requirements

- [Node](https://nodejs.org/en/download/)
- [Yarn](https://classic.yarnpkg.com/en/docs/install/#mac-stable)
- [Git](https://git-scm.com/downloads)

## Quick Start

Install all dependencies:

```bash
yarn install
```

Start up the local development server:

```bash
yarn dev
```

## Configure

Copy `.env.example` over to `.env` and fill the values with your own.

| Name                     | Description                                                                                                                 |
| ------------------------ | --------------------------------------------------------------------------------------------------------------------------- |
| `NEXT_PUBLIC_INFURA_KEY` | Required for read-only mode in collection page and using WalletConnect. Obtain key from [Infura's site](https://infura.io). |

## Build and Deploy

If you wanted to run this site in production, you should install modules then build the site and run it:

```bash
yarn install
yarn build
yarn start
```

## References

- [Next.js Docs](https://nextjs.org/docs/getting-started)
- [Chainlink Fullstack Starter](https://github.com/hackbg/chainlink-fullstack)
