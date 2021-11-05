let produce = {
  apple: 'Fruit',
  carrot: 'Vegetable',
  pear: 'Fruit',
  broccoli: 'Vegetable'
};


function selectFruit(list) {
  let keys = Object.keys(list);
  let selectedFruits = {};
  for (let i = 0; i < keys.length; i++){
    let currentKey = keys[i];
    let currentValue = list [currentKey];

    if (currentValue === 'Fruit'){
      selectedFruits[currentKey] = currentValue;
    }
  }
}
console.log(selectFruit(produce)); // => { apple: 'Fruit', pear: 'Fruit' }



function doubleNumbers(numbers) {
  let doubledNums = [];
  let counter = 0;

  while (counter < numbers.length) {
    let currentNum = numbers[counter];
    doubledNums.push(currentNum * 2);

    counter += 1;
  }

  return doubledNums;
}
let myNumbers = [1, 4, 3, 7, 2, 6];
doubleNumbers(myNumbers); // => [2, 8, 6, 14, 4, 12]
console.log(myNumbers);                // => [1, 4, 3, 7, 2, 6]

//If we wanted to, we could've decided that mutating the function argument is the right approach. Can you implement a doubleNumbers function that mutates its argument?

function doubleNumbersMutating(numbers){
  for (let i = 0; i < numbers.length; i ++){
    numbers[i] = numbers[i] * 2;
  }
}

let myNumbersTwo = [1, 4, 3, 7, 2, 6];
doubleNumbersMutating(myNumbersTwo); // => [2, 8, 6, 14, 4, 12]
console.log(myNumbersTwo);                // => [1, 4, 3, 7, 2, 6]
// 
// Here's an exercise for you: suppose we wanted to transform the 
//numbers based on their position in the array rather than their value? 
//Try coding a solution that doubles the numbers that have odd indices:

function doubleOddIndices(numbers){
  let newArray =[];
  for (let i = 0; i < numbers.length; i++){
    if (i % 2 === 0){
      newArray.push(numbers[i])
    }else{
      newArray.push(numbers[i]*2);
    }
  }
}
