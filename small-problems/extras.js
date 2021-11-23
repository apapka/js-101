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
