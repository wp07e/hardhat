// This setup uses Hardhat Ignition to manage smart contract deployments.
// Learn more about it at https://hardhat.org/ignition
import { buildModule } from "@nomicfoundation/hardhat-ignition/modules";

const address = "0x2f39d218133AFaB8F2B819B1066c7E434Ad94E9e";  // Forked Mainnet

/**
 * MAKE SURE TO RUN "npx hardhat clean" after each ignition deployment
 */
export default buildModule("ArbitrageBot", (m) => {
  const _addressProvider = m.getParameter("_addressProvider", address);

  const bot = m.contract("ArbitrageBot", [_addressProvider]);

  return { bot };
});
