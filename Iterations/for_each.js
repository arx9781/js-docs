//  =============== FOR EACH ===============
// does not return anything

const marvelHeroes = ["Spider-Man", "Iron Man", "Hulk"];
// takes in a callback function
// higher order function
marvelHeroes.forEach((elem, index, array) => {
  // parameter can be called anything. also takes index and array as parameters
  // console.log(elem, index, array); // prints out all values
  console.log(elem);
});

// declaring a function outside

const messages = ["hello", "world", "how are you"];

function printMessage(message) {
  console.log(message);
}

messages.forEach(printMessage); // passing the function reference and not invoking it

// +++++++++++++++++++++++++++++++++++++

// a common use case is to iterate over an array of objects
const countryAndCapital = [
  {
    country: "India",
    capital: "New Delhi",
  },
  {
    country: "USA",
    capital: "Washington DC",
  },
  {
    country: "China",
    capital: "Beijing",
  },
];

countryAndCapital.forEach((elem) => {
  console.log(`${elem.capital} is the capital of ${elem.country}`);
});
