// Remember, we're gonna use strict mode in all scripts now!
"use strict";

//–––––––– 59. Using Google, MDN, stackoverflow etc.
// PROBLEM 1:
// We work for a company building a smart home thermometer. Our most recent task is this: "Given an array of temperatures of one day, calculate the temperature amplitude. Keep in mind that sometimes there might be a sensor error."

// const temperatures = [3, -2, -6, -1, "error", 9, 13, 17, 15, 14, 9, 5];

// 1) Understanding the problem
// - What is temp amplitude? Answer: difference between highest and lowest temp
// - How to compute max and min temperatures?
// - What's a sensor error? And what do do?

// 2) Breaking up into sub-problems
// - How to ignore errors?
// - Find max value in temp array
// - Find min value in temp array
// - Subtract min from max (amplitude) and return it

// const calcTempAmplitude = function (temps) {
//   let min = temps[0];
//   let max = temps[0];

//   for (let i = 0; i < temps.length; i++) {
//     if (typeof temps[i] !== "number") continue;

//     let currentTemp = temps[i];
//     if (currentTemp > max) max = currentTemp;
//     if (currentTemp < min) min = currentTemp;
//   }
//   console.log(min, max);
//   console.log(max - min);
// };

// calcTempAmplitude(temperatures);

//–––––––– 62 Code Challenge.
/*
    Given an array of forecasted maximum temperatures, the thermometer displays a string with these temperatures.

    Example: [17, 21, 23] will print "... 17ºC in 1 days ... 21ºC in 2 days ... 23ºC in 3 days ..."

    Create a function 'printForecast' which takes in an array 'arr' and logs a string like the above to the console.

    Use the problem-solving framework: Understand the problem and break it up into sub-problems!

    TEST DATA 1: [17, 21, 23]
    TEST DATA 2: [12, 5, -5, 0, 4]
*/
/* 
    Probleme:
    - Wie lang ist der Array -> muss variable sein -> For-Schleife
    - Wie kann man einen String über eine Schleife hinzufügen
    - Können noch andere Werte als Zahlen hinzugefügt werden?
    
    Steps:
    1) Array definieren
    2) Funktion definieren -> jeden Text einzeln drucken
    3) String zusammenführen
*/

const testData1 = [17, 21, 23];
const testData2 = [12, 5, -5, 0, 4];

const printForecast = function (arr) {
  let forecast = "...";
  for (let i = 0; i < arr.length; i++) {
    forecast += ` ${arr[i]}°C in ${i + 1} days ...`;
  }
  return forecast;
};

console.log(printForecast(testData2));
