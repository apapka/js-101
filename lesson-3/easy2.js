//Q1

// let advice = "Few things in life are as important as house training your pet dinosaur.";
// let newString = advice.replace("important", "urgent");
// console.log(newString);

//Q2

// let numbers = [1, 2, 3, 4, 5];
// let reversedArray = numbers.slice().reverse();
// console.log(reversedArray); // [5, 4, 3, 2, 1]
// console.log(numbers); // [1, 2, 3, 4, 5]

// let numbers = [1, 2, 3, 4, 5];
// let sortedArray = [...numbers].sort((num1, num2) => num2 - num1);
// console.log(sortedArray); // [5, 4, 3, 2, 1]
// console.log(numbers); // [1, 2, 3, 4, 5]

//Q3 : Given a number and an array, determine whether the number is
//included in the array.

let numbers = [1, 2, 3, 4, 5, 15, 16, 17, 95, 96, 99];

let number1 = 8;  // false
let number2 = 95; // true
console.log(numbers.includes(number1));
console.log(numbers.includes(number2));

//Q4 : Show 2 ways to put "four score and" in front of the famousWords string
let famousWords = "seven years ago...";

console.log("Four score and " + famousWords);
console.log("Four score and".concat(famousWords));

//Q5: Given an array of numbers [1,2,3,4,5], mutate the array by
//removing the number at index 2, sot hat the array becomes [1,2,4,5].

let arr = [1,2,3,4,5];
arr.splice(2,1);
console.log(arr);