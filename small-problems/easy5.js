//Combining arrays

function union(arr1, arr2){
  let newArray = [];
  for(let i = 0; i < arr1.length; i++){
    if(!newArray.includes(arr1[i])){
      newArray.push(arr1[i]);
    }
  }
  for (let b = 0; b < arr2.length; b++){
    if(!newArray.includes(arr2[b])){
      newArray.push(arr2[b]);
    }
  }
  return newArray;
}
console.log(union([1,3,5],[3,6,9]));