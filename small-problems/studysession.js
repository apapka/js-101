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

