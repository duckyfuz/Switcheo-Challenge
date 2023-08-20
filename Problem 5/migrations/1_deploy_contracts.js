const ConvertLib = artifacts.require("ConvertLib");
const MetaCoin = artifacts.require("MetaCoin");
const TokenBalanceReader = artifacts.require("TokenBalanceReader");
const MockContract = artifacts.require("MockContract");

module.exports = function (deployer) {
  deployer.deploy(ConvertLib);
  deployer.link(ConvertLib, MetaCoin);
  deployer.deploy(MetaCoin);
  deployer.deploy(TokenBalanceReader);
  deployer.deploy(MockContract);
};
