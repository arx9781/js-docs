// =============== Conditional Flow ===============

// if-else statement
if (true) {
  // code to be executed if the condition is true
} else {
  // code to be executed if the condition is false
}

const isSignedIn = true;

if (isSignedIn) {
  console.log("User is signed in");
} else {
  console.log("User is not signed in");
}
// +++++++++++++++++++++++++++

// elif statement
const temperature = 25;

if (temperature < 0) {
  console.log("It's freezing");
} else if (temperature < 10) {
  // will enter this block if the condition is false
  console.log("It's cold");
} else if (temperature < 20) {
  console.log("It's cool");
} else {
  console.log("It's hot");
}

// nested if-else statements
const age = 18;
const hasVoterId = true;
const citizenship = "Indian";

if (age >= 18) {
  if (hasVoterId) {
    if (citizenship === "Indian") {
      console.log("You are eligible to vote");
    } else {
      console.log("You are not eligible to vote");
    }
  } else {
    console.log("You do not have a voter ID");
  }
}

// +++++++++++++++++++++++++++

// switch statement
const month = "April";

switch (month) {
  case "January":
    console.log("It's January");
    break;
  case "February":
    console.log("It's February");
    break;
  case "March":
    console.log("It's March");
    break;
  case "April":
    console.log("It's April");
    break;
  case "May":
    console.log("It's May");
    break;
  case "June":
    console.log("It's June");
    break;
  case "July":
    console.log("It's July");
    break;
  case "August":
    console.log("It's August");
    break;
  case "September":
    console.log("It's September");
    break;
  case "October":
    console.log("It's October");
    break;
  case "November":
    console.log("It's November");
    break;
  case "December":
    console.log("It's December");
    break;
  default:
    console.log("Invalid month");
    break;
}

// =============== TERNARY OPERATOR ===============

const drivingAge = 18;
const hasLicense = true;

console.log(
  drivingAge >= 18
    ? hasLicense
      ? "You are eligible to drive"
      : "You are not eligible to drive"
    : "You do not have a license"
);

// +++++++++++++++++++++++++++
// null coalescing operator

const name = null;
const isStudent = true;

console.log(name ?? "Anonymous"); // will print "Anonymous"
console.log(age ?? isStudent); // will print true
