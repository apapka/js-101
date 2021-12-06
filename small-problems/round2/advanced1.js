

function merge(arr1, arr2) {
  let newArr = [];
  if (arr1.length === 0) {
    return arr2;
  } else if (arr2.length === 0) {
    return arr1;
  }
  let index1 = 0;
  let index2 = 0;
  while(index1 < arr1.length && index2 < arr2.length) {
    if(arr1[index1] <= arr2[index2]) {
      newArr.push(arr1[index1]);
      index1 += 1;
    } else {
      newArr.push(arr2[index2])
      index2 += 1;
    }
  }
  return newArr;
}
console.log(merge([1, 5, 9], [2, 6, 8]));      // [1, 2, 5, 6, 8, 9]
console.log(merge([1, 1, 3], [2, 2]));         // [1, 1, 2, 2, 3]
console.log(merge([], [1, 4, 5]));             // [1, 4, 5]
console.log(merge([1, 4, 5], []));  