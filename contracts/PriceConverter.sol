// SPDX-License-Identifier: MIT
pragma solidity ^0.8.28;

import "@chainlink/contracts/src/v0.8/interfaces/AggregatorV3Interface.sol";

// This library is used to convert ETH to USD using Chainlink price feeds.
// It provides functions to get the current price of ETH in USD and to convert an amount of ETH to its equivalent in USD.
// The price is returned in 18 decimal places, which is standard for ETH.
// The conversion rate is calculated by multiplying the ETH amount by the current price of ETH in USD.
// The result is also adjusted to account for the 18 decimal places used in the price feed.
// This library is intended to be used in smart contracts that need to handle ETH and USD conversions
// using Chainlink's reliable price feeds.
library PriceConverter {
    function getPrice(
        AggregatorV3Interface priceFeed
    ) internal view returns (uint256) {
        (, int256 answer, , , ) = priceFeed.latestRoundData();
        // ETH/USD rate in 18 digit
        return uint256(answer * 10000000000);
    }

    // 1000000000
    // call it get fiatConversionRate, since it assumes something about decimals
    // It wouldn't work for every aggregator
    function getConversionRate(
        uint256 ethAmount,
        AggregatorV3Interface priceFeed
    ) internal view returns (uint256) {
        uint256 ethPrice = getPrice(priceFeed);
        uint256 ethAmountInUsd = (ethPrice * ethAmount) / 1000000000000000000;
        // the actual ETH/USD conversation rate, after adjusting the extra 0s.
        return ethAmountInUsd;
    }
}
