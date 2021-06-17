let protoArray1 = "3,6,9,12";
let protoArray2 = "A;C;M;E";
let protoArray3 = "space delimited string";
let protoArray4 = "Comma-spaces, might, require, typing, caution";
let commas = null;
let spaces = null;
let semiCs = null;
let comSpa = null;
let reverStr = '';
let alphaStr = '';
let revAlStr = '';
let reve2Str = '';

strings = [protoArray1, protoArray2, protoArray3, protoArray4];

//a) Use the 'includes' method to check to see if the words in each string are separated by commas (,), semicolons (;) or just spaces.
for (let i = strings.length - 1; i >= 0; i--) {
  if (strings[i].includes(', ')) {
    comSpa = i;
  }
  if (strings[i].includes(',')) {
    commas = i;
  }
  if (strings[i].includes(';')) {
    semiCs = i;
  }
  if (strings[i].includes(' ')) {
    spaces = i;
  }
}

//b) If the string uses commas to separate the words, split it into an array, reverse the entries, and then join the array into a new comma separated string.
reverStr = strings[commas].split(',').reverse().join(',');
console.log(reverStr);

//c) If the string uses semicolons to separate the words, split it into an array, alphabetize the entries, and then join the array into a new comma separated string.
alphaStr = strings[semiCs].split(';').sort().join(',');
console.log(alphaStr);

//d) If the string uses spaces to separate the words, split it into an array, reverse alphabetize the entries, and then join the array into a new space separated string.
revAlStr = strings[spaces].split(' ').sort().reverse().join(' ');
console.log(revAlStr);

//e) If the string uses ‘comma spaces’ to separate the list, modify your code to produce the same result as part “b”, making sure that the extra spaces are NOT part of the final string.
reve2Str = strings[comSpa].split(', ').reverse().join(',');
console.log(reve2Str);