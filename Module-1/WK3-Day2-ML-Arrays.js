// What is an efficient way to create an array for first 50 integers?
var arr = [];
for(var i = 0; i < 50; i++)
arr[i] = i;
console.log(`Array holds ${arr} integers`);
console.log("*********************************************************************");

// You've been tasked to do this week's grocery shopping. As you arrive at Times Supermarket,
// Kanye pings you to get a bottle of Hendricks gin. Add this to the existing shoppingList and console.log it.
var shoppingList = [
  "cool ranch doritos",
  "kings hawaiian sweet bread",
  "peanut butter oreos",
  "fruit loops cereal",
];
shoppingList.push("Hendricks gin");
console.log("Shopping List has these items: " + shoppingList);
console.log("**********************************************************************");

// Use the force, or in this case the reverse method to help Yoda make some sense with his motivational talk to the young Jedi interns.

var yoda = ["try", "no", "is", "there", "not", "do", "or", "do"];
var newArr = [];
var len = yoda.length;
for (var j = 0; j < len; j++){
  newArr[j] = yoda.pop();
}
console.log(newArr.join(' ') + '.');//to print the array in one single line use join()
console.log("**********************************************************************");

// People been lining up for hours to get the newest iphone release. Help manage the unruly
// crowd of privileged customers by serving them one at a time and assiging it to a variable named `nowServing`.
// Console.log this new variable as well as the waitList.
//
var waitList = ["Chance the Rapper", "Khalid", "Tay-Tay", "Barry Manilow", "Piko Taro"];
var nowServing;
waitList = waitList.reverse();
var len = waitList.length;
for (var i = 0; i < len; i++) {
  nowServing = waitList.pop();
  console.log("Now Serving:" + nowServing);
  console.log("waitlisted:" + waitList);
}
console.log("**********************************************************************");

// 5. Help Nike sell more overpriced sneakers by changing their slogan from an array into a string.
//Convert the shoe array and assign it to a variable named `shoeString`. Console.log this new variable.
 var shoe = ["just", "do", "it"];
 var shoeString = shoe.toString();
 console.log(shoeString);
console.log("*************************************************************************");
