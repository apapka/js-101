//  1  --- Welcoming Stranger -------------------------------------
/*Create a function that takes 2 arguments, an array and an object. 
The array will contain 2 or more elements that, when combined with 
adjoining spaces, will produce a person's name. The object will contain two keys, 
"title" and "occupation", and the appropriate values. 
Your function should return a greeting that uses the person's full name, 
and mentions the person's title.
*/

// function greetings(array, object){
//   console.log('Hello, ' + array.join(' ') + '! Nice to have a ' + object.title + ' ' + object.occupation + ' around.')
// }
// console.log(
//   greetings(["John", "Q", "Doe"], { title: "Master", occupation: "Plumber" })
// );



//  2  --- Greeting a user -----------------------------------------
/*Write a program that will ask for user's name. The program will then greet the user. 
If the user writes "name!" then the computer yells back to the user.*/

// let rlSync = require('readline-sync');
// let name = rlSync.question('What is your name? ');
// if(name.charAt(name.length-1) === '!'){
//   console.log(`HELLO ${name}. WHY ARE WE SCREAMING?`);
// }else{
//   console.log(`Hello ${name}.`);
// }

//  3  --- Multiplying two numbers ----------------------------------
/*Create a function that takes two arguments, multiplies them together, 
and returns the result.*/

// function multiply(num1,num2){
//   return num1*num2;
// }


//  4  --- Squaring an argument ----------------------------------------
/*Using the multiply() function from the "Multiplying Two Numbers" problem, 
write a function that computes the square of its argument 
(the square is the result of multiplying a number by itself).*/

// function square(num){
//   return multiply(num,num);
// }

//  5  ---  Arithmetic Integer ----------------------------------------
/*Write a program that prompts the user for two positive integers, 
and then prints the results of the following operations on those two numbers: 
addition, subtraction, product, quotient, remainder, and power. 
Do not worry about validating the input. */

// let rlSync = require('readline-sync');
// let num1 = Number(rlSync.question('Enter the first number: '));
// let num2 = Number(rlSync.question("Enter the second number: "));

// console.log(
// `${num1} + ${num2} = ${num1 + num2} \n
//  ${num1} - ${num2} = ${num1 - num2} \n
//  ${num1} * ${num2} = ${num1 * num2} \n
//  ${num1} / ${num2} = ${num1 / num2} \n
//  ${num1} % ${num2} = ${num1 % num2} \n
//  ${num1} ** ${num2} = ${num1 ** num2} \n
//  `
// )

/*The end is near but not here ----------------------------------------------------
Write a function that returns the next to last word in the String passed to it as an argument.

Words are any sequence of non-blank characters.

You may assume that the input String will always contain at least two words.
(*/


// function penultimate(string){
//   let arr = string.split(" ");
//   return arr[arr.length-2];
// }
// console.log(penultimate("last word") === "last"); // logs true
// console.log(penultimate("Launch School is great!") === "is"); // logs true


/*Exclusive OR -----------------------------------------------------------------------


The || operator returns a truthy value if either or both of its 
operands are truthy, a falsey value if both operands are falsey. 
The && operator returns a truthy value if both of its operands are truthy, 
and a falsey value if either operand is falsey. This works great until
 you need only one, but not both, of two conditions to be truthy:
  the so-called exclusive or.

In this exercise, you will write a function named xor that takes two 
arguments, and returns true if exactly one of its arguments is truthy, 
false otherwise. Note that we are looking for a boolean result instead 
of a truthy/falsy value as returned by || and &&.

 */

// function xor (arg1, arg2){
//     if ((arg1 && !arg2) || (arg2 && !arg1)) {
//       return true;
//     }
//     return false;
//   }
// console.log(xor(5, 0) === true);
// console.log(xor(false, true) === true);
// console.log(xor(1, 1) === false);
// console.log(xor(true, true) === false);

/* Odd lists -----------------------------------------------------------------

Write a function that returns an Array that contains every other element 
of an Array that is passed in as an argument. The values in the returned 
list should be those values that are in the 1st, 3rd, 5th, and so on elements 
of the argument Array.
*/

// function oddities(arr){
//   let newArray =[];
//   for (let i = 0; i < arr.length; i +=2){
//     newArray.push(arr[i]);
//   }
//   return newArray;
// }

// Examples:

// Copy Code
// console.log(oddities([2, 3, 4, 5, 6])); // logs [2, 4, 6]
// console.log(oddities([1, 2, 3, 4, 5, 6])); // logs [1, 3, 5]
// console.log(oddities(["abc", "def"])); // logs ['abc']
// console.log(oddities([123])); // logs [123]
// console.log(oddities([])); // logs []
//  9  --- Convert a String to a Number! -------------------------------------
// function stringToInteger(string){
//   let digitsMap ={
//     1: 1, 2:2, 3:3, 4:4, 5:5, 6:6, 7:7, 8:8, 9:9, 0:0
//   };
//   let returnValue = 0;
//   for (let i = 0; i < string.length; i++){
//     returnValue *= 10;
//     let digit = digitsMap[string[i]];
//     returnValue += digit;
//   }
//   return returnValue;
// }
// console.log(stringToInteger("102049"));
// console.log(stringToInteger("4321") === 4321); // logs true
// console.log(stringToInteger("570") === 570); // logs true


//try using map and forEach
function stringToInteger(string){
  let digitsMap ={
        1: 1, 2:2, 3:3, 4:4, 5:5, 6:6, 7:7, 8:8, 9:9, 0:0
      };
    let digitsArray = string.split('').map(char => digitsMap[char]);
    let returnValue = 0;
    digitsArray.forEach(digit => (returnValue = (returnValue * 10) + digit));
    return returnValue;
}
console.log(stringToInteger("4321") === 4321); // logs true
console.log(stringToInteger("570") === 570); // logs true


function hexadecimalToInteger(string){
  let digitsMap = {
    1: 1, 2:2, 3:3, 4:4, 5:5, 6:6, 7:7, 8:8, 
    9:9, 0:0, A: 10, B: 11, C: 12, D: 13, E: 14, F:15
  };   
  let digitsArray = string.toUpperCase().split('').map(char => digitsMap[char]);
  console.log(digitsArray);
  let returnValue = 0;
  digitsArray.forEach(digit => (returnValue = (returnValue * 16) + digit));
  return returnValue;
}
console.log(hexadecimalToInteger('4D9f'));
console.log(hexadecimalToInteger('4D9f') === 19871);
//  10  --- Convert a string a signed number ---------------------------------------

function stringToSignedInteger(string){
  if (string [0] === '-'){
    return -stringToInteger(string.slice(1,string.length));
  }else if (string [0] === '+'){
    return stringToInteger(string.slice(1,string.length));
  }else{
    return stringToInteger(string);
  }
}

console.log(stringToSignedInteger("4321") === 4321); // logs true
console.log(stringToSignedInteger("-570") === -570); // logs true
console.log(stringToSignedInteger("+100") === 100); // logs true
//  11   --- Convert a Signed Number to a String! ------------------------------


//Convert a number to a string! ------------------------------------
const DIGITS = ['0','1','2','3','4','5','6','7','8','9']

function integerToString(int){
  
  let digit = int % 10;
  int = Math.floor(int / 10);
  let string = DIGITS[digit];
  while(int > 0){
    digit = int % 10;
    int = Math.floor(int / 10);

    string = DIGITS[digit] + string;
  }
  return string;
}
integerToString(4321);        // "4321"
integerToString(0);           // "0"
integerToString(5000);        // "5000"
integerToString(1234567890);  // "1234567890"

//convert a signed number to a string

function signedIntegerToString(number){
  if(number > 0){
    string = "+" + integerToString(number);
  }else if (number < 0){
    string = "-" + integerToString(Math.abs(number))
  }else{
    string = integerToString(number);
  }
  return string;
}
console.log(signedIntegerToString(4321) === "+4321");
console.log(signedIntegerToString(-123) === "-123");
console.log(signedIntegerToString(0) === "0");
