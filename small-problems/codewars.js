function duplicates(array){
  let count = 0;
  if (array.length <= 1) {
    return count;
  }
  let i = 0;
  while (i < array.length) { 
    let nextIndex = array.indexOf(array[i], i + 1);
    if (nextIndex >= 0) {
      count += 1;
      array.splice(nextIndex, 1);
      i+=1;
    } else {
      i +=1;
    }
  }
  return count;

}
console.log(duplicates([1,2,5,6,5,2]));

function solve(s){
  let substrings = getSubstrings(s);
  console.log(substrings);
  let oddSubstrings = substrings.filter((elem => elem % 2 === 1));
  return oddSubstrings.length;

};

function getSubstrings(s) {
  let substrings = [];
  for (let i = 0; i < s.length; i++) {
    substrings.push(s[i]);
    for (let b = i + 2; b <=  s.length; b ++) {
      substrings.push(s.slice(i,b));
    }
  }
  return substrings;
}
// console.log(solve("1357"));

/**
 * @param {string} s
 * @return {number}
 */
 function substrings(s) {
  let substrings = [];
  for (let i = 0; i < s.length; i++) {
      for (let b = i + 1; b <= s.length; b ++) {
          substrings.push(s.slice(i,b));
      }
  }
  return substrings;
}
function noRepeats(substring) {
  for (let i = 0; i < substring.length; i++) {
      if (substring.indexOf(substring[i],i + 1) > 0) {
          return false;
      }
  }
  return true;
}
var lengthOfLongestSubstring = function(s) {
  let maxLength = 0;
  let strings = substrings(s);
  let filteredStrings = strings.filter(substring => {
      return noRepeats(substring);
  });
  console.log(noRepeats);
};


console.log(lengthOfLongestSubstring('abcabcbb'));


function anagramDifference(w1,w2){
//   let word1 = {};
//  for (let i = 0; i < w1.length; i ++) {
//    word1[w1[i]] = word1[w1[i]] + 1 || 1;
//  }
//  let word2 = {}; 
//  for (let i = 0; i < w2.length; i ++) {
//    word2[w2[i]] = word2[w2[i]] + 1 || 1;
//  }

//
let letters1 = w1.split("");
let letters2 = w2.split("");
let deleteCount = 0;
for(let i = 0; i < letters1.length; i++) {
  if (!letters2.includes(letters1[i])) {
    deleteCount += 1;
    letters1.shift();
    i -=1;
  } else {
    letters2.splice(letters2.indexOf(letters1[i]),1);
  }
}
deleteCount += letters2.length;
return deleteCount;
}

console.log(anagramDifference('codewars', 'hackerrank'));

//Split Strings

//input: string
//output: array of 2 character strings

function solution(str) {
  let arr = [];
  if (str.length % 2 === 1) {
    str += "_";
  }
  for (let i = 0; i < str.length; i+=2) {
    arr.push(str[i] + str[i + 1]);
  }
  return arr;
}
console.log(solution('abc'));
console.log(solution('abcdef'));

// write the function isAnagram

//make both arrays
//take char 1 of test
//find index of char in original
//if exists, splice it from array
//if doesn't exist return false
//
var isAnagram = function(test, original) {
  let arr1 = test.toLowerCase().split("");
  let arr2 = original.toLowerCase().split("");
  for(let i = 0; i < test.length; i++) {
    let char = arr1[i];
    let index = arr2.indexOf(char);
    if(index < 0) {
      return false;
    } else {
      arr2.splice(index, 1);
    }
  }
  return arr2.length === 0;
};

var isAnagram = function(test, original) {
  var t = test.toLowerCase().split("").sort().join("");
  var o = original.toLowerCase().split("").sort().join("");
  return t===o;
}

console.log(isAnagram('foefet', 'toffee'));

function solve(s){
  const VOWELS = ['a','e', 'i', 'o', 'u'];
  let maxCount = -1;
  let count = 0;
  for (let i = 0; i < s.length; i++){
    if (VOWELS.includes(s[i])) {
      console.log(`${count} is count. ${s[i]} is currLetter.`)
      count += 1;
    } else {
      if (maxCount < count) {
        console.log(`${count} resetting count`);
        maxCount = count;
      }
      count = 0;
    }
  }
 return maxCount;
}

console.log(solve('codewars'));


/*
return a string where:

the first and last characters remain in original place for each word
characters between the first and last characters must be sorted alphabetically
punctuation should remain at the same place as it started, for example: shan't -> sahn't
*/

ScrambleWords = function(str) {
  let words = str.split(" ");
  return words.map( word => {
    let middlePart = str.slice(1, str.length - 1);
    middlePart = middlePart.split("").sort().join("");
    return str[str.length - 1] + middlePart + str[0];
  }).join(" ");

  
}

console.log(ScrambleWords('ZaabdceaF'));


/*Write a function that, given a string of text 
(possibly with punctuation and line-breaks), 
returns an array of the top-3 most occurring words,
 in descending order of the number of occurrences.
*/

//input : string
//output: array of top 3- most occurring words
//rules: matches should be case-insensitive, words in result shoudl be lowercase.
// if text contains fewer than 3 unique words, then either top-2 or top-1 should be returned.

//algorithm: 



function fixCharacters(word) {
  let string = "";
  for (let i = 0; i < word.length; i++){
    if ((word[i] >='a' && word[i] <='z') || word[i] === "'") {
      string += word[i];
    }
  }
  return string;
}

console.log(fixCharacters("won't"));
console.log(fixCharacters("//wont"))

function topThreeWords(text) {
  let words = text.toLowerCase().split(" ");
  words = words.map( word => {
    return fixCharacters(word);
  });
  let wordCounts = {};
  for (let i = 0; i < words.length; i++) {
    let word = words[i].toLowerCase();
    if (word === '') {
      continue;
    }
    wordCounts[word] = wordCounts[word] + 1 || 1;
  }
  let wordCountArray = Object.entries(wordCounts);
  wordCountArray.sort((a, b) => b[1] - a[1]);
  // console.log(wordCountArray)
  if(wordCountArray.length >= 3) {
    return [wordCountArray[0][0], wordCountArray[1][0], wordCountArray[2][0]];
  } else if (wordCountArray.length === 2) {
    return [wordCountArray[0][0], wordCountArray[1][0]];
  } else if (wordCountArray.length === 1) {
    return [wordCountArray[0][0]];
  }else {
    return [];
  }
}

console.log(topThreeWords("  //wont won't won't "));
console.log(topThreeWords("a a a  b  c c  d d d d  e e e e e"))


function kebabize(str) {
  let string = "";
  for (let i = 0; i < str.length; i++) {
    if(str[i] >= 'A' && str[i] <= 'Z') {
      if(i === 0) {
        string += `${str[i].toLowerCase()}`
      } else {
        string += `-${str[i].toLowerCase()}`
      }
    } if(str[i] >= 'a' && str[i] <= 'z'){
      string += str[i];
    }
  }
  return string;
}
console.log(kebabize('camelsHaveThreeHumps'));
console.log(kebabize('Zog'));

function songDecoder(song){
  let arr = song.split("WUB");
  arr = arr.filter(word => word !== "");
  return arr.join(" ").trim();
}
// console.log(songDecoder("AWUBBWUBC"));
// console.log(songDecoder("AWUBWUBWUBBWUBWUBWUBC"));

function alphabetized(s) {
  let arr = s.split("");
  console.log(arr);
  arr = arr.filter((word) => word != " ");
  arr = arr.sort((a, b) => {
    if (b.toLowerCase() < a.toLowerCase()) {
      return 1;
    } else if (b.toLowerCase() > a.toLowerCase()) {
      return -1;
    } else {
      return 0;
    }
  });
  return arr.join("");
}
// console.log(alphabetized('The Holy Bible'));



function greatestProduct(input) {
  let substrings = getSubstrings(input);
  let maxProduct = 0;
  for (let i = 0; i < substrings.length; i++) {
    let currSubstring = substrings[i];
    let currProduct = currSubstring.split("").reduce((accumulator,element) => accumulator * element, 1);
    console.log(currSubstring + " " + currProduct);
    if (currProduct > maxProduct) {
      maxProduct = currProduct;
    }
  }
  return maxProduct;
}

function getSubstrings(string) {
  let arr = [];
  for (let i = 0; i < string.length - 4; i++) {
    arr.push(string.slice(i, i+5));
  }
  return arr;
}
console.log(getSubstrings('1234567890'));
console.log(greatestProduct("123834539327238239583"));

function wave(str){
  str = str.toLowerCase();
  let arr = str.split("");
  console.log(arr);
  let newArr = [];
  for(let i = 0; i < str.length; i ++) {
    while(arr[i] === " "){
      i++;
    }
    if (i >= str.length) {
      newArr.push(arr.join(""));
      break;
    }
    arr[i] = arr[i].toUpperCase();
    newArr.push(arr.join(""));
    arr[i] = arr[i].toLowerCase();
  }
  return newArr;
}
console.log(wave("two words"));
console.log(wave(" gap "));



//toWeirdCase. 

//input: string
//output: string with all of EACH WORD's even index chars uppercase, and odd index lowercase
//rules:  words will be separated by a single space


//create an array of words
//for each word, change it to weird case
  //loop over the words characters 
    //if index is even, to uppercase
    //if index is odd, to lowercase
  // return the sentence
function toWeirdCase(string){
  let arr = string.split(" ");
  arr = arr.map(word=> {
    return word.split("").map((char, index) => {
      if (index % 2 === 0) {
        return char.toUpperCase()
      } if (index % 2 === 1) {
        return char.toLowerCase();
      }
    }).join("");
  })
  return arr.join(" ");
}
console.log(toWeirdCase('String'));
console.log(toWeirdCase('Weird string case'));

//
//given an array of words, return an array of the nuber of 
//letters that occupy their positions in the alphabet for each word


//input: array of strings
//output: array of integers

//algorithm:

  //function for a word to determine the number of letters occupying alphabet positions
  //set a map of the alphabet using an array
  // set counter to 0
  //check if the first char === index 1's letter in the alphabet
  // if it does, increment counter by 1
  //repeat with second char, second index
  //repeat with each char, each index.


  function countAlphabetMatches(word) {
    const ALPHABET = ['', 'a', 'b', 'c','d', 'e', 'f', 'g',
          'h','i','j','k','l','m','n','o','p','q','r','s',
          't','u','v','w','x','y','z'];
    let counter = 0;
    for (let i = 0; i < word.length; i ++) {
      if (word[i] === ALPHABET[i + 1]) {
        counter += 1;
      }
    }
    return counter;
  }
  console.log(countAlphabetMatches('abode'));
  console.log(countAlphabetMatches('abc'));
  console.log(countAlphabetMatches('xyzd'));

  // function solve(arrayOfWords) {
  //   let countArray = [];
  //   arrayOfWords.forEach(word => {
  //     let count = countAlphabetMatches(word.toLowerCase());
  //     countArray.push(count);
  //   });
  //   return countArray;
  // }
  
  // console.log(solve(['abode', 'abc', 'xyzd']));


  //algorithm: 
//create an empty object to store "mothers" as keys, and "kids" as values

//for each letter in the string, if it is lowercase, concatenate it to the 
//obj[mother] 's string. 

//sorting: take all ENTRIES of the object, sort them by the uppercase (arr[i][0])

function findChildren(dancingBrigade){
  let obj ={};
  for (let i = 0; i < dancingBrigade.length;  i++) {
    let letter = dancingBrigade[i];
    if (letter >= 'a' && letter <= 'z') {
      let currString = obj[letter.toUpperCase()] || "";
      currString += letter;
      obj[letter.toUpperCase()] = currString;
    }
  }
  let entries = Object.entries(obj);
  entries = entries.map(array => {
    return array[0] + array[1];
  })
  console.log(entries);
  entries.sort();
  return entries.join("");
};

console.log(findChildren('BeeeEBb'));
console.log(findChildren('uwwWUueEe'));