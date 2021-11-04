//Q2  How can you determine whether a given string
// ends with an exclamation mark? 

// let str1 = "Come over here!";
// let str2 = "What's up, Doc?"

// function lastExclamation(s){
//   if (s[s.length-1] === '!'){
//     return true;
//   }else{
//     return false;
//   }
// };
// console.log(lastExclamation(str1));
// console.log(lastExclamation(str2));

// str1.endsWith("!"); // true
// str2.endsWith("!"); // false


//Q3 : Determine whether the following object of people 
//and their age contains an entry for 'Spot':

// let ages = { Herman: 32, Lily: 30, Grandpa: 402, Eddie: 10 };
// console.log(ages.hasOwnProperty('spot'));

//Q4 : Using the following string, create a new string that 
//contains all lowercase letters except the first character,
// which should be capitalized.

// let munstersDescription = "the Munsters are CREEPY and Spooky.";
// => The munsters are creepy and spooky.

// let newString = munstersDescription.toLowerCase()
// newString.charAt(0).toUpperCase();

// console.log(newString);
// munstersDescription.charAt(0).toUpperCase() +
//   munstersDescription.substring(1).toLowerCase();

//Q6  : Add entries for Marilyn and Spot to the Munster family ages object

// let ages = { Herman: 32, Lily: 30, Grandpa: 5843, Eddie: 10 };
// let additionalAges = { Marilyn: 22, Spot: 237 };
// Object.assign(ages, additionalAges);


//Q7 : Determine whether the name Dino appears in the Strings below

// let str1 = "Few things in life are as important as house training your pet dinosaur.";
// let str2 = "Fred and Wilma have a pet dinosaur named Dino.";

// console.log(/Dino/.test(str1));
// console.log(/Dino/.test(str2));

//Q8 : How can we add the family pet, "Dino" to the following array? 
// let flintstones = ["Fred", "Barney", "Wilma", "Betty", "Bambam", "Pebbles"];
// flintstones.push("Dino");

//Q9 : How can we add multiple items to our array ('Dino' and 'Hoppy')

// flinstones.push("Dino","Hoppy");

//Q10 : Return a new version of this sentence
// that ends just before the word house. Don't worry 
//about spaces or punctuation: remove everything starting 
//from the beginning of house to the end of the sentence.

let advice = "Few things in life are as important as house training your pet dinosaur.";
let i = advice.indexOf("house");
let newString = advice.slice(0,i);

console.log(newString);
// Expected return value:
// => 'Few things in life are as important as '

