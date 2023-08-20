class Datasource {
  async getPrices() {
    // Fetch response promise
    const response = await fetch("https://interview.switcheo.com/test.json");
    const data = await response.json();

    // Return an array with each buy&sell hash table
    return data.data.prices.map((price) => {
      return {
        pair: price.pair,
        mid: price.buy + price.sell / 2 / 100,
        quote: price.pair.slice(-3),
      };
    });
  }
}

const ds = new Datasource();

// JS Implementation
ds.getPrices()
  .then((prices) => {
    prices.forEach((price) => {
      console.log(
        `Mid price for ${price.pair} is ${price.mid} ${price.quote}.`
      );
    });
  })
  .catch((error) => {
    console.error(error);
  });
