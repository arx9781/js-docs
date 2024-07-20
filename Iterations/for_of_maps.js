//  =============== FOR OF ===============
// mainly used for arrays and strings

const dcHeroes = ["superman", "batman", "flash"];

for (const dcHero of dcHeroes) {
  console.log(dcHero);
}

const greetings = "hello world!";

for (const letter of greetings) {
  console.log(letter);
  if (letter === " ") {
    console.log(`found space, exiting`); // will exit now because of space
    break;
  }
}

const user = {
  name: "John",
  age: 30,
  job: "developer",
};

for (const key of user) {
  console.log(key); // wont work because user is not iterable
}

//  =============== MAPS ===============

// map is a collection of key value pairs, where each key and value is unique. it is non iterable
const map = new Map();
map.set("IN", "India");
map.set("USA", "United States of America");
map.set("CN", "China");
map.set("RU", "Russia");

for (const [key, value] of map) {
  // passing both key and value
  // console.log(map) // prints the map object
  // console.log(key); // prints out all keys
  console.log(key, value); // prints out all key value pairs
}
