const { ethers } = require("ethers");

const ADDR = "0xccc6988eD5d88e2480B50e9df9d56c4b869Cc6f4"; // your contract address
const ABI = require("./build/contracts/TokenBalanceReader.json"); // your contract ABI

const ADDRESS = "0xf2505c260895a81ccb8915acd96a6aa26d2f19e4"; // some wallet address with token balance
const TOKENS = [
  // token contract addresses
  "0x4Bd0d5b4d453d7E0C80255FE5578CdE228870eE9",
  "0xaBF4F1C9d6c6641dB5B08b483eb2243055089Dc1",
];

const provider = new ethers.JsonRpcProvider("http://localhost:9545");

const contract = new ethers.Contract(ADDR, ABI.abi, provider);

const test = async () => {
  const balances = await contract.getTokenBalances(ADDRESS, TOKENS);

  // Return the values as specified, not sure if exactly correct.
  res = [];
  for (const i in balances) {
    res.push({
      token: balances[i][0],
      balance: balances[i][1],
    });
    console.log(balances[i][0]);
  }

  return res;
};

test().then(console.log);
