require("@nomicfoundation/hardhat-toolbox");
require("@nomicfoundation/hardhat-ignition");

/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  // solidity: "0.8.28",
  // networks: {
  //   // hardhat: {
  //   //   chainId: 1337,
  //   // },
  //   // sepolia: {
  //   //   url: "https://sepolia.infura.io/v3/YOUR_INFURA_PROJECT_ID",
  //   //   accounts: ["YOUR_PRIVATE_KEY"],
  //   // },
  //   // polygon: {
  //   //   url: "https://polygon-rpc.com",
  //   //   accounts: ["YOUR_PRIVATE_KEY"],
  //   // },
  // },
  solidity: {
    compilers: [{ version: "0.8.28" }, { version: "0.6.6" }],
  },
};
