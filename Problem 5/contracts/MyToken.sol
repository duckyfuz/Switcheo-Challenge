//SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

import "@openzeppelin/contracts/token/ERC20/ERC20.sol";

contract MyToken is ERC20 {

    address public creator;

  constructor() ERC20("MyToken", "MTK") {
    // creator = msg.sender; 
    // Mint tokens on deploy
    // _mint(msg.sender, 10000 * 10 ** decimals()); 
  }

  function mint(address account, uint256 amount) public {
    // Only allow the contract creator to mint more tokens 
    // require(msg.sender == creator, "Only creator can mint");
    _mint(account, amount);
  }
}