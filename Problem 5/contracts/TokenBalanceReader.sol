//SPDX-License-Identifier: MIT
pragma solidity ^0.8.13;

import "@openzeppelin/contracts/token/ERC20/IERC20.sol";

contract BalanceReader {

  function getBalances(address _account, address[] memory _tokens) public view returns (uint256[] memory) {
    uint256[] memory balances = new uint256[](_tokens.length);

    for (uint i = 0; i < _tokens.length; i++) {
      balances[i] = IERC20(_tokens[i]).balanceOf(_account); 
    }

    return balances;
  }

}