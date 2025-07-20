const { buildModule } = require("@nomicfoundation/hardhat-ignition/modules");
const { networkconfig } = require("../../helper-hardhat-config");
const { network } = require("hardhat");
const {
  developmentChains,
  DECIMALS,
  INITIAL_ANSWER,
} = require("../../helper-hardhat-config");

module.exports = buildModule("FundeMeModule", (m) => {
  const chainId = network.config.chainId;

  if (developmentChains.includes(chainId)) {
    console.log("Local network detected! Deploying mocks...");
  }
  const mock = m.contract("MockV3Aggregator", [DECIMALS, INITIAL_ANSWER]);
  // Specify the contract name and its constructor arguments);

  return { mock };
});

//use a mock for the PriceConverter contract when testing
module.exports.tags = ["all", "mocks"];
