function crunch(string) {
  let newString = "";
  for (let i = 0; i < string.length; i++) {
    newString +=string[i];
    while (string[i] === string [i + 1]) {
      i++;
    }
  }
  return newString;
}

console.log(crunch('dddailllyy douuublleee'));

function logInBox(string) {
  console.log(`+${'-'.repeat(string.length + 2)}+`);
  console.log(`| ${' '.repeat(string.length)} |`);
  console.log(`| ${string} |`);
  console.log(`| ${' '.repeat(string.length)} |`);
  console.log(`+${'-'.repeat(string.length + 2)}+`);
}
// logInBox('To boldly go where no one has gone before.');

function stringy(integer) {
  let string = "";
  for (let i = 0; i < integer; i++) {
    if (i % 2 === 1) {
      string += '0';
    } else {
      string += '1'
    }

  }
  return string;
}
// console.log(stringy(6));
// console.log(stringy(9));
// console.log(stringy(4));
// console.log(stringy(7));

//problem:  write a function that calculates and returns the index 
// of the first fibonacci number that has the number of digits specified in the argument
//input: number of digits
//output: 1-based index of first fibonacci number with that many digits
// rules: assume the argument is an integer greater than or equal to 2
// first fibonacci number has an index of 1

//algorithm: number of digits
      //take an integer n and return the number of digits in n
      //set numDigits to 0
      //take the last digit of integer
      //divide integer - digit by 10
      // increment digits by 1
      //repeat steps 2-5 until integer = 0

    //algorithm: fibonacci numbers
    // set an array to [1,1]
    // while last element in array does NOT have numDigits, 
    //push next value to array.
      //nextValue = array[index - 1] + array[index - 2];

function findFibonacciIndexByLength(bigInt) {
  let fibonacciSequence = [1, 1];
  let numberDigits = numDigits(fibonacciSequence[fibonacciSequence.length - 1]);
  while(numberDigits < bigInt) {
    let lastInt = fibonacciSequence[fibonacciSequence.length - 1];
    let secondToLast = fibonacciSequence[fibonacciSequence.length - 2]
    fibonacciSequence.push(lastInt + secondToLast);
    numberDigits = numDigits (lastInt + secondToLast);
  }
  // console.log(fibonacciSequence);
  return fibonacciSequence.length;
}

function numDigits(integer) {
  let numberDigits = 0n;
  if (integer === 0) {
    return 1;
  }
  while (integer > 0) {
    let digit = integer % 10;
    integer = (integer - digit) / 10;
    numberDigits += 1n;
  }
  return numberDigits;
}

// console.log(findFibonacciIndexByLength(2n))// === 7n);    // 1 1 2 3 5 8 13
// console.log(findFibonacciIndexByLength(3n))// === 12n);   // 1 1 2 3 5 8 13 21 34 55 89 144
// console.log(findFibonacciIndexByLength(10n))// === 45n);
// console.log(findFibonacciIndexByLength(16n) === 74n);
// console.log(findFibonacciIndexByLength(100n) === 476n);
// findFibonacciIndexByLength(1000n) === 4782n;
// findFibonacciIndexByLength(10000n) === 47847n;

// The last example may take a minute or so to run.)

//right triangles

function triangle(int) {
  for (let i = 1; i <= int; i ++){
    console.log(`${" ".repeat(int - i)}${'*'.repeat(i)}`);
  }
}

// triangle(5);

function madlibs(){
  let rlSync = require('readline-sync');
  let noun = rlSync.question("Enter a noun: ");
  let verb = rlSync.question("Enter a verb: ");
  let adjective = rlSync.question("Enter an adjective: ");
  let adverb = rlSync.question(`Enter an adverb: `);

  console.log(`Do you ${verb} your ${adjective} ${noun} ${adverb}? That's hilarious!`);
  console.log(`The ${adjective} ${noun} ${verb}s ${adverb} over the lazy ${noun}`);
  console.log(`The ${noun} ${adverb} ${verb}s up ${adjective} Joe's turtle`);
}
// madlibs();

function isDoubleNumber(number) {
  let string = String(number);
  if (string.length % 2 === 1) {
    return false;
  } else {
    let leftSide = string.slice(0, string.length / 2);
    let rightSide = string.slice(string.length / 2);
    return leftSide === rightSide;
  }
}
function twice(number) {
  if (isDoubleNumber(number)) {
    return number;
  } else {
    return number * 2;
  }
}

// console.log(twice(37));          // 74
// console.log(twice(44));          // 44
// twice(334433);      // 668866
// twice(444);         // 888
// twice(107);         // 214
// twice(103103);      // 103103
// twice(3333);        // 3333
// twice(7676);        // 7676

function getGrade(score1, score2, score3) {
  let avg = (score1 + score2 + score3) / 3;
  if (avg >= 90) {
    return 'A';
  } else if (avg >= 80) {
    return 'B';
  } else if (avg >= 70) {
    return 'C';
  } else if (avg >= 60) {
    return 'D';
  } else {
    return 'F';
  }
}
// console.log(getGrade(90, 95,93));
// console.log(getGrade(50,50,95));

function cleanUp(string) {
  let newString = "";
  for (char of string) {
    if (isAlphabetic(char)) {
      newString += char;
    } else {
      if (newString.charAt(newString.length - 1) !== " ") {
        newString += " ";
      }
    }
  }
  return newString;
}
function isAlphabetic(char) {
  if (char >= 'A' && char <= 'Z') {
    return true;
  } else if (char >= 'a' && char <= 'z') {
    return true;
  } else {
    return false;
  }
}
console.log(cleanUp("---what's my +*& line?"));    // " what s my line ")

