const location = Object.freeze({ state: 'CA', country: 'US' }); // line 1
location.state = 'FL'; 

console.log(location);

let name = "John";   
const greet = () => `Hi ${name}`; 
let greeting = greet();     
console.log(greeting);

// const a = 1;
// myFunction(a);
// // let myFunction = function () {
// // 	a = 2;
// // }
// function myFunction () {
//   a = 2;
// }

function anyStrings(arr) {
   return arr.filter(element => {
    if (typeof element === 'string') return true;
  });
}

let array = [1, 'cat', 3, -5, 4];

if (anyStrings(array)) {
  console.log("The array contains at least one string!");
} else {
  console.log("The array contains no strings!");
}


let animal = "monkey";

function outer() {
  let animal = "racoon";

  function inner() {
    return animal[0].toUpperCase() + animal.slice(1).toLowerCase();
  }
  return inner();
  console.log(animal);

}

console.log(outer()); 
console.log(animal); 


//what does line 48 log to the console? 
//what does line 49 log to the console? 

//what do these demonstrate? 

// let a = 2;
// let b = Math.floor(Math.random() * 2);
// a *= b;

let x = 1;
if (x = 0) {
  console.log('The value of x is zero');
} else {
  console.log('The value of x is not zero');
}

let arr = [1,2,3];
let changeArray = function(array) {
  array.push(7);
  array = [2,3,4];
  return array;
}
changeArray(arr);
console.log(arr);

/*
Here the global variable arr is declared and initialized 
to point to [1,2,3] on line 68.

On line 74 the function changeArray is invoked with the reference to the global
variable passed to it as an argument. On line 69 of the function, the parameter 
array is declared with local scope. At this point, both arr and array point to the 
same location in memory. Then the mutating method push is called, adding a 7 to 
the array. Then the local variable array is reassigned to point to a new array object
with the value [2, 3, 4]. This value is returned, but nothing is done with the return value.
On line 75 the  global variable arr is called, which points to [1,2,3,7.]
*/

// function messWithVars(one, two, three) {
//   one = two;
//   two = three;
//   three = one;
// }

// let one = ["one"];
// let two = ["two"];
// let three = ["three"];

// messWithVars(one, two, three);

// console.log(`one is: ${one}`);
// console.log(`two is: ${two}`);
// console.log(`three is: ${three}`);

/*On line 96 thru 98 three global variables are declared and initialized
When messWithVars is called, the three global variables are passed by reference
as arguments to it. The local variables one, two, three are pointing to the same
arrays as the global variables one, two and three respectively. 

On line 91 thru 93 the local variables are reassigned to point to different arrays,
but this reassignment has no impact on the global variables because reassignment 
is not a destructive or mutating action. The function returns undefined implicitly.

The console will log the string values of the unchanged arrays one is [one], two is [two] and three is [three]

*/

// function messWithVars(one, two, three) {
//   one = ["two"];
//   two = ["three"];
//   three = ["one"];
// }

// let one = ["one"];
// let two = ["two"];
// let three = ["three"];

// messWithVars(one, two, three);

// console.log(`one is: ${one}`);
// console.log(`two is: ${two}`);
// console.log(`three is: ${three}`);

/* this is similar to the last example in that the local variables from the parameter
are reassigned to new array values. This has no impact on the global scope variables as 
the local variables are shadowing the global variables, so only the local variables 
are reassigned. The console will again log one is one two is two and three is three.

*/ 

function messWithVars(one, two, three) {
  one.splice(0, 1, "two");
  two.splice(0, 1, "three");
  three.splice(0, 1, "one");
}

let one = ["one"];
let two = ["two"];
let three = ["three"];

messWithVars(one, two, three);

console.log(`one is: ${one}`);
console.log(`two is: ${two}`);
console.log(`three is: ${three}`);

//here, a destructive method is being called on the arrays referenced by both the 
//local and global variables. This modifies the arrays so that the array referenced by 
// one now is ['two'] and two is ['three'] and three is ['one']. These are what is 
//logged.

let answer = 42;

function messWithIt(someNumber) {
  return (someNumber += 8);
}

let newAnswer = messWithIt(answer);

console.log(answer - 8);

// here 34 is logged to the console. The return value of messWithIt(42) is stored 
//in the variable newAnswer. NewAnswer will be assigned the value 50.

//What is the return value of the filter method call below? Why?
[1, 2, 3].filter(num => 'hi');

/*The return is a new array with the same values as the calling array. [1, 2, 3]. 
Filter iterates through each element in the array, and performs selection to 
populate a new array depending on the truthiness of the callback function. Since 'hi'
is the implicit return value of the function for every iteration, this evaluates
to truthy and will return a new array with all of the values selected.*/  

arr = [1,2,3]
arr.forEach((number, idx, array) => {
   number * 2;
})
console.log(arr);

function anyNegatives(arr) {
  return arr.forEach(num => {
    if (num < 0) return true;
  });
}

let numbers = [1, 2, 3, -5, 4];

if (anyNegatives(numbers)) {
  console.log("The array contains at least one negative number!");
} else {
  console.log("The array contains no negatives!");
}


//Without running the code try to answer what this code example will output and why
[1,2,3].filter(num => {
  if(num >=2) {
    return 0;
  } else {
    return num;
  }
})

/* This will return a new array [1]. Filter performs selection based on the truthiness
of the callback function. In this case, when iterating over the element 1 the conditional
is false, so it goes to the else block and returns 1, which is a truthy value or evaluates to true.
In the case of 2 and 3, the if conditional is true, so it returns 0 which is a falsy value, so
those elements are not selected.*/

console.log([1,2,3].map(num => true));


//What is the callback's return value in the following code? 
//Also, what is the return value of every in this code?
[1, 2, 3].every(num => {
  return num = num * 2;
});
/* Every evaluates whether some condition is truthy for each element of the array.
In this case, the return value of the callback will be 2,4,6. Since each of these 
are truthy values, it will evaluate to true. 
"The expression num = num * 2 is an assignment expression and will 
evaluate as the expression on the right-hand side of the assignment 
and that is what gets returned in each iteration. 
Since all of those numbers are truthy values, every will return true.""

*/



//Swap the capitalization of every “nth” letter of a string
//Shift all the vowels in a string N letters later in the alphabet
//Remove all non-letter characters from a string
//Reverse a string using only the reduce method
let arr = [1,2,3];
let changeArray = function(array) {
  array.push(7);
  array = [2,3,4];
  return array;
}
changeArray(arr);
console.log(arr);

/*This will log [1,2,3,7] to the console in line 252.  The function changeArray is called in line 
251 with an argument arr which references the array [1,2,3]. This global variable and the local 
parameter variable array both point to the same array. In line 247, the mutating method .push() is called
with the argument 7. This appends 7 to the array referenced by both . On line 248, the local 
variable array is reassigned to reference a new array with the value [2,3,4]. This new array reference 
is returned, but nothing is done with that return value. On line 252 the original global variable arr is 
passed as an argument to the console.log method. Thus the array [1,2,3,7] is logged to the console and 
undefined is returned.