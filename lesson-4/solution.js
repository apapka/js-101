function sumEvenNumberRow(rowNumber){
  let rows = [];
  let startInteger = 2;

 
  for (let currentRowNumber = 1; currentRowNumber <= rowNumber; currentRowNumber++) {

    let row = createRow(startInteger,currentRowNumber);
    rows.push(row);
    startInteger = row[row.length - 1] + 2;

  
    // console.log(currentRowNumber);
  }
  let finalRow = rows.pop();
  return finalRow.reduce((a, b) => a + b);
}
function createRow(startInteger, rowLength){
  let row = [];
  let currInteger = startInteger;
  while (row.length < rowLength) {
    row.push(currInteger);
    currInteger = currInteger + 2;
    }
  return row;
}

console.log(sumEvenNumberRow(1));   //2 
console.log(sumEvenNumberRow(2));   //10
console.log(sumEvenNumberRow(4));   //68

// console.log(createRow(2,1)); //[2]
// console.log(createRow(4,2)); //[4,6]
// console.log(createRow(8,3)); // [8,10,12]