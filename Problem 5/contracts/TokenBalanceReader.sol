// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

interface IERC20 {
  function balanceOf(address account) external view returns (uint256);
}

contract TokenBalanceReader {

  function getBalances(address wallet, address[] calldata tokenContracts) external view returns (uint256[] memory) {
    uint256[] memory balances = new uint256[](tokenContracts.length);

    for(uint i = 0; i < tokenContracts.length; i++) {
      IERC20 token = IERC20(tokenContracts[i]);
      balances[i] = token.balanceOf(wallet); 
    }

    return balances;
  }

}