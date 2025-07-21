// This setup uses Hardhat Ignition to manage smart contract deployments.
// Learn more about it at https://hardhat.org/ignition
//yarn hardhat ignition deploy ingnition/modules/deploy.js --network [network]

const { buildModule } = require("@nomicfoundation/hardhat-ignition/modules");
const { networkconfig } = require("../../helper-hardhat-config");
const { network } = require("hardhat");
const { developmentChains } = require("../../helper-hardhat-config");
const { get } = require("http");
// if the contract does not exist, we will use a mock on local networks
const hre = require("hardhat");

module.exports = buildModule("FundeMeModule", (m) => {
  const chainId = network.config.chainId;

  //how to get the chainId in ignition?
  const chainName = network.name;
  let ethUsdPriceFeedAddress;

  //you need to seperated arrange the contracts
  if (chainName == "hardhat") {
    // deployments.get("MockV3Aggregator").then((mock) => {
    //   ethUsdPriceFeedAddress = mock.address;
    //   // Define the deployment script for the PriceConverter contract
    // });
    //how could I get the mock address?
    // This will return the address of the mock contract if it exists

    // const ethUsdAggregator = hre.ignition.deployments.developmentChains;
    ethUsdPriceFeedAddress = "0x5FbDB2315678afecb367f032d93F642f64180aa3";
  } else if (chainName != "localhost" && chainName != "hardhat") {
    ethUsdPriceFeedAddress = networkconfig[chainId].ethUsdPriceFeed;
  } else {
    return [];
  }
  // Define the deployment script for the PriceConverter contrac

  const fundMe = m.contract("FundMe", [ethUsdPriceFeedAddress]);
  // Specify the contract name and its constructor arguments);

  return { fundMe };
});

//use a mock for the PriceConverter contract when testing
