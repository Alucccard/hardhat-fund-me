// This setup uses Hardhat Ignition to manage smart contract deployments.
// Learn more about it at https://hardhat.org/ignition
//yarn hardhat ignition deploy ingnition/modules/deploy.js --network [network]

const { buildModule } = require("@nomicfoundation/hardhat-ignition/modules");
const { networkconfig } = require("../../helper-hardhat-config");
const { network } = require("hardhat");

// if the contract does not exist, we will use a mock on local networks

module.exports = buildModule("FundeMeModule", (m) => {
  const chainId = network.config.chainId;
  //how to get the chainId in ignition?
  const ethUsdPriceFeedAddress = networkconfig[chainId].ethUsdPriceFeed;
  // Define the deployment script for the PriceConverter contract
  const fundMe = m.contract("FundMe", [ethUsdPriceFeedAddress]);
  // Specify the contract name and its constructor arguments);

  return { fundMe };
});

//use a mock for the PriceConverter contract when testing
