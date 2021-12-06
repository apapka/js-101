


//Sum even number rows
//Imagine a sequence of consecutive even integers beginning with 2, 
//the integers are grouped in rows with the first row containing one integer,
//the second row containing two integers, the third row three integers, and so on.

//Given an integer representing the nunmber of a particular row, return an 
//integer representing the sum of all the integers in that row.

//input: integer (row number)
//output: integer (sum of the integers in that row)

//sequence of integers, beginning with 2, consecutive EVEN.
//grouped into rows, each row incrementally larger than the last: 1, 2, 3 ...


//example: sumEvenNumberRows(4);
  //2
  //4 6
  //8 10 12
  //14 16 18 20   
  //sum = 14 + 16 + 18 + 20




//Sum even number rows
//Imagine a sequence of consecutive even integers beginning with 2, 
//the integers are grouped in rows with the first row containing one integer,
//the second row containing two integers, the third row three integers, and so on.

//Given an integer representing the nunmber of a particular row, return an 
//integer representing the sum of all the integers in that row.

//input: integer (row number)
//output: integer (sum of the integers in that row)

//sequence of integers, beginning with 2, consecutive EVEN.
//grouped into rows, each row incrementally larger than the last: 1, 2, 3 ...


//example: sumEvenNumberRows(4);
  //2
  //4 6
  //8 10 12
  //14 16 18 20   
  //sum = 14 + 16 + 18 + 20
  [[2],[4,6],[8,10,12]]

  //algorithm:
  
    //build the rows.
    //initialize a counter to 2, will increment with consecutive even numbers
    //initialize an empty array
      //loop from i = 1 to inclusive input 
        //intitialize empty (nested) array
        //loop again from o to i
          //push the counter element
          //increment the counter
  
  function sumEvenNumberRows(rowNum) {
    let finalArray = [];
    let counter = 2;
    for (let i = 1; i <= rowNum; i++) {
      let nestedArray = [];
        for (let b = 0; b < i; b++) {
            nestedArray.push(counter);
            counter += 2;
          }
        finalArray.push(nestedArray);
    }
    return finalArray[finalArray.length -1].reduce((sum, element) => sum + element, 0);
  }
  console.log(sumEvenNumberRows(4));




  // The maximum sum subarray problem consists in finding the maximum sum
// of a contiguous subsequence in an array of integers:

// maxSequence([-2, 1, -3, 4, -1, 2, 1, -5, 4]) -- should be 6: [4, -1, 2, 1]
// Easy case is when the array is made up of only positive numbers and
// the maximum sum is the sum of the whole array.
// If the array is made up of only negative numbers, return 0 instead.

// Empty array is considered to have zero greatest sum.
// Note that the empty array is also a valid argument array.




//You have to create a function that takes a positive integer number and 
//returns the next bigger number formed by the same digits: 

//12 ==> 21
//513 => 531
// 2017 => 2071
//If no bigger number can be composed using those digits, return -1 .

//input: number
//ouput: next bigger number formed by the same digits

//rules: 
    //if there's no next bigger number, return -1
      //(it's sorted max to min)
    //if it is single digit, return -1

//algorithm: 
    //sameDigits() 
      //sort each by splitting to array 
      //check if they are equal
    //nextBigger() 
        //if is less than 10, return -1 
        //if it is already sorted, return -1
            //check if number = String(number).split("").sort((a, b) => b - a).join(""); 
        //else increment upwards from input number until you find one with same digits
        function sameDigits(number1, number2) {
          return String(number1).split("").sort().join("") === String(number2).split("").sort().join("");
        }
        function nextBigger(number) {
          if (number < 10) {
            return -1;
          } else if (String(number) === String(number).split("").sort((a, b) => b - a).join("")) {
            return -1;
          }
          let counter = number + 1; 
          while (!sameDigits(number, counter)) {
            counter += 1;
          }
          return counter;
        }
        console.log(nextBigger(12));
        console.log(nextBigger(21));
        console.log(nextBigger(513));


