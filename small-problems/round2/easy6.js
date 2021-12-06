function repeater(string) {
  return string.split("").map(char => char + char).join("");
}
console.log(repeater("Hello"))
function doubleConsonants(string) {
  return string.split("").map(char => {
    if (((char >= 'a' && char <= 'z') || (char >= 'A' && char <= 'Z' )) &&
    !['a','e','i','o','u'].includes(char)) {
      return char + char;
    } else {
      return char;
    }
  }).join("");
}
console.log(doubleConsonants('String'));

function reverseNumber(number) {
  return Number(String(number).split("").reverse().join(""));

}
console.log(reverseNumber(12345));

function centerOf(string) {
  if (string.length % 2 === 0){
    return string.slice(Math.floor(string.length / 2) - 1, (string.length / 2) + 1);

  } else {
    return string.slice(Math.floor(string.length / 2) , string.length / 2 + 1);
  }
}
// console.log(centerOf('I love JavaScript'));
// console.log(centerOf('Launch School'));
// console.log(centerOf('Launch'));

function negative(number) {
  return number < 0 ? number : -number;
}
console.log(negative(5));
console.log(negative(-3));

function sequence(number) {
  let arr = [];
  for (let i = 1; i <= number; i++ ){
    arr.push(i);
  }
  return arr;
}
console.log(sequence(5));
console.log(sequence(3));

function swapName(name) {
  let arr = name.split(" ");
  return `${arr[1]}, ${arr[0]}`
}
console.log(swapName('Joe Roberts'));

function sequence(count, number) {
  let arr = [];
  for ( let i = 0; i < count; i++) {
    arr.push(number);
    number += number;
  }
  return arr;
}
console.log(sequence(5,1));
console.log(sequence(4,-7));
console.log(sequence(3,0));

function reverseSentence(sentence) {
  return sentence.split(" ").reverse().join(" ");
}
console.log(reverseSentence("Hello World"));

function reverseWords(sentence) {
  return sentence.split(" ").map(word => {
    if (word.length >= 5) {
      return word.split("").reverse().join("");
    } else {
      return word;
    }
  }).join(" ");
}
console.log(reverseWords('Professional'));
console.log(reverseWords('Walk around the block'));

function reverse(array) {
  let firstIndex = 0;
  let lastIndex = array.length - 1;
  while (firstIndex < lastIndex) {
    [array[firstIndex], array[lastIndex]] = [[array[lastIndex]], [array[firstIndex]]];
    firstIndex += 1;
    lastIndex -= 1;
  }
  return array;
}
let list = [1, 2, 3, 4];
let result = reverse(list);
console.log(result); // logs [4,3,2,1]
console.log(list === result); // log

let list1 = ["a", "b", "c", "d", "e"];
let result1 = reverse(list1);
console.log(result1); // logs  ["e", "d", "c", "b", "a"]
console.log(list1 === result1); // logs true

function isBalanced (string) {
  let count = 0;
  for(let i = 0; i < string.length; i++) {
    if(string[i] === '(') {
      count += 1;

    }else if (string[i] === ')') {
      count -= 1;
    }
    if (count < 0) {
      return false;
    }
  }
  if (count === 0) {
    return true;
  }
  return false;
}
console.log(isBalanced("What (is) this?") === true);
console.log(isBalanced("What is) this?") === false);
console.log(isBalanced("What (is this?") === false);
console.log(isBalanced("((What) (is this))?") === true);
console.log(isBalanced("((What)) (is this))?") === false);
console.log(isBalanced("Hey!") === true);
console.log(isBalanced(")Hey!(") === false);
console.log(isBalanced("What ((is))) up(") === false);