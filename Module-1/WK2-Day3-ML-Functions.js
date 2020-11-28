// Write a function maxOfTwoNumbers that takes two numbers as arguments and returns the largest of them.
// Use the if-then-else construct available in Javascript.
// Do some googling to figure this out if you forget how conditionals work.
console.log("---------Max of Two numbers-----------");
let maxOfTwoNumbers = (x, y) => {
  if (x > y) return x;
  else return y;
}
var result = maxOfTwoNumbers(65, 160);
console.log(result);


// Write a function maxOfThree that takes three numbers as arguments and returns the largest of them.
console.log("---------Max of three numbers-----------");
let maxOfThreeNumbers = (x, y, z) => {
  if (x > y && x > z) return x;
  else if (y > x && y > z) return y;
  else return z;
}
var result = maxOfThreeNumbers(165, 260, 790);
console.log(result);

// Write a function isCharacterAVowel that takes a character (i.e. a string of length 1) and
// returns true if it is a vowel, false otherwise
console.log("---------Output true if it's a vowel and false otherwise-----------");
//Note: I am practicing using Arrow functions.Since it's a single parameter, no need of parenthesis around it.
let isCharacterAVowel = x => {
  if (x == 'a' || x == "e" || x == 'i' || x == 'o' || x == 'u') return true;
  else return false;
}
var result = isCharacterAVowel('z');
console.log(result);

// Write a function charCount that takes a string and returns the length of the string.
console.log("---------Length of the given String-----------");
//Note: Here i tried using arrow functions. if we are passing one argument, no need of brackets in function
// and no need of keyword "return". Implicit returns are fine.
const charCount = x => x.length;

var result = charCount('seetha ramesh');
console.log("String length is " + result);

// Write a function vowelCount that takes a String and returns the number of vowels in the String.
// add a check for the string to be of 10 or less characteers
console.log("---------Counting Vowels in a given String-----------");

let vowelCount = x => {
  var strLength = x.length;
  var count = 0;
  console.log("The given string is:  " + x);
  var newStr = x.toLowerCase(); //converting the given string to lower case for comparison convenience.
  if (strLength <= 10) {
    for (var i = 0; i < strLength; i++) {
      if (newStr.charAt(i) == 'a' || newStr.charAt(i) == "e" || newStr.charAt(i) == "i" || newStr.charAt(i) == "o" || newStr.charAt(i) == "u")
        var count = count + 1;
    }
    return count;
  } else return 0;
}
var numberOfVowels = vowelCount("BeaUtiFUl");
if (numberOfVowels == 0) console.log("The input string length is greater than 10. Please enter a string whose length is less than equal to 10");
else console.log("Number of Vowels in the given string is: " + numberOfVowels);

console.log("---------------------------------------------");
