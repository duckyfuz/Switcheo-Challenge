# Task

Deploy a utility EVM contract with a function to retrieve all token balances given a wallet address and the token contract addresses.

How your contract will be tested:

`./test.js`

```jsx
const { ethers } = require("ethers");

const ADDR = "…";   // your contract address
const ABI = […];    // your contract ABI

const ADDRESS = "…"; // some wallet address with token balance
const TOKENS = [    // token contract addresses
	"…",
	"…",
];

// you can use your own RPC provider url (no need to deploy to mainnet)
const provider = ethers.providers.getDefaultProvider();

const test = async () => {
	const contract = new ethers.Contract(ADDR, ABI, provider);

  const balances = await contract.getBalances(ADDRESS, tokens);
	
	return balances;
};

test().then(console.log);
```

## Expected Output:

The output should be organized as one `token amount` per object. 

```js
[
  {
    token: "0x123d475e13aa54a43a7421d94caa4459da021c77",
    balance: "9988887462734227" // its okay if this is typed ethers.BigNumber
  },
  {
    token: "0x55f6823de9642f47e80ed4845a55aa8430cb4ec6",
    balance: "899998285714286"
  },
  …
]
```

<aside>
💡 **Hint**: You may need to use the NPM module [truffle](https://www.trufflesuite.com/docs/truffle/overview) or [hardhat](https://hardhat.org/) to complete this task.

</aside>

<aside>
⚠️ You can deploy your own token contracts on test networks to retrieve the balances from (mock the data), or you can use existing token contracts on either test or main networks, as long as you can deploy the balance reader contract on the same network.

</aside>