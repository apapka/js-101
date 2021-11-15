//Double char Part1 

// function repeater(string){
//   let newString ="";
//   for (let i = 0; i < string.length; i++) {
//     newString = newString + string[i] + string[i];
//   }
//   return newString;
// }

function repeater(string){
  return string.split("").map(char => char + char).join("");
}
// console.log(repeater('Hello'));

//Double char part 1

function doubleConsonants(string){
  let arr = string.split("").map(char => {
    if (isValidChar(char)){
      return char + char;
    }else{
      return char;
    }
  });
  return arr.join("");
}

function isValidChar(character){
  let vowels = ['a', 'e', 'i', 'o', 'u','A','E','I','O','U'];
  if ((character >= 'A' && character <= 'Z') || (character >= 'a' && character <= 'z')){
    if (vowels.includes(character)){
      return false;
    }else {
      return true;
    }
  }else{
    return false;
  }
  
}
// console.log(doubleConsonants('String'));          // "SSttrrinngg"
// console.log(doubleConsonants('Hello-World!'));    // "HHellllo-WWorrlldd!"
// console.log(doubleConsonants('July 4th'));        // "JJullyy 4tthh"
// console.log(doubleConsonants(''));                // "");

//Reverse Number

function reverseNumber(number) {
  return Number(String(number).split("").reverse().join(""));
}

// console.log(reverseNumber(12345));

//Get the middle character:

function centerOf(string){
  let midpoint = Math.floor(string.length / 2);
  if (string.length % 2 === 0){
    return string.slice(midpoint - 1 , midpoint + 1);
  } else {
    return string.slice(midpoint, midpoint + 1);
  }
}
// console.log(centerOf('I Love JavaScript')); // "a"
// console.log(centerOf('Launch School'));     // " "
// console.log(centerOf('Launch'));            // "un"
// console.log(centerOf('Launchschool'));      // "hs"
// console.log(centerOf('x'));                 // "x"

// function negative(number){
//   if (number > 0){
//     return -number;
//   }else{
//     return number;
//   }
// }

//or return Math.abs(number) * -1;

//or with ternary operator

function negative (number){
  return number < 0 ? number : -number;
}
// console.log(negative(5));     // -5
// console.log(negative(-3));    // -3
// console.log(negative(0));     // -0

//Counting up
function sequence (number) { 
  let arr = [];
  for (let i = 1; i <= number; i ++) {
    arr.push(i);
  }
  return arr;
}
// console.log(sequence(5));
// console.log(sequence(3));
// console.log(sequence(1));

//name swapping
// function swapName(name){
//   let arr = name.split(" ");
//   return arr[1] + ', ' + arr[0];
// }
// console.log(swapName("Joe Roberts"));

// function swapName(name){
//   return name.split(" ").reverse().join(", ");
// }

//sequence count

function sequence (count, start){
  let arr = [];
  for (let i = 1; i <= count; i ++){
    arr.push(start * i);
  }
  return arr;
}
// console.log(sequence(5, 1));
// console.log(sequence(4, -7));
// console.log(sequence(3, 0));
// console.log(sequence(0, 100000));

//reverse it (part 1)

function reverseSentence(sentence){
  return sentence.split(" ").reverse().join(" ");
}
// console.log(reverseSentence(''));                       // ""
// console.log(reverseSentence('Hello World'));            // "World Hello"
// console.log(reverseSentence('Reverse these words'));    // "words these Reverse"

//reverse it part 2

function reverseWords(sentence){
  let array = sentence.split(" ").map(word =>{
    if (word.length >= 5) {
      return word.split("").reverse().join("");
    }else{
      return word;
    }
    });
    return array.join(" ");
}
// console.log(reverseWords("Professional"));
// console.log(reverseWords("Walk around the block"));
// console.log(reverseWords("Launch School"));

//reversed arrays

//for each item in the array
//store first item in a temp variable
//replace the first item in the array with the last item in the array
//put the temp variable to the last item in the array
//repeat steps 2-5 for the rest of the array 

function reverse(array){
  let temp = "";
  for (let i = 0; i < array.length / 2; i++) {
    debugger;
    temp = array[i];
    let lastIndex = array.length - 1 - i;
    array [i] = array[lastIndex];
    array [lastIndex] = temp;
  }
  return array;
}

console.log(reverse([1,2,3,4]));
// console.log(reverse(['a','b','c','d','e']));
// console.log(reverse(['abc']));
// console.log(reverse([]));
let list1 = ["a", "b", "c", "d", "e"];
let result1 = reverse(list1);
// console.log(result1); // logs  ["e", "d", "c", "b", "a"]
// console.log(list1 === result1); // logs true

//Matching Parenthesis

function isBalanced(string){
  let openingParenthesis = 0;
  for (let char of string){
    if (char === '('){
      openingParenthesis += 1;
    }else if (char === ')'){
      if (openingParenthesis === 0){
        return false;
      } else { 
        openingParenthesis -= 1;
      }
    }
  }
  return openingParenthesis === 0;
}
// console.log(isBalanced('()'));
// console.log(isBalanced('('));
// console.log(isBalanced(')'));
// console.log(isBalanced(')(()'));
// console.log(isBalanced("What (is) this?") === true);
// console.log(isBalanced("What is) this?") === false);
// console.log(isBalanced("What (is this?") === false);
// console.log(isBalanced("((What) (is this))?") === true);
// console.log(isBalanced("((What)) (is this))?") === false);
// console.log(isBalanced("Hey!") === true);
// console.log(isBalanced(")Hey!(") === false);
// console.log(isBalanced("What ((is))) up(") === false);