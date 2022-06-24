//truncating strings
const greet1 = "Welcome";
console.log(greet1.slice(0, 4));
const greet2 = "Hello, World!";
console.log(greet2.slice(0, 6));
const warning = "Disaster";
console.log(warning.slice(0, 1));

//Char Builder
const person = "Mark";
const car = "Jeep";
const animal = "Leopard";
const city = "Townsville";
const game = "Cards";
const water = "Flows";
const clean = "Shower";
const mood = "Frown";
const charBuilt =
  person[0] +
  car[2] +
  animal[0] +
  city[0] +
  game[3] +
  water[2] +
  clean[3] +
  mood[4];
console.log(charBuilt);

//Sting within String
const str1 = "I must be a web developer before the end of the year";
const str2 = "web developer";
const str3 = "It is possible";
const str4 = "failure";
console.log(str1.includes(str2));
console.log(str3.includes(str4));
