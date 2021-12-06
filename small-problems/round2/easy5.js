function union(arr1, arr2) {
  let newArr = [];
  for (let i = 0; i < arr1.length; i++) {
    if(!newArr.includes(arr1[i])){
      newArr.push(arr1[i]);
    }
  }
  for (let i = 0; i < arr2.length; i++) {
    if (!newArr.includes(arr2[i])) {
      newArr.push(arr2[i]);
    }
  }

  return newArr;
}
// console.log(union([1, 3, 5], [3, 6, 9]));    // [1, 3, 5, 6, 9])

function halvsies(arr) {
  let arr1 = arr.slice(0, Math.ceil(arr.length / 2));
  let arr2 = arr.slice(Math.ceil(arr.length / 2));
  return [arr1, arr2];
}

// console.log(halvsies([1, 2, 3, 4]));       // [[1, 2], [3, 4]]
// console.log(halvsies([1, 5, 2, 4, 3]));    // [[1, 5, 2], [4, 3]]
// console.log(halvsies([5]));                // [[5], []]
// console.log(halvsies([]));                 // [[], []]

function findDup(arr) {
  for (let i = 0; i < arr.length; i++) {
    if (arr.indexOf(arr[i],i + 1) >= 0) {
      return arr[i];
    } 
  }
}
// console.log(findDup([1,5,3,1]));
// console.log(findDup([18,  9, 36, 96, 31, 19, 54, 75, 42, 15,
//   38, 25, 97, 92, 46, 69, 91, 59, 53, 27,
//   14, 61, 90, 81,  8, 63, 95, 99, 30, 65,
//   78, 76, 48, 16, 93, 77, 52, 49, 37, 29,
//   89, 10, 84,  1, 47, 68, 12, 33, 86, 60,
//   41, 44, 83, 35, 94, 73, 98,  3, 64, 82,
//   55, 79, 80, 21, 39, 72, 13, 50,  6, 70,
//   85, 87, 51, 17, 66, 20, 28, 26,  2, 22,
//   40, 23, 71, 62, 73, 32, 43, 24,  4, 56,
//    7, 34, 57, 74, 45, 11, 88, 67,  5, 58]));

   function interleave(arr1, arr2) {
     let newArr =[];
     for (let i = 0; i < arr1.length; i++) {
        newArr.push(arr1[i]);
        newArr.push(arr2[i]);
     }
     return newArr;
   }

   function multiplicativeAverage(array) {
     let product = array.reduce((total, element) => total * element);
     return product / array.length;
   }
  //  console.log(multiplicativeAverage([3,5]));
  //  console.log(multiplicativeAverage([2,5,7,11,13,17]));

  function multiplyList(arr1, arr2) {
    return arr1.map((element,index) => {
      return element * arr2[index];
    })
  }
  // console.log(multiplyList([3,5,7], [9,10,11]));

  function digitList(integer) {
    return String(integer).split("").map(element => Number(element));
  }
  // console.log(digitList(12345));
  // console.log(digitList(7));

function countOccurrences(array) {
  let obj = {};
  array.forEach(element => {
    obj[element] = obj[element] + 1 || 1;
  })
  return obj
}

let vehicles = ['car', 'car', 'truck', 'car', 'SUV', 'truck',
                'motorcycle', 'motorcycle', 'car', 'truck'];

// console.log(countOccurrences(vehicles));

//array average
function average(array) {
  let sum = array.reduce((total, element) => total + element);
  return Math.floor(sum / array.length);

}
// console.log(average([1,5,87,45,8,8]));

//after midnight part 1
function timeOfDay(time) {
  const MINUTES_IN_HOUR = 60;
  const HOURS_IN_DAY = 24;
  let hours;
  let minutes;
  if(time > 0) {
    hours = Math.floor((time / MINUTES_IN_HOUR) % 24);
    minutes = time % MINUTES_IN_HOUR;
  } if (time < 0) {
    hours = 24 - Math.floor(time / MINUTES_IN_HOUR);
    minutes = 60 % time
  }

  console.log(hours);
  console.log(minutes);
  console.log(`${hours}:${minutes}`)

}
console.log(timeOfDay(-3));