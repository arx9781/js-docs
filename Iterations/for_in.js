//  =============== FOR IN ===============
// mainly used for objects

const programmingLanguages = {
  js: "Javascript",
  py: "Python",
  java: "Java",
  hs: "Haskell",
};

for (const language in programmingLanguages) {
  // console.log(language); // prints out all keys
  // console.log(programmingLanguages[language]); // prints out all key value pairs
  console.log(
    `${language} is the file extension for ${programmingLanguages[language]}`
  );
}

// +++++++++++++++++++++++++++++++++++++

const cars = ["Dodge Charger", "Toyota Camry", "Ford Focus"];

for (const car in cars) {
  console.log(cars[car]); // prints out all values
}
