// =============== ARRAY ALT PROPERTIES ===============

const marvel = ["Captain America", "Spiderman", "Thor"];
const dc = ["Superman", "Batman", "Flash"];
const superHeroes = [...dc, ...marvel]; // spread operator spreads the elements of both the array into a new array
console.log(superHeroes);
// ++++++++++++++++++++++++++++++
const depthArray = [1, 2, [3, 4, [5, 6, [7, 8]]], 9];
const flatArray = depthArray.flat(Infinity); // flattens the array depth
console.log(flatArray); // [1, 2, 3, 4, 5, 6, 7, 8, 9]
// ++++++++++++++++++++++++++++++
console.log(Array.from("Mage")); // can pass anything and it'll turn into an array

let score1 = 100;
let score2 = 200;
let score3 = 300;
console.log(Array.of(score1, score2, score3)); // returns an array of the elements
