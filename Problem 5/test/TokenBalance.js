const TokenBalanceReader = artifacts.require("TokenBalanceReader");
const MyToken = artifacts.require("MyToken");

contract("TokenBalanceReader", (accounts) => {
  it("should get token balances", async () => {
    const token = await MyToken.new();
    const contract = await TokenBalanceReader.new();

    // Mint some tokens
    await token.mint(accounts[0], 100);

    // Get balance
    let balance = await contract.getTokenBalances(accounts[0], [token.address]);

    console.log(balance.toString());
    assert.equal(balance.toString(), "100");
  });
});
