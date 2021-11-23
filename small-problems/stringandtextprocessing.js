const { keyIn } = require("readline-sync");

// function isUppercase(string) {
//   return(string === string.toUpperCase());
// }

// console.log(isUppercase('t'));
// console.log(isUppercase('T'));
// console.log(isUppercase('Four Score'));
// console.log(isUppercase('FOUR SCORE'));
// console.log(isUppercase('4SCORE!'));
// console.log(isUppercase(""));

//capitalize words

function wordCap(string) {
  let arr = string.split(" ").map(word => {
    return word[0].toUpperCase() + word.slice(1).toLowerCase();
  });
  return arr.join(" ");
}
// console.log(wordCap('four score and seven'));
// console.log(wordCap('the javaScript language'));
// console.log(wordCap('this is a "quoted" word'));

function swapCase(string){
  return string
    .split("")
    .map(char => {
      if (char >= 'a' && char <= 'z') {
        return char.toUpperCase();
      } else if (char >= 'A' && char <= 'Z') {
        return char.toLowerCase();
      } else { 
        return char;
      }
    })
    .join("");
}
// console.log(swapCase('CamelCase'));
// console.log(swapCase('Tonight on XYZ-TV'));


//delete vowels

function removeVowels(array) {
  let vowels = ['A','E','I','O','U','a','e','i','o','u'];
  return array.map(word => {
    let newString ="";
    for(let i = 0; i < word.length; i++) {
      if (!vowels.includes(word[i])){
        newString += word[i];
      }
    }
    return newString;
  })
}
// console.log(removeVowels(['abcdefghijklmnopqrstuvwxyz']));         // ["bcdfghjklmnpqrstvwxyz"]
// console.log(removeVowels(['green', 'YELLOW', 'black', 'white']));  // ["grn", "YLLW", "blck", "wht"]
// console.log(removeVowels(['ABC', 'AEIOU', 'XYZ']));                // ["BC", "", "XYZ"]

//lettercase counter

function isUppercase(char) {
  if (char >= 'A' && char <='Z') {
    return true;
  } else {
    return false;
  }
}
function isLowercase(char) {
  if (char >= 'a' && char <= 'z') {
    return true;
  } else {
    return false;
  }
}
function letterCaseCount(string) {
  let obj = {
    lowercase: 0,
    uppercase: 0,
    neither: 0
  };

  for (let i = 0; i < string.length; i++) {
    if (isUppercase(string.charAt(i))) {
      obj.uppercase += 1;
    } else if (isLowercase(string.charAt(i))) {
      obj.lowercase += 1;
    } else {
      obj.neither += 1;
    }
  }
  return obj;
}
// console.log(letterCaseCount(''));
// console.log(letterCaseCount('123'));
// console.log(letterCaseCount('AbCd +Ef'));
// console.log(letterCaseCount('abCdef 123'));

//staggered caps part 1

// function staggeredCase(string) {
//   let finalString = "";
//   for (let i = 0; i < string.length; i ++) {
//     let char = string[i];
//     if (i % 2 === 0){
//       finalString += char.toUpperCase();
//     } else {
//       finalString += char.toLowerCase();
//     }
  
//   }
//   return finalString;
// }

function isNonAlphabetic(char) {
  if (char > 'A' && char < 'Z') {
    return false;
  } else if (char > 'a' && char < 'z') {
    return false;
  } else {
    return true;
  }
}
console.log(staggeredCase('I Love Launch SChool'));
console.log(staggeredCase('ALL_CAPS'));
console.log(staggeredCase('ignore 77 the 4444 numbers!'));

// function staggeredCase(string) {
//   return string
//     .split("")
//     .map((char,index) => {
//       if (index % 2 === 0) {
//         return char.toUpperCase();
//       } else { 
//         return char.toLowerCase();
//       }
//     })
//     .join("");
// }

function staggeredCase(string) {
  let uppercaseRequired = true;
  return string
    .split("")
    .map((char) => {
      if (isNonAlphabetic(char)) {
        return char;
      } else if (uppercaseRequired) {
        uppercaseRequired = false;
        return char.toUpperCase();
      } else {
        uppercaseRequired = true;
        return char.toLowerCase();
      }
    }).join("");

}

function wordLengths(string) {
  if (string === undefined || string.length === 0) {
    return [];
  }
  return string
    .split(" ")
    .map(word => {
      return word + ' ' + word.length;
    });
}
console.log(wordLengths());

// function searchWord(word, string) {
//   let array = string.toLowerCase().split(" ");
//   let count = 0;
//   let index = 0;
//   while (true) {
//     let indexOfWord = array.indexOf(word, index);
//     if (indexOfWord >= 0) {
//       index = indexOfWord + 1;
//       count += 1;
//     } else {
//       break;
//     }
//   }
//   return count;
// }
const text = 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?';

console.log(searchWord('sed', text));      // 3

function searchWord(searchWord, text) {
  return text.split(" ").map((word, index) => {
    if (word.toLowerCase() === searchWord.toLowerCase()) {
      return "**" + word.toUpperCase() + "**";
    } else {
      return word;
    }
  } ).join(" ");
}