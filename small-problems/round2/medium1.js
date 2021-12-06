
function rotateArray(array) {
  let newArray = [];
  if(!Array.isArray(array)) {
    return undefined;
  } if (array.length === 0) {
    return [];
  }
  return array.slice(1).concat(array[0]);
}

function rotateRightmostDigits(number, count) {
  let portionToStaySame = String(number).slice(0, - count);
  let portionToRotate = String(number).slice(-count);
  portionToRotate = rotateArray(portionToRotate.split("")).join("");
  return Number(portionToStaySame + portionToRotate);

}
//input: number
//output: maximum rotation of original number

//algorithm: 
  // rotate the (length) rightmost digits of the number
  //rotate the (length - 1) rightmost digits of the number
  //rotate the (length - 2) rightmost digits of the number
  //repeat rotateRightMostDigits(number, length - i) until length - i === 1

function maxRotation(number) {
  let numberString = String(number);
  for (let i = numberString.length; i >= 2; i--) {
    number = rotateRightmostDigits(number, i);
  }
  return number;
}
// console.log(maxRotation(735291));

//stack machine interpretation

function  minilang(string) {
  let arr = string.split(" ");
  let register = 0;
  let stack = [];
  for(let i = 0; i < arr.length; i++) {
    let currOpp = arr[i];
    switch(currOpp){ 
      case 'PUSH': 
        stack.push(register);
        break;
      case 'ADD': 
        register = stack.pop() + register;
        break;
      case 'SUB': 
        register = register - stack.pop();
        break;
      case 'MULT': 
        register *= stack.pop();
        break;
      case 'DIV': 
        register = parseInt(register / stack.pop());
        break;
      case 'REMAINDER': 
        register = parseInt(register % stack.pop());
        break;
      case 'POP': 
        register = stack.pop();
        break;
      case 'PRINT':
        console.log(register);
        break;
      default: 
        register = Number(currOpp);
        break;
    }
  }
}
// console.log(minilang('PRINT'));
// console.log(minilang('5 PUSH 3 MULT PRINT'));
// minilang('5 PRINT PUSH 3 PRINT ADD PRINT');
// minilang('5 PUSH POP PRINT');
// minilang('3 PUSH 4 PUSH 5 PUSH PRINT ADD PRINT POP PRINT ADD PRINT');
// minilang('3 PUSH PUSH 7 DIV MULT PRINT');
// minilang('4 PUSH PUSH 7 REMAINDER MULT PRINT');
// minilang('-3 PUSH 5 SUB PRINT');
// minilang('6 PUSH');

//algorithm: 
  //set const that holds the word values as keys and the number values as values
  // break string into an array using split(" ");
  // iterate over array object
    // if array[i].endsWith('.'), see if the slice that cuts last char is in 
    //Obj.keys(obj). if yes, change arr[i] to digit value + '.' + continue to next
    //iteration
  // if array[i] is found in Object.keys(obj), change array[i] to the digit value
  // 
function wordToDigit(string) {
  const NUMBERS = {
    one: 1,
    two: 2,
    three: 3,
    four: 4,
    five: 5,
    six: 6,
    seven: 7,
    eight: 8,
    nine: 9,
    zero: 0
  }
  let array = string.split(" ");
  let keys = Object.keys(NUMBERS);
  array = array.map((element => {
    if (element.endsWith('.')) {
      let elementWithoutPeriod = element.slice(0, element.length - 1);

      if (keys.includes(elementWithoutPeriod)) {
        return NUMBERS[elementWithoutPeriod] + '.';
      }
    } 
    if (keys.includes(element)) {
      return NUMBERS[element];
    }
    return element;
  }))
  return array.join(" ");
}

// console.log(wordToDigit('Please call me at five five five one two three four. Thanks.'));
// "Please call me at 5 5 5 1 2 3 4. Thanks."

//Write a recursive function that computes the nth fibonacci number
//input: number
//output: number

//rules that if n = 1, return 1
// if n = 2, return 1.
//return F(n-1) + F(n-2)

//algorithm: edge cases, if n = 1 or 2, return 1
  // else return F(n-1) + F(n-2);

function fibonacci(n) {
  if (n <= 2) {
    return 1;
  } else {
    return fibonacci(n-1) + fibonacci(n - 2);
  }
}

// console.log(fibonacci(1));
// console.log(fibonacci(4));
// console.log(fibonacci(5));
// console.log(fibonacci(12));
// console.log(fibonacci(20));

//algorithm: 
  //start with an array [1,1]
  //loop through n - 2 times
    //next Value = arr[0] + arr[1];
    // update array values, so that 0 holds what was 1 and 1 holds next value
    //loop through 
    
  //return arr[1];

  // function fibonacci(n) {
  //   if(n <= 2) {
  //     return 1;
  //   }
  //   let fib = [1,1];
  //   for (let i = 0; i < n - 2; i++) {
  //     let nextValue = fib[0] + fib[1];
  //     [fib[0], fib[1]] = [fib[1], nextValue];

  //   }
  //   return fib[1];
  // }


//return to the recursive function, use memoization.
//store already calcuclated values in an object. pass that object for each call
function fibonacci(n, obj = {}) {
  if (n <= 2) {
    return 1;
  } else if ( obj[n] ) {
    return obj[n];
  }else {
    obj[n] = fibonacci(n-1, obj) + fibonacci(n-2, obj);
    return obj[n]
  }

}
console.log(fibonacci(75));
