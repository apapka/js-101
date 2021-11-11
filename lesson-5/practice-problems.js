//PRactice problem 1

// let arr = ['10', '11', '9', '7', '8'];
// arr.sort((a, b) => {
//   if (Number(a) > Number(b)){
//     return -1;
//   } else if (Number(a) < Number(b)){
//     return 1; 
//   }else{
//     return 0;
//   }
// });
// console.log(arr);

//alternatively

// arr.sort((a,b) => Number(b) - Number(a));
// console.log(arr);

//Practiec prblem 2

// let books = [
//   { title: 'One Hundred Years of Solitude', author: 'Gabriel Garcia Marquez', published: '1967' },
//   { title: 'The Great Gatsby', author: 'F. Scott Fitzgerald', published: '1925' },
//   { title: 'War and Peace', author: 'Leo Tolstoy', published: '1869' },
//   { title: 'Ulysses', author: 'James Joyce', published: '1922' },
//   { title: 'The Book of Kells', author: 'Multiple Authors', published: '800' },
// ];


// books.sort((a,b)=> {
//   if (Number(a.published) < Number(b.published)){
//     return -1;
//   }else if (Number(a.published) > Number(b.published)){
//     return 1;
//   }else {
//     return 0;
//   }
// });

// books.sort((a,b)=> {
//   return Number(a.published) - Number(b.published);
// });
// console.log(books);

//Practice Problem 3: For each of these collection objects, 
//demonstrate how you would access the letter g.

// let arr1 = ['a', 'b', ['c', ['d', 'e', 'f', 'g']]];
// console.log(arr1[2][1][3]);

// let arr2 = [{ first: ['a', 'b', 'c'], second: ['d', 'e', 'f'] }, { third: ['g', 'h', 'i'] }];
// console.log(arr2[1].third[0]);
// let arr3 = [['abc'], ['def'], { third: ['ghi'] }];
// console.log(arr3[2].third[0][0]);
// let obj1 = { a: ['d', 'e'], b: ['f', 'g'], c: ['h', 'i'] };
// console.log(obj1.b[1]);
// let obj2 = { first: { d: 3 }, second: { e: 2, f: 1 }, third: { g: 0 }}
// console.log(Object.keys(obj2.third)[0]);

//practice problem 4: For each of these collection objects,
//demonstrate how you would change the value 3 to 4.

// let arr1 = [1, [2, 3], 4];
// arr1[1][1] = 4;

// let arr2 = [{ a: 1 }, { b: 2, c: [7, 6, 5], d: 4 }, 3];
// arr2[2] = 4;
// let obj1 = { first: [1, 2, [3]] };
// obj1.first[2][0] = 4;
// let obj2 = { a: { a: ['1', 'two', 3], b: 4 }, b: 5 };
// obj2.a.a[2] = 4;

// //practice problem 5: consider the object. 
// //compute and display the total age of the male members of the family

// let munsters = {
//   Herman: { age: 32, gender: 'male' },
//   Lily: { age: 30, gender: 'female' },
//   Grandpa: { age: 402, gender: 'male' },
//   Eddie: { age: 10, gender: 'male' },
//   Marilyn: { age: 23, gender: 'female'}
// };
// let totalMaleAge = 0;

// for (let member in munsters){
//   if (munsters[member].gender === 'male'){
//     totalMaleAge += munsters[member].age;
//   }
// }
// // let values = Object.values(munsters); // [{age: 32, gender: 'male'}, {age: 30}]
// // values.forEach(member =>{
// //   if (member.gender === 'male') {
// //     sum += member.age;
// //   }
// // });
// console.log(totalMaleAge);

//practice problem : print the name, age, and gender of each family member
// for (let member in munsters) {
//   console.log(`${member} is a ${munsters[member].age}-year-old ${munsters[member].gender}`);
// }

//practice problem 8: using forEach, output all vowels from the strings in the arrays
// let vowels = ['a','e','i','o','u'];
// let obj = {
//   first: ['the', 'quick'],
//   second: ['brown', 'fox'],
//   third: ['jumped'],
//   fourth: ['over', 'the', 'lazy', 'dog'],
// };
// Object.values(obj).forEach(entry => {
//   return entry.forEach(word => {
//     return word.split('').forEach(letter =>{
//       if (vowels.includes(letter)){
//         console.log(letter);
//       }
//     });
//   })
// })

// Practice problem 9 : Given the following data structure, return a 

// //new array with the same structure, but with the values in each subarray ordered --
// //in ascending order.
// let arr = [['b', 'c', 'a'], [2, 11, -3], ['blue', 'black', 'green']];

// arr.map(subarray => {
//   if (typeof subarray[0] === 'number'){
//     return subarray.slice().sort((a,b) => a - b);
//   }else {
//     return subarray.slice().sort();
//   }
// })
// console.log(arr);

// //practice problem 10
// arr.map(subarray => {
//   if (typeof subarray[0] === 'number') {
//     return subarray.slice().sort((a, b) => b - a);
//   }else { 
//     return subarray.slice().sort().reverse();
//   }
// })
// console.log(arr);

//ppractice problem 11: Use map to return a new array identical in structure to the 
//original but with each number incremented by 1.
// let arr = [{ a: 1 }, { b: 2, c: 3 }, { d: 4, e: 5, f: 6 }];

// console.log(arr.map(obj => {

//   let newObj = {};
//   for (key in obj){
//     newObj[key] = obj[key] + 1;
//   }
//   return newObj;

// }));

// console.log(arr);

//practice problem 12: given the following data structure, use a combination 
//of methods, including filter, to return a new array identical in structure
//to the original, but containing only the numbers that are multiples of 3.


// let arr = [[2], [3, 5, 7], [9], [11, 15, 18]];

// arr.map(subArray  => {
//   return subArray.filter(number => {
//     return number % 3 === 0;
//   });
// });


//practice problem 13: sort the array so that the subarrays are ordered based on 
//the sum of the odd numbers that they contain.

// let arr = [[1, 6, 7], [1, 5, 3], [1, 8, 3]];

// arr.sort((a,b) => {
//   let sumOfA = a.filter(number => number % 2 === 1).reduce((sum, element) => sum + element,0);
//   let sumOfB = b.filter(number => number % 2 === 1).reduce((sum, element) => sum + element,0);
//   console.log(sumOfA);
//   console.log(sumOfB);
//   if (sumOfA < sumOfB) {
//     return -1;
//   }else if (sumOfA > sumOfB) {
//     return 1;
//   }else {
//     return 0;
//   }
// })
// console.log(arr);

//practice problem 14: 
// Given the following data structure write some code to return an array 
// containing the colors of the fruits and the sizes of the vegetables. 
// The sizes should be uppercase, and the colors should be capitalized.

// let obj = {
//   grape: { type: 'fruit', colors: ['red', 'green'], size: 'small' },
//   carrot: { type: 'vegetable', colors: ['orange'], size: 'medium' },
//   apple: { type: 'fruit', colors: ['red', 'green'], size: 'medium' },
//   apricot: { type: 'fruit', colors: ['orange'], size: 'medium' },
//   marrow: { type: 'vegetable', colors: ['green'], size: 'large' },
// };

// The return value should look like this:

// [["Red", "Green"], "MEDIUM", ["Red", "Green"], ["Orange"], "LARGE"]
// let newArr = [];
// for (let element in obj){
//   if (obj[element].type === 'fruit'){
//     newArr.push(obj[element].colors.map(color => color[0].toUpperCase()+ color.slice(1)));
//       //add capitalized colors
//   }else{
//     newArr.push(obj[element].size.toUpperCase());
//       //add  uppercase size.
//   }
// }
// console.log(newArr);

//practice problem 15: return an array which contains only 
// //the objects where all the numbers are even.

// let arr = [
//   { a: [1, 2, 3] },
//   { b: [2, 4, 6], c: [3, 6], d: [4] },
//   { e: [8], f: [6, 10] },
// ];

// let evenNumbers = arr.filter(obj => {
//   //if ALL numbers are even, return true.
//   return Object.values(obj).every(subArray => {
//     return subArray.every(value => value % 2 === 0);
//   });
// });
// console.log(arr);
// console.log(evenNumbers)

//practice 16: write some code that returns an object where the key is the
//first item in each subarray and the value is the sceond.

let arr = [['a', 1], ['b', 'two'], ['sea', {'c': 3}], ['D', ['a', 'b', 'c']]];

// expected return value of function call
// { a: 1, b: 'two', sea: { c: 3 }, D: [ 'a', 'b', 'c' ] }
let obj = {};
arr.forEach(subArray => {
  obj[subArray[0]] = subArray[1];
})
console.log(obj);