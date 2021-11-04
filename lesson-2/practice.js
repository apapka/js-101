// let exampleValue = 'Abbie';

// function changeName(name){
//   name = 'George';
//   console.log(name);          //prints George
// }
// changeName(exampleValue);
// console.log(exampleValue);   //prints Abbie

// let exampleReference = [1,2,3,4];

// function changeReference(arr){
//   arr[0]=5;
//   console.log(arr);
// }

// changeReference(exampleReference);
// console.log(exampleReference);



let a = 10;
let b = "hi";
let c = a;

console.log(`a = ${a}`);
console.log(`b = ${b}`);
console.log(`c = ${c}`);

c +=2;
console.log(`a = ${a}`);
console.log(`c = ${c}`);

 let d = [1,2,3];
 let e = d;

 e.push(4);
 d = [1,4,2];
 console.log(`d = ${d}`);
 console.log(`e = ${e}`);