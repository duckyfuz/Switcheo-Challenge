// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

import "@openzeppelin/contracts/token/ERC20/IERC20.sol";
import "@openzeppelin/contracts/utils/Strings.sol";

contract TokenBalanceReader {

  struct TokenBalance {
    address token;
    uint256 balance;
  }

  constructor() {}

  function getTokenBalances(address wallet, address[] calldata tokens) external view returns (TokenBalance[] memory) {
    
    TokenBalance[] memory balances = new TokenBalance[](tokens.length);

    for(uint i = 0; i < tokens.length; i++) {
      IERC20 token = IERC20(tokens[i]);
      balances[i] = TokenBalance(tokens[i], token.balanceOf(wallet));
    }

    return balances;
  }

}


// contract TokenBalanceReader {

//   function getTokenBalances(address wallet, address[] calldata tokens) external view returns (mapping(address => uint256)[] memory) {

//     mapping(address => uint256)[] memory balances = new mapping(address => uint256)[](tokens.length);

//     for(uint i = 0; i < tokens.length; i++) {
//       address token = tokens[i];
//       uint256 balance = IERC20(token).balanceOf(wallet);

//       balances[i][token] = balance; 
//     }

//     return balances;
//   }

// }

