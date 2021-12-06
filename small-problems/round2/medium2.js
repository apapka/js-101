//input: string
//outut: object with percentage lowercase, percent uppercase, percent neither

// set variables for count for UC, LC, Neither
// for each character in string
    //if is uppercase (char >= 'A' <= Z), increment UC
    //if is lowercase (char between a and z, inclusive), increment LC
    //else increment Neither
  //create object with uppercase = UC / length, lowercase = LC / count, neither = Niether/count

function letterPercentages(string) {
  let uppercaseCount = 0;
  let lowercaseCount = 0;
  let neitherCount = 0;
  for(let i = 0; i < string.length; i++ ) {
    let char = string[i];
    if (char >='A' && char <= 'Z') {
      uppercaseCount += 1;
    } else if (char >= 'a' && char <= 'z') {
      lowercaseCount += 1;
    } else {
      neitherCount += 1;
    }
  }
  let totalCount = string.length;
  let obj = {
    uppercase: ((uppercaseCount / totalCount) * 100).toFixed(2),
    lowercase: ((lowercaseCount / totalCount) * 100).toFixed(2),
    neither: ((neitherCount / totalCount) * 100).toFixed(2)
  }
  return obj;
}
// console.log(letterPercentages('AbCd +Ef'));

//triangle sides
//input: 3 numbers
//output: string, type of triangle or if it's an invalid triangle
//rules: valid triangle: 
      //length of 2 shortest > length of longest
      //all lengths > 0

//algorithm:
  //isValidTriangle(), 
    //length1 + length2 > length3 && length2 + length3 > length1 
    //&& length1 + length3> length2, if any of this not true, return invalid
    //if one length is less than 0, return 'invalid'

  //if (length1 === length2 && length2 === length3) return 'equilateral'
  // if (length1 != length2 && length2 != length3) return 'scalene')
  //else return isosceles

function triangle(side1, side2, side3) {
  if (side1 < 0 || side2 < 0 || side3 < 0) {
    return 'invalid';
  } 
  if ((side1 + side2) <= side3 || (side2 + side3) <= side1 || (side1 + side3) <= side2) {
    return 'invalid'
  }
  if (side1 === side2 && side2 === side3) {
    return 'equilateral'
  } 
  if (side1 !== side2 && side2 !== side3) {
    return 'scalene'
  }
  return 'isosceles'
}

// console.log(triangle(3, 3, 3));        // "equilateral"
// console.log(triangle(3, 3, 1.5));      // "isosceles"
// console.log(triangle(3, 4, 5));        // "scalene"
// console.log(triangle(0, 3, 3));        // "invalid"
// console.log(triangle(3, 1, 1));        // "invalid"

//triangles
//given integer values of 3 angles
//output type of triangle
//rules: sum must be 180, every angle must be > 0

function triangle(angle1, angle2, angle3) {
  if ((angle1 + angle2 + angle3) !== 180) {
    return 'invalid';
  } 
  else if (angle1 <= 0 || angle2 <= 0 || angle3 <= 0) {
    return 'invalid';
  } 
  if (angle1 === 90 || angle2 === 90 || angle3 === 90) {
    return 'right';
  }
  if (angle1 < 90 && angle2 < 90 && angle3 < 90) {
    return 'acute';
  } 
  return 'obtuse';
}

// console.log(triangle(60, 70, 50));       // "acute"
// console.log(triangle(30, 90, 60));       // "right"
// console.log(triangle(120, 50, 10));      // "obtuse"
// console.log(triangle(0, 90, 90));        // "invalid"
// console.log(triangle(50, 50, 50));       // "invalid"

//given a year, return number of friday the 13ths

function fridayThe13ths(year) {
  let count = 0;
  for( let i = 0; i < 12; i++) {
    let date = new Date(year, i, 13);
    if (date.getDay() === 5) {
      count += 1;
    }
  }
  return count;
}
// console.log(fridayThe13ths(1986));
// console.log(fridayThe13ths(2015));
// console.log(fridayThe13ths(2017));

//input: number
//output: next Featured Number greater than number

//algorithm: 
  //isFeaturedNumber() 
    //is it odd? 
    //is it multiple of 7?
    // do all digits occur exactly once ?
        //convert to a string
        // for each character in the string if indexOf(char, index +1) > 0
        //return false;

    //featured()
      //increment upwards from n testing if each is a featured number, 
  
function featured(number) {
  if (number >= 9876543201) {
    return "there is no possibl enumber"
  }
  for (let i = number + 1; ;i ++){
    if (isFeaturedNumber(i)) {
      return i;
    }
  }
}
// console.log(featured(99999987));
function isFeaturedNumber(number) {
  if (number % 2 !== 1) {
    return false;
  } if (number % 7 !== 0){
    return false;
  }
  let string = String(number);
  for (let i = 0; i < string.length; i++) {
    let char = string[i];
    if (string.indexOf(char, i + 1) >= 0) {
      return false;
    }
  }
  return true;
} 

function sumSquareDifference(count) {
  let sum = 0;
  let sumOfSquares = 0;
  for (let i = 1; i <= count; i++) {
    sum += i;
    sumOfSquares += Math.pow(i,2);
  }
  return Math.pow(sum,2) - sumOfSquares;
}
console.log(sumSquareDifference(3));      // 22 --> (1 + 2 + 3)**2 - (1**2 + 2**2 + 3**2)
console.log(sumSquareDifference(10));     // 2640
console.log(sumSquareDifference(1));      // 0
console.log(sumSquareDifference(100));    // 25164150


function longestSentence(text) {
  const PUNCTUATION = ['.','!','?'];
  let wholeText = text.split(" ");
  let currentSentence = [];
  let longestSentenceArr = [];
  let index = 0;
  while(index < wholeText.length) {
    currentSentence.push(wholeText[index]);
    if(PUNCTUATION.includes(wholeText[index].slice(-1))) {
      if (currentSentence.length > longestSentenceArr.length) {
        longestSentenceArr = currentSentence; 
      }
      currentSentence = [];
    }
    index += 1;
  }
  return longestSentenceArr.join(" ");
}
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

  console.log(longestSentence(longText));