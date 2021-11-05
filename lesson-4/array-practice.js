// //practice with forEach
// let arr = [1,2,3];

// let newArr = [];

// arr.forEach(number => {
//   newArr.push(number + 2);

// })
// console.log(newArr);

// arr.forEach(number => {
//   arr.push(number * 2);
// })
// console.log('Array with [1,2,3,2,4,6]' + arr);

// //log all even numbers:
// let myArray = [1, 3, 6, 11, 4, 2,
//   4, 9, 17, 16, 0];

//   myArray.forEach(number =>{
//     if (number % 2 ===0){
//       console.log(number);
//     }
//   })
// //practice with filter
// //take only elements divisible by 3
// let arr2 = [3,6,7,8,9,12,14,25,17];

// let newArr2 = arr2.filter(number =>{
//   return number % 3 === 0;
// })

// myEditedArray = myArray.filter(number =>{
//   return number % 2 === 0;
// })
// console.log("my array: " + myEditedArray)


// console.log(newArr2);


// //Write a findIntegers function that takes an array argument 
// //and returns an array that contains only the integers from the
// // input array. Use the filter method in your function.

// function findIntegers(array){
//   let newArray = array.filter(number =>{
//     if (Number.isInteger(number)){
//       return true;
//     }else{
//       return false;
//     }
//   });
//   return newArray;

// }
// let things = [1, 'a', '1', 3, NaN, 3.1415, -4, null, false];
// let integers = findIntegers(things);
// console.log("INTEGERS: " + integers); // => [1, 3, -4]
 



// //practice with map
// let arr3 = [1,2,3,4];

// let newArr3 = arr3.map(num =>{
//   return num * 2;
// })

// console.log(arr3);
// console.log(newArr3);

// // Let's try another variation on the even-numbers theme.

// // We'll return to the simpler one-dimensional array. In this problem, 
// //we want to use the map function to create a new array that 
// //contains one element for each element in the original array. 
// //If the element is an even value, then the corresponding element 
// //in the new array should contain the string 'even'; otherwise, 
// //the element in the new array should contain 'odd'.
// let newArray = myArray.map(number =>{
//   if(number % 2 === 0){
//     return 'even';
//   }else{
//     return 'odd';
//   }
// });
// console.log('new array : ' + newArray);



// //Use map and filter to first determine the lengths of
// //  all the elements in an array of string values, then 
// //  discard the even values (keep the odd values).

// function oddLengths(arr){
//   let lengths = arr.map(string =>{
//     return string.length;
//     });
//   let oddLengths = lengths.filter(number => {
//     return number % 2 === 1;
//   })
//   return oddLengths;
// }


// let arr7 = ['a', 'abcd', 'abcde', 'abc', 'ab'];
// console.log('ODD LENGTHS::::::::::::::');
// console.log(oddLengths(arr7)); // => [1, 5, 3]




// //practice with reduce

// let arr4 = [1,2,3,4,5];
// arr4.reduce(number =>{
//   return number -=2;
// });
// console.log(arr4);

// // Use reduce to compute the sum of the squares of all of the numbers in an array:

// function sumOfSquares(arr){
//   let sum = arr.reduce((accumulator, element)=>{
//     return (accumulator + (element * element));
//   },0);
//   return sum;
// }
// let array = [3, 5, 7];
// console.log(sumOfSquares(array)); // => 83


// // Write a function similar to the oddLengths function from Exercise 6,
// // but don't use map or filter. Instead, try to use the reduce method.

// // first determine the lengths of
// //  all the elements in an array of string values, then 
// //  discard the even values (keep the odd values).

// function oddLengths2(arr){
//   return arr.reduce((accumulator,element)=>{
//     if (element.length % 2 === 1){
//       accumulator.push(element.length);
//     }
//       return accumulator;
    
//   },[]);
// }
// let arr8 = ['a', 'abcd', 'abcde', 'abc', 'ab'];
// console.log(oddLengths2(arr8)); // => [1, 5, 3]


// let arr9 = arr8.map(str => {
//   return undefined;
// })
// console.log(arr9);
let result = ['a', 'b', 'c'].filter(function(item) {
  console.log(item);
});

result; // []