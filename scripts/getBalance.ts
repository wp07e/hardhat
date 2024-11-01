import { ethers } from "hardhat";
import * as helpers from "@nomicfoundation/hardhat-toolbox/network-helpers";
import { HardhatEthersSigner } from "@nomicfoundation/hardhat-ethers/signers"

/**
 *  To Debug, select file in explorer then press "F5"
 */
async function main() {
  // Replace with the hard-coded wallet address you want to check the balance of
  const walletAddress = "0xFd15328E9FC917852E25Db94d94fF1010F7f1cEe";

  // Set up the provider to connect to the forked Mainnet
  const provider = ethers.getDefaultProvider("http://localhost:8545");

  // Get the wallet instance
  await helpers.impersonateAccount(walletAddress);
  const impersonatedSigner = await ethers.getSigner(walletAddress);
  const signer:HardhatEthersSigner = await ethers.getSigner(await impersonatedSigner.getAddress());

  // Get the balance of the wallet
  const balance = await signer.provider.getBalance(walletAddress);

  // Print the balance in ETH
  console.log(`The balance of ${walletAddress} is: `, ethers.formatEther(balance));
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
