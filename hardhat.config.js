require("@nomicfoundation/hardhat-toolbox");

/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  defaultNetwork: "mumbai",
  solidity: "0.8.19",
  networks: {
    sepolia: {
      url: "https://eth-sepolia.g.alchemy.com/v2/<your-alchemy-api-key>]",
      accounts: ['Your-private-key-with-0x']
    },
    mumbai: {
      url: "https://polygon-mumbai.g.alchemy.com/v2/<your-alchemy-api-key>",
      accounts: ['Your-private-key-with-0x']
    }
  },
  etherscan: {
    apiKey: "your-etherscan-api-key",
  },
};
