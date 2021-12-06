function teddysAge(max, min) {
  let age = Math.floor(Math.random() * (120 - 20 + 1) + 20);
  return age;
}

console.log(teddysAge(20,120));

function searching101(){
  let rlSync = require('readline-sync');
  let number1 = Number(rlSync.question('Enter the 1st number: '));
  let number2 = Number(rlSync.question('Enter the 2nd number: '));
  let number3 = Number(rlSync.question('Enter the 3rd number: '));
  let number4 = Number(rlSync.question('Enter the 4th number: '));
  let number5 = Number(rlSync.question('Enter the 5th number: '));
  let number6 = Number(rlSync.question('Enter the last number: '));

  let arr = [number1, number2, number3, number4, number5];
  if (arr.includes(number6)) {
    console.log(`The number ${number6} appears in ${arr.join(",")}`);
  } else {
    console.log(`The number ${number6} does not appear in ${arr.join(",")}`);
  }
}
// searching101();
// let rlSync = require('readline-sync');
// let age = rlSync.question('What is your age?');
// let retireAge = rlSync.question('At what age would you like to require?');
// console.log(`It's 2021. You will retire in ${2021+ (retireAge - age)}`);
// console.log(`You only have ${retireAge - age} years of work to go!`);

function isPalindrome(string) {
  return string === string.split("").reverse().join("");
}

// console.log(isPalindrome('madam'));
// console.log(isPalindrome('Madam'));

function isRealPalindrome(string) {
  let newString = string.toLowerCase();
  newString = removeNonAlphanumerics(newString);
  return isPalindrome(newString);
}
function removeNonAlphanumerics(string) {
  let newString = "";
  for (let i = 0; i < string.length; i++) {
    if (string[i] > 'a' && string[i] < 'z') {
      newString += string[i];
    }
  }
  return newString;
}

// console.log(isRealPalindrome('madam'));
// console.log(isRealPalindrome("Madam, I'm Adam"));

function isPalindromicNumber(number) {
  return isPalindrome(String(number));
}

// console.log(isPalindromicNumber(34543));
// console.log(isPalindromicNumber(123210));

function runningTotal(arr) {
  let newArr = [arr[0]];
  for (let i = 1; i < arr.length; i++) {
    newArr.push(newArr[i - 1] + arr[i]);
  }
  return newArr;

}
// console.log(runningTotal([2,5,13]))

function wordSizes(string) {
  string = removeNonLetters(string);
  let arr = string.split(" ");
  console.log(arr);
  let obj = {};
  for (let i = 0; i < arr.length; i++){
    obj[arr[i].length] = obj[arr[i].length] || 0;
    obj[arr[i].length] += 1;
  }
  return obj;
}
function removeNonLetters(string) {
  string = string.toLowerCase();
  let newString = "";
  for (char of string) {
    if ((char >= 'a' && char <= 'z') || char === ' ') {
      newString += char;
    }
  }
  return newString;
}
// console.log(wordSizes('Four score and seven.'));
// console.log(wordSizes('Hey diddle diddle, the cat and the fiddle!'));

// console.log(wordSizes(("What's up doc?")));

function swap(string) {
  return string.split(" ").map(word => {
    if(word.length === 1) {
      return word;
    }
    return word.slice(-1) + word.slice(1,word.length - 1) + word.slice(0,1);
  })
}

console.log(swap("Oh what a wonderful day it is"))