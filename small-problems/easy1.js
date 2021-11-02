//---1  -- Isn't it odd? ---------------------------------------------
/* Write a function that takes one integer argument, 
which may be positive, negative, or zero. This method returns true if 
the number's absolute value is odd. You may assume that the argument is a 
valid integer value. */
// let isOdd = (number) => {
//   return (Math.abs(number) % 2 === 1);
// } 
// console.log(isOdd(2)); // => false
// console.log(isOdd(5)); // => true
// console.log(isOdd(-17)); // => true
// console.log(isOdd(-8)); // => false
// console.log(isOdd(0)); // => false
// console.log(isOdd(7)); // => true

//--- 2 -- Odd Numbers-------------------------------------------------
/*Log all odd numbers from 1 to 99, inclusive, 
to the console, with each number on a separate line.*/

// for(let i=1;i<100; i+=2){
//   console.log(i);
// }

//--- 3 -- Even Numbers-------------------------------------------------
/*Log all even numbers from 1 to 99, inclusive, 
to the console, with each number on a separate line.*/

// for (let i=2; i<100; i+=2){
//   console.log(i);
// }

//4 -- How big is the room? ---------------------------------------------
/*Build a program that asks the user to enter the length and width 
of a room in meters, and then logs the area of the room to the console
 in both square meters and square feet.*/

// let rlSync = require('readline-sync');
// let lengthInMeters = rlSync.question('Enter the length of the room in meters: ');
// let widthInMeters = rlSync.question('Enter the width of the room in meters: ');
// let area = lengthInMeters*widthInMeters;
// let areaInFeet = area * 10.7639;
// console.log(`The area of the room is ${area} square meters (${areaInFeet} square feet).`)

//5 -- Tip Calculator --------------------------------------------------
/*Create a simple tip calculator. The program should prompt for a bill 
amount and a tip rate. The program must compute the tip, and then 
log both the tip and the total amount of the bill to the console. 
You can ignore input validation and assume that the user will enter numbers.*/

// let rlSync = require('readline-sync');
// let billAmount = rlSync.question('What is the bill amount? ');
// let tipAmount = rlSync.question('What is the tip percentage? ');
// let tip = billAmount*tipAmount/100;
// let total = Number(tip)+Number(billAmount)
// console.log('The tip is $' + tip);
// console.log('The total amount is $' + total);

//6 -- Sum or Product of Consecutive Integers----------------------------
/*
Write a program that asks the user to enter an integer greater than 0, 
then asks whether the user wants to determine the sum or the product
 of all numbers between 1 and the entered integer, inclusive.
 */

// let rlSync = require('readline-sync');
// let number = parseInt(rlSync.question('Please enter an integer greater than 0: '));
// let x = rlSync.question('Enter "s" to compute the sum, or "p" to compute the product. ');
// let result;
// let keyword;
// if (x === 's'){
//   result = 0;
//   keyword = 'sum';
//   for (let i = number; i > 0; i--){
//     result += i;
//     console.log (result);
//   }

// }else if (x === 'p'){
//   result = 1;
//   keyword = 'product';
//   for (let i = number; i > 0; i--){
//     result *= i;
//   }
// }
// console.log(`The ${keyword} of the integers between 1 and ${number} is ${result}.`)



//7 -- Short Long Short-------------------------------------------------
/*Write a function that takes two strings as arguments, determines the length 
of the two strings, and then returns the result of concatenating the shorter string,
 the longer string, and the shorter string once again. 
You may assume that the strings are of different lengths.*/

// function shortLongShort(string1, string2){
//   if (string1.length < string2.length){
//     return string1 + string2 + string1;
//   }
//   return string2 + string1 + string2;
// }

// console.log(shortLongShort('abc', 'defgh'));    // "abcdefghabc"
// console.log(shortLongShort('abcde', 'fgh'));    // "fghabcdefgh"
// console.log(shortLongShort('', 'xyz'));         // "xyz"

//8 -- Leap Years (Part 1)-------------------------------------------------
/*In the modern era under the Gregorian Calendar, leap years occur in every year 
that is evenly divisible by 4, unless the year is also divisible by 100. 
If the year is evenly divisible by 100, then it is not a leap year, 
unless the year is also evenly divisible by 400.

Assume this rule is valid for any year greater than year 0. 
Write a function that takes any year greater than 0 as input 
and returns true if the year is a leap year, or false if it is not a leap year.
*/
// function isLeapYear(year){
//   if (year % 4 === 0){
//     if (year % 100 === 0){
//       if (year % 400 === 0){
//         console.log('true');
//         return true;
//       }
//       console.log('false');
//       return false;
//     }
//     console.log('true');
//     return true;
//   }
//   return false;

// }
// isLeapYear(2016);      // true
// isLeapYear(2015);      // false
// isLeapYear(2100);      // false
// isLeapYear(2400);      // true
// isLeapYear(240000);    // true
// isLeapYear(240001);    // false
// isLeapYear(2000);      // true
// isLeapYear(1900);      // false
// isLeapYear(1752);      // true
// isLeapYear(1700);      // false
// isLeapYear(1);         // false
// isLeapYear(100);       // false
// isLeapYear(400);       // true

//9 -- Leap Years (Part 2)-------------------------------------------------
/*This is a continuation of the previous exercise.

The British Empire adopted the Gregorian Calendar in 1752, 
which was a leap year. Prior to 1752, they used the Julian Calendar.
 Under the Julian Calendar, leap years occur in any year that is evenly
  divisible by 4.

Using this information, update the function from the previous exercise
 to determine leap years both before and after 1752.
*/
// function isLeapYear(year){
//   if (year<1752){
//     if(year % 4 === 0){
//       console.log('true1');
//       return true;
//     }
//   }
//   if (year % 4 === 0){
//     if (year % 100 === 0){
//       if (year % 400 === 0){
//         console.log('true2');
//         return true;
//       }
//       console.log('false1');
//       return false;
//     }
//     console.log('true3');
//     return true;
//   }
//   console.log('false2');
//   return false;

// }
// isLeapYear(2016);      // true
// isLeapYear(2015);      // false
// isLeapYear(2100);      // false
// isLeapYear(2400);      // true
// isLeapYear(240000);    // true
// isLeapYear(240001);    // false
// isLeapYear(2000);      // true
// isLeapYear(1900);      // false
// isLeapYear(1752);      // true
// isLeapYear(1700);      // true
// isLeapYear(1);         // false
// isLeapYear(100);       // true
// isLeapYear(400);       // true



//10 -- Multiples of 3 and 5-----------------------------------------------
/*Write a function that computes the sum of all numbers between 1 and some 
other number, inclusive, that are multiples of 3 or 5. For instance, 
if the supplied number is 20, the result should be 98 
(3 + 5 + 6 + 9 + 10 + 12 + 15 + 18 + 20).
You may assume that the number passed in is an integer greater than 1.*/

// function multisum(number){
//   let sum =0;
//   for (let i = 1 ; i<=number; i ++){
//     if (i % 3 === 0 || i % 5 === 0){
//       sum+=i;
//     }
//   }
//   console.log(sum);
//   return sum;
// }
// multisum(3);       // 3
// multisum(5);       // 8
// multisum(10);      // 33
// multisum(1000);    // 234168


//11 UTF-16 String Value-------------------------------------------------
/*Write a function that determines and returns the UTF-16 string value of a 
string passed in as an argument. The UTF-16 string value is the sum of the
 UTF-16 values of every character in the string. 
 
 (You may use String.prototype.charCodeAt() to determine the UTF-16 
 value of a character.)

*/

// function utf16Value(string){
// let sum = 0;
// for (let i=0; i<string.length; i++){
//   // console.log(string.charCodeAt(i));
//   sum+=string.charCodeAt(i);
// }
// console.log(sum);
// return sum;
// }

// utf16Value('Four score');         // 984
// utf16Value('Launch School');      // 1251
// utf16Value('a');                  // 97
// utf16Value('');                   // 0

// // The next three lines demonstrate that the code
// // works with non-ASCII characters from the UTF-16
// // character set.
// const OMEGA = "\u03A9";             // UTF-16 character 'Ω' (omega)
// utf16Value(OMEGA);                  // 937
// utf16Value(OMEGA + OMEGA + OMEGA);  // 2811