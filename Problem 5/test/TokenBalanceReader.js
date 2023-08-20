const TokenBalanceReader = artifacts.require("TokenBalanceReader");
const MockContract = artifacts.require("MetaCoin");

const sinon = require('sinon');

contract("TokenBalanceReader", (accounts) => {
  let tokenReader;
  let mockToken;

  beforeEach(async () => {
    // Deploy contracts first
    mockToken = await MockContract.deployed();
    tokenReader = await TokenBalanceReader.deployed();

    sinon.stub(mockToken, "getBalance").returns(100);
  });

  it("should get token balances", async () => {
    // Mint some mock tokens
    // await mockToken.givenAnyCallRevertsWith(100);
    // await mockToken.givenAnyCallRevertsWith(50);

    // Get balances
    const tokenAddresses = [mockToken.address];
    const balances = await tokenReader.getBalances(accounts[0], tokenAddresses);

    assert.equal(balances.length, 1);
    assert.equal(balances[0], 100);
  });
});
