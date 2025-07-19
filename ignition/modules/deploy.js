// This setup uses Hardhat Ignition to manage smart contract deployments.
// Learn more about it at https://hardhat.org/ignition

const { buildModule } = require("@nomicfoundation/hardhat-ignition/modules");

module.exports = buildModule("priceConverterModule", (m) => {
  //const { ethers, ethers2 } = m;

  // Define the deployment script for the PriceConverter contract
  const priceConverter = m.contract("PriceConverter");

  return { priceConverter };
});
