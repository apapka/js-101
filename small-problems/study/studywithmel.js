//Questions for Mel: 



// Problem 1: Reverse a string without using the built-in #reverse method
// take a string as an argument, return the string in reverse order without
// using the built-in reverse method.


//input: string
//output: the reverse of that string


//algorithm: 
    //create new string
    //starting from end index, add characters to newString
    //return newSTring


    function reverse(string) {
      let newString ="";
      for (let i = string.length - 1; i >= 0; i--) {
        newString += string[i];
      }
      return newString;
    }
    
    console.log(reverse('abcdefg'));
    console.log(reverse('asdfkljasfj'));


//Problem 4: 
https://www.codewars.com/kata/58aa68605aab54a26c0001a6
//     Task
// The year of 2013 is the first year after the old 1987 with only distinct digits.

// Now your task is to solve the following problem:
// given a year number, find the minimum year number which is 
// strictly larger than the given one and has only distinct digits.
function distinctDigitYear(year) {
  year += 1;
  while(!isDistinct(year)) {
    year += 1;
  }
  return year;
  
  
}
function isDistinct(number) {
  let string = String(number);
  for (let i = 0; i < string.length; i ++) {
    if (i !== string.lastIndexOf(string[i])) {
      return false;
    }
  }
  return true;
}


// Problem 2: Fizzbuzz
// =begin
// write a method that takes two arguments: the first is the starting number, and the second is the ending number. Print out all numbers between the two numbers except if a number is divisible by 3, print out "Fizz", if a number is divisible by 5, print out "Buzz", and if a number is divisible by 3 and 5, print out "FizzBuzz".

// fizzbuzz(1, 10)
// fizzbuzz(1, 15)
// =end


//input: starting number and ending number
//output: no return value, but console log of all numbers / fizzes/buzzes

//algorithm: 
  //starting from startingnumber, iterate upwards
    //if count is divisible by 5 AND 3, log 'FizzBuzz' to the console
    //if count is divisible by 5, log "Buzz" to the console
    //if count is divisible by 3, log "Fizz" to the console
    //else log the number to the console.

    function fizzbuzz(startingNum, endingNum) {
      for (let i = startingNum, i <= endingNum; i++) {
        if (i % 5 === 0 && i % 3 === 0) {
          console.log('FizzBuzz');
        } else if (count % 5 === 0) {
          console.log('Buzz');
        } else if (count % 3 === 0) {
          console.log('Fizz');
        } else {
          console.log(i);
        }
      }
    }

// Problem 3: remove vowels from an array of strings
// # Write a method that takes an array of strings and returns an array of the same string values, except with the vowels removed.

// removeVowels(['green', 'yellow', 'black', 'white']) == ['grn', 'yllw', 'blck', 'wht']


//input: array of strings
//output: array of same strings, with vowels removed

//algorithm: 
  //removeVowels function takes a string argument
      //set a newString
      // set constant VOWELS to an array of the vowels
      //iterate over each letter of the string
        //if the letter is in VOWELS, skip it
          // else add letter to new string

    //iterate through the array, calling removeVowels for each word.

    function removeVowelsFromWord(word) {
      let newString = "";
      const VOWELS = ['a','e','i','o','u'];
      for (let i = 0; i < word.length; i++) {
        if (!VOWELS.includes(word[i])) {
          newString += word[i];
        }
      }
      return newString;
    }
    function removeVowels(array) {
      return array.map(word => {
        return removeVowelsFromWord(word);
      });
    }
    console.log(removeVowels(['green','yellow','black','white']));






//An anagram is the result of rearranging the letters of a word to 
//produce a new word (see wikipedia).

//Note: anagrams are case insensitive

//Complete the function to return true if the two arguments 
//given are anagrams of each other; return false otherwise.

//Examples
//"foefet" is an anagram of "toffee"

//"Buckethead" is an anagram of "DeathCubeK"

//"dumble" is not an anagram of "bumble"
//Tests

//input: two strings
//output: true if they are anagrams, false if not

//rules: case insensitive. 
//algorithm: 
  //transform both strings to lowercase arrays
  //sort them
  //join them to strings
  //compare the values.
    
  function isAnagram(str1, str2) {
    str1 = str1.split("").sort().join("");
    str2 = str2.split("").sort().join("");
    return str1 === str2;
                      
  }
  console.log(isAnagram('foefet', 'toffee'));
  console.log(isAnagram('dumble','bumble'));















// 1 ---Count the number of Duplicates
// Write a function that will return the count of distinct case-insensitive alphabetic characters and numeric digits that occur more than once in the input string. The input string can be assumed to contain only alphabets (both uppercase and lowercase) and numeric digits.

// Example
// "abcde" -> 0 # no characters repeats more than once
// "aabbcde" -> 2 # 'a' and 'b'
// "aabBcde" -> 2 # 'a' occurs twice and 'b' twice (`b` and `B`)
// "indivisibility" -> 1 # 'i' occurs six times
// "Indivisibilities" -> 2 # 'i' occurs seven times and 's' occurs twice
// "aA11" -> 2 # 'a' and '1'
// "ABBA" -> 2 # 'A' and 'B' each occur twice

//input: string
//ouput: count of characters that occur more than once in the string

//rules: 
  //case-insensitive (A counts as a duplicate to a)
  //

//algorithm: 
    //create an object to store the count of each character
    //make string lowercase
    //iterate through each character in the string
      //if the object has the character, increase the count by 1
      //else set the property of the object with value 1.
    //count the letters with value >= 2.
        //filter Object.values to those >=2.

        function duplicateCount(text){
          let obj = {};
          text = text.toLowerCase();
          for (let i = 0; i < text.length; i++ ) {
            let char = text[i];
            obj[char] = obj[char] + 1 || 1;
          }
          let count = Object.values(obj).filter(value => value >= 2).length;
          return count;
        }
        console.log(duplicateCount('abcde'));
        console.log(duplicateCount('aabbcde'));
        console.log(duplicateCount('aabBcde'));
        console.log(duplicateCount('aA11'));
                    
        // Given a string of words, you need to find the highest scoring word.

// Each letter of a word scores points according to its position in the alphabet: a = 1, b = 2, c = 3 etc.

// You need to return the highest scoring word as a string.

// If two words score the same, return the word that appears earliest in the original string.

// All letters will be lowercase and all inputs will be valid.

//examples: 
// 'man i need a taxi up to ubud' => 'taxi'
// 'what time are we climbing up the volcano' -> volcano
// 'take me to semynak' -> semynak
// 'aa b' -> aa
// 'b aa' -> b


//input: string of words
//output: word with highest score

//rules: 
    //if two words score the same ,return the earlier word in the string
    //all letters will be lowercase, 
    //all inputs will be valid
//what about an empty string? return an empty string.

//algorithm: 
    //create a dictionary object storing the letters as keys and their points as value
    //create a maxScore variable
    //create a finalWord variable
    //split the string into an array of words
    //for each word in the array, get the score using scoreWord
        //if the score > maxScore, store the word and the score in variables


//scoreWord
      //create a variable score
      //for each character in the word, find the points in the dictionary
          //add points to score
      //return final score

function high(x) {
  let maxScore = Number.MIN_SAFE_INTEGER;
  let maxWord = "";
  let array = x.split(" ");
  array.forEach(word => {
    let score = scoreWord(word);
    if (score > maxScore) {
      maxWord = word;
      maxScore = score;
    }
  });
  return maxWord;
  
}
function scoreWord(word) {
  const DICTIONARY = {a: 1, b: 2, c: 3, d: 4, e: 5, f: 6, g: 7, h: 8, i: 9,
                      j: 10, k: 11, l: 12, m: 13, n: 14, o:15, p:16, q: 17, 
                      r: 18, s: 19, t: 20, u: 21, v: 22, w: 23, x: 24, 
                      y: 25, z:26};
  let score = 0;
  for (let i = 0; i < word.length; i++) {
    let currChar = word[i];
    let points = DICTIONARY[currChar];
    score += points;
  }
  return score;
  
}
console.log(high('man i need a taxi up to ubud'));
console.log(high('what time are we climbing up the volcano'));
console.log(high('take me to semynak'));
console.log(high('aa b'));
