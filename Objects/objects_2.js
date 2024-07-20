// =============== SINGLETON OBJECT  ===============
const carCompany = new Object();
// ++++++++++++++++++++++++++++++
const user = {
  username: {
    firstname: "John",
    lastname: "Doe",
  },
  location: {
    country: "USA",
    state: {
      name: "California",
      abbreviation: "CA",
      city: {
        name: "San Francisco",
        abbreviation: "SF",
        county: {
          name: "San Francisco County",
          abbreviation: "SFC",
        },
      },
    },
  },
  isLoggedIn: true,
};
console.log(user.location.state.city); // object chaining
// ++++++++++++++++++++++++++++++
const obj1 = {
  name: "jane",
  age: 27,
};
const obj2 = {
  place: "london",
  position: "front-end",
};
const obj3 = { ...obj1, ...obj2 }; // combine 2 objects using spread operator
console.log(obj3);

// =============== ARRAY OF OBJECTS  ===============

const databaseFormat = [
  {
    id: 1,
    email: "test@gmail.com",
  },
  {
    id: 2,
    email: "example@hotmail.com",
  },
];
console.log(databaseFormat[0].email); // accessing object inside the array
// ++++++++++++++++++++++++++++++
const instagramUser = {
  name: "adi",
  age: 20,
  premium: false,
};
console.log(Object.keys(instagramUser)); // accessing key of an object
console.log(Object.values(instagramUser)); // accessing value of an object

console.log(instagramUser.hasOwnProperty("isLogged")); // returns a boolean

// =============== OBJECT DESTRUCTURING  ===============

const manga = {
  title: "Berserk",
  author: "Kentaro Miura",
  volume: 17,
};

// manga.author // fine but theres a better way

const { author: aut } = manga; // reuseable
console.log(author);
console.log(aut); // shorten the key
