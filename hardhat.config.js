require("@nomicfoundation/hardhat-toolbox");
require("@nomicfoundation/hardhat-ignition");

/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  // solidity: "0.8.28",
  defaultNetwork: "hardhat",
  networks: {
    hardhat: {
      chainId: 1337,
    },
    sepolia: {
      url: "https://sepolia.infura.io/v3/YOUR_INFURA_PROJECT_ID",
      accounts: [
        "06e3aa37a24f89d676f8f149c41ded404192af55def5fd922edf6cb5d5f14d5b",
      ],
      chainId: 4,
    },
    polygon: {
      url: "https://polygon-rpc.com",
      accounts: [
        "06e3aa37a24f89d676f8f149c41ded404192af55def5fd922edf6cb5d5f14d5b",
      ],
      chainId: 137,
    },
  },
  solidity: {
    compilers: [{ version: "0.8.28" }, { version: "0.6.6" }],
  },

  namedAccounts: {
    deployer: {
      default: 0, // The first account in the list of accounts
    },
    user: {
      default: 1, // The second account in the list of accounts
    },
  },
};
