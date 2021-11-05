//8 

let flintstones = ["Fred", "Barney", "Wilma", "Betty", "Pebbles", "Bambam"];
let obj = {};
flintstones.forEach(name=>{
  obj[name]= flintstones.indexOf(name);
});
console.log(obj);

// { Fred: 0, Barney: 1, Wilma: 2, Betty: 3, Pebbles: 4, Bambam: 5 }


//9: Add up all of the ages from the Munster family object.

let ages = {
  Herman: 32,
  Lily: 30,
  Grandpa: 5843,
  Eddie: 10,
  Marilyn: 22,
  Spot: 237
};

let agesArray = Object.values(ages);
let sum = agesArray.reduce((accumulator,element) => accumulator + element);
console.log(sum);