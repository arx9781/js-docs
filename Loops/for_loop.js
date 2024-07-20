// =============== FOR LOOP  ===============

// for loop is used to iterate over a block of code
for (let i = 1; i <= 10; i++) {
  const element = i;
  console.log(element);
}
// break the loop if a condition is met
for (let i = 1; i <= 10; i++) {
  const element = i;
  if (element === 5) {
    console.log(`5 is found, breaking the loop`);
    break;
  }
  console.log(element);
}

for (let i = 1; i <= 10; i++) {
  const element = i;
  if (element === 5) {
    console.log(`5 is found, continuing the loop`);
    continue; // skip the rest of the code in the loop
  }
  console.log(element);
}
