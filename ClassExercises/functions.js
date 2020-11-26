//Write a function to add 3 and divide the result by 3 in ES5
// console.log("Writing a function in ES5")

// function addNumbers(a,b,c){
//   var sum = a + b + c;
//   return sum/3;
// }
// var result = addNumbers(10,5,10);
// console.log("Result from ES5: " + result);

//Convert the above function using arrow function
console.log("Writing the function in ES6 (Arrow function)-----------");

let addNumbers = (a,b,c) => {
  var sum = a + b + c;
  return sum/3;
};
console.log("Result from ES6: " + addNumbers(10,5,10));
