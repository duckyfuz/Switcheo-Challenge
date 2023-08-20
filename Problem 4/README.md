<aside>
⏰ Duration: You should not spend more than **8 hours** on this problem.
*Time estimation is for internship roles, if you are a software professional you should spend significantly less time.*

</aside>

<aside>
⚠️ **TypeScript Only** - you are to complete this problem using TypeScript.

</aside>

# Task

Implement a script to retrieve the specified holders of [$SWTH token](https://bscscan.com/token/0x250b211ee44459dad5cd3bca803dd6a7ecb5d46c) on the [Binance Smart Chain](https://coinmarketcap.com/alexandria/article/what-is-binance-smart-chain) network.

BSC Block Explorer: https://bscscan.com/

$SWTH Token Contract: `0xc0ecb8499d8da2771abcbf4091db7f65158f1468`

Addresses to look up:

```json
0xb5d4f343412dc8efb6ff599d790074d0f1e8d430
0x0020c5222a24e4a96b720c06b803fb8d34adc0af
0xd1d8b2aae2ebb2acf013b803bc3c24ca1303a392
```

How your script will be tested:

```bash
ts-node ./retrieve-holders.ts
```

<aside>
⚠️ Using [api.bscscan.com](http://api.bscscan.com) uses a third party API service to retrieve the result, and is not considered a valid solution because it does not directly interact with the chain.

</aside>

## Expected Output:

The output should be organized as one `address amount` per line. 

`amount` should be formatted to the correct number of decimal places

*Note, **a**s this is live production contract, the amount you retrieve will be different from the sample below.*

```
0xb5d4f343412dc8efb6ff599d790074d0f1e8d430 99,888,874.62734227
0x0020c5222a24e4a96b720c06b803fb8d34adc0af 7,970,573.69197209
0xd1d8b2aae2ebb2acf013b803bc3c24ca1303a392 2,894,918.96152958
…
```

<aside>
💡 **Hint**: You may need to use the NPM module [ethers.js](https://docs.ethers.io/v5/) to complete this task.

</aside>