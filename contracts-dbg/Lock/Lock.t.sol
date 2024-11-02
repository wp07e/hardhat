// SPDX-License-Identifier: MIT
pragma solidity >= 0.4.21 < 0.9.0;

import "../../contracts/Lock.sol";

contract DbgEntry {

    // --------------------------------------------- To fake fund wallet and move block
    event EvmSetBalance(address, uint256);
    event EvmSetBlockTimestamp(uint256 newTimeStamp);
    event EvmPrint(string);
    event EvmPrint(address);
    event EvmPrint(uint256);
    // ----------------------------------------------
    constructor() {
        emit EvmPrint("DbgEntry.constructor");

        // ----------- START CODE ----------------
        emit EvmSetBalance(address(this), 1000);
        Lock lock = new Lock{value: 100}(block.timestamp + 100);

        emit EvmSetBlockTimestamp(block.timestamp + 101);

        emit EvmPrint("Balance before:");
        emit EvmPrint(address(this).balance);

        lock.withdraw();

        emit EvmPrint("Balance after:");
        emit EvmPrint(address(this).balance);
        
        // ----------- END ----------------
        emit EvmPrint("DbgEntry return");
    }
}