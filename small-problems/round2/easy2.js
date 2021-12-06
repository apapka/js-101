//Welcome stranger

function greetings(array, object) {
  return `Hello ${array.join(" ")}! Nice to have a ${object['title']} ${object['occupation']} around.`;
}
// console.log(greetings(["John", "Q", "Doe"], {title: 'Master', occupation: 'Plumber'}));

let rlSync = require('readline-sync');
// let name = rlSync.question("WHat is your name? ");
// let greeting = `Hello ${name}. `
// if (name.endsWith('!')) {
//   greeting = greeting.slice(0,greeting.length - 3).toUpperCase() + ' WHY ARE WE SCREAMING?'
// }
// console.log(greeting);

function multiply (num1, num2) {
  return num1 * num2;
}

function square (num) {
  return multiply(num, num);
}

// let firstNumber = rlSync.question("Enter the first number: ");
// let secondNumber = rlSync.question("Enter the second number");
// console.log(`${firstNumber} + ${secondNumber} = ${firstNumber + secondNumber}`);
// console.log(`${firstNumber} - ${secondNumber} = ${firstNumber - secondNumber}`);
// console.log(`${firstNumber} * ${secondNumber} = ${firstNumber * secondNumber}`);
// console.log(`${firstNumber} / ${secondNumber} = ${firstNumber / secondNumber}`);
// console.log(`${firstNumber} % ${secondNumber} = ${firstNumber % secondNumber}`);
// console.log(`${firstNumber} ** ${secondNumber} = ${firstNumber ** secondNumber}`);

function penultimate(string) {
  let arr = string.split(" ");
  return arr[arr.length - 2];
}
console.log(penultimate("last word"));

function xor(arg1, arg2) {
  if (arg1 && !arg2) {
    return true;
  } else if (!arg1 && arg2) {
    return true;
  } else {
    return false;
  }
}
// console.log(xor(5,0));
// console.log(xor(false,true));
// console.log(xor(1,1));
// console.log(xor(true, true));

let oddities = function(array) {
  let arr = [];
  for (let i = 0; i < array.length; i+=2){
    arr.push(array[i]);
  }
  return arr;
}
// console.log(oddities([2, 3, 4, 5, 6])); // logs [2, 4, 6]
// console.log(oddities([1, 2, 3, 4, 5, 6])); // logs [1, 3, 5]
// console.log(oddities(["abc", "def"])); // logs ['abc']
// console.log(oddities([123])); // logs [123]
// console.log(oddities([])); // logs []

function stringToInteger(string) {
  let digits = {1:1, 2:2, 3:3, 4:4, 5:5, 6:6, 7:7, 8:8, 9:9, 0:0};
  let array = string.split("");
  let number = 0;
  for (let i = 0; i < array.length - 1; i++) {
    number += digits[array[i]];
    number *= 10;
  }
  number += digits[array[array.length - 1]];
  return number;
}

// console.log(stringToInteger("4321"));

function stringToSignedInteger(string) {
  if (string[0] === '-') {
    return -stringToInteger(string.slice(1));
  } else if (string[0] === "+") {
    return stringToInteger(string.slice(1));
  } else {
    return stringToInteger(string);
  }
}
// console.log(stringToSignedInteger("4321") === 4321); // logs true
// console.log(stringToSignedInteger("-570") === -570); // logs true
// console.log(stringToSignedInteger("+100") === 100); // logs true

function integerToString(integer) {
  const DIGITS = ['0','1','2','3','4','5','6','7','8','9'];
  if (integer === 0){
    return "0";
  }
  let string ="";
  while(integer > 0) {
    let digit = integer % 10;    
    integer = (integer - digit) / 10;
    string = DIGITS[digit] + string;    
  }
  return string;
}
// console.log(integerToString(4321));
// console.log(integerToString(0));
// console.log(integerToString(5000));
// console.log(integerToString(1234567890));

function signedIntegerToString(integer) {
  if (integer < 0) {
    return "-" + integerToString(-integer);
  } else if (integer > 0) {
    return "+" + integerToString(integer);
  } else {
    return integerToString(integer);
  }
}
console.log(signedIntegerToString(4321) === "+4321");
console.log(signedIntegerToString(-123) === "-123");
console.log(signedIntegerToString(0) === "0");