// Instructions

// A palindrome is a word, phrase, number, or other sequence of characters
// which reads the same backward as forward. Examples of numerical palindromes are:
// 2332
// 110011
// 54322345
// You'll be given 2 numbers as arguments: (num, s).
// Write a function which returns an array of s number of numerical palindromes
// that come after num. If num is a palindrome itself, it should be included in the count.

// Return "Not valid" instead if any one of the inputs is not a number or is less than 0.

// Single digit numbers will NOT be considered numerical palindromes.
console.log(palindrome(6,4)); // [11,22,33,44]
console.log(palindrome(75,1)); // [77]
console.log(palindrome(101,2)); // [101,111]
console.log(palindrome(20,0)); // []
console.log(palindrome(0,4)); // [11,22,33,44]
console.log(palindrome("ACCDDCCA",3)); // "Not valid"
console.log(palindrome(773,"1551")); // "Not valid"
console.log(palindrome(-4505,15)); // "Not valid"
console.log(palindrome(4505,-15)); // "Not valid"

/*
input: number and a count s
output: array of size s, contain numerical palindromes that come after 'num'
rules: if either input is not a number or is < 0, return not valid
    if input num is a palindrome, it should be included in count
    if s is 0 return empty aray
*/

//algorithm: 
  //deal with s == 0 
  //deal with either input not being a number or being < 0
//function isPalindrome(num) {
    //compare the reversed num to num.
        //convert to a string, split into an array, reverse, rejoin
//set an empty array
//set counter = num
  //while array.length is less than 's'
      //if isPalindrome(counter) 
          //add to array
      //increment counter
  //return array

function palindrome(num, s) {
  if (typeof num !== 'number' || typeof s !== 'number' || num < 0 || s < 0) {
    return 'not valid';
  }
  if (s === 0) {
    return [];
  }
  let array = [];
  let counter = num;
  while (array.length < s) {
    if (isPalindrome(counter)) {
      array.push(counter);
    }
    counter += 1;
  }
  return array;

}
function isPalindrome(num) {
  if (num < 10) {
    return false;
  }
  return num === Number(String(num).split("").reverse().join(""));
}
console.log(isPalindrome(12341));
console.log(isPalindrome(121));
console.log(isPalindrome())