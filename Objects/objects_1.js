// =============== OBJECT LITERALS ===============
const user = {
  name: "arcen",
  "full name": "arcen site",
  age: 20,
  email: "legitemail@gmail.com",
  location: "Mumbai",
  logInDays: ["Sunday", " Tuesday"],
  isStudent: true,
};
console.log(user["full name"]); // use this over dot notation
console.log(user["location"]);
// ++++++++++++++++++++++++++++++
const sym1 = Symbol("hello"); // creating a symbol
const user2 = {
  name: "user",
  [sym1]: "hello1", // adding a symbol in object
};
console.log(user2[sym1]);

Object.freeze(user2); // cant change anything in object after this
user2.name = "user changed name";
console.log(user2);
// ++++++++++++++++++++++++++++++
user.greeting = function () {
  console.log("hello user");
};
console.log(user.greeting());

user.greetingTwo = function () {
  console.log(`Hello ${this.name}`);
};
console.log(user.greetingTwo());
