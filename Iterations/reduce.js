// =============== REDUCE ===============

// reduce() is a higher order function
// that takes a function as an argument
// and returns a function
// that takes an array as an argument
// and returns a single value

const myNums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const sum = myNums.reduce((acc, curr) => {
  // console.log(`acc: ${acc}, curr: ${curr}`);
  // return the sum of the current value and the accumulator
  // starting with the accumulator being 0 (the initial value)

  // return `culmination ${acc} + ${curr}`
  return acc + curr;
}, 0);

// +++++++++++++++++++++++++++++++++++++

const smartphones = [
  {
    model: "iPhone 15 Pro Max",
    price: 129000,
  },
  {
    model: "Galaxy S24 Ultra",
    price: 109000,
  },
  {
    model: "Sony Xperia 1 Mk V",
    price: 140000,
  },
  {
    model: "Motorola Razr+",
    price: 90000,
  },
];

const price = smartphones.reduce((acc, currItem) => {
  return acc + Number(currItem.price);
}, 0);
console.log(`The total price of the smartphones is ₹${price}`);
