const networkconfig = {
  4: {
    name: "sepolia",
    ethUsdPriceFeed: "0x59F1ec1f10bD7eD9B938431086bC1D9e233ECf41",
  },
  137: {
    name: "polygon",
    ethUsdPriceFeed: "0xF9680D99D6C9589e2a93a78A04A279e509205945",
  },
};

//to determine if the network is a development chain
const developmentChains = ["hardhat", "localhost"];
const DECIMALS = 8;
const INITIAL_ANSWER = 200000000000;

module.exports = {
  networkconfig,
  developmentChains,
  DECIMALS,
  INITIAL_ANSWER,
};
// This setup uses Hardhat Ignition to manage smart contract deployments.
