const TokenBalanceReader = artifacts.require("TokenBalanceReader");
const MockContract = artifacts.require("MockContract");

contract("TokenBalanceReader", (accounts) => {
  let tokenBalanceReader;
  let mockContract;

  const oneEth = web3.utils.toWei("1", "ether");

  beforeEach(async () => {
    tokenBalanceReader = await TokenBalanceReader.new();
    mockContract = await MockContract.new();

    assert(tokenBalanceReader.address !== null);

    const balance = await web3.eth.getBalance(accounts[0]);
    assert(balance > oneEth);

    await web3.eth.sendTransaction({
      from: accounts[0],
      to: tokenBalanceReader.address,
      value: oneEth,
    });
  });

  it("should get ETH balance", async () => {
    const [owner] = accounts;
    const ethAddress = "0x0000000000000000000000000000000000000000";

    const balances = await tokenBalanceReader.getBalances(owner, [ethAddress]);

    assert.equal(balances[0].toNumber(), await web3.eth.getBalance(owner));
  });

  it("should get ERC20 balance", async () => {
    await mockContract.mint(accounts[0], 100);

    const balances = await tokenBalanceReader.getBalances(accounts[0], [
      mockContract.address,
    ]);

    assert.equal(balances[0].toNumber(), 100);
  });
});

// const TokenBalanceReader = artifacts.require("TokenBalanceReader");
// const MockContract = artifacts.require("MetaCoin");

// const sinon = require('sinon');

// contract("TokenBalanceReader", (accounts) => {
//   let tokenReader;
//   let mockToken;

//   beforeEach(async () => {
//     // Deploy contracts first
//     mockToken = await MockContract.deployed();
//     tokenReader = await TokenBalanceReader.deployed();

//     sinon.stub(mockToken, "getBalance").returns(100);
//   });

//   it("should get token balances", async () => {
//     // Mint some mock tokens
//     // await mockToken.givenAnyCallRevertsWith(100);
//     // await mockToken.givenAnyCallRevertsWith(50);

//     // Get balances
//     const tokenAddresses = [mockToken.address];
//     const balances = await tokenReader.getBalances(accounts[0], tokenAddresses);

//     assert.equal(balances.length, 1);
//     assert.equal(balances[0], 100);
//   });
// });

// const { ethers } = require("ethers");

// const ADDR = "0x...";
// const ABI = [...];

// const ADDRESS = "0x...";
// const TOKENS = [
//   "0x...",
//   "0x..."
// ];

// const provider = ethers.providers.getDefaultProvider();

// const test = async () => {

//   const contract = new ethers.Contract(ADDR, ABI, provider);

//   const balances = await contract.getBalances(ADDRESS, TOKENS);

//   console.log(balances);

// };

// test();
