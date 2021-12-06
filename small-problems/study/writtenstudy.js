function anyNegatives(arr) {
  arr.forEach(num => {
    if (num < 0) return true;
  });
}

let numbers = [1, 2, 3, -5, 4];

if (anyNegatives(numbers)) {
  console.log("The array contains at least one negative number!");
} else {
  console.log("The array contains no negatives!");
}

// There is no return value of the anyNegatives



let animal = "dog";

const speak = animal => {
  if (animal) {
    console.log("Bark")
  } else {
    console.log("Meow")
  }
}

speak();


// the parameter animal  (local variable) animal shadows the global variable animal

// since no argument is passed to speak(), it will pass undefined. The console will log (Meow)

// What are the variables? 
// Speak is not a function name, it is a constant in which we store the reference of a function.  So it is a variable name. Animal on line 1, speak on line 3, animal on line 3 are all variable names.



let name = "nina";

function outer() {
  let name = "jill";

  function inner() {
    return name[0].toUpperCase() + name.slice(1);
  }

  return inner();
}

outer(); // Jill
console.log(name); // nina





let name = "nina";

function outer() {
  // let name = "jill";

  function inner() {
    return name[0].toUpperCase() + name.slice(1);
  }

  return inner();
}

console.log(outer()); // Nina
console.log(name); // nina



// What are the side effects?
// Reads or writes from external 
// Reassigns a nonlocal variable (primitives cannot be mutated)
// Mutates an object that is referenced by a nonlocal variable
// Raises an exception/error. (IF IT HANDLES THE ERROR, there are no side effects.)
// Calls another function that has a side effect
// Reads and writes to an external source

let greeting = ["Hello"];

const test = arr => {
  arr = arr.push("World!");
  return arr;
}

test(greeting);
console.log(greeting);

//greeting and arr point to the same location in memory. then arr is reassigned
//to the return value of arr.push() which is the new length of the array, which is 2.
//we mutated 
//push is destructive, but reassingment is not. So arr's reassignment to 2 does not affect the greeting global variable.
arr
[ 1, 2, undefined, { '1': 2 }, <2 empty items>, null, '-1': 2 ]
> arr.length
// 7

//indices have to be nonnegative integers. '-1':2 is a property of the array. 
//the length of this array is 7. Each primitive is an element
//


let b = 2;

function test(b) {
  return b += 5;
}

console.log(test()); // NaN

// when no argument is passed to the argument, it passes undefined
//when trying to perform a mathetmatical operation on undefined you will get NaN. 
//undefined + 5 returns 


//what will be the output here and why? 
let greeting = ["Hello"];

function test(arr) {
  arr = arr.concat("World!");
  return arr;
}

test(greeting);
console.log(greeting);

//concat is a nonmutating function****


let b = 2;

function test(a) {
  a = b;
  return a;
}

test(5);
console.log(b);
console.log(a);

//throws a reference error on line 145. inner scope variables are not accessible by outerscopes
//b is 2. so it will log 2 and then referenceError.
//lexical scoping. you can access an outer scope variable from an inner scope

function test(str) {
  str + "!!!"
}

let word = test("Hello");

if (word) {
  console.log("Hi");
} else {
  console.log("Goodbye");
}

//goodbye is logged to the console...

let animal = "dog";

const speak = animal => {
  if (animal) {
    console.log("Bark");
  } else {
    console.log("Meow");
  }
}
speak();


//Meow is logged to the console.