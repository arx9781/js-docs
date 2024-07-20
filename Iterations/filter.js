//  =============== FILTER ===============
// returns a new array

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const newNumbers = numbers.filter((num) => num > 4); // single line filter hence no need for return statement
console.log(newNumbers);

const evenNumbers = numbers.filter((num) => num % 2 === 0); // filter out odd numbers
console.log(evenNumbers);

const oddNumbers = numbers.filter((num) => {
  // filter out even numbers
  return num % 2 !== 0; // inside the brace, a scope is created thats why we need to use return
});
console.log(oddNumbers);

// +++++++++++++++++++++++++++++++++++++

const books = [
  {
    title: "The Great Gatsby",
    author: "F. Scott Fitzgerald",
    year: 1925,
    genre: "Fiction",
  },
  {
    title: "To Kill a Mockingbird",
    author: "Harper Lee",
    year: 1960,
    genre: "Dilemma",
  },
  {
    title: "1984",
    author: "George Orwell",
    year: 1949,
    genre: "Biography",
  },
  {
    title: "Pride and Prejudice",
    author: "Jane Austen",
    year: 1813,
    genre: "Dilemma",
  },
];

const booksFilteredByYear = books.filter((book) => book.year > 1900); // filter out books published before 1900
console.log(booksFilteredByYear);

const booksFilteredByGenre = books.filter((book) => book.genre === "Dilemma"); // filter out non-dilemma books
console.log(booksFilteredByGenre);

const booksFilteredByYearAndGenre = books.filter(
  (book) => book.year > 1900 && book.genre === "Fiction" // implicit return
); // filter out non-fiction books published before 1900
console.log(booksFilteredByYearAndGenre);
