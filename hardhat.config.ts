import { HardhatUserConfig } from "hardhat/config";
import "@nomicfoundation/hardhat-toolbox";

const config: HardhatUserConfig = {
  solidity: "0.8.27",
  networks: {
    hardhat: {
      forking: {
        url: "https://eth-mainnet.g.alchemy.com/v2/3oMxG_gjiemOT1qbUcgXpte9RoAFb79d",
        blockNumber: 21091478
      }
    }
  }
};

export default config;
