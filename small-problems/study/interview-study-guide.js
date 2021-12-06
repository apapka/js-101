//You have to create a function that takes a positive integer number and 
//returns the next bigger number formed by the same digits: 

//12 ==> 21
//513 => 531
// 2017 => 2071
//If no bigger number can be composed using those digits, return -1 .

/*Problem: return next bigger number formed by the same digits
input: number
output: number

examples:


data structure: 
array

algorithm:
  deal with the cases where no bigger number can be composed.
    all numbers less than 10, return -1;
    all numbers that are already sorted largest to smallest

  sort the last two digits
  compare the number with the number with the number with the last two digits sorted
  if (sorted > unsorted) return sorted
  else sort last two to lowest number, and sort three.
  else put lowest digit into third to last index, and push others over
  sort the last three digits... repeating steps above with more digits until find number.
4132  4231  
5113  5131
51133 51133  51313  51313 
10010 10100

2171  ==> 2711
  2171 -> 2171 -> 
2173 ==> 2317
  2173 -> 2173 -> 2317 -> 

211273 -> 211327

23137  -> 23
14532 -> 15432
1432 -> 2134
1234 -> 1243          [4,3,2,1] if number[lastIndex] = maxArray



if last digit > secondtoLast digit, swap. if updatedNum > num, return num
else if lastdigit > thirdtolast digit, splice it in. reverse sort digits 1-3

*/

function nextBiggerNum(num) {
  if (num < 10 || isSorted(num)) {
    return -1; 
  }
  let numArray = String(num).split("");
  if(numArray[numArray.length - 1] > numArray[numArray.length - 2]) {
    [numArray[numArray.length - 1], numArray[numArray.length - 2]] = [numArray[numArray.length - 2], numArray[numArray.length - 1]];
  } else {

  }
  return Number(numArray.join(""));
}
// console.log(nextBiggerNum(12));

function isSorted(num) {
  return num == String(num).split("").sort((a,b) => b - a).join("");
}

//input: array of strings
  //output: string
  
//algorithm: set an empty string prefix
  //put first letter of first string into prefix
  //test prefix against each word in the array
    //if not a match, return prefix minus last char
  //if all are a match, add next char of firstword to prefix
  //repeat steps 2-5 until you've reached the end

function commonPrefix(array) {
  let index = 0;
  let nextLetter = "";
  let prefix = "";
  while (index < array[0].length) {
    nextLetter = array[0][index]
    if (!array.every((string) => string[index] === nextLetter) ) {
      return prefix;
    }
    prefix += nextLetter;
    index += 1;
  }
  return prefix;
}
console.log(commonPrefix(['flower','flow','floght']));
console.log(commonPrefix(['throne','throne']));

/* You are going to be given an array of integers. Your job is to take that array
and find an index N where the sum of integers on the left of N is equal to the sum 
of the integers to the right of N. If there is no index that would make this happen, 
return -1. */

function findEvenIndex(array) {
  for (let i = 0; i < array.length; i++) {
    let leftside = array.slice(0, i);
    let rightside = array.slice(i);
    let leftSum = leftside.reduce((sum, element) => sum + element, 0);
    let rightSum = rightside.reduce((sum, element) => sum + element, 0);
    console.log(leftSum); 
    console.log(rightSum);
    if (leftSum === rightSum) {
      return i;
    }
  }
  return -1;
}
let arr = [1,2,3,4,5];
// console.log(findEvenIndex(arr));
console.log(findEvenIndex([1,2,3,4,3,2,1]));
// console.log(findEvenIndex([1,100,50,-51,1,1]));
// console.log(findEvenIndex([20,10,-80,10,10,15,35]));



//write function scramble (str1, str2) that returns true if a portion of str1
//characters can be rearranged to match str2, otherwise return false

//problem
//input string, output boolean
//rules: 
  //if either string is empty, return false
  //if str1.length < str2. length, return false; 

//example
// tra , art  === true; 
//artt , art === true
//katas, steak === false
///kates, steak === true

//algorithm: 
  //split str1 and str2 into arrays
  //for each element in str2, if it is found in arr1 delete it from arr1.
  //if not found, return false.
  //return true after the loop

function scramble(str1, str2) {
  if (str1.length < str2.length) {
    return false;
  }
  let arr1 = str1.split("");
  let arr2 = str2.split("");
  for (let i = 0; i < arr2.length ; i++) {
    if (arr1.includes(arr2[i])) {
      arr1.splice(arr1.indexOf(arr2[i]), 1);
    } else {
      return false;
    }
  }
  return true;
}
// console.log(scramble('jajvass','jjss'));
// console.log(scramble('jav', 'java'))
// console.log(scramble('katas', 'staka'));

//Find out if there is a substring that exists in both strings. 
//We only care about substrings that are longer than one letter long

//input: string
//output: boolean

//rules: 
 // ignore case
//algorithm: 
  //get substrings longer than 1 letter of both strings
  //iterate through one set of substrings, if found in the other return true
  //if no substrings from one set found in the other, return false

function substringTest(string1, string2) {
  if (string1 === '' || string2 === '') {
    return false;
  }
  let substrings1 = getSubstrings(string1.toLowerCase());
  let substrings2 = getSubstrings(string2.toLowerCase());

  for (let i = 0; i < substrings1.length; i++) {
    if (substrings2.some(element => substrings1.includes(element))){
        return true;
    }
  }
  return false;
}

console.log(substringTest('Something', 'Fun'));
console.log(substringTest('Something', 'Home'));
console.log(substringTest('','Something'));
console.log(substringTest('BANANA', "banana"));
console.log(substringTest('1234567', '541265'));
function getSubstrings(string) {
  let substrings = [];
  for (let i = 0; i <= arr.length; i ++) {
    for ( let b = i + 2; b <= arr.length + 2; b++) {
      substrings.push(string.slice(i,b));
    }
  }
  return substrings;
}
console.log(getSubstrings('abcdefg'));