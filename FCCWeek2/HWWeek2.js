//Conditional

//1
function welcomeToBooleans() {
  // Only change code below this line

  return true; // Change this line

  // Only change code above this line
}

//2
function trueOrFalse(wasThatTrue) {
  // Only change code below this line
  if (wasThatTrue) {
    return "Yes, that was true";
  } else {
    return "No, that was false";
  }

  // Only change code above this line
}

//3
// Setup
function testEqual(val) {
  if (val == 12) {
    // Change this line
    return "Equal";
  }
  return "Not Equal";
}

testEqual(10);

//4
// Setup
function testStrict(val) {
  if (val === 7) {
    // Change this line
    return "Equal";
  }
  return "Not Equal";
}

testStrict(10);

//5
// Setup
function compareEquality(a, b) {
  if (a === b) {
    // Change this line
    return "Equal";
  }
  return "Not Equal";
}

compareEquality(10, "10");

//6
// Setup
function testNotEqual(val) {
  if (val != 99) {
    // Change this line
    return "Not Equal";
  }
  return "Equal";
}

testNotEqual(10);

//7
// Setup
function testStrictNotEqual(val) {
  if (val !== 17) {
    // Change this line
    return "Not Equal";
  }
  return "Equal";
}

testStrictNotEqual(10);

//8
function testGreaterThan(val) {
  if (val > 100) {
    // Change this line
    return "Over 100";
  }

  if (val > 10) {
    // Change this line
    return "Over 10";
  }

  return "10 or Under";
}

testGreaterThan(10);

//9
function testGreaterOrEqual(val) {
  if (val >= 20) {
    // Change this line
    return "20 or Over";
  }

  if (val >= 10) {
    // Change this line
    return "10 or Over";
  }

  return "Less than 10";
}

testGreaterOrEqual(10);

//10
function testLessThan(val) {
  if (val < 25) {
    // Change this line
    return "Under 25";
  }

  if (val < 55) {
    // Change this line
    return "Under 55";
  }

  return "55 or Over";
}

testLessThan(10);

//11
function testLessOrEqual(val) {
  if (val <= 12) {
    // Change this line
    return "Smaller Than or Equal to 12";
  }

  if (val <= 24) {
    // Change this line
    return "Smaller Than or Equal to 24";
  }

  return "More Than 24";
}

testLessOrEqual(10);
function testLogicalAnd(val) {
  // Only change code below this line

  if (val >= 25 && val <= 50) {
    return "Yes";
  }

  // Only change code above this line
  return "No";
}

testLogicalAnd(10);

//12
function testLogicalAnd(val) {
  // Only change code below this line

  if (val >= 25 && val <= 50) {
    return "Yes";
  }

  // Only change code above this line
  return "No";
}

testLogicalAnd(10);

//13
function testLogicalOr(val) {
  // Only change code below this line

  if (val < 10 || val > 20) {
    return "Outside";
  }

  // Only change code above this line
  return "Inside";
}

testLogicalOr(15);

//14
function testElse(val) {
  var result = "";
  // Only change code below this line

  if (val > 5) {
    result = "Bigger than 5";
  } else {
    result = "5 or Smaller";
  }

  // Only change code above this line
  return result;
}

testElse(4);

//15
function testElseIf(val) {
  if (val > 10) {
    return "Greater than 10";
  } else if (val < 5) {
    return "Smaller than 5";
  } else {
    return "Between 5 and 10";
  }
}

testElseIf(7);

//16
function orderMyLogic(val) {
  if (val < 5) {
    return "Less than 5";
  } else if (val < 10) {
    return "Less than 10";
  } else {
    return "Greater than or equal to 10";
  }
}

orderMyLogic(7);

//17
function testSize(num) {
  // Only change code below this line
  if (num < 5) {
    return "Tiny";
  } else if (num < 10) {
    return "Small";
  } else if (num < 15) {
    return "Medium";
  } else if (num < 20) {
    return "Large";
  } else {
    return "Huge";
  }
  // Only change code above this line
}

testSize(7);

//18
var names = [
  "Hole-in-one!",
  "Eagle",
  "Birdie",
  "Par",
  "Bogey",
  "Double Bogey",
  "Go Home!",
];
function golfScore(par, strokes) {
  // Only change code below this line
  if (strokes === 1) {
    return names[0];
  } else if (strokes <= par - 2) {
    return names[1];
  } else if (strokes <= par - 1) {
    return names[2];
  } else if (strokes == par) {
    return names[3];
  } else if (strokes == par + 1) {
    return names[4];
  } else if (strokes == par + 2) {
    return names[5];
  } else if (strokes >= par + 3) {
    return names[6];
  } else {
    return "Change Me";
  }
  // Only change code above this line
}

golfScore(5, 4);

//19
function caseInSwitch(val) {
  var answer = "";
  // Only change code below this line
  switch (val) {
    case 1:
      answer = "alpha";
      break;
    case 2:
      answer = "beta";
      break;
    case 3:
      answer = "gamma";
      break;
    case 4:
      answer = "delta";
  }

  // Only change code above this line
  return answer;
}

caseInSwitch(1);

//20
function switchOfStuff(val) {
  var answer = "";
  // Only change code below this line
  switch (val) {
    case "a":
      answer = "apple";
      break;
    case "b":
      answer = "bird";
      break;
    case "c":
      answer = "cat";
      break;
    default:
      answer = "stuff";
  }

  // Only change code above this line
  return answer;
}

switchOfStuff(1);

//21
function sequentialSizes(val) {
  var answer = "";
  // Only change code below this line
  switch (val) {
    case 1:
    case 2:
    case 3:
      answer = "Low";
      break;
    case 4:
    case 5:
    case 6:
      answer = "Mid";
      break;
    case 7:
    case 8:
    case 9:
      answer = "High";
      break;
  }

  // Only change code above this line
  return answer;
}

sequentialSizes(1);

//22
function chainToSwitch(val) {
  var answer = "";
  // Only change code below this line
  switch (val) {
    case "bob":
      answer = "Marley";
      break;
    case 42:
      answer = "The Answer";
      break;
    case 1:
      answer = "There is no #1";
      break;
    case 99:
      answer = "Missed me by this much!";
      break;
    case 7:
      answer = "Ate Nine";
  }

  // Only change code above this line
  return answer;
}

chainToSwitch(7);

//Function

//1
function reusableFunction() {
  console.log("Hi World");
}

reusableFunction();

//2
function functionWithArgs(num1, num2) {
  console.log(num1 + num2);
}

functionWithArgs(3, 4);

//3
// Declare the myGlobal variable below this line
var myGlobal = 10;
var oopsGlobal;
function fun1() {
  oopsGlobal = 5; // Assign 5 to oopsGlobal Here
}

// Only change code above this line

function fun2() {
  var output = "";
  if (typeof myGlobal != "undefined") {
    output += "myGlobal: " + myGlobal;
  }
  if (typeof oopsGlobal != "undefined") {
    output += " oopsGlobal: " + oopsGlobal;
  }
  console.log(output);
}

//4
function myLocalScope() {
  // Only change code below this line
  var myVar;
  console.log("inside myLocalScope", myVar);
}
myLocalScope();

// Run and check the console
// myVar is not defined outside of myLocalScope
console.log("outside myLocalScope", myVar);

//5
// Setup
var outerWear = "T-Shirt";

function myOutfit() {
  // Only change code below this line
  var outerWear = "sweater";

  // Only change code above this line
  return outerWear;
}

myOutfit();

//6
function timesFive(num) {
  return num * 5;
}
var sum = timesFive(3);

//7
// Setup
var sum = 0;

function addThree() {
  sum = sum + 3;
}

// Only change code below this line
function addFive() {
  sum = sum + 5;
}

// Only change code above this line

addThree();
addFive();

//8
// Setup
var processed = 0;

function processArg(num) {
  return (num + 3) / 5;
}

// Only change code below this line
processed = processArg(7);

//9
function nextInLine(arr, item) {
  // Only change code below this line
  arr.push(item);
  return arr.shift();
  // Only change code above this line
}

// Setup
var testArr = [1, 2, 3, 4, 5];

// Display code
console.log("Before: " + JSON.stringify(testArr));
console.log(nextInLine(testArr, 6));
console.log("After: " + JSON.stringify(testArr));

//10
function isLess(a, b) {
  // Only change code below this line
  return a < b;
  // Only change code above this line
}

isLess(10, 15);

//11
// Setup
function abTest(a, b) {
  // Only change code below this line
  if (a < 0 || b < 0) {
    return;
  }

  // Only change code above this line

  return Math.round(Math.pow(Math.sqrt(a) + Math.sqrt(b), 2));
}

abTest(2, 2);

//12
let count = 0;

function cc(card) {
  // Only change code below this line
  switch (card) {
    case 2:
    case 3:
    case 4:
    case 5:
    case 6:
      count++;
      break;
    case 10:
    case "J":
    case "Q":
    case "K":
    case "A":
      count--;
      break;
  }
  if (count > 0) {
    return count + " Bet";
  } else {
    return count + " Hold";
  }
  // Only change code above this line
}

cc(2);
cc(3);
cc(7);
cc("K");
cc("A");

//13
const magic = () => new Date();

//14
const myConcat = (arr1, arr2) => arr1.concat(arr2);

console.log(myConcat([1, 2], [3, 4, 5]));

//15
// Only change code below this line
const increment = (number, value = 1) => number + value;
// Only change code above this line
