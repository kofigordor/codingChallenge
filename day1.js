//Day 1
//Part 1
const paintColor = "blue";
const make = "Toyota";
const model = "Corrola";
const year = "2009";
const isManualTransmission = "true";
const seats = 5;
const mileage = 20000;
const isElectric = "true";
const drivePosition = "left-hand";

console.log(
  paintColor,
  make,
  model,
  year,
  isManualTransmission,
  seats,
  mileage,
  isElectric,
  drivePosition
);

//Part 2
//The string was converted to a loop by using the split function.
//The empty string at the end of the split fuction split("") separated the individual letters.
//The individual loop elements were then reversed using the REVERSE Function reverse().
//The letters were then joined to words by using the JOIN function join("")
const str = "I will be a web developer by the end of the year";
const newStr = str.split("");
console.log(newStr.reverse().join(""));
