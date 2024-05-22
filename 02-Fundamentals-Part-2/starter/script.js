"use strict";

// let hasDriversLicense = false;
// const passTest = true;

// if (passTest) hasDriversLicense = true;
// if (hasDriversLicense) console.log(`I can drive.`);

// const interface = "Audio";
// const private = 1234;

// ----- 32.Functions -----
// calling / running / invoking funktions

// let juice;

// function fruitProcessor(apples, oranges) {
//   //   console.log(apples, oranges);
//   const juice = `Juice with ${apples} apples and ${oranges} oranges`;
//   return juice;
// }

// const freshJuice = fruitProcessor(5, 3);
// console.log(freshJuice);
// // console.log(juice);

// ----- 33.Function Declarations vs. Expressions -----
/* // Function Declaration
function calcAge1(birthYear) {
  return 2040 - birthYear;
}

const age1 = calcAge1(2000);
console.log(age1);

//Function Expression
const calcAge2 = function (birthYear) {
  return 2037 - birthYear;
};

const age = calcAge2(2000);
console.log(age);
 */

// ----- 35. Arrow Functions -----

const calcAge3 = (birthYear) => 2037 - birthYear;
const age3 = calcAge3(2000);
console.log(age3);

const yearsUntilRetirement = (birthYear, firstName) => {
  const age = 2027 - birthYear;
  const retirement = 67 - age;
  return `${firstName} retires in ${retirement} years.`;
};

console.log(yearsUntilRetirement(2000, "Zorana"));
