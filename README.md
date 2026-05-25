# Build on Chiliz

A hands-on learning journey focused on building real-world decentralized applications on the Chiliz Chain.


---

## Projects

### 1. Fan Token Hub — `virtual-meet/`

A token-gated virtual meetup platform for fan token holders.

**Features**
- MetaMask wallet connection via Wagmi
- Display native CHZ balance and ERC-20 token balances
- Token metadata viewer (symbol, decimals, logo, verification status)
- Token-gated access to exclusive content

**Stack:** Next.js · TypeScript · Moralis · Wagmi · Tailwind CSS

---

### 2. NFT Marketplace — `nft-marketplace/`

A decentralized marketplace for minting, listing, and trading NFTs on Chiliz Spicy Testnet.

**Features**
- Mint NFTs with custom name, description, and image
- View owned NFTs in a personal wallet page
- List NFTs for sale and cancel active listings
- Buy NFTs from other users
- Smart contract metadata display

**Stack:** Next.js · TypeScript · Thirdweb · Tailwind CSS

---

## Setup

Both projects require a `.env.local` file. Copy `.env.local.example` in the project root and fill in the required values.

### Fan Token Hub

```env
NEXT_PUBLIC_MORALIS_API_KEY= your_moralis_api_key
```

### NFT Marketplace

```env
NEXT_PUBLIC_CLIENT_ID= your_thirdweb_client_id
NEXT_PUBLIC_SECRET_KEY= your_thirdweb_secret_key
NEXT_PUBLIC_NETWORK= SpicyChain
NEXT_PUBLIC_MARKET_CONTRACT_ADDRESS= your_marketplace_contract_address
NEXT_PUBLIC_NFT_CONTRACT_ADDRESS= your_nft_contract_address
```

### Running locally

```bash
npm install
npm run dev
```

---

## Network

Both projects run on **Chiliz Spicy Testnet**.

| Field | Value |
|---|---|
| Network Name | Chiliz Spicy Testnet |
| RPC URL | https://spicy-rpc.chiliz.com/ |
| Chain ID | 88882 |
| Currency Symbol | CHZ |
| Block Explorer | http://spicy-explorer.chiliz.com/ |

Test CHZ is available from the [Spicy Faucet](https://spicy-faucet.chiliz.com/).

---

## Tech Stack

| Tool | Purpose |
|---|---|
| [Next.js](https://nextjs.org/) | Frontend framework |
| [Moralis](https://moralis.io/) | Blockchain data APIs |
| [Thirdweb](https://thirdweb.com/) | Smart contract interaction |
| [Wagmi](https://wagmi.sh/) | Wallet hooks for React |
| [Tailwind CSS](https://tailwindcss.com/) | Styling |
