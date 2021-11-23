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

console.log(leadingSubstrings('abc'));
console.log(leadingSubstrings('a'));
console.log(leadingSubstrings('xyzzy'));

//all substrings

function substrings(string){
  let substrings = [];
  for (let i = 0; i < string.length; i ++){
    let newArr = leadingSubstrings(string.slice(i));
    // console.log("new arr: " + newArr);
    substrings.push(newArr);
  }
  return substrings.flat();
}

console.log(substrings('abc')); //returns ['a', 'ab', 'abc', 'b', 'bc', 'c']
//console.log(substrings('abcd')); //returns ['a', 'ab', 'abc', 'abcd', 'b', 'bc', 'bcd', 'c', 'cd', 'd' ]
// Rewrite substrings using list processing functions. 
// That is, convert the string into an array of some sort and 
// use functions like map, filter, or reduce to get the desired substrings. 
// (You will also need to use join.) 
// Try not to use forEach as that is too similar to the for loop approach.


//palindromic substrings

function isPalindrome (string) {
  return string === string.split("").reverse().join("");
}
function palindromes(string) {
  let palindromicSubstrings = [];
  let substringArray = substrings(string);
  for (let substring of substringArray) {
    if (substring.length === 1) continue;
    if (isPalindrome(substring)) {
      palindromicSubstrings.push(substring);
    }
  }
  return palindromicSubstrings;
}


// console.log(palindromes('abcd'));
// console.log(palindromes('madam'));
// console.log(palindromes('hello-madam-did-madam-goodbye'));

//sum of sums

//problem: input: array
  //output: sum of the sums of each subsequence
  //rules: assume the array contains at least 1 number
    //
  //examples given in problem
  //data structure: array. subsequences represented by arrays.. 
  //algorithm:
    //set finalSum equal to the first element of the array
    //get subarray 1
    //find sum of subarray 1
    //add sum of subarray1 to final sum
    // repeat steps 2 to 5 with each subsequence
    //return final sum
function sumOfSums(array) {
  let finalSum = 0; 
  for (let i = 1; i <= array.length; i++) {
    let subArray = array.slice(0,i);
    let sum = subArray.reduce((sum, element) => sum + element, 0);
    finalSum += sum;
  }
  return finalSum;
}
// console.log(sumOfSums([4]));
// console.log(sumOfSums([1, 2, 3, 4, 5]));
// console.log(sumOfSums([3, 5, 2]));

// function buyFruit(array) {
//   let resultArray = [];
//   for (let a = 0; a < array.length; a++) {
//     for (let b = 0; b < array[a][1]; b++) {
//       resultArray.push(array[a][0]);
//     }
//   }
//   return resultArray;
// }
// console.log(buyFruit([['apple', 3], ['orange', 1], ['banana', 2]]));
// returns ["apple", "apple", "apple", "orange", "banana", "banana"]

//try with map and reduce
function buyFruit(array) {
  return array.map(element => {
    let newArray = [];
    for (let i = 0; i < element[1]; i++) {
      newArray.push(element[0]);
    }
    return newArray.flat();
  })
}
console.log(buyFruit([['apple', 3], ['orange', 1], ['banana', 2]]));


// function transactionsFor(idNo, transactionList) {
//   let array = [];
//   for (let i = 0 ; i < transactionList.length; i++) {
//     let transaction = transactionList[i];
//     if (transaction['id'] === idNo) {
//       array.push(transaction);
//     }
//   }
//   return array;
// }
function transactionsFor(idNo, transactionList) {
  return transactionList.filter(transaction => transaction.id === idNo);
}
// let transactions = [ { id: 101, movement: 'in',  quantity:  5 },
//                      { id: 105, movement: 'in',  quantity: 10 },
//                      { id: 102, movement: 'out', quantity: 17 },
//                      { id: 101, movement: 'in',  quantity: 12 },
//                      { id: 103, movement: 'out', quantity: 20 },
//                      { id: 102, movement: 'out', quantity: 15 },
//                      { id: 105, movement: 'in',  quantity: 25 },
//                      { id: 101, movement: 'out', quantity: 18 },
//                      { id: 102, movement: 'in',  quantity: 22 },
//                      { id: 103, movement: 'out', quantity: 15 }, ];

// console.log(transactionsFor(101, transactions));
// returns
// [ { id: 101, movement: "in",  quantity:  5 },
//   { id: 101, movement: "in",  quantity: 12 },
//   { id: 101, movement: "out", quantity: 18 }, ]


function isItemAvailable(itemNo, transactionList) {
  let itemTransactions = transactionsFor(itemNo, transactionList);
  let quantity = 0;
  for (let i = 0; i < itemTransactions.length; i++) {
    if (itemTransactions[i]['movement'] === 'in') {
      quantity += itemTransactions[i]['quantity'];
    } else {
      quantity -= itemTransactions[i]['quantity'];
    }
  }
  return quantity > 0;
}


let transactions = [ { id: 101, movement: 'in',  quantity:  5 },
                     { id: 105, movement: 'in',  quantity: 10 },
                     { id: 102, movement: 'out', quantity: 17 },
                     { id: 101, movement: 'in',  quantity: 12 },
                     { id: 103, movement: 'out', quantity: 20 },
                     { id: 102, movement: 'out', quantity: 15 },
                     { id: 105, movement: 'in',  quantity: 25 },
                     { id: 101, movement: 'out', quantity: 18 },
                     { id: 102, movement: 'in',  quantity: 22 },
                     { id: 103, movement: 'out', quantity: 15 }, ];

console.log(isItemAvailable(101, transactions));     // false
console.log(isItemAvailable(103, transactions));     // false
console.log(isItemAvailable(105, transactions));     // true