import { ethers } from "hardhat";
import * as helpers from "@nomicfoundation/hardhat-toolbox/network-helpers";
import { HardhatEthersSigner } from "@nomicfoundation/hardhat-ethers/signers"

async function main() {
    const botContractAddress = "0x9A8Ec3B44ee760b629e204900c86d67414a67e8f";
    /**
     * REMEMBER! All debug settings are pointing to '--network localhost' (which is the forked network in 'hardhat.config.ts')
     * Make sure if running any command, you add '--network localhost'
     * 
     * So here are the steps:
     * 1. npx hardhat clean
     * 2. (make sure forked network is deployed via 'npx hardhat node')
     * 3. npx hardhat ignition deploy ignition/modules/ArbirageBot.ts --network localhost
     * 4. npx hardhat run scripts/debugLocalDeployArbitrageBot.ts (or 'F5' to debug)
     */

     // Check current fork block number
    const currentBlock = await ethers.provider.getBlockNumber();
    console.log("Current fork block number:", currentBlock);

    // Get the contract instance using the existing address
    const bot = await ethers.getContractAt("ArbitrageBot", botContractAddress);
  
    // Now interact with your newly deployed contract
    const result = await bot.getNewString4();
    console.log("Result:", result);
  
  };
  

main().catch((error) => {
    console.error(error);
    process.exitCode = 1;
});