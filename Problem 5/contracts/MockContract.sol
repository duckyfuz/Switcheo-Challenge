// SPDX-License-Identifier: MIT
pragma solidity ^0.8.13;

import "@openzeppelin/contracts/token/ERC20/ERC20.sol";

contract MockContract is ERC20 {

    constructor() ERC20("MockContract", "MCK") {
        _mint(msg.sender, 1000000 * (10 ** decimals()));
    }

}