var sum_to_n_a = function (n) {
  // Using for loop
  let x = 0;
  for (let i = 0; i < n; i++) {
    x = x + i + 1;
  }
  return x;
};

var sum_to_n_b = function (n) {
  // With recursion
  if (n === 0) {
    return n;
  }
  return sum_to_n_b(n - 1) + n;
};

var sum_to_n_c = function (n) {
  // Using while loop
  let x = n;
  let res = 0;
  while (x !== 0) {
    res = res + x;
    x = x - 1;
  }
  return res;
};

const n = 8;
let x = sum_to_n_a(n);
console.log(`Solution A: ${x}`);
x = sum_to_n_b(n);
console.log(`Solution B: ${x}`);
x = sum_to_n_c(n);
console.log(`Solution C: ${x}`);
