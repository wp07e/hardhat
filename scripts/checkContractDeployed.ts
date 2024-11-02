import { ethers } from "hardhat";

async function main() {
  const botContractAddress = "0x9A8Ec3B44ee760b629e204900c86d67414a67e8f";
  
  // Check current fork block number
  const currentBlock = await ethers.provider.getBlockNumber();
  console.log("Current fork block number:", currentBlock);
  
  // Check if contract exists at address
  const code = await ethers.provider.getCode(botContractAddress);
  console.log("Contract code exists:", code !== "0x");
  
  if (code === "0x") {
    console.log("No contract found at address. This could mean:");
    console.log("1. The contract was deployed after the fork block");
    console.log("2. The address might be incorrect");
    console.log("3. The fork might not be properly configured");
  }
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });