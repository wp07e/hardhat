// SPDX-License-Identifier: MIT
pragma solidity >= 0.4.21 < 0.9.0;

import "../../contracts/ArbitrageBot.sol";

contract DbgEntry {
    // --------------------------------------------- To fake fund wallet and move block
    event EvmSetBalance(address, uint256);
    event EvmSetBlockTimestamp(uint256 newTimeStamp);
    event EvmPrint(string);
    event EvmPrint(address);
    event EvmPrint(uint256);
    // ----------------------------------------------

    address pool = 0x2f39d218133AFaB8F2B819B1066c7E434Ad94E9e;
    constructor() {
        emit EvmPrint("DbgEntry.constructor");

        // ----------- START CODE ----------------
        emit EvmSetBalance(address(this), 1000);
        ArbitrageBot bot = new ArbitrageBot(pool);

        emit EvmSetBlockTimestamp(block.timestamp + 101);

        emit EvmPrint("Balance before:");
        emit EvmPrint(address(this).balance);

        bot.getNewString();

        emit EvmPrint("Balance after:");
        emit EvmPrint(address(this).balance);
        
        // ----------- END ----------------

        emit EvmPrint("DbgEntry return");
    }
}