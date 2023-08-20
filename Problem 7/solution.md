'''
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