import { ethers } from "hardhat";
import * as helpers from "@nomicfoundation/hardhat-toolbox/network-helpers";
import { HardhatEthersSigner } from "@nomicfoundation/hardhat-ethers/signers"

async function main() {
    // Set up the provider to connect to the forked Mainnet
    const provider = ethers.getDefaultProvider("http://localhost:8545");

    // Use the correct AAVE v3 Pool Addresses Provider for Mainnet
    const AAVE_POOL_ADDRESSES_PROVIDER = "0x2f39d218133AFaB8F2B819B1066c7E434Ad94E9e";
  
    /**
     * For some reason, we need to re-deploy the contract even though we deployed it through
     * the 'ignition' process. After the 'ignition' deployment, we are given the same address
     * we get from 'bot.getAddress()' below. If we try to use 'getContractAt()' method,
     * we always get an 'empty' result when running this code
     * 
     * // Check if contract exists at address
     * const code = await ethers.provider.getCode(botContractAddress);
     * console.log("Contract code exists:", code !== "0x");
     * 
     * It always fails.
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

    const ArbitrageBot = await ethers.getContractFactory("ArbitrageBot");
    const bot = await ArbitrageBot.deploy(AAVE_POOL_ADDRESSES_PROVIDER);
    await bot.waitForDeployment();
  
    console.log("ArbitrageBot deployed to:", await bot.getAddress());
  
    // Now interact with your newly deployed contract
    const result = await bot.getNewString4();
    console.log("Result:", result);
  
  };
  

main().catch((error) => {
    console.error(error);
    process.exitCode = 1;
});