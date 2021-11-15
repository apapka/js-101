//Sum of digits

function sum(number){
  let arr = String(number).split("");
  let sum = arr.reduce(((sum, element) => (sum) + Number(element)),0);
  return sum;
}

// console.log(sum(23));
// console.log(sum(496));
// console.log(sum(123456789));

//alphabetical numbers

const NUMBER_WORDS = ['zero', 'one', 'two', 'three', 'four', 'five', 'six',
'seven', 'eight', 'nine', 'ten', 'eleven', 'twelve', 'thirteen', 'fourteen',
'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen' ];

function alphabeticNumberSort(arr){
  arr.sort((a,b)=>{
    if (NUMBER_WORDS[a] < NUMBER_WORDS[b]){
      return -1;
    }else if (NUMBER_WORDS[a] > NUMBER_WORDS[b]){
      return 1; 
    }else{
      return 0;
    }
  } ); 
  return arr;
}
// console.log(alphabeticNumberSort(
  // [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19]));
// [8, 18, 11, 15, 5, 4, 14, 9, 19, 1, 7, 17, 6, 16, 10, 13, 3, 12, 2, 0]

function multiplyAllPairs(arr1, arr2){
  let newArray = [];
  for (let a = 0; a < arr1.length; a++){
    for (let b = 0; b < arr2.length; b++){
      newArray.push(arr1[a] * arr2[b]);
    }
  }
  newArray.sort((a,b) => a - b);
  return newArray;
}
// console.log(multiplyAllPairs([2,4],[4,3,1,2]));

//leading substrings
function leadingSubstrings(string){
  let substrings = [];
  for (let i = 1; i <= string.length ; i++){
    substrings.push(string.slice(0,i));
  }
  return substrings;
}

// console.log(leadingSubstrings('abc'));
// console.log(leadingSubstrings('a'));
// console.log(leadingSubstrings('xyzzy'));

//all substrings

function substrings(string){
  let substrings = [];
  for (let i = 0; i < string.length; i ++){
    let newArr = leadingSubstrings(string.slice(i));
    console.log(newArr);
    substrings.push(newArr);
  }
  return substrings;
}

console.log(substrings('abc')); //returns ['a', 'ab', 'abc', 'b', 'bc', 'c']

// Rewrite substrings using list processing functions. 
// That is, convert the string into an array of some sort and 
// use functions like map, filter, or reduce to get the desired substrings. 
// (You will also need to use join.) 
// Try not to use forEach as that is too similar to the for loop approach.

