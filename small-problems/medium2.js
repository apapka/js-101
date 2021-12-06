//Letter percentage ratio

function isUppercase(char) {
  if ('A' <= char && 'Z' >= char) {
    return true;
  } else {
    return false;
  }
}
function isLowercase(char) {
  if ('a' <= char && 'z' >= char) {
    return true;
  } else {
    return false;
  }
}
function letterPercentages(string) {
  let uppercaseCount = 0;
  let lowercaseCount = 0;
  let otherCount = 0;
  for (let char of string) {
    if (isLowercase(char)) {
      lowercaseCount += 1;
    } else if (isUppercase(char)) {
      uppercaseCount += 1;
    } else {
      otherCount += 1;
    }
  }
  let total = uppercaseCount + lowercaseCount + otherCount;
  let obj = {};
  obj.uppercase = uppercaseCount / total * 100;
  obj.lowercase = lowercaseCount / total * 100;
  obj.neither = otherCount / total * 100;
  console.log(obj);
  return obj;
}
// letterPercentages('abCdef 123');
// // { lowercase: "50.00", uppercase: "10.00", neither: "40.00" }

// letterPercentages('AbCd +Ef');
// // { lowercase: "37.50", uppercase: "37.50", neither: "25.00" }

// letterPercentages('123');
// // { lowercase: "0.00", uppercase: "0.00", neither: "100.00" }

//triangle sides

// function triangle(side1, side2, side3) {
//   if (!validTriangle(side1, side2, side3)){
//     return 'invalid';
//   }
//   if (side1 === side2 && side2 === side3) {
//     return 'equilateral'
//   } else if ((side1 !== side2 && side2 !== side3)) {
//     return 'scalene';     
//   } else {
//     return 'isosceles'
//   }
// }
// function validTriangle (side1, side2, side3) {
//   if (side1 > side2 + side3 || side2 > side3 + side1 || side3 > side1 + side2) {
//     return false;
//   } else if (side1 === 0 || side2 === 0 || side3 === 0) {
//     return false;
//   } else {
//     return true;
//   }
// }
// console.log(triangle(3, 3, 3));        // "equilateral"
// console.log(triangle(3, 3, 1.5));      // "isosceles"
// console.log(triangle(3, 4, 5));        // "scalene"
// console.log(triangle(0, 3, 3));        // "invalid"
// console.log(triangle(3, 1, 1));        // "invalid"

//Tri-angles
function triangle(angle1, angle2, angle3) {
  if (!validTriangle(angle1, angle2, angle3)) {
    return "invalid";
  } else if (angle1 === 90 || angle2 === 90 || angle3 === 90) {
    return 'right';
  } else if (angle1 > 90 || angle2 > 90 || angle3 > 90) {
    return 'obtuse';
  } else {
    return 'acute';
  }
}
function validTriangle(angle1, angle2, angle3) {
  if ((angle1 + angle2 + angle3) !== 180) {
    return false;
  }
  if (angle1 <= 0 || angle2 <= 0 || angle3 <= 0) {
    return false;
  } 
  return true;
}

// console.log(triangle(60, 70, 50));       // "acute"
// console.log(triangle(30, 90, 60));       // "right"
// console.log(triangle(120, 50, 10));      // "obtuse"
// console.log(triangle(0, 90, 90));        // "invalid"
// console.log(triangle(50, 50, 50));       // "invalid"


//unlucky days
function fridayThe13ths(year) {
  let fridays = 0;
  for (let month = 0; month <= 12; month++) {
    let date = new Date(year, month, 13);
    let day = date.getDay();
    if (day === 5) {
      fridays += 1;
    }
  }
  return fridays;
}

console.log(fridayThe13ths(1986));      // 1
console.log(fridayThe13ths(2015));      // 3
console.log(fridayThe13ths(2017));      // 2)

//next featured number
function featured(number) {
  //find next featured number
  if (number >= 9876543201)
    return "there is no next featured number";
  do {
    number += 1;
  }while (!isFeatured(number));
  return number;
}

function isFeatured(number) {
  if (number % 7 !== 0) {
    return false;
  } else if (number % 2 !== 1) {
    return false;
  } else {
    //check that all the digits only appear once.
    let string = String(number);
    for (let i = 0; i < string.length; i++) {
      let digit = string[i];
      if (string.indexOf(digit,i + 1) !== - 1) {
        return false;
      }
    }
    return true;
  }
}
  

console.log(featured(12));           // 21
console.log(featured(20));           // 21
console.log(featured(21));           // 35
console.log(featured(997));          // 1029
console.log(featured(1029));         // 1043
// featured(999999);       // 1023547
// featured(999999987);    // 1023456987
// featured(9876543186);   // 9876543201
// featured(9876543200);   // 9876543201
console.log(featured(9876543201));   // "There is no possible number that fulfills those requirements."


//Sum Square - Square Sum
//problem: 
  //input: number
  //output: number
  //rules: compute the difference between
            //-  the square of the sum of the first x integers
            //- the sum of the squares of the firsts x integers
  //examples in problem
  //algorithm: 
     // 1. declare and initialize variables to track the sum and sum of squares
     // 2. for each number 1 to n: 
            // 3. add n to the sum
            // 4. add n**2 to the sum of squares
    // 5. square the sum
    // 6. return the difference.

function sumSquareDifference(x) {
  let sum = 0;
  let sumOfSquares = 0;
  for (let i = 1; i <= x; i ++) {
    sum += i;
    sumOfSquares += i**2;
  }
  let squareOfSum = sum**2;
  return squareOfSum - sumOfSquares; 
}

console.log(sumSquareDifference(3));
console.log(sumSquareDifference(10));
console.log(sumSquareDifference(1));
console.log(sumSquareDifference(100));




//bubble sort


function bubbleSort(array) {
  let inOrder = false;
  while(!inOrder) {
    inOrder = true;
    for (let i = 0;i < array.length - 1; i++) {
      // console.log(array);
      if(array[i] > array[i + 1]) {
        let temp = array[i];
        array[i] = array[i + 1];
        array[i + 1] = temp;
        inOrder = false;
        // console.log(array);
      }
    }
  }
}
// bubbleSort([6,2,7,1,4]);


let longText =
  'Four score and seven years ago our fathers brought forth on this ' +
  'continent a new nation, conceived in liberty, and dedicated to the ' +
  'proposition that all men are created equal. Now we are engaged in a ' +
  'great civil war, testing whether that nation, or any nation so ' +
  'conceived and so dedicated, can long endure. We are met on a great ' +
  'battlefield of that war. We have come to dedicate a portion of that ' +
  'field, as a final resting place for those who here gave their lives ' +
  'that that nation might live. It is altogether fitting and proper that ' +
  'we should do this.';

let arr = longText.split(".").split("!");