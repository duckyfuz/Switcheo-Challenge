# Problem 1

Completed in `./'Problem 1'`

# Problem 2

Completed with `create-react-app` in `./'Problem 2'`   
Utilised MUI library.

# Problem 3

Completed with in `./'Problem 3'/datasource.js`

# Problem 4

Completed in `./'Problem 4'/retrieve-holders.ts`   
Utilised ethers library.

# Problem 5

Completed in `./'Problem 5'/contracts/TokenBalanceReader.sol`
However, when trying to return an array of hashmaps in the contract, I constantly encountered the following error:
```
Types containing (nested) mappings can only be parameters or return variables of internal or library functions.
```
Hence, I created a slight workaround in `./'Problem 5'/test.js` such that the return value of the console logged value from the JS file would be in the required format:
```json
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
   
# Problem 7

Completed in `./'Problem 7'/solution.md`

```
WITH balances_with_usd AS (
  SELECT
    b.address,
    SUM(
      CASE b.denom
        WHEN 'usdc' THEN b.amount / 1000000
        WHEN 'swth' THEN b.amount / 200000000
        WHEN 'tmz' THEN b.amount * 0.003
      END
    ) AS total_usd
  FROM balances b
  GROUP BY b.address
),

recent_trades AS (
  SELECT DISTINCT address
  FROM trades
  WHERE block_height > 730000
)

SELECT r.address
FROM recent_trades r
JOIN balances_with_usd b
  ON b.address = r.address
GROUP BY r.address
HAVING SUM(b.total_usd) >= 500;
```
