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
