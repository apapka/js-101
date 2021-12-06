//WeIrD StRiNg CaSe

function toWeirdCase(string) {
  return string.split(" ").map(word => stringToWeirdCase(word)).join(" ");
}

function stringToWeirdCase(string) {
  let newString = "";
  for (let i = 0; i < string.length; i ++) {
    if (i % 2 === 0) {
      newString += string[i].toUpperCase();
    } else {
      newString += string[i].toLowerCase();
    }
  }
  return newString;
}

console.log(toWeirdCase('String'));
console.log(toWeirdCase('Weird string case'));
console.log(toWeirdCase('This is a test'));


// 1.  Problem Description
// You are going to be given an array of integers. Your job is to take that array and 
//find an index N where the sum of the integers to the left of N is equal to the sum of the 
//integers to the right of N. If there is no index that would make this happen, return -1.

// For example:
// Let's say you are given the array [1, 2, 3, 4, 3, 2, 1]:
// Your function will return the index 3, because at the 3rd position of the array,
// the sum of left side of the index [1, 2, 3] and the sum of the right side 
//of the index [3, 2, 1] both equal 6.

// Another one:
// You are given the array [20, 10, -80, 10, 10, 15, 35]
// At index 0 the left side is []
// The right side is [10, -80, 10, 10, 15, 35]
// They both are equal to 0 when added. (Empty arrays are equal to 0 in this problem)
// Index 0 is the place where the left side and right side are equal.

function findEvenIndex(array) {
  for (let i = 0; i < array.length; i++) {
    let leftSide = array.slice(0, i);
    let rightSide = array.slice(i + 1);
    let leftSideSum = leftSide.reduce((sum, element) => sum + element, 0);
    let rightSideSum = rightSide.reduce((sum, element) => sum + element, 0);
    if (rightSideSum === leftSideSum) { 
      return i;
    }
  }
  return -1;
}
//Problem: 
/**
 * Input: Array of integers
 * Output: index
 * 
 *Rules: 
 */



// // Test Cases
// console.log(findEvenIndex([1,2,3,4,3,2,1]) === 3); // true
// console.log(findEvenIndex([1,100,50,-51,1,1]) === 1); // true
// console.log(findEvenIndex([1,2,3,4,5,6]) === -1); // true
// console.log(findEvenIndex([20,10,30,10,10,15,35]) === 3); // true
// console.log(findEvenIndex([20,10,-80,10,10,15,35]) === 0); // true
// console.log(findEvenIndex([10,-80,10,10,15,35,20]) === 6); // true
// console.log(findEvenIndex([-1,-2,-3,-4,-3,-2,-1]) === 3); // true



/*
Input: array of integers
Output: boolean value
Rules:
  -the integers at the index N will not count towards the left and right sums
  -an empty array should return 0 for this problem
Algorithm:
  -For each integer in input array
    -get the right and the left slice of the array, starting from that int's index
    -if the sums of those slices are equal, return the index `N`
  -Return -1
*/

// function findEvenIndex(ints) {
//   for (let n = 0; n < ints.length; n += 1) {
//     let leftSide = ints.slice(0, n);
//     let rightSide = ints.slice(n + 1);
//     let leftSideSum = leftSide.reduce((sum, currVal) => sum + currVal, 0);
//     let rightSideSum = rightSide.reduce((sum, currVal) => sum + currVal, 0);

//     if (leftSideSum === rightSideSum) return n;
//   }

//   return -1;
// }


//Valid spacing

function validSpacing(string) {
  if (string.trim() !== string){
    return false;
  }
  if (string.includes("  ")){
    return false; 
  }
  return true;
}
// console.log(vali);

// //is_prime
// is_prime(number) {
//   if (number <= 0) {
//     return false;
//   }
//   for (let i = 0; i < number; i++) {
//     if(number % i === 0) {
//       return false;
//     }
//   }function isPrime(number) {
//     if (number <= 1) {
//       return false;
//     }
//     for (let i = 2; i < number; i++) {
//       if(number % i === 0) {
//         return false;
//       }
//     }
//     return true;
//   }
//   return true;
// }

let arr = ['a', 'abcd', 'abcde', 'abc', 'ab'];
// console.log(oddLengths(arr)); // => [1, 5, 3]



// function oddLengths(arr) {
//   let arr2 = arr.map(element => element.length);
//   return arr2.filter(length => length % 2 === 1);
// }

function sumOfSquares(arr) {
  return arr.reduce((sum, element) => sum + element*element,0 );
}
console.log(sumOfSquares([3, 5, 7]))

function oddLengths(arr) { 
  return arr.reduce((array, element) => {
    if (element.length % 2 === 1) {
      array.push(element.length);
    }
    return array;
  },[]);
}

function comp(array1, array2){
  if (array1.length !== array2.length) { 
    return fase;
  }
  if (array1 === null || array2 === null) {
    return false;
  }
  let arr2 = array1.map(element => element * element);
  arr2.sort((a,b) => a - b);
  array2.sort((a,b) => a - b);
  for (let i = 0; i < arr2.length; i++) {
    if (array2[i] !== arr2[i]) {
      return false;
    }
  }
return true;
  
}

//Problem Description You are given an array of strings and an integer k. 
//Your task is to return the first longest string consisting of k consecutive strings taken in the array.

//Example: 
//longest_consec(["zone", "abigail", "theta", "form", "libe", "zas", "theta", "abigail"], 2)
// result => "abigailtheta"

// n being the length of the string array, if n = 0 or k > n or k <= 0 return "".

//problem:
  //input: array of strings, number
  //output: string 
  //rules: 
    //if array length = 0, return ""
    //if array length < number, return "";
    //if number <= 0 return "";
    //return the longest K consecutive strings taken from the array
  //example given in problem statement
  //data structure: 
  //algorithm: 1. (deal with the edge cases) 
  //2. set longestLength to 0, set longestString to "".
    // 3. take first slice of array from index 0 that is length k
    // 4. calculate length of the string
    //5. if length > longestLength, update longestLength and longestString
    //6. complelte steps 3-5 for each subsequent slice of the array
    // 7. return the string longestString
  //code: 

function longestConsec(array, k) {
  if (array.length === 0 || k > array.length || k <=0) {
    return "";
  }
  let longestLength = 0;
  let longestString = "";
  for (let i = 0; i <= array.length - k; i++) {
    let subArray =  array.slice(i, i + k);
    let string = subArray.reduce((finalString, string) => finalString + string, "");
    let length = string.length;
    if (length > longestLength) {
      longestLength = length; 
      longestString = string;
    }
  }
  // console.log(longestString);
  return longestString;
}
// longestConsec(["zone", "abigail", "theta", "form", "libe", "zas", "theta", "abigail"], 2);
// Test Cases
// console.log(longestConsec(["zone", "abigail", "theta", "form", "libe", "zas"], 2) === "abigailtheta"); // true
// console.log(longestConsec(["ejjjjmmtthh", "zxxuueeg", "aanlljrrrxx", "dqqqaaabbb", "oocccffuucccjjjkkkjyyyeehh"], 1) === "oocccffuucccjjjkkkjyyyeehh"); // true
// console.log(longestConsec([], 3) === ""); // true
// console.log(longestConsec(["itvayloxrp","wkppqsztdkmvcuwvereiupccauycnjutlv","vweqilsfytihvrzlaodfixoyxvyuyvgpck"], 2) === "wkppqsztdkmvcuwvereiupccauycnjutlvvweqilsfytihvrzlaodfixoyxvyuyvgpck"); // true
// console.log(longestConsec(["wlwsasphmxx","owiaxujylentrklctozmymu","wpgozvxxiu"], 2) === "wlwsasphmxxowiaxujylentrklctozmymu"); // true
// console.log(longestConsec(["zone", "abigail", "theta", "form", "libe", "zas"], -2) === ""); // true
// console.log(longestConsec(["it","wkppv","ixoyx", "3452", "zzzzzzzzzzzz"], 3) === "ixoyx3452zzzzzzzzzzzz"); // true
// console.log(longestConsec(["it","wkppv","ixoyx", "3452", "zzzzzzzzzzzz"], 15) === ""); // true
// console.log(longestConsec(["it","wkppv","ixoyx", "3452", "zzzzzzzzzzzz"], 0) === ""); // true

function test(parameter) {
  parameter = '45';
}
let obj = {a : 1, b: 2};
console.log(obj)
test(obj);
console.log(obj);

function foo(a) {
  return a + 1;
}

let x = 5;
console.log(x);
x = foo(x);
console.log(x);


//sumFibs
//Problem: Create a function that takes an argument n 
// and sums even Fibonacci numbers up to n's index in the fibonacci sequence
  //input: number n
  //output: number 
  //rules: add the even fibonacci numbers up to n's index
    //edge cases: if n <= 2, return 0. 
//examples given in problem
//algorithm: 
      //1. generate fibonacci sequence up to n index
          //1. create starting array [0, 1, 1]
          //2. create nth element adding sum of existing indices n-2 and n-1
          //3. push element to array
          //4. create each additional element repeating steps 2-3
      //2. add the even numbers in that sequence
          //1. filter the array for only even elements
          //2. reduce the array to the sum of those elements
      //3. return the sum
function sumFibs(n){
  let sum = 0;
  if (n <= 2) {
    return sum;
  }
  let fibNumbers = [0, 1, 1];
  for (let i = 3; i <= n; i++) {
    let ithElement = fibNumbers[i - 1] + fibNumbers[i - 2];
    fibNumbers.push(ithElement);
  }
  return fibNumbers
    .filter(element => element % 2 === 0)
    .reduce((sum, number) => sum + number);
}
// console.log(sumFibs(10));

//who likes it? 
// problem: input: array of names
        //output: string of who likes it
        //rules: 
          // 1. if empty array return  "no one" likes this
          // 2. if one name return "[name] likes this"
          // 3 if two names return "name and name like this"
          // 4. if three names return "name, name and name like this"
          // 5. if four or more names "name, name and X others like this"
//examples given in problem statement.
//data structure: array, deconstructed into string
//algorithm: handle cases 1, 2, 3, 4+ 

function likes(names) {
  if (names.length === 0) {
    return "no one likes this";
  } else if (names.length === 1) {
    return `${names[0]} likes this`;
  } else if (names.length === 2) {
    return `${names[0]} and ${names[1]} like this`;
  } else if (names.length === 3) {
    return `${names[0]}, ${names[1]} and ${names[2]} like this`;
  } else {
    return `${names[0]}, ${names[1]} and ${names.length - 2} others like this`;
  }
}


//sum of two lowest positive integers
function sumTwoSmallestNumbers(numbers){
  let firstSmallest = Math.min(...numbers);
  numbers.splice(numbers.indexOf(firstSmallest), 1);
  let secondSmallest = Math.min(...numbers);
  return firstSmallest + secondSmallest;
}
// console.log(sumTwoSmallestNumbers([19, 5, 42, 2, 77]));
// console.log(sumTwoSmallestNumbers([10, 343445353, 3453445, 3453545353453]));

//count 9's from 1 to n
//problem: input integer n 
  //output: number of 9s between 1 and n
  //rules: n will always be a positive integer
  //algorithm: 
    //use a loop to count from 1 to n
    //count nines in each number
    //return count

function number9(n) {
  let count = 0;
  if (n < 9) {
    return count;
  }
  for (let i = 1; i <= n; i ++) {
    let string = String(i);
    if (string.includes('9')) {
      count += count9s(string);
    }
  }
  return count;
}
function count9s(string) {
  let count = 0;
  if (!string.includes('9')) {
    return count;
  } else { 
    for (let i = 0; i < string.length; i ++){
      if (string[i] === '9') {
        count += 1;
      }
    }
  }
  return count;
}
// console.log(number9(8));
// console.log(number9(9));
// console.log(number9(10));
// console.log(number9(98));
// console.log(number9(10000000000));


//Multiples of 3 or 5
//Problem: return the sum of all the multiples of 3 or 5 below the number passed in
// if the number is negative, return 0.
//if the number is a multiple of both 3 and 5, only count it once.

//Input; number output: number rules: listed above
//example solution(10) = 3 + 5+ 6+ 9 = 23
//Datastructure 
//Algorithm: use a for loop from 1 to n

function solution(n) {
  let sum = 0;
  for (let i = 1; i < n; i ++) {
    if (i % 5 === 0) {
      // console.log(i)
      sum += i;
    } else if (i % 3 === 0) {
      sum += i;
      // console.log(i);
    }
  }
  return sum;
}
// console.log(solution(10));

//simple pig latin

//rule: leave punctuation marks untouched
function pigIt(string) {
  let punctuation = ['.', ',', ';', '!', '?']
  return string
    .split(" ")
    .map(word => {
      if (punctuation.includes(word)) {
        return word;
      }
      return word.slice(1) + word[0] + 'ay';
    })
    .join(" ");
}
console.log(pigIt('Pig latin is cool'));


//valid parentheses

function validParentheses(parentheses) {
  let count = 0; 
  for(let i = 0; i < parentheses.length; i ++) {
    if (parentheses[i] === '(') {
      count += 1;
    } else if (parentheses[i] === ')') {
        count -= 1;
    } 
    if (count < 0) {
      return false;
    }
  }
  if (count !== 0) {
    return false;
  }
  return true;
}

//problem: find all angrams in a list of a given word
// input: word, list of words output: array of words
// rules: if no angrams are found, return an empty array
//algorithm: 
  // test whether the first word in words is the same length 
  // test whether the first word has the same letters with the same quantities
      //split word into character array and sort it 
      // for each character, compare the index of that array...
function anagrams(word, words) {
  let angramList = [];
  for (let listWord of words) {
    if(areAngrams(listWord, word)) {
      angramList.push(listWord);
    }
  }
  return angramList;
}
function areAngrams(word1, word2) {
  if (word1.length != word2.length) {
    return false;
  } 
  let word1Chars = word1.split("").sort();
  let word2Chars = word2.split("").sort();
  for (let i = 0; i < word1Chars.length; i++) {
    if (word1Chars[i] !== word2Chars[i]) {
      return false;
    }
  }
  return true;
}

// console.log(anagrams('abba', ['aabb', 'abcd', 'bbaa', 'dada']));

//stop gninnipS My sdrow!

function spinWords(string) { 
  return string
    .split(" ")
    .map(word => {
      if (word.length >= 5) {
        return word.split("").reverse().join("");
      } else {
        return word;
      }
    })
}

//Does my number look big in this? 
//input: number output: boolean
//rules: only valid positive non-zero integers will be passed into the function

function narcissistic(value) {
  let string = String(value);
  let digitsToTheThird = string.split("").map(digit => {
    return Math.pow(digit, string.length);
  });
  let sum = digitsToTheThird.reduce((accumulator, value) => accumulator + value);
  return sum === value;
}

// console.log(narcissistic(153));
// console.log(narcissistic(1652));
// console.log(narcissistic(7));

//directions reduction
//problem: given an array of directions, 
      //simplify the plan/
//rules: 
//algorithm: 
    // if array length = 1, return the array
    // 1. if array[1] is the opposite of array[0], remove both from the array
    // 2. if array[2] is the opposite of array[1], remove both from the array
    // 3. repeat step 1/2 until you've gone through the entire array.
function dirReduc(arr) {
  let finalArray = [];
  let i = 0;
  if (arr.length === 1) {
    return arr;
  }
  while(i < arr.length) {
    if (areOpposites(arr[i], arr[i + 1])) {
      arr.splice(i, 2); 
      i = 0;
      continue;
    } else {
      i++;
    }
  }
  return arr;
}
function areOpposites(dir1, dir2) {
  if ((dir1 === "NORTH" && dir2 === "SOUTH") || 
        (dir1 === "SOUTH" && dir2 === "NORTH")) {
    return true;
  } else if ((dir1 === 'EAST' && dir2 === 'WEST') || 
            (dir1 === 'WEST' && dir2 === 'EAST')) {
    return true;
  } else {
    return false;
  }
}
// console.log(dirReduc(["NORTH", "EAST", "WEST", "SOUTH", "WEST", "WEST"]));
  
//started at 24 min finished at 16 minutes
//problem: how many times with the mother see the 
//ball bounce in front of her window? 

//bouncing balls
function bouncingBall(h,  bounce,  window) {
  if (h <= 0 || !(bounce > 0 && bounce < 1) || window > h) {
    return -1;
  }
  count = 0;  
  while (h > window) {
    count += 1;
    h *= bounce;
    if (h >= window) {
      count += 1;
    }
  }
  return count;
}
// console.log(bouncingBall(30.0, 0.66, 1.5));

//started at 14:00  finished at 4:00
//problem: given the recipe and available ingredients, 
  //return the maximum number of cakes that can be baked
  //data structure: objects
  //algorithm: 
    //1a. create a variable "maxCakes" and set it equal to 1000.
    //1. create an array of the keys of the recipe
    //2. for the first item in the array, check if available has that property
            //3. if available has that property, divide available by recipe
            //4. set if quotient < maxCakes, update maxCakes
            //5. if doesn't have that property, return 0.
    //repeat 2-5 for each additional ingredient in the recipe list.
    // return maxCakes.

    function cakes(recipe, available) {
      let maxCakes = 1000;
      let recipeIngredients = Object.keys(recipe);
      for (let i = 0; i < recipeIngredients.length; i++) {
        let ingredient = recipeIngredients[i]
        if (available.hasOwnProperty(ingredient)) {
          let cakes = Math.floor(available[ingredient] / recipe[ingredient]);
          if (maxCakes > cakes) {
            maxCakes = cakes;
          }
        } else {
          return 0;
        }
      }
      return maxCakes;
    }
    cakes({flour: 500, sugar: 200, eggs: 1}, {flour: 1200, sugar: 1200, eggs: 5, milk: 200}); 
    cakes({apples: 3, flour: 300, sugar: 150, milk: 100, oil: 100}, {sugar: 500, flour: 2000, milk: 2000}); 


    //started at 29 min finished at 16 min
    //moving zeros to the end
    //problem: input is an array, output is an array
    // move all the zeros to the end while preserving the order of the other elements
    //data structure: array
    //algorithm:
        // if item at index 0 is 0, take splice(0,1) and push a zero to the end.
        //
        // repeat for each index up to array.length. 
              //when find a zero, decrease index by 1 in the for loop to maintain integrity.

    function moveZeros(array) {
      let newArray = [];
      let zeroCount = 0;
      for (let i = 0; i < array.length; i++) {
        if (array[i] === 0) {
          newArray.push(array[i]);
          zeroCount += 1;
        } else {
          newArray.splice(newArray.length - zeroCount, 0, array[i]);
        }
      }
      console.log(newArray);
      return newArray;
    }
    moveZeros([false,1,0,1,2,0,1,3,"a"]) // returns[false,1,1,2,1,3,"a",0,0]

  
