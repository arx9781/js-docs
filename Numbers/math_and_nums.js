// =============== NUMBERS ===============

const score = 400;
console.log(score); // 400

const scoreImplicit = new Number(800);
console.log(scoreImplicit); // [Number: 800]

const decimalNum = 119.1873;
console.log(decimalNum.toFixed(2)); // 119.18
console.log(decimalNum.toPrecision(5)); // 119.9

const centilion = 1000000;
console.log(centilion.toLocaleString()); // 1,000,000 (default US)
console.log(centilion.toLocaleString("en-IN")); // 10,00,000 (Indian)

// =============== MATHS ===============

console.log(Math.PI); // 3.141592653589793 (duh)
console.log(Math.abs(-5)); // 5 (returns absolute value (converts negative into positive))
console.log(Math.round(6.9)); // 7 (rounds to the nearest integer)
console.log(Math.floor(6.9)); // 6 (rounds to the lower integer)
console.log(Math.ceil(6.9)); // 7 (rounds to the larger integer)
// ++++++++++++++++++++++++++++++
console.log(Math.min(4, 7, 2, 6, 9, 1)); // 1 (returns min value)
console.log(Math.max(4, 7, 2, 6, 9, 1)); // 9 (returns max value)
// ++++++++++++++++++++++++++++++ MOST USED
console.log(Math.random()); // returns a number between 0 and 1
console.log(Math.random() * 100); // will return a number between 0 and 100
console.log(Math.random() * 100 + 1); // will return a number between 1 and 100
console.log(Math.floor(Math.random() * 100 + 1)); // will return a number between 1 and 100 and rounds down to a single digit

const min = 10;
const max = 19;
console.log(Math.floor(Math.random() * (max - min + 1)) + min);
/* generating a random number and multiplying it by max - min to get a range to multiply the random number with
and adding +1 to not get a 0. then adding a minimum value to make sure we atleast get that much and wrapping
it in math.floor to get a single digit  */
