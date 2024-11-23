require("@nomicfoundation/hardhat-ethers");
require('@nomicfoundation/hardhat-toolbox');
require("@nomicfoundation/hardhat-verify");
require("dotenv").config();

const { RPC_URL, PRIVATE_KEY } = process.env

module.exports = {
  solidity: "0.8.17",
  networks: {
    cronosTestnet: {
      url: process.env.RPC_URL,
      chainId: 338,
      accounts: [process.env.PRIVATE_KEY],
    },
  },

  sourcify: {
    enabled: false
  },

  etherscan: {
    apiKey: {
      cronosTestnet: process.env.ETHERSCAN_API_KEY, // <-- replace with your api key
    },
    customChains: [
      {
        network: "cronosTestnet",
        chainId: 338,
        urls: {
          apiURL: process.env.ETHERSCAN_API_KEY, // <-- replace the API service url and API key
          browserURL: "http://explorer.cronos.org/testnet" // <-- replace the Cronos explorer url
        }
      }
    ]
  }  
};

