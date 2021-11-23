//Rotation part 1

//Write a function that rotates an array by moving 
//the first element to the end of the array. Do not modify the original array.

function rotateArray(array) {
  if (!Array.isArray(array)) {
    return undefined;
  } else if (array.length === 0) {
    return [];
  }
  return array.slice(1).concat(array[0]);

}
// console.log(rotateArray([7, 3, 5, 2, 9, 1]));       // [3, 5, 2, 9, 1, 7]
// console.log(rotateArray(['a', 'b', 'c']));          // ["b", "c", "a"]
// console.log(rotateArray(['a']));                    // ["a"]
// console.log(rotateArray([1, 'a', 3, 'c']));         // ["a", 3, "c", 1]
// console.log(rotateArray([{ a: 2 }, [1, 2], 3]));    // [[1, 2], 3, { a: 2 }]
// console.log(rotateArray([]));                       // []

// // return `undefined` if the argument is not an array
// console.log(rotateArray());                         // undefined
// console.log(rotateArray(1));                        // undefined


// // the input array is not mutated
// let array = [1, 2, 3, 4];
// console.log(rotateArray(array));                    // [2, 3, 4, 1]
// console.log(array);                                 // [1, 2, 3, 4]

//rotate part 2
function rotateString(string) {
  return string.slice(1).concat(string[0]);
}

function rotateRightmostDigits(number, count) {
  let string = String(number);
  let substring1 = string.slice(0, string.length - count);
  let substring2 = string.slice(string.length - count);
  let resultString = substring1 + rotateString(substring2);
  return Number(resultString);
}
// console.log(rotateRightmostDigits(735291, 1));
// console.log(rotateRightmostDigits(735291, 2));
// console.log(rotateRightmostDigits(735291, 3));
// console.log(rotateRightmostDigits(735291, 4));
// console.log(rotateRightmostDigits(735291, 5));
// console.log(rotateRightmostDigits(735291, 6));

//part 3 rotation

function maxRotation(number) {
  let string = String(number);
  for (let i = string.length; i >= 2; i--) {
    number = rotateRightmostDigits(number, i)
  }
  return number;
}
// console.log(maxRotation(735291));
// console.log(maxRotation(35));
// console.log(maxRotation(105));
// console.log(maxRotation(8703529146));

//Stack machine interpretation


//word to digit
const NUMBER_WORDS = {zero: 0, one: 1, two: 2, three: 3,
  four: 4, five: 5, six: 6, seven:7, eight: 8, nine: 9};
let punctuation = ['.', ',', ';','?','!'];

function wordToDigit(string) {
  return string.split(" ").map(word => {
    let ending = "";
    if (punctuation.includes(word.charAt(word.length - 1))){
      console.log('word has punctuation.')
      ending = word[word.length - 1];
      word = word.slice(0, word.length - 1);
    }
    if (Object.keys(NUMBER_WORDS).includes(word)) {
      return NUMBER_WORDS[word] + ending;
    } else {
      return word + ending;
    }
  }).join(" ");
}

// function endsWithPunctuation(word) {
//   if (punctuation.includes)

// console.log(wordToDigit('Please call me at five five five one two three four. Thanks'));

//fibonacci numbers (recursion)

function fibonacci(n) {
  if (n === 1) {
    return 1;
  }
  if (n === 2) {
    return 1;
  } 
  return fibonacci(n - 1) + fibonacci (n - 2);
}
// console.log(fibonacci(1));
// console.log(fibonacci(3));
// console.log(fibonacci(4));
// console.log(fibonacci(5));
// console.log(fibonacci(12));
// console.log(fibonacci(20));

//fibonacci procedural
// function fibonacci(n) {
//   if (n <= 2) {
//     return 1;
//   }
//   let arr = [1, 1];
//   for (let i = 2; i <= n; i ++) {
//     arr.push(arr[i - 1] + arr[i - 2]);
//   }
//   return arr.pop();
// }

// console.log(fibonacci(1));
// console.log(fibonacci(2));
// console.log(fibonacci(3));
// console.log(fibonacci(4));
// console.log(fibonacci(5));
// console.log(fibonacci(12));
// console.log(fibonacci(20));

//fibonacci memoization
function fibonacci2(n, obj = {}) {
  if (n <= 2) {
    return 1;
  } 
  if (Object.keys(obj).includes(n)) {
    return obj[n]; 
  } else {
    obj[n] = fibonacci (n - 1) + fibonacci (n - 2);
    return obj[n];
  }
  // return fibonacci(n - 1) + fibonacci (n - 2);
}

// console.log(fibonacci(1));
// console.log(fibonacci(2));
// console.log(fibonacci(3));
// console.log(fibonacci(4));
// console.log(fibonacci(5));
// console.log(fibonacci(12));
// console.log(fibonacci(20));
// console.log('----------------------');
// console.log(fibonacci2(1));
// console.log(fibonacci2(2));
// console.log(fibonacci2(3));
// console.log(fibonacci2(4));
// console.log(fibonacci2(5));
// console.log(fibonacci2(12));
// console.log(fibonacci2(20));

function minilang(string) {
  let arr = string.split(" ");
  let stack = [];
  let register = 0;
  for (let i = 0; i < arr.length; i++) {
    switch (arr[i]) {
      case "PUSH":
        stack.push(register);
        break;
      case "ADD": 
        register = register + stack.pop();
        break;
      case "SUB":
        register = register - stack.pop();
        break;
      case "MULT":
        register = register * stack.pop();
        break;
      case "DIV":
        register = parseInt(register / stack.pop(),10);
        break;
      case "REMAINDER":
        register = parseInt(register % stack.pop(),10);
        break;
      case "POP":
        register = stack.pop();
        break;
      case "PRINT":
        console.log(register);
        break;
      default: 
        register = Number(arr[i]);
        
    }
  }
}
minilang("PRINT");
minilang('5 PUSH 3 MULT PRINT');
minilang('5 PRINT PUSH 3 PRINT ADD PRINT');
minilang('5 PUSH POP PRINT');
minilang('3 PUSH 4 PUSH 5 PUSH PRINT ADD PRINT POP PRINT ADD PRINT');
minilang('3 PUSH PUSH 7 DIV MULT PRINT');
minilang('4 PUSH PUSH 7 REMAINDER MULT PRINT');
minilang('-3 PUSH 5 SUB PRINT');
minilang('6 PUSH');
