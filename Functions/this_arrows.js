// =============== THIS KEYWORD ===============

const user = {
  name: "aditya",
  age: 20,
  greetMessage: function () {
    console.log(`${this.name}, welcome to the website`); // this refers the block context
  },
};
user.greetMessage(); // adi
user.name = "jane";
user.greetMessage(); // jane // now the context for the name key has changed

// =============== ARROW FUNCTION  ===============

const addNum = (num1, num2) => {
  return num1 + num2; // basic arrow function // explicit return (putting the return keyword)
};

const addNum1 = (num1, num2) => num1 + num2; // implicit return arrow fucntion // only for the statement in the same line

const displayName = () => ({ username: "aditya" }); // returning object inside the parentheses
console.log(displayName());
