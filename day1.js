//Day 1
//Part 1
const paintColor = "blue";
const make = "Toyota";
const model = "Yaris";
const year = "2009";
const isManualTransmission = true;
const seats = 5;
const mileage = 20000;
const isElectric = true;
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
const str = "I will be a web developer by the end of the year";
const newStr = str.split("");
console.log(newStr.reverse().join(""));
