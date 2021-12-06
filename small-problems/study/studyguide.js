//you have to create a function that takes a positive integer number and returns 
//the next bigger number formed by the same digits
//12 -> 21
//513 -> 531
//2017 -> 2071

//if no bigger number can be composed using those digits, return -1

//inputs: integer, output: integer
//rules: if no bigger number can be composed

//algorithm: 
  //function to determine if same digits: 
      //compare two strings if they have the same digits, return true, else return false
      //split each string into arrays and sort, if they are identical, return true
  //increment upwards from number. 
  //handle edge case: if the number is sorted greatest to least or number is less than 10, return -1.
function sameDigits(string1, string2) {
  return String(string1).split("").sort().join("") === String(string2).split("").sort().join("");
}
function nextBiggerNum(num){ 
  let sortedNum = String(num).split("").sort((a,b) => b - a).join("");
  if (sortedNum == num) {
    return -1;
  }
  if (num < 10) {
    return -1;
  }
  for (let i = num + 1; ; i++ ){
    if (sameDigits(num, i)) {
      return i;
    }
  }
}
// console.log(nextBiggerNum(9));
// console.log(nextBiggerNum(12));
// console.log(nextBiggerNum(513));


//Write function scramble(str1, str2) that returns true if a portion of str1
//characters can be rearranged to match str2, otherwise return false

//input: string1, string2
//output: true or false, whether str1 chars can be rearranged to match str2

//algorithm: 
  //str2 to array
  //for each character in string 1, if str2 array includes it
    // pop that character from array.

  //if array2 is empty, return true, else return false

function scramble(string1, string2) {
  let arr1 = string1.split("").sort();
  for (let i = 0; i < string2.length; i++) {
    let char = string2[i];
    if (arr1.includes(char)) {
      arr1.splice(arr1.indexOf(char),1);
    } else {
      return false;
    }
  }
  return true;
}

// console.log(scramble('javaass','jjss'));

// console.log(scramble('rkqodlw', 'world'));

//given a non-empty string check if it can be constructed by taking a substring of it 
//and appending multiple copies of the substring together. 

//input: string
//output: true or false
//questions: what about single characters? would aaa be true? 
//algorithm: 
  //get all substrings of the string
    //separate function getSubstrings()
      //set newArray to empty array
      //for each index from 0 to end of string
        //for each index from i + 1 to end of string
          //add substring(indexa, indexb) to newArray 
  //filter the substrings that don't work length-wise
          //so if string.length % substring.length !===0, filter the substring out
      //loop over all substrings
        //let repeatCount = string.length / substring.length
        // set a string to substring.repeat(count)
        // if string === original string, return true
      //if no substrings returned true, return false.

function repeatedSubstringPattern(string) {
  let substrings = getSubstrings(string);
  substrings = substrings.filter(element => {
    if (element === string) {
      return false;
    }
    return string.length % element.length === 0;
  });
  for (let i = 0; i < substrings.length; i++) {
    let substring = substrings[i];
    let repeatCount = string.length / substring.length;
    let testString = substring.repeat(repeatCount);
    if (testString === string) {
      return true;
    }
  }
  return false;
}
// console.log(repeatedSubstringPattern("abab"));
// console.log(repeatedSubstringPattern('aba'));
// console.log(repeatedSubstringPattern('aabaaba'));
// console.log(repeatedSubstringPattern('abaababaab'));
// console.log(repeatedSubstringPattern('abcabcabcabc'));

function getSubstrings(string) {
  let arr = [];
  for (let i = 0; i < string.length; i++) {
    for (let b = i + 2; b <= string.length; b++){
      arr.push(string.slice(i,b));
    }
  }
  return arr;
}


//Given an array of strings made only from lowercase ltters, 

//return an array of all characters that show up in all strings within the given array
//For example, if a character occurs 3 times in all strings, but not four times, 
// you need to include that character three times in the final answer
//input: array of strings
//output: array of characters that show up in all strings

//bella, label, roller
// ['r','o','l','l','e','r]
//['b', 'e',' l', 'l', a']
//algorithm:
  //sort strings by longest value
  //populate finalArray with the characters from shortestString
  //take the secondLongestSTring, set it as array to currArray
  //  If currArray.includes(finalArray[i]), remove it from currArray.
  // else remove it from finalArray.
  //repeat for each additional string
  //

  //questions: what bout when there's only one string, or an empty string

function commonChars(array) {
  array.sort((a, b) => a.length - b.length);
  let finalArray = array[0].split("");
  for (let i = 1; i < array.length; i++) {
    let currentString = array[i];
    let currArray = currentString.split("");
    for (let i = 0; i < finalArray.length; i++) {
      if (currArray.includes(finalArray[i])) {
        currArray.splice(currArray.indexOf(finalArray[i]),1);
      } else {
        finalArray.splice(i, 1);
        i -= 1;
      }
    }
  }
  return finalArray;
}
// console.log(commonChars(['a','b']));
// console.log(commonChars(['ab', 'bc']));
// console.log(commonChars(['bella', 'label', 'roller']));
// console.log(commonChars(['cool', 'lock','cook']));
// console.log(commonChars(['hello', 'goodbye', 'booya', 'random']));
// console.log(commonChars(['aabbaaaa', 'ccdddddd', 'eeffee', 'ggrrr', '']));

//Given 2 strings, find out if there is a substring that appears in both strings.
//input: 2 strings
//output: true or false

//algorithm:
  // get all the substrings length 2 or longer of the first String and the second string
      //getSubstrings method
          // sets array to empty array
          // starting from 0 to string.lngth
              //starting from i + 2 to string.length
                  //array.push(slice(i, i + 1));

  //iterate through one substring set, 
  // if other substring set has that value, return true
  //if you get to the end, return false.

function substringTest(string1, string2) {
  let array1 = getSubstrings(string1); 
  let array2 = getSubstrings(string2);
  for (let i = 0; i < array1.length; i++) {
    if (array2.includes(array1[i])) {
      return true;
    }
  }
  return false;
}

// console.log(substringTest("Something", "Fun"));
// console.log(substringTest("Something", "Home"));

function getSubstrings(string) {
  let array = [];
  for (let i = 0; i < string.length; i++) {
    for (let idx = i + 2; idx <= string.length; idx++) {
      array.push(string.slice(i,idx));
    }
  }
  return array;
}

// console.log(getSubstrings('abcd'))
                

//Write a function to find the longest common prefix string among an array of strings

//input: array of strings
//output: longest common prefix

//algorithm: 
  //set longestCommonPrefix to the shortest word, split into an array
  //for each word in the array 
      //for each charcter in longestCommonPrefix
        //see if the characters match. 
        //if they don't, stop the array there.

function commonPrefix(array) {
  if (array.length === 0) {
    return "";
  }
  array.sort((a, b) => a.length - b.length);
  let longestCommonPrefix = array[0].split("");
  for (let i = 0; i < longestCommonPrefix.length; i++ ){
    let currChar = longestCommonPrefix[i];
    for (let b = 1; b < array.length; b++){
      if (array[b][i] !== currChar) {
        return longestCommonPrefix.slice(0,i).join("");
      }
    }
  }

  return longestCommonPrefix.join("");
}
console.log(commonPrefix(['flower', 'flow', 'flight']))