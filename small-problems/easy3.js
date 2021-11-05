/*ddaaiillyy ddoouubbllee -------------------------------------------------------

Write a function that takes a string argument and returns a new string that 
contains the value of the original string with all consecutive duplicate 
characters collapsed into a single character.

*/

// function crunch(s){
//   if(s.length === 0 || s.length === 1){
//     console.log(s);
//     return s;
//   }
//   let newString = s.charAt(0);
//   for(let i = 1; i<s.length; i++){
//     if (s.charAt(i) !== s.charAt(i-1))
//       newString+=s.charAt(i);
//   }
//   console.log(newString)
//   return newString;
// }
// crunch('4444abcabccba');              // "4abcabcba"
// crunch('ggggggggggggggg');            // "g"
// crunch('a');                          // "a"
// crunch('');                           // ""



/*The end is near but not here ----------------------------------------------------
Write a function that returns the next to last word in the String passed to it as an argument.

Words are any sequence of non-blank characters.

You may assume that the input String will always contain at least two words.
(*/


// function penultimate(string){
//   let arr = string.split(" ");
//   return arr[arr.length-2];
// }
// console.log(penultimate("last word") === "last"); // logs true
// console.log(penultimate("Launch School is great!") === "is"); // logs true


/*Exclusive OR -----------------------------------------------------------------------


The || operator returns a truthy value if either or both of its 
operands are truthy, a falsey value if both operands are falsey. 
The && operator returns a truthy value if both of its operands are truthy, 
and a falsey value if either operand is falsey. This works great until
 you need only one, but not both, of two conditions to be truthy:
  the so-called exclusive or.

In this exercise, you will write a function named xor that takes two 
arguments, and returns true if exactly one of its arguments is truthy, 
false otherwise. Note that we are looking for a boolean result instead 
of a truthy/falsy value as returned by || and &&.

 */

// function xor (arg1, arg2){
//     if ((arg1 && !arg2) || (arg2 && !arg1)) {
//       return true;
//     }
//     return false;
//   }
// console.log(xor(5, 0) === true);
// console.log(xor(false, true) === true);
// console.log(xor(1, 1) === false);
// console.log(xor(true, true) === false);

/* Odd lists -----------------------------------------------------------------

Write a function that returns an Array that contains every other element 
of an Array that is passed in as an argument. The values in the returned 
list should be those values that are in the 1st, 3rd, 5th, and so on elements 
of the argument Array.
*/

// function oddities(arr){
//   let newArray =[];
//   for (let i = 0; i < arr.length; i +=2){
//     newArray.push(arr[i]);
//   }
//   return newArray;
// }

// Examples:

// Copy Code
// console.log(oddities([2, 3, 4, 5, 6])); // logs [2, 4, 6]
// console.log(oddities([1, 2, 3, 4, 5, 6])); // logs [1, 3, 5]
// console.log(oddities(["abc", "def"])); // logs ['abc']
// console.log(oddities([123])); // logs [123]
// console.log(oddities([])); // logs []