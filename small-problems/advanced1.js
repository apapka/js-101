let transpose = function (matrix) {
  let newMatrix = [[],[],[]];
  for (let i = 0; i < matrix.length; i++) {
    for (let b = 0; b < matrix[i].length; b++){
      newMatrix[i].push(matrix[b][i]);
    }
  } 
  return newMatrix;
};
const matrix = [
  [1, 5, 8],
  [4, 7, 2],
  [3, 9, 6]
];

let newMatrix = transpose(matrix);

// console.log(newMatrix);      // [[1, 4, 3], [5, 7, 9], [8, 2, 6]]
// console.log(matrix);         // [[1, 5, 8], [4, 7, 2], [3, 9, 6]]

// function binarySearch(array, searchItem) { 
//   if (array.length === 0) {
//     return -1;
//   }
//   let midpoint = parseInt(array.length / 2);
//   if (array[midpoint] === searchItem) {
//     return midpoint;
//   } else if (array[midpoint] < searchItem) {
//     let newArray = array.slice(midpoint + 1);
//     return binarySearch(newArray, searchItem);
//   } else {
//     let newArray = array.slice(0, midpoint);
//     return binarySearch(newArray, searchItem);
//   }
//   //return index of searchItem if found or -1 otherwise

// }


//merge sorted lists

// function merge(arr1, arr2) {
//   let newArr = [];
//   let index1 = 0;
//   let index2 = 0;
//   debugger;
//   while(index1 <= arr1.length && index2 <= arr2.length) {
//     if (arr1[index1] < arr2[index2]) {
//       newArr.push(arr1[index1]);
//       index1++;
//     } else if (arr1[index1] > arr2[index2]) {
//       newArr.push(arr2[index2]);
//       index2++;
//     } else {
//       newArr.push(arr1[index1]);
//       newArr.push(arr2[index2]);
//       index1++;
//       index2++;
//     }
//   }
//   return newArr;
// }
// console.log(merge([1,5,9], [2,6,8]));



//binary search
function binarySearch(array, searchItem) {  //
  let leftIndex = 0;
  let rightIndex = array.length;
  let midpoint; 
  while(true) {
    midpoint = parseInt((leftIndex + rightIndex) / 2);
    if(array[midpoint] === searchItem) {
      return midpoint;
    } else if (leftIndex === rightIndex) { 
      return -1;
    }
    else if (array[midpoint] < searchItem) {
      leftIndex = midpoint + 1;
    } else if (array[midpoint] > searchItem) {
      rightIndex = midpoint - 1;
    }
  }
}
let yellowPages = ['Apple Store', 'Bags Galore', 'Bike Store', 'Donuts R Us', 'Eat a Lot', 'Good Food', 'Pasta Place', 'Pizzeria', 'Tiki Lounge', 'Zooper'];
// console.log(binarySearch(yellowPages, 'Pizzeria'));                   // 7
// console.log(binarySearch(yellowPages, 'Apple Store'));                // 0

// console.log(binarySearch([1, 5, 7, 11, 23, 45, 65, 89, 102], 77));    // -1
// console.log(binarySearch([1, 5, 7, 11, 23, 45, 65, 89, 102], 89));    // 7
// console.log(binarySearch([1, 5, 7, 11, 23, 45, 65, 89, 102], 5));     // 1

// console.log(binarySearch(['Alice', 'Bonnie', 'Kim', 'Pete', 'Rachel', 'Sue', 'Tyler'], 'Peter'));  // -1
// console.log(binarySearch(['Alice', 'Bonnie', 'Kim', 'Pete', 'Rachel', 'Sue', 'Tyler'], 'Tyler'));  // 6


