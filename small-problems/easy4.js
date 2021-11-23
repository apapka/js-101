//How old is Teddy?

let age = Math.ceil(Math.random()* 100 + 20);
// console.log(`Teddy is ${age} years old.`);

//Searching 101
//Write a problem that solicits 6 numbers from the user and logs a message that 
//describes whether the sixth number appears among the first five numbers;

function searching(){
  let rlSync = require('readline-sync');
  let array = [];
  let firstNumber = rlSync.question('Enter the 1st number: ')
  array.push(firstNumber);
  let secondNumber = rlSync.question('Enter the 2nd number: ')
  array.push(secondNumber);
  let thirdNumber = rlSync.question('Enter the 3rd number: ')
  array.push(thirdNumber);
  let fourthNumber = rlSync.question('Enter the 4th number: ')
  array.push(fourthNumber);
  let fifthNumber = rlSync.question('Enter the 5th number: ')
  array.push(fifthNumber);

  let sixthNumber = rlSync.question('Enter the 6th number: ')
  if(array.includes(sixthNumber)){
    console.log(`The number ${sixthNumber} does appear in ${array}`);
  }else{
    console.log(`The number ${sixthNumber} does NOT appear in ${array}`);
  }
}

// searching();
//When will I retire? 

let today = new Date();
let currentYear = today.getFullYear();


//Palindromic strings

function isPalindrome(string){
  if (string.length === 1 || string.length === 0){
    return true;
  }else if (string[0] === string[string.length-1]){
    return isPalindrome(string.slice(1, string.length - 1));
  }else {
    return false;
  }
}

//better solution: 

function isPalindrome(string){
  return string === string.split('').reverse().join('');
}
// }
// console.log(isPalindrome('madam'));               // true
// console.log(isPalindrome('Madam'));               // false (case matters)
// console.log(isPalindrome("madam i'm adam"));      // false (all characters matter)
// console.log(isPalindrome('356653'));              // true\


//Palindromic Strings Part 2

//assumes lowercase string as input.
function removeNonAlphanumerics(string){
  let newString = "";
  for (char of string){
    if (char >= 'a' && char <= 'z'){
      newString += char;
    } else if (char >= '0' && char <= '9'){
      newString += char;
    }
  }
  return newString;
}

function isRealPalindrome(string){
  let newString = removeNonAlphanumerics(string.toLowerCase());

  return isPalindrome(newString);
}

// console.log(isRealPalindrome('madam'));               // true
// console.log(isRealPalindrome('Madam'));               // true (case does not matter)
// console.log(isRealPalindrome("Madam, I'm Adam"));     // true (only alphanumerics matter)
// console.log(isRealPalindrome('356653'));              // true
// console.log(isRealPalindrome('356a653'));             // true
// console.log(isRealPalindrome('123ab321'));            // false

function isPalindromicNumber(number){
  return isPalindrome(String(number));
}
// console.log(isPalindromicNumber(34543));        // true
// console.log(isPalindromicNumber(123210));       // false
// console.log(isPalindromicNumber(22));           // true
// console.log(isPalindromicNumber(5));            // true

//Running Totals
function runningTotal(arr){
  let runningTotal = 0;
  return arr.map(number =>{
    runningTotal += number;
    return runningTotal; 
  });
}
// console.log(runningTotal([2, 5, 13]));
// console.log(runningTotal([14, 11, 7, 15, 20]));
// console.log(runningTotal([3]));
// console.log(runningTotal([]));

//letter counter part 1
//write a function that takes a string consisting of zero or more space-separated words
//and returns an object that shows the number of words of different sizes..

function wordSizes(string){
  let obj = {};
  if (string.length ===  0){
    return obj;
  }
  let words = string.split(" ");
  // words.sort((a, b)=> a.length - b.length);
  // console.log(words);
  for (let word of words){
    if(obj.hasOwnProperty(word.length)){
      obj[word.length] += 1;
    }else { 
      obj[word.length] = 1;
    }
  }
  return obj;
}
// }
// wordSizes('Four score and seven.');                       // { "3": 1, "4": 1, "5": 1, "6": 1 }
// wordSizes('Hey diddle diddle, the cat and the fiddle!');  // { "3": 5, "6": 1, "7": 2 }
// wordSizes("What's up doc?");                              // { "2": 1, "4": 1, "6": 1 }
// wordSizes('');                                            // {}

//letter count part 2



// function removeNonLetters(string){
//   let newString ="";
//   for(char of string){
//     if (char >= 'a' && char <= 'z' || char >= 'A' && char <= 'Z'|| char === ' '){
//       newString += char;
//     }
//   }
//   return newString
// }

// console.log(wordSizes(removeNonLetters('Four score and seven')));
// console.log(wordSizes(removeNonLetters("What's up doc?")));
//Letter swap

// function swap(string){
//   let words = string.split(" ");
//   let newArray = [];
//   for (let word of words){
//     if(word.length === 1){
//       newArray.push(word);
//     }else {
//     let newWord = word[word.length - 1] + word.slice(1, word.length - 1) + word[0];
//     newArray.push(newWord);
//     }
//   }
//   return newArray.join(" ");
// }

// console.log(swap('Oh what a wonderful day it is'));  // "hO thaw a londerfuw yad ti si"
// console.log(swap('Abcde'));                          // "ebcdA"
// console.log(swap('a'));                              // "a"

//refactored with MAP.
function swap(string){
  let words = string.split(" ");
  let newArray = words.map(word =>{
    if (word.length === 1){
      return word;
    }
    let newWord = word[word.length - 1] + word.slice(1, -1) + word [0];
    return newWord;
  })
  return newArray.join(" ");
}
console.log(swap('Oh what a wonderful day it is'));  // "hO thaw a londerfuw yad ti si"
console.log(swap('Abcde'));                          // "ebcdA"
console.log(swap('a'));

