// =============== FUNCTIONS  ===============

function addTwoNums(value1 = 0, value2 = 0) {
  return value1 + value2;
}
const result = addTwoNums(4, 9); // can store the result of a function in a variable
console.log(result);

function greet(username) {
  if (!username) {
    return `username cannot be empty`;
  }
  return `hello ${username}`;
}
const printMessage = greet("aditya");
console.log(printMessage);
// ++++++++++++++++++++++++++++++
function calculateCartPrice(...orders) {
  // rest operator for passing an unknown number of params, returns an array
  return orders;
}
const orders = calculateCartPrice(199, 420, 799);
for (let order of orders) {
  // for of loop to go through the array and print the values
  console.log(order);
}
// ++++++++++++++++++++++++++++++
const user = {
  name: "adi",
  age: 20,
};
function displayUser(anyobject) {
  return anyobject.name;
}
console.log(displayUser(user)); // premade object

function displayUser1(anyobject) {
  return anyobject.age;
}
console.log(
  displayUser1({
    // creating the object inside the function call
    name: "jane",
    age: 27,
  })
);

// =============== IIFE  ===============
(function () {
  console.log("hello world");
})();
// IIFE stands for Immediately Invoked Function Expression
// the function is executed as soon as it is defined
// the function is not executed until it is called
// the function is not stored in memory
// the function is not accessible outside the scope
