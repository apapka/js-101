function isOdd(number) {
  return Math.abs(number) % 2 === 1;
}

let oddNumbers = () => {
  for (let i = 1; i <= 99; i += 2) {
    console.log(i);
  }
}
// oddNumbers();

let evenNumbers = () => {
  for (let i = 1; i <= 99; i++) {
    if(i % 2 === 0){
      console.log(i);
    }

  }
}
// evenNumbers();

let rlSync = require('readline-sync');
// let length = rlSync.question("Enter the length of the room in meters");
// let width = rlSync.question("Enter the width of the room in meters");
// console.log(`The area of the room is ${length * width} square meters (${length * width * 10.7639} square feet).`)


// let bill = Number(rlSync.question("What is the bill? "));
// let tipPercent = Number(rlSync.question("What is the tip percentage"));
// let tip = bill * tipPercent / 100;
// let total = bill + tip;
// console.log(`The tip is $${tip.toFixed(2)}`);
// console.log(`The total is $${total.toFixed(2)}`);

// let integer = parseInt(rlSync.question("Please enter an integer greater than 0: "));
// let sOrP = rlSync.question("Enter 's' to compute the sum, or 'p' to compute the product. ");
// if (sOrP === 'p') {
  // let product = 1;
  // for(let i = 1; i <= integer; i++) {
  //   product *= i;
  // }
  // console.log(`The product of the integers between 1 and ${integer} is ${product}`)
// } else {
//   let sum = 0; 
//   for (let i = 1; i <= integer; i++) {
//     sum += i;
//   }
//   console.log("The sum of the integers between 1 and " + integer + " is " + sum+ "."); 
// }

function shortLongShort(string1, string2) {
  let length1 = string1.length;
  let length2 = string2.length;
  if (length1 < length2) {
    return string1 + string2 + string1;
  } else {
    return string2 + string1 + string2;
  }
}
// console.log(shortLongShort('abc', 'defgh'));
// console.log(shortLongShort("abcde", 'fgh'));
// console.log(shortLongShort("","xyz"));

//input: year
//output: true if is leapyear, false if is not leapyear
//rules: 
function isLeapYear(year) {
  if (year < 1752) {
    if (year % 4 === 0) {
      return true;
    } else { 
      return false;
    }
  }
  if (year % 4 === 0) {
    if (year % 100 === 0) {
      if (year % 400 === 0) {
        return true;
      } else {
       return false;
      }
    } else {
      return true;
    }
  }
  return false;
}
// console.log(isLeapYear(2016));      // true
// console.log(isLeapYear(2015));      // false
// console.log(isLeapYear(2100));      // false
// console.log(isLeapYear(2400));      // true
// console.log(isLeapYear(240000));    // true
// console.log(isLeapYear(240001));    // false
// console.log(isLeapYear(2000));      // true
// console.log(isLeapYear(1900));      // false
// console.log(isLeapYear(1752));      // true
// console.log(isLeapYear(1700));      // false
// console.log(isLeapYear(1));         // false
// console.log(isLeapYear(100));       // false
// console.log(isLeapYear(400));       // true

function multisum(number) {
  let sum = 0;
  for (let i = 1; i <= number; i++) {
    if (i % 3 === 0 || i % 5 === 0) {
      sum += i;
    }
  }
  return sum;
}
// console.log(multisum(3));
// console.log(multisum(5));
// console.log(multisum(10));
// console.log(multisum(1000));

function utf16Value(string) {
  let sum = 0;
  for (let i = 0; i < string.length; i++) {
    sum += string[i].charCodeAt();
  }
  return sum;
}
console.log(utf16Value('Four score'));
console.log(utf16Value('Launch School'));
console.log(utf16Value('a'));
console.log(utf16Value(''));