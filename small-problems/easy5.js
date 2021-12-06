//Combining arrays

// function union(arr1, arr2){
//   let newArray = [];
//   for(let i = 0; i < arr1.length; i++){
//     if(!newArray.includes(arr1[i])){
//       newArray.push(arr1[i]);
//     }
//   }
//   for (let b = 0; b < arr2.length; b++){
//     if(!newArray.includes(arr2[b])){
//       newArray.push(arr2[b]);
//     }
//   }
//   return newArray;
// }
// console.log(union([1,3,5],[3,6,9]));

// function union2(arr1, arr2){
//   return removeDuplicates(arr1.concat(arr2));
// }

// function removeDuplicates(arr){
//   let newArray = [];
//   for (let i = 0 ; i < arr.length; i ++){
//     if (!newArray.includes(arr[i])){
//       newArray.push(arr[i]);
//     }
//   }
//   return newArray;
// }
// console.log(union2([1,2,3,4,5,6,7], [1,3,16,16,16,23]));

//halvsies

// function halvsies(arr){
//   let arr1 = [];
//   let arr2 = [];
//   let halfLength = Math.ceil(arr.length / 2);
//   for (let i = 0; i < halfLength; i ++){
//     arr1.push(arr[i]);
//     if (arr1.length + arr2.length === arr.length){
//       break;
//     }
//     arr2.push(arr[i + halfLength]);
//   }
//   return [arr1, arr2]

// }

// function halvsies(arr){
//   let half = Math.ceil (arr.length / 2);
//   let arr1 = arr.slice(0,half);
//   let arr2 = arr.slice(half);
//   return [arr1, arr2];
// }

// console.log(halvsies([1, 2, 3, 4]));       // [[1, 2], [3, 4]]
// console.log(halvsies([1, 5, 2, 4, 3]));    // [[1, 5, 2], [4, 3]]
// console.log(halvsies([5]));                // [[5], []]
// console.log(halvsies([]));                 // [[], []]

//find the duplicate

function findDup(arr){
  for (let i = 0; i < arr.length; i++){
    if (i !== arr.lastIndexOf(arr[i])){
      console.log(arr[i]);
      return arr[i];
    }
  }
  
}
// findDup([1, 5, 3, 1]);                                // 1
// findDup([18,  9, 36, 96, 31, 19, 54, 75, 42, 15,
//          38, 25, 97, 92, 46, 69, 91, 59, 53, 27,
//          14, 61, 90, 81,  8, 63, 95, 99, 30, 65,
//          78, 76, 48, 16, 93, 77, 52, 49, 37, 29,
//          89, 10, 84,  1, 47, 68, 12, 33, 86, 60,
//          41, 44, 83, 35, 94, 73, 98,  3, 64, 82,
//          55, 79, 80, 21, 39, 72, 13, 50,  6, 70,
//          85, 87, 51, 17, 66, 20, 28, 26,  2, 22,
//          40, 23, 71, 62, 73, 32, 43, 24,  4, 56,
//           7, 34, 57, 74, 45, 11, 88, 67,  5, 58]);    // 73


//combine two lists

function interleave(arr1, arr2) {
  let newArr = [];
  let i = 0; 
  arr1.forEach(element => {
    newArr.push(element);
    newArr.push(arr2[i]);
    i++;
  });
  console.log(newArr);
  return newArr;
}

// interleave([1,2,3], ['a','b','c'])

//Multiplicative Average
function multiplicativeAverage(array){
  let product = array.reduce((product, element) => product * element, 1)
  return (product / array.length).toFixed(3);
}
// console.log(multiplicativeAverage([3,5]));
// console.log(multiplicativeAverage([2,5,7,11,13,17]));

//multiply lists
function multiplyLists(arr1, arr2){
  let i = 0;
  let newArr = arr1.map((_,i) => {
    return  arr1[i] * arr2[i];

  });
  return newArr;
}
// multiplyLists([3,5,7],[9,10,11]);

//list of digits
function digitList(number){
  let stringArr = String(number).split("");
  let numberArr = stringArr.map(string => parseInt(string,10));
  return numberArr;
}
// console.log(digitList(12345));
// console.log(digitList(7));
// console.log(digitList(375290));
// console.log(digitList(444));

function countOccurrences(array){
  let count = {};
  array.forEach(element=>{
    if (count[element]){
      count[element] += 1;
    }else{
      count[element] = 1;
    }
  });
  for (let key in count) {
    console.log(key + ' => ' + count[key]);
  }
  return count;
}
let vehicles = ['car', 'car', 'truck', 'car', 'SUV', 'truck',
                'motorcycle', 'motorcycle', 'car', 'truck'];

// countOccurrences(vehicles);

// console output -- your output sequence may be different

//array average

function average(arr){
  let sum = arr.reduce((sum, element) => sum + element);
  return Math.floor(sum / arr.length);
}
// console.log(average([1, 5, 87, 45, 8, 8]))
// console.log(average([9, 47, 23, 95, 16, 52]));

//after midnight part 1

function timeOfDay(min) {
  const MIN_PER_HOUR = 60;
  const HOURS_PER_DAY = 24;
  let minutes;
  let hours;
  if (min >= 0){
     minutes = min % 60;
     hours = (min - minutes) / 60 % 24;
  } else {
     minutes = 60 - (Math.abs(min) % 60);
     hours  = 24 - Math.abs(Math.round((Math.abs(min) - minutes)/ 60) % 24);
  }
  if (hours === 24) {
    hours = 00;
  }

  console.log(`${hours}:${minutes}`);
}

timeOfDay(-4321);