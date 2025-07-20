const { networkconfig } = require("./helper-hardhat-config");
const { network } = require("hardhat");

console.log(network.config.chainId);
console.log(networkconfig[chainId].ethUsdPriceFeed);
