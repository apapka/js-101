// [2, 11, 9, 4, 107, 21, 1].sort((a, b) => {
//   console.log("a: " + a + " b: " + b);
//   if (a < b) {
//     console.log("a < b");
//     return -1;
//   } else if (a > b) {
//     console.log("a > b");
//     return 1;
//   } else {
//     console.log("a == b");
//     return 0;
//   }
// }); // => [ 1, 2, 4, 9, 11, 21, 107 ]

[2, 11, 9, 4, 107, 21, 1].sort((a, b) => {
  console.log(`a is ${a} and b is ${b}`);
  return a - b;
});

// a is 11 and b is 9
// a is 2 and b is 9
// a is 11 and b is 4
// a is 9 and b is 4
// a is 2 and b is 4
// a is 11 and b is 107
// a is 107 and b is 21
// a is 11 and b is 21
// a is 107 and b is 1
// a is 21 and b is 1
// a is 11 and b is 1
// a is 9 and b is 1
// a is 4 and b is 1
// a is 2 and b is 1
// => [ 1, 2, 4, 9, 11, 21, 107 ]


//how would you sort the following array by the lengths of each word? 

let words = ['go', 'ahead', 'and', 'jump'];

words.sort((a,b)=>{
if (a.length<b.length){
  return -1;
}else if (a.length>b.length){
  return 1;
}else{
  return 0;
}
});
console.log(words);