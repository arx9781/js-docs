// =============== DOM ===============

// =============== GETTING ELEMENTS ===============
// getElementById method to get an element by its id
// querySelector method to get an element by its css selector
// querySelectorAll method to get all the elements that match a css selector
// the above methods return a NodeList, which is a list of elements. To get the first element, we can use the [0] index

// getElementByClassName return an HTMLCollection of all elements with a given class name, cant loop over it. To loop over it, have to convert it to an array first by using

const par = document.getElementsByClassName("par");
const parArray = Array.from(par);
parArray.forEach((elem) => {
  elem.style.color = "skyblue";
});

const primaryHeading = document.querySelector("h1");
primaryHeading.style.fontFamily = "Arial";
primaryHeading.style.backgroundColor = "orange";
primaryHeading.style.color = "black";

const secondaryHeading = document.querySelectorAll("h2");
secondaryHeading.forEach((elem) => {
  return (elem.style.fontFamily = "Arial"), (elem.style.color = "#717c7e");
});

const paragraphs = document.querySelectorAll("p");
paragraphs.forEach((elem) => {
  return (elem.textContent =
    "a quick brown fox jumps over the lazy dog and a cute brown cat leaps over the barbed fence how cool");
});
