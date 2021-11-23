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



//bubble sort



function bubbleSort(array) {
  let inOrder = false;
  while(!inOrder) {
    inOrder = true;
    for (let i = 0;i < array.length - 1; i++) {
      console.log(array);
      if(array[i] > array[i + 1]) {
        let temp = array[i];
        array[i] = array[i + 1];
        array[i + 1] = temp;
        inOrder = false;
        console.log(array);
      }
    }
  }
}
bubbleSort([6,2,7,1,4]);
