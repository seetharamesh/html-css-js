// 1. Mr. Bonner (aka the Red Rocket, the Red Mamba) doesn't belong in this class of Hall Of Famers.
// Remove this imposter immediately and assign it to a new variable named `notHof`
// Console.log this new variable as well as the original list.

var hof = ["Jordan", "Bird", "Kobe", "Duncan", "Iverson", "Bonner"];
var notHof = hof.pop();
console.log(`The imposter ${notHof} is removed from the list.`);
console.log("The new list is: " + hof);
console.log("*****************************************************");
//
// 2. As head of McDonald's New Product Division, your job is to test and approve all new menu items.
//In the testMenu array below, all the items are approved except for "McLinguine" and "McChar-Siu Bau".
// Remove these items from the list and console.log the updated testMenu.
//
var testMenu = [
"McPizza Burger",
"McFly Burger",
"McLinguine",
"McChar-Siu Bau",
"McChop-Chae",
"McPancit"
];

console.log(testMenu.splice(2, 2));
// var updatedMenu = [];
// var count = 0;
// for(var i = 0; i< testMenu.length; i++){
//   if(testMenu[i] === "McLinguine" || testMenu[i] === "McChar-Siu Bau"){
//     continue;
//   }
//   else{
//     updatedMenu[count++] = testMenu[i];
//   }
// }
//console.log("Updated Menu Items:" + updatedMenu );
console.log("*****************************************************");
// var i = 0;
// while(i < testMenu.length)
// {
//   if(testMenu[i] !== "McLinguine" || testMenu[i] !== "McChar-Siu Bau")
//   updatedMenu[count++] = testMenu[i];
//   i++;
// }
// console.log("Updated Menu Items:" + updatedMenu );
// console.log("*****************************************************");





// 3. Increase the peace! Your job is quash the bitter rivalry and
// unite both the westSide and eastSide rappers into a new array called `oneLove`.
// Console.log this new array.
//
 var westSide = ["Dre", "2Pac", "Snoop"];
 var eastSide = ["Biggie", "Diddy", "Craig Mack"];
 //var oneLove = westSide + "," + eastSide;
 var oneLove = westSide.concat(eastSide);

 console.log(oneLove);
 console.log("*****************************************************");

// 4. Some drama between you and the Kardashian's went down during last Saturday's potluck party.
// You are no longer on speaking terms and need to unfriend the following from your facebook:
// "Yeezy", "Kimmy K" and "Lamar Odom". Unfriend these ungrateful people and assign them to a new variable named `unFriend`.
// Console.log this new variable.

var fbFriends = [
"Khalid",
"Yeezy",
"Kimmy K",
"Lamar Odom",
"Lebron",
"Warren Buffet"
];
// var unFriend=[];
// for(var i = 0; i<fbFriends.length; i++){
//   if(fbFriends[i] === "Yeezy" || fbFriends[i] === "Kimmy K" || fbFriends[i] === "Lamar Odom" )
//   unFriend.push(fbFriends[i]);
// }
var a = fbFriends.slice(1,4);
console.log(a);
console.log("*****************************************************");

// 5.  create a user profile using map where following keys.
// user1 = {
// first_name: "";
// last_name: "";
// company: "";
// department: "";
// };
let user1 = {
  first_name: "Seetha",
  last_name: "Ramesh",
  company:"Per Scholas",
  department: "Software Engineering"
}
console.log(user1);





// 6. Challenge: Objects - Iterating with for... in: https://csx.codesmith.io/units/precourse-part-2/challenge-objects-iterating-with-for-in (Links to an external site.)
//
// 7. Challenge: Objects - Iterating with a for loop: https://csx.codesmith.io/units/precourse-part-2/challenge-objects-iterating-with-for-loop (Links to an external site.)
