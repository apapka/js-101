/*ddaaiillyy ddoouubbllee -------------------------------------------------------

Write a function that takes a string argument and returns a new string that 
contains the value of the original string with all consecutive duplicate 
characters collapsed into a single character.

Examples:crunch('ddaaiillyy ddoouubbllee');    // "daily double"
crunch('4444abcabccba');              // "4abcabcba"
crunch('ggggggggggggggg');            // "g"
crunch('a');                          // "a"
crunch('');                           // ""
*/
function crunch(s){
  if(s.length === 0 || s.length === 1){
    console.log(s);
    return s;
  }
  let newString = s.charAt(0);
  for(let i = 1; i<s.length; i++){
    if (s.charAt(i) !== s.charAt(i-1))
      newString+=s.charAt(i);
  }
  console.log(newString)
  return newString;
}
crunch('4444abcabccba');              // "4abcabcba"
crunch('ggggggggggggggg');            // "g"
crunch('a');                          // "a"
crunch('');                           // ""
