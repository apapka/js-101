// The maximum sum subarray problem consists in finding the maximum sum
// of a contiguous subsequence in an array of integers:

// maxSequence([-2, 1, -3, 4, -1, 2, 1, -5, 4]) -- should be 6: [4, -1, 2, 1]
// Easy case is when the array is made up of only positive numbers and
// the maximum sum is the sum of the whole array.
// If the array is made up of only negative numbers, return 0 instead.

// Empty array is considered to have zero greatest sum.
// Note that the empty array is also a valid argument array.

//input: array of numbers
//output: number

//rules: 
//if empty, return 0. 

  //if only negative numbers, return 0.  
  //if only positive, return sum of whole array.

//algorithm: 
  //deal with edge cases first
  //set maxSum variable
  //get substrings
    //

  //for each substring, if sum > maxSum reset maxsum


function maxSequence(array) {
  if (array.length === 0) {
    return 0;
  }
  if (array.every(number => number > 0)) {
    return array.reduce((sum, element) => sum + element, 0);
  }
  if(array.every(number => number < 0)){
    return 0;
  }
  let maxSum = 0;
  let subArrays = getSubArrays(array);
  for (let i = 0; i < subArrays.length; i++) {
    let currSum = subArrays[i].reduce((sum, element) => sum + element, 0);
    if (maxSum < currSum) {
      maxSum = currSum;
    }
  }
  return maxSum;
} 

function getSubArrays(array) {
  let subArrays = [];
  for (let i = 0; i <= array.length; i++ ){
    for (let b = i + 1; b <= array.length; b ++) {
      subArrays.push(array.slice(i, b));
    }
  }
  return subArrays;
}
console.log(getSubArrays(['a', 'b', 'c', 'd']))


// Test Cases
console.log(maxSequence([]) === 0); // true 
console.log(maxSequence([-2, 1, -3, 4, -1, 2, 1, -5, 4]) === 6); // true
console.log(maxSequence([11]) === 11); // true
console.log(maxSequence([-32]) === 0); // true
console.log(maxSequence([-2, 1, -7, 4, -10, 2, 1, 5, 4]) === 12); // true


// You are going to be given an array of integers.
// Your job is to take that array and find an index N where the sum
// of the integers to the left of N is equal to the sum of the integers to the right of N.
// If there is no index that would make this happen, return -1.

// For example:
// Let's say you are given the array [1, 2, 3, 4, 3, 2, 1]:
// Your function will return the index 3, because at the 3rd position of the array,
// the sum of left side of the index [1, 2, 3] and the sum of the
// right side of the index [3, 2, 1] both equal 6.

// Another one:
// You are given the array [20, 10, -80, 10, 10, 15, 35]
// At index 0 the left side is []
// The right side is [10, -80, 10, 10, 15, 35]
// They both are equal to 0 when added. (Empty arrays are equal to 0 in this problem)
// Index 0 is the place where the left side and right side are equal.

//input: an array of integers
//output: an index where the left side of the array equals the right side

//algorithm: 
      //let i = 1
      //get leftside of array
      //get rightside of array
      //get leftsidesum
      //get rightside sum
      //if leftsidesum === rightside sum return index, else increment index


function findEvenIndex(array) {
  if (array.length === 0) {
    return 0;
  }
  for (let i = 0; i < array.length; i ++) {
    let leftside = array.slice(0, i);
    let rightside = array.slice(i + 1);

    let leftsidesum = leftside.reduce((sum, element) => sum + element,0) ;
    let rightsidesum = rightside.reduce((sum, element) => sum + element, 0);
    if (leftsidesum === rightsidesum){
      return i;
    }
  }
  return -1;
}




// //Test Cases
// console.log(findEvenIndex([1,2,3,4,3,2,1]) === 3); // true
// console.log(findEvenIndex([1,100,50,-51,1,1]) === 1); // true
// console.log(findEvenIndex([1,2,3,4,5,6]) === -1); // true
// console.log(findEvenIndex([20,10,30,10,10,15,35]) === 3); // true
// console.log(findEvenIndex([20,10,-80,10,10,15,35]) === 0); // true
// console.log(findEvenIndex([10,-80,10,10,15,35,20]) === 6); // true
// console.log(findEvenIndex([-1,-2,-3,-4,-3,-2,-1]) === 3); // true

//Sum even number rows
//Imagine a sequence of consecutive even integers beginning with 2, 
//the integers are grouped in rows with the first row containing one integer,
//the second row containing two integers, the third row three integers, and so on.

//Given an integer representing the nunmber of a particular row, return an 
//integer representing the sum of all the integers in that row.

//input: integer (row number)
//output: integer (sum of the integers in that row)

//sequence of integers, beginning with 2, consecutive EVEN.
//grouped into rows, each row incrementally larger than the last: 1, 2, 3 ...


//example: sumEvenNumberRows(4);
  //2
  //4 6
  //8 10 12
  //14 16 18 20   
  //sum = 14 + 16 + 18 + 20

//how will we represent rows? 

//algorithm: 
  //build a nested array with row arrays up to n rows
  //set a variable currNumberInSequence = 2
  //start a loop from 0 to n
    //declare and initialize currRowArray to empty array
    //a second loop from 0 to the index in last loop
      //add currNumberInSequence to the curArray
      //increment currNumberInSequence by 2.
    //add currArray to the rowsArray
  //access the last array in the rowsArray
  //get the sum of the numbers in that array

  function sumEvenNumberRows(numberRows) {
    let finalArray = [];
    let currNumberInSequence = 2;
    for (let i = 0; i < numberRows; i++) {
      let currentRow = [];
      for (let b = 0; b <= i; b ++) {
        currentRow.push(currNumberInSequence);
        currNumberInSequence += 2;
      }
      finalArray.push(currentRow);
    }
    let lastRow = finalArray[finalArray.length - 1];
    console.log(finalArray);
    let sum = lastRow.reduce((sum, element) => sum + element);
    return sum;
  }
  console.log(sumEvenNumberRows(4));