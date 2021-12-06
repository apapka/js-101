//Rotation part 1

//write a function that rotates an array by moving the first element to the end of 
//the array. Do not modify the original array


//input: an array
//output: a new array with the first element moved to the end of the array
//rules: if input is not an array, return undefined.
        //if input is an empty array, return an empty array
        //if input length is one, return the original array

  //algorithm: 
    //test if Arrays.isArray(input), else return undefined.
    //test if it is empty, or input length is one, if so return original array
    //let temp = array[0];
    //let newArray = array.slice(1).concat(temp);
    //return newArray
function rotateArray(array) {
  if (!Array.isArray(array)) {
    return undefined;
  } else if (array.length <= 1) {
    return array;
  }
  let temp = array[0];
  let newArray = array.slice(1).concat(temp);
  return newArray;
}

//write a function that rotates the last count digits of a number. 
//input: number, count of digits
//output: number, that has rightmost count digits rotated
//if count is 1, return the original number
//if NaN, return -1;

//algorithm: 
  //convert number to a string
  //store the left portion in a string
  //rotate the right portion
    //slice(1) + string[0];
  //add the left portion to the right portion
  //return the string as a number

function rotateRightmostDigits(number, count) {
  if (count === 1){
    return number;
  }
  let finalString = String(number);
  let leftPortion = finalString.slice(0, -count);
  let rightPortion = finalString.slice(-count);
  rightPortion = rightPortion.slice(1) + rightPortion[0];
  finalString = leftPortion + rightPortion;
  return Number(finalString);
}

console.log(rotateRightmostDigits(735291, 3));


//input: number
//output: maximum-rotated number

//rules: first rotate all the digits (length), then rotate length - 1 digits
//then rotate length - 2 digits, until you are rotating the last 2 digits

//algorithm:
  //convert the number to a string
  //loop from VAR string.length decrementing to 2
  //number = rotateNumber(number, VAR)
  //return number

function maxRotation(number) {
  let string = String(number);
  for (let i = string.length; i >= 2; i--) {
    string = rotateRightmostDigits(string, i);
  }
  return Number(string);
}

console.log(maxRotation(735291));
console.log(maxRotation(35));
console.log(maxRotation(105))

//write a function that takes a sentence string as an argument and 
//returns that sting with every occurrence of a number word converted to digit

//input: string
//output: changed string, numberWords -> digits
//rules: change numberWords to digits. 
  //if word ends with period, save that period.

//algorithm: 
  //create a dictionary of numberWords {numberWOrd: digit}
  //break the string into an array of words
  //iterate through each word. 
  //if it ends with a period, take the period off (Readd period later)
  //search whether the word exists in the dictionary
  //if it does, change the word to the digit.
  //return the modified string

function wordToDigit(string) {
  const NUMBER_WORDS = {one: 1, two: 2, three:3, four: 4, 
                    five: 5, six: 6, seven: 7, eight: 8, 
                    nine:9, zero: 0};
  array1 = string.split(" ");
  return array1.map(word => {
    if (word.endsWith('.')){
      if (Object.keys(NUMBER_WORDS).includes(word.slice(0, -1))){
        return NUMBER_WORDS[word.slice(0, -1)] + '.';
      }
    }
    if(Object.keys(NUMBER_WORDS).includes(word)) {
      return NUMBER_WORDS[word];
    } else{
      return word;
    }
  }).join(" ");
}

console.log(wordToDigit('Please call me at five five five one two three four.'))

//Write a function that takes a string and return an object containing the 
//following three properties:

//input: string
//output; object with lowercase,uppercase,neither properties representing
//the percentage of characters that are that property.

//algorithm: 
//declare and initialize to 0 the three count variables
  //iterate over each character in the string
  // if character is uppercase, incremenet uppercase count
  //if its lowercase, increment lowercase count
  //if its neither, increment neither count
  //create object with count/totalcount * 100 for each.

function letterPercentages(string) {
  let uppercaseCount = 0;
  let lowercaseCount = 0;
  let neitherCount = 0;
  for (let i = 0; i < string.length; i++) {
    if (string[i]>= 'A' && string[i] <= 'Z') {
      uppercaseCount += 1;
    } else if (string[i] >= 'a' && string[i] <= 'z') {
      lowercaseCount += 1;
    } else {
      neitherCount +=1;
    }
  }
  console.log(lowercaseCount);
  console.log(uppercaseCount);
  console.log(neitherCount);
  let upperPercent = uppercaseCount / string.length * 100;
  let lowerPercent = lowercaseCount / string.length * 100;
  let neitherPercent = neitherCount / string.length * 100;
  return {uppercase: upperPercent.toFixed(2), lowercase: lowerPercent.toFixed(2), 
  neither: neitherPercent.toFixed(2)}
}
console.log(letterPercentages('abCdef 123'));

function oneDigitDeleted(n) {
  let string = String(n);
  let arr = [];
  for (let i = 0; i < string.length; i ++){
    arr.push(Number(string.slice(0,i) + string.slice(i+1)));
  }
  return arr;
}

function deleteDigit(n) {
  let onedeleted = oneDigitDeleted(n);
  console.log(onedeleted);
  return Math.max(...onedeleted);
}
console.log(deleteDigit(12345));