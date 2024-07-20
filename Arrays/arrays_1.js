// =============== ARRAY METHODS ===============

let carBrands = ["Audi", "BMW", "Mercedes", "Lamborghini", "Kia"];
carBrands.push("Toyota", "BYD"); // adds new elements at the end of the array
carBrands.pop(); // removes the last element from the array
carBrands.unshift("Lotus", "Ferrari"); // adds element to the beginning of the array
carBrands.shift(); // removes the first element from the array
// ++++++++++++++++++++++++++++++
carBrands.includes("Audi"); // true (case-sensitive)
carBrands.indexOf("Mercedes"); // 2
carBrands.indexOf("Tata"); // -1 if the element does not exist
// ++++++++++++++++++++++++++++++
let newArr = carBrands.slice(2, 4);
// creates a new array and does not change the original one, returns the elements between the specified indices but not last
console.log(newArr); // ["BMW", "Mercedes"]

carBrands.splice(1, 3, "Dodge");
// alters the original array by adding or removing elements from it. start index, number of elements to remove and add new (optional)
console.log(carBrands); // ["Ferrai", "Dodge", "Lamborghini", "Kia", "Toyota"]

/* or (let carBrand of carBrands) {
  console.log(carBrand);
}
 */
