// This setup uses Hardhat Ignition to manage smart contract deployments.
// Learn more about it at https://hardhat.org/ignition
//yarn hardhat ignition deploy ingnition/modules/deploy.js --network [network]

const { buildModule } = require("@nomicfoundation/hardhat-ignition/modules");
const { networkconfig } = require("../../helper-hardhat-config");

// const ethUsdPriceFeedAddress = networkconfig[chainId].ethUsdPriceFeed;

// if the contract does not exist, we will use a mock on local networks

module.exports = buildModule("priceConverterModule", (m) => {
  //const { ethers, ethers2 } = m;

  // Define the deployment script for the PriceConverter contract
  const priceConverter = m.contract("PriceConverter");

  return { priceConverter };
});

//use a mock for the PriceConverter contract when testing
