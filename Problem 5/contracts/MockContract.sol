// SPDX-License-Identifier: MIT
pragma solidity ^0.8.13;

contract MockContract {

  uint public totalSupply;

  constructor() {
    totalSupply = 1000000; 
  }

  function transfer(address to, uint amount) external {
    // Fake transfer
  }

  function balanceOf(address) view external returns (uint) {
    return totalSupply;
  }

}