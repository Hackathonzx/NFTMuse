# AI NFT Curator for Artists and Collectors

An innovative AI-powered platform that leverages the Crypto.com AI Agent SDK to empower NFT artists and collectors. The project enhances the NFT ecosystem by providing art creation suggestions, dynamic pricing tools, and personalized discovery dashboards. Built on the Cronos blockchain, the platform integrates smart contracts for minting, royalty management, and marketplace transactions.

# Features

**For Artists:**
- Art Suggestions: AI-powered insights into popular styles and categories, helping artists to create NFTs that are more likely to gain traction in the market.
- Royalties: Ensure fair compensation for creators through ERC2981-compliant royalty implementation, allowing artists to receive a percentage of future sales of their NFTs.

**For Collectors:**
- Valuation Engine: AI-powered dynamic pricing tool, which suggests NFT prices based on historical sales and market trends.
- Bidding & Offers: Place, accept, and manage offers for NFTs seamlessly, providing a transparent and user-friendly bidding experience.

**For the Community:**
- Cronos Integration: The platform leverages the Cronos blockchain for security, scalability, and low transaction costs, making it ideal for both artists and collectors to participate in a decentralized NFT ecosystem.

# Tech Stack
- Blockchain: Solidity, Cronos
- AI Tools: Crypto.com AI Agent SDK
- Frameworks: Hardhat, OpenZeppelin
- Frontend: React.js (integration with SDK APIs)
- Storage: IPFS (for storing NFT metadata)

# Smart Contracts
1. NFTMint.sol:

Handles the minting and royalty configuration for NFTs. It includes features like:

- Minting: Artists can mint NFTs on the blockchain.
- Royalties: The contract ensures that the artist receives a royalty fee on every sale based on the ERC2981 standard.

2. NFTMarketplace.sol:

Facilitates the listing, buying, bidding, and offering of NFTs. It includes:

- Listing: Artists or owners can list NFTs for sale with a specified price.
- Bidding & Offers: Collectors can make offers, and sellers can accept them, facilitating a dynamic marketplace for NFTs.

3. RewardToken.sol: 

Manages the reward token used to incentivize community engagement:

- Rewarding: The platform rewards users (artists and collectors) with the reward token.
- Burning: A mechanism to burn tokens to maintain tokenomics.

# Getting Started
# Prerequisites
- Node.js (v16+)
- Hardhat
- Cronos RPC URL and API key
- Crypto.com AI Agent SDK: Install via:

  npm install @crypto.com/ai-agent-client

**Setup**
Clone the repository.

git clone https://github.com/Hackathonzx/cryptominds.git

cd cryptominds

**Install dependencies:**

npm install

**Configure .env file:**

env

RPC_URL=https://rpc-testnet.cronos.org

PRIVATE_KEY=your_private_key

ETHERSCAN_API_KEY=your_cronos_api_key

**Compile the contracts:**

npx hardhat compile

# Deployment

Deploy the contract by running:

npx hardhat run ignition/modules/deploy.js --network cronosTestnet

Here are the deployed addresses:

- NFTMint deployed to: 0x41CD3d7753eeAD4c2d384a6C0074eA4c27dE36F1
- Link to the explorer: https://explorer.cronos.org/testnet/address/0x41cd3d7753eead4c2d384a6c0074ea4c27de36f1

- NFTMarketplace deployed to: 0x1d8c981FD95060A45b3Cea346DbF7b5b48f5CD36
- Link explorer: https://explorer.cronos.org/testnet/address/0x1d8c981fd95060a45b3cea346dbf7b5b48f5cd36

- RewardToken deployed to: 0xf1979Ac32D086D1f3f3773fe0828d37729ed545f
-Link to the explorer: https://explorer.cronos.org/testnet/address/0xf1979ac32d086d1f3f3773fe0828d37729ed545f


## Testing

Run tests:

npx hardhat test

# Contributing
- Fork the Repository:
- Create a New Branch:

git checkout -b feature/your-feature
- Make Changes and Commit:

git add .

git commit -m "Add feature"

Push Changes:

git push origin feature/your-feature

# License
This project is licensed under the MIT License.