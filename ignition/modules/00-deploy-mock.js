const { buildModule } = require("@nomicfoundation/hardhat-ignition/modules");
const { networkconfig } = require("../../helper-hardhat-config");
const { network } = require("hardhat");
const {
  developmentChains,
  DECIMALS,
  INITIAL_ANSWER,
} = require("../../helper-hardhat-config");
const { log } = require("console");

module.exports = buildModule("FundeMeModule", (m) => {
  const chainName = network.name;

  if (developmentChains.includes(chainName)) {
    const mock = m.contract("MockV3Aggregator", [DECIMALS, INITIAL_ANSWER]);
    // Specify the contract name and its constructor arguments);
    return { mock };
  }
});

//use a mock for the PriceConverter contract when testing
// module.exports.tags = ["all", "mocks"];
