//ES6_variable

//1
let catName;
let quote;
function catTalk() {
  "use strict";

  catName = "Oliver";
  quote = catName + " says Meow!";
}
catTalk();

//2
function checkScope() {
  let i = "function scope";
  if (true) {
    let i = "block scope";
    console.log("Block scope i is: ", i);
  }
  console.log("Function scope i is: ", i);
  return i;
}

//3
function printManyTimes(str) {
  // Only change code below this line

  const SENTENCE = str + " is cool!";
  for (let i = 0; i < str.length; i += 2) {
    console.log(SENTENCE);
  }

  // Only change code above this line
}
printManyTimes("freeCodeCamp");

//4
const s = [5, 7, 2];
function editInPlace() {
  // Only change code below this line
  s.sort();
  // Using s = [2, 5, 7] would be invalid

  // Only change code above this line
}
editInPlace();

//5
function freezeObj() {
  const MATH_CONSTANTS = {
    PI: 3.14,
  };
  // Only change code below this line
  Object.freeze(MATH_CONSTANTS);

  // Only change code above this line
  try {
    MATH_CONSTANTS.PI = 99;
  } catch (ex) {
    console.log(ex);
  }
  return MATH_CONSTANTS.PI;
}
const PI = freezeObj();

//Basic_loop

//1
// Setup
var myArray = [];
var i = 5;
while (i >= 0) {
  myArray.push(i);
  i--;
}
// Only change code below this line

//2
// Setup
var myArray = [];
for (let i = 1; i < 6; i++) {
  myArray.push(i);
}

// Only change code below this line

//3
// Setup
var myArray = [];
for (let i = 1; i < 10; i += 2) {
  myArray.push(i);
}
// Only change code below this line

//4
// Setup
var myArray = [];
for (let i = 9; i > 0; i -= 2) {
  myArray.push(i);
}
// Only change code below this line

//5
// Setup
var myArr = [2, 3, 4, 5, 6];

// Only change code below this
let total = 0;
for (var i = 0; i < myArr.length; i++) {
  total += myArr[i];
}

//6
function multiplyAll(arr) {
  var product = 1;
  // Only change code below this line
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr[i].length; j++) {
      product = product * arr[i][j];
    }
  }
  // Only change code above this line
  return product;
}

multiplyAll([
  [1, 2],
  [3, 4],
  [5, 6, 7],
]);

//7
// Setup
var myArray = [];
var i = 10;

// Only change code below this line
do {
  myArray.push(i);
  i++;
} while (i < 11);

//8
function sum(arr, n) {
  // Only change code below this line
  if (n <= 0) {
    return 0;
  } else {
    return sum(arr, n - 1) + arr[n - 1];
  }
  // Only change code above this line
}

//Basic_Problem

//1
// Setup
var contacts = [
  {
    firstName: "Akira",
    lastName: "Laine",
    number: "0543236543",
    likes: ["Pizza", "Coding", "Brownie Points"],
  },
  {
    firstName: "Harry",
    lastName: "Potter",
    number: "0994372684",
    likes: ["Hogwarts", "Magic", "Hagrid"],
  },
  {
    firstName: "Sherlock",
    lastName: "Holmes",
    number: "0487345643",
    likes: ["Intriguing Cases", "Violin"],
  },
  {
    firstName: "Kristian",
    lastName: "Vos",
    number: "unknown",
    likes: ["JavaScript", "Gaming", "Foxes"],
  },
];

function lookUpProfile(name, prop) {
  // Only change code below this line
  for (let i = 0; i < contacts.length; i++) {
    if (contacts[i].firstName === name) {
      if (prop in contacts[i]) {
        return contacts[i][prop];
      } else {
        return "No such property";
      }
    }
  }
  return "No such contact";
  // Only change code above this line
}

lookUpProfile("Akira", "likes");

//2
function randomFraction() {
  // Only change code below this line
  return Math.random();

  // Only change code above this line
}

//3
function randomWholeNum() {
  // Only change code below this line

  return Math.floor(Math.random() * 10);
}

//4
function randomRange(myMin, myMax) {
  // Only change code below this line
  return Math.floor(Math.random() * (myMax - myMin + 1)) + myMin;
  // Only change code above this line
}

//5
function convertToInteger(str) {
  return parseInt(str);
}

convertToInteger("56");

//6
function convertToInteger(str) {
  return parseInt(str, 2);
}

convertToInteger("10011");

//7
function checkEqual(a, b) {
  return a === b ? "Equal" : "Not Equal";
}

checkEqual(1, 2);

//8
function checkSign(num) {
  return num === 0 ? "zero" : num < 0 ? "negative" : "positive";
}

checkSign(10);

//9
// Only change code below this line
function countdown(n) {
  if (n < 1) {
    return [];
  } else {
    const countArray = countdown(n - 1);
    countArray.unshift(n);
    return countArray;
  }
}
// Only change code above this line

//10
function rangeOfNumbers(startNum, endNum) {
  if (endNum - startNum === 0) {
    return [startNum];
  } else {
    var numbers = rangeOfNumbers(startNum, endNum - 1);
    numbers.push(endNum);
    return numbers;
  }
}

//ES6_Rest,Spread

//1
const sum = (...args) => {
  return args.reduce((a, b) => a + b, 0);
};

//2
const arr1 = ["JAN", "FEB", "MAR", "APR", "MAY"];
let arr2;

arr2 = [...arr1]; // Change this line

console.log(arr2);

//ES6_Destructuring

//1
const HIGH_TEMPERATURES = {
  yesterday: 75,
  today: 77,
  tomorrow: 80,
};

// Only change code below this line

const { today, tomorrow } = HIGH_TEMPERATURES;

// Only change code above this line

//2
const HIGH_TEMPERATURES = {
  yesterday: 75,
  today: 77,
  tomorrow: 80,
};

// Only change code below this line

const { today: highToday, tomorrow: highTomorrow } = HIGH_TEMPERATURES;

// Only change code above this line

//3
const LOCAL_FORECAST = {
  yesterday: { low: 61, high: 75 },
  today: { low: 64, high: 77 },
  tomorrow: { low: 68, high: 80 },
};

// Only change code below this line

const {
  today: { low: lowToday, high: highToday },
} = LOCAL_FORECAST;

// Only change code above this line

//4
let a = 8,
  b = 6;
// Only change code below this line
[a, b] = [b, a];

//5
const source = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
function removeFirstTwo(list) {
  // Only change code below this line
  const [, , ...arr] = list; // Change this line
  // Only change code above this line
  return arr;
}
const arr = removeFirstTwo(source);

//6
const stats = {
  max: 56.78,
  standard_deviation: 4.34,
  median: 34.54,
  mode: 23.87,
  min: -0.75,
  average: 35.85,
};

// Only change code below this line
const half = ({ max, min }) => (max + min) / 2.0;
// Only change code above this line

//7
function copyMachine(arr, num) {
  let newArr = [];
  while (num >= 1) {
    // Only change code below this line
    newArr.push([...arr]);
    // Only change code above this line
    num--;
  }
  return newArr;
}

console.log(copyMachine([true, false, true], 2));

//8
function spreadOut() {
  let fragment = ["to", "code"];
  let sentence = ["learning", ...fragment, "is", "fun"]; // Change this line
  return sentence;
}

console.log(spreadOut());

//Import-Export

//1
{
  /* <html>
  <body>
    <!-- Only change code below this line -->
<script type="module" src="index.js"></script>
    <!-- Only change code above this line -->
  </body>
</html> */
}

//2
export const uppercaseString = (string) => {
  return string.toUpperCase();
};

export const lowercaseString = (string) => {
  return string.toLowerCase();
};

//3
import { uppercaseString, lowercaseString } from "./string_functions.js";
// Only change code above this line

uppercaseString("hello");
lowercaseString("WORLD!");

//4
import * as stringFunctions from "./string_functions.js";
// Only change code above this line

stringFunctions.uppercaseString("hello");
stringFunctions.lowercaseString("WORLD!");

//5
export default function subtract(x, y) {
  return x - y;
}

//6
import subtract from "./math_functions.js";
// Only change code above this line

subtract(7, 4);
//ES6_variable

//1
let catName;
let quote;
function catTalk() {
  "use strict";

  catName = "Oliver";
  quote = catName + " says Meow!";

}
catTalk();




//2
function checkScope() {
  let i = 'function scope';
  if (true) {
    let i = 'block scope';
    console.log('Block scope i is: ', i);
  }
  console.log('Function scope i is: ', i);
  return i;
}






//3
function printManyTimes(str) {

  // Only change code below this line

  const SENTENCE = str + " is cool!";
  for (let i = 0; i < str.length; i+=2) {
    console.log(SENTENCE);
  }

  // Only change code above this line

}
printManyTimes("freeCodeCamp");





//4
const s = [5, 7, 2];
function editInPlace() {
  // Only change code below this line
    s.sort()
  // Using s = [2, 5, 7] would be invalid

  // Only change code above this line
}
editInPlace();






//5
function freezeObj() {
  const MATH_CONSTANTS = {
    PI: 3.14
  };
  // Only change code below this line
    Object.freeze(MATH_CONSTANTS);

  // Only change code above this line
  try {
    MATH_CONSTANTS.PI = 99;
  } catch(ex) {
    console.log(ex);
  }
  return MATH_CONSTANTS.PI;
}
const PI = freezeObj();









//Basic_loop

//1
// Setup
var myArray = [];
var i = 5;
while(i>=0) {
  myArray.push(i);
  i--;
}
// Only change code below this line



//2
// Setup
var myArray = [];
for(let i=1; i<6; i++) {
  myArray.push(i)
}

// Only change code below this line


//3
// Setup
var myArray = [];
for(let i=1; i<10; i+=2) {
  myArray.push(i)
}
// Only change code below this line


//4
// Setup
var myArray = [];
for(let i = 9; i>0; i-=2) {
  myArray.push(i)
}
// Only change code below this line



//5
// Setup
var myArr = [ 2, 3, 4, 5, 6];

// Only change code below this 
let total = 0;
for (var i = 0; i < myArr.length; i++) {
  total += myArr[i];
}


//6
function multiplyAll(arr) {
    var product = 1;
    // Only change code below this line
    for (let i = 0; i < arr.length; i++) {
      for (let j = 0; j < arr[i].length; j++) {
        product = product * arr[i][j];
      }
    }
    // Only change code above this line
    return product;
  }
  
  multiplyAll([[1,2],[3,4],[5,6,7]]);

  //7
  // Setup
var myArray = [];
var i = 10;

// Only change code below this line
do {
  myArray.push(i);
  i++;
}while (i < 11);




//8
function sum(arr, n) {
  // Only change code below this line
if(n <= 0) {
    return 0;
  } else {
    return sum(arr, n - 1) + arr[n - 1];
  }
  // Only change code above this line
}


//Basic_Problem



//1
// Setup
var contacts = [
  {
      "firstName": "Akira",
      "lastName": "Laine",
      "number": "0543236543",
      "likes": ["Pizza", "Coding", "Brownie Points"]
  },
  {
      "firstName": "Harry",
      "lastName": "Potter",
      "number": "0994372684",
      "likes": ["Hogwarts", "Magic", "Hagrid"]
  },
  {
      "firstName": "Sherlock",
      "lastName": "Holmes",
      "number": "0487345643",
      "likes": ["Intriguing Cases", "Violin"]
  },
  {
      "firstName": "Kristian",
      "lastName": "Vos",
      "number": "unknown",
      "likes": ["JavaScript", "Gaming", "Foxes"]
  }
];


function lookUpProfile(name, prop) {
// Only change code below this line
  for (let i = 0; i < contacts.length; i++) {
  if (contacts[i].firstName === name) {
    if (prop in contacts[i]) {
      return contacts[i][prop];
    } else {
      return "No such property";
    }
  }
}
return "No such contact";
// Only change code above this line
}

lookUpProfile("Akira", "likes");





//2
function randomFraction() {

  // Only change code below this line
  return Math.random()

  // Only change code above this line
}




//3
function randomWholeNum() {

  // Only change code below this line

  return Math.floor(Math.random() * 10);
}



//4
function randomRange(myMin, myMax) {
  // Only change code below this line
return Math.floor(Math.random() * (myMax - myMin + 1)) + myMin
  // Only change code above this line
}




//5
function convertToInteger(str) {
  return parseInt(str);
}

convertToInteger("56");




//6
function convertToInteger(str) {
  return parseInt(str,2);
}

convertToInteger("10011");




//7
function checkEqual(a, b) {
  return a === b ? "Equal" : "Not Equal";
}

checkEqual(1, 2);



//8
function checkSign(num) {
  return (num === 0) ? "zero" : (num < 0) ? "negative" : "positive";
 }
 
 checkSign(10);



 //9
 // Only change code below this line
function countdown(n){
  if (n < 1) {
    return [];
  } else {
    const countArray = countdown(n - 1);
    countArray.unshift(n);
    return countArray;
  }
}
// Only change code above this line



//10
function rangeOfNumbers(startNum, endNum) {
  if (endNum - startNum === 0) {
    return [startNum];
  } else {
    var numbers = rangeOfNumbers(startNum, endNum - 1);
    numbers.push(endNum);
    return numbers;
  }
}



//ES6_Rest,Spread

//1
const sum = (...args) => {
  return args.reduce((a, b) => a + b, 0);
}




//2
const arr1 = ['JAN', 'FEB', 'MAR', 'APR', 'MAY'];
let arr2;

arr2 = [...arr1];  // Change this line

console.log(arr2);






//ES6_Destructuring

//1
const HIGH_TEMPERATURES = {
  yesterday: 75,
  today: 77,
  tomorrow: 80
};

// Only change code below this line

const {today, tomorrow} = HIGH_TEMPERATURES;

// Only change code above this line




//2
const HIGH_TEMPERATURES = {
  yesterday: 75,
  today: 77,
  tomorrow: 80
};

// Only change code below this line
  
const {today:highToday , tomorrow:highTomorrow} = HIGH_TEMPERATURES;

// Only change code above this line




//3
const LOCAL_FORECAST = {
  yesterday: { low: 61, high: 75 },
  today: { low: 64, high: 77 },
  tomorrow: { low: 68, high: 80 }
};

// Only change code below this line
  
const {today:{low:lowToday  ,  high:highToday}} = LOCAL_FORECAST;

// Only change code above this line





//4
let a = 8, b = 6;
// Only change code below this line
[a,b] = [b,a]




//5
const source = [1,2,3,4,5,6,7,8,9,10];
function removeFirstTwo(list) {
  // Only change code below this line
  const [,,...arr] = list; // Change this line
  // Only change code above this line
  return arr;
}
const arr = removeFirstTwo(source);




//6
const stats = {
  max: 56.78,
  standard_deviation: 4.34,
  median: 34.54,
  mode: 23.87,
  min: -0.75,
  average: 35.85
};

// Only change code below this line
const half = ({max,min}) => (max + min) / 2.0; 
// Only change code above this line




//7
function copyMachine(arr, num) {
  let newArr = [];
  while (num >= 1) {
    // Only change code below this line
      newArr.push([...arr])
    // Only change code above this line
    num--;
  }
  return newArr;
}

console.log(copyMachine([true, false, true], 2));





//8
function spreadOut() {
  let fragment = ['to', 'code'];
  let sentence =  ['learning',...fragment,'is', 'fun']// Change this line
  return sentence;
}

console.log(spreadOut());





//Import-Export



//1
{/* <html>
  <body>
    <!-- Only change code below this line -->
<script type="module" src="index.js"></script>
    <!-- Only change code above this line -->
  </body>
</html> */}




//2
export const uppercaseString = (string) => {
    return string.toUpperCase();
  }
  
  export const lowercaseString = (string) => {
    return string.toLowerCase()
  }





//3
import {uppercaseString , lowercaseString }  from './string_functions.js';
// Only change code above this line

uppercaseString("hello");
lowercaseString("WORLD!");




//4
import * as stringFunctions from "./string_functions.js";
// Only change code above this line

stringFunctions.uppercaseString("hello");
stringFunctions.lowercaseString("WORLD!");




//5
export default function subtract(x, y) {
    return x - y;
  }



//6
import subtract from "./math_functions.js";
// Only change code above this line

subtract(7,4);
