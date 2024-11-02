import { HardhatUserConfig } from "hardhat/config";
import "@nomicfoundation/hardhat-toolbox";

const config: HardhatUserConfig = {
  solidity: "0.8.20",
  networks: {
    hardhat: {
      forking: {
        url: "https://eth-mainnet.g.alchemy.com/v2/3oMxG_gjiemOT1qbUcgXpte9RoAFb79d",
        blockNumber: 21097002
      }
    }
  }
};

export default config;
