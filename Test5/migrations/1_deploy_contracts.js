const TokenBalanceReader = artifacts.require("TokenBalanceReader");
const MyToken = artifacts.require("MyToken");

module.exports = function (deployer) {
  deployer.deploy(TokenBalanceReader);
  deployer.deploy(MyToken);
};
