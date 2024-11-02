pragma solidity ^0.8.20;

import "@openzeppelin/contracts/token/ERC20/IERC20.sol";
import "@openzeppelin/contracts/access/Ownable.sol";
import "@aave/core-v3/contracts/flashloan/base/FlashLoanSimpleReceiverBase.sol";
import "@aave/core-v3/contracts/interfaces/IPoolAddressesProvider.sol";
import "@aave/core-v3/contracts/interfaces/IPool.sol";
import "@uniswap/v2-periphery/contracts/interfaces/IUniswapV2Router02.sol";
// Uncomment this line to use console.log
// import "hardhat/console.sol";

/**  Notes
    -----------------------------------------------------------------------------------------
    Mainnet:         "0x2f39d218133AFaB8F2B819B1066c7E434Ad94E9e"
    Sepolia TestNet: "0x012bAC54348C0E635dCAc9D5FB99f06F24136C9A"
    -----------------------------------------------------------------------------------------
     1. To swap testnet coins, go to https://app.uniswap.org/, settings, change to test mode. 
*/

contract ArbitrageBot is FlashLoanSimpleReceiverBase, Ownable {

    event LogString(string message, string value);

    constructor(address _addressProvider) 
        FlashLoanSimpleReceiverBase(IPoolAddressesProvider(_addressProvider))
    {
        emit LogString("In Test:", "constructor");
    }

    function executeOperation(
        address asset,
        uint256 amount,
        uint256 premium,
        address initiator,
        bytes calldata params
    ) external override returns (bool) {

        
        return true;
    }

    function getString() external pure returns (string memory) {
        /**
         * 'emit' and 'console.log()' do not work when running with "npx hardhat run"
         */
        // emit LogString("In Test:", "test");
        // console.log("Test Test Test");

        return "Test Test Test Test";
    }

    function getNewString() external pure returns (string memory) {
        /**
         * 'emit' and 'console.log()' do not work when running with "npx hardhat run"
         */
        // emit LogString("In Test:", "test");
        // console.log("Test Test Test");

        return "Test Test NEW NEW Test Test Hey Hey";
    }

    function getNewString4() external pure returns (string memory) {
        /**
         * 'emit' and 'console.log()' do not work when running with "npx hardhat run"
         */
        // emit LogString("In Test:", "test");
        // console.log("Test Test Test");

        return "TeHey";
    }

    // Add error handling for the contract
    function getContractBalance() external view returns (uint256) {
        return address(this).balance;
    }
    
    // Add a way to verify the contract is properly initialized
    function getPoolAddress() external view returns (address) {
        return address(POOL);
    }
}