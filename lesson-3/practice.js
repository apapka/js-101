//Pass By Value vs Pass by Reference

let arr = [2, 4, 6];
let arr2 = [8, 10, 12]

function spliceIt(array, array2) {
  //local varriable array points to global variable arr.
  //local variable array2 points to global variable arr2.
  array = array2;   //sets arr = arr2
  //sets local variable array to same reference point as local variable array2. 
  //so now array, array2 and arr2 have the same reference point.
  array.splice(1, 1, 100);  //[8,100,12]
  //is a destructive function that changes array, array2, and arr2. 
}

spliceIt(arr, arr2);

console.log(arr); //[2,4,6]
console.log(arr2); //[8,100,12]

//Pass by Value vs Pass by Reference

let arr = [2, 4, 6];
let arr2 = [8, 10, 12]

function allSpliced() {
  arr = arr2;
  //global variable arr points to same memory reference as global variable arr2.
  arr.splice(1, 1, 100);
}

allSpliced();

console.log(arr); //[8,100,12]
console.log(arr2); // [8,100,12]



//Pass by value vs pass by reference

let arr = [2, 4, 6];
let arr2 = [8, 10, 12];

function moreSplice(array, array2) {
  //local variable array refers to global variable arr
  //local variable array2 refers to global variable arr2
  array[0] = array2;    //changes arr to [[8,10,12], 4,6]
  //this destructive reassignment puts array[0] to the same memory location as array2.
  array[0].splice(1, 1, 100); //changes arr to [[8,100,12],4,6] and arr2 to [8,100,12]
}

moreSplice(arr, arr2);

console.log(arr); //[[8,100,12],4,6]
console.log(arr2) //8,100,12


// pass by value vs pass by reference
let object = { first: [1] };
let numArray = object["first"];
numArray.push(2);

console.log(numArray); //  => "[1, 2]"
console.log(object);