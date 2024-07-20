//  =============== MAP METHOD ===============

// better than forEach because it returns a new array
// returns a new array
// map method is a higher order function
// takes in a callback function
// callback function takes in 3 parameters
// first parameter is the current element
// second parameter is the index of the current element
// third parameter is the array

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const newNumbers = numbers.map((num) => num * 2); // single line map hence no need for return statement
// console.log(newNumbers);

//  =============== METHOD CHAIN ===============

const baseNumbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const modifiedNumbers = baseNumbers
  .map((num) => num * 10)
  .map((num) => num * 2)
  .filter((num) => num > 100)
  .filter((num) => num % 60 === 0);
console.log(modifiedNumbers);
