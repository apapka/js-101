/*ddaaiillyy ddoouubbllee -------------------------------------------------------

Write a function that takes a string argument and returns a new string that 
contains the value of the original string with all consecutive duplicate 
characters collapsed into a single character.

*/

// function crunch(s){
//   if(s.length === 0 || s.length === 1){
//     console.log(s);
//     return s;
//   }
//   let newString = s.charAt(0);
//   for(let i = 1; i<s.length; i++){
//     if (s.charAt(i) !== s.charAt(i-1))
//       newString+=s.charAt(i);
//   }
//   console.log(newString)
//   return newString;
// }
// crunch('4444abcabccba');              // "4abcabcba"
// crunch('ggggggggggggggg');            // "g"
// crunch('a');                          // "a"
// crunch('');                           // ""


//Bannerizer----------------------------------------------------------------
//Write a function that will take a short line of text, and 
//write it to the console log within the box.

function logInBox(string){
  let dashLine = "+";
  let emptyLine = "|"
  let stringLine = "| " + string + " |"
  for (let i = 0; i < string.length + 2; i ++){
    dashLine += "-";
    emptyLine += " ";
  }
  dashLine += "+"
  emptyLine +="|";
  console.log(dashLine);
  console.log(emptyLine);
  console.log(stringLine);
  console.log(emptyLine);
  console.log(dashLine);
}
logInBox('');
logInBox('To boldly go where no one has gone before.');

//take 2
function loginBox(string) {
let dashedLine = '+' + '-'.repeat(string.length + 2) + '+';
let emptiedLine = '|' + " ".repeat(string.length + 2) + '|';
let stringLine = '| ' + string + ' |';

console.log(dashedLine);
console.log(emptiedLine);
console.log(stringLine);
console.log(emptiedLine);
console.log(dashedLine);
}
loginBox('');
loginBox('To boldly go where no one has gone before.');

//Stringy strings------------------------------------------------------------
//Write a function that takes one argument, a positive integer, and returns a
//string of alternating '1's and '0's , always starting with a '1'. 
//The length of the string should match the given integer.

function stringy(number){
  let string = "";
  for (let i = 1; i <= number; i++) {
    if (i % 2 === 1){
      string += '1';
    } else {
      string += '0';
    }

  }
  return string;
}
console.log(stringy(6));    // "101010"
console.log(stringy(9));    // "101010101"
console.log(stringy(4));    // "1010"
console.log(stringy(7));    // "1010101"

//fibonacci index by length

//right triangles

function triangle(x) {
  let numSpaces = x;
  let numStars = 0;
  while(numSpaces >= 0){
    console.log(" ".repeat(numSpaces) + "*".repeat(numStars));
    numSpaces -= 1;
    numStars += 1;
  }
}
triangle(5);
triangle(9);

//Madlibs: 

// let rlSync = require('readline-sync');
// let noun = rlSync.question('Enter a noun: ');
// let verb = rlSync.question('Enter a verb: ');
// let adjective = rlSync.question('Enter an adjective: ');
// let adverb = rlSync.question('Enter an adverb: ');

// console.log(`Do you ${verb} your ${adjective} ${noun} ${adverb}? That's hilarious!`);
// console.log(`The ${adjective} ${noun} ${verb}s ${adverb} over the lazy ${noun}`);
// console.log(`The ${noun} ${adverb} ${verb}s up ${adjective} Joe's turtle`);

//Double doubles
//A double number is an even-length number whose left-side digits are exactly 
//the same as its right-side digits. 
//Write a function that returns the number provied as an argument multiplied by two, unless the 
//argument is a double number; otherwise return the double number as-is

function isDoubleNumber(number){
  if(String(number).length % 2 === 0){
    let midpoint = String(number).length / 2;
    let leftSide = String(number).slice(0,midpoint);
    let rightSide = String(number).slice(midpoint);
    if (leftSide === rightSide){
      return true;
    }else{
      return false;
    }
  }else{
    return false;
  }
}

function twice(number){
  if (isDoubleNumber(number)){
    console.log(number);
    return number;
  }else{
    console.log(number * 2);
    return number * 2;
  }
}
// twice(37);          // 74
// twice(44);          // 44
// twice(334433);      // 668866
// twice(444);         // 888
// twice(107);         // 214
// twice(103103);      // 103103
// twice(3333);        // 3333
// twice(7676);        // 7676

//Grade Book
function getGrade(one, two, three){
  let avg = (one + two + three) / 3;
  console.log(avg);
  let grade;
  if (avg >= 90) {
      grade = 'A';
  } else if (avg >=80) {
      grade =  'B';
  } else if (avg >= 70) {
      grade = 'C';
  } else if (avg >= 60) {
      grade = 'D';
  } else {
      grade = 'F';
  }
  return grade;
}
// console.log(getGrade(95,90,93));
// console.log(getGrade(50,50,95));

//Clean up the words
function cleanUp(string){ 
//allowed charCodes are between 65 and 90 and between 97 and 122, inclusive
  let newString = '';
  for (let char of string) {
    let charCode = char.charCodeAt();
    if ((charCode <= 90 && charCode >=65) || (charCode >= 90 && charCode <= 122)){
      newString += char;
    } else if (newString[newString.length - 1] !== ' '){
      newString += " ";
    }
  }
  return newString;

}
// console.log(cleanUp("---what's my +*& line?"));

//What century is that?

function century(year){
  let century = Math.ceil(year / 100);
  let lastDigit = century % 10;
  let lastTwoDigits = century % 100;
  let centuryString = String(century);
  if (lastTwoDigits > 10 && lastTwoDigits < 14){
    centuryString += 'th';
  } else{
    switch (lastDigit){
      case 1:
        centuryString += 'st';
        break;
      case 2: 
        centuryString += 'nd';
        break;
      case 3:
        centuryString += 'rd'
        break;
      default:
        centuryString += 'th';
        break;

    }
  }
  console.log(centuryString);
  return centuryString;
}
century(2000);        // "20th"
century(2001);        // "21st"
century(1965);        // "20th"
century(256);         // "3rd"
century(5);           // "1st"
century(10103);       // "102nd"
century(1052);        // "11th"
century(1127);        // "12th"
century(11201);       // "113th"