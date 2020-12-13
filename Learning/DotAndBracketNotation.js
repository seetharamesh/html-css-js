//Example for dot and bracket notation. Methods cannot be accessed via bracket notation.

var person = {
hobby : 'Reading',
age : 40,
fullName : function(){
  console.log("Hello!")
}
}
person.age = 20;

console.log(person.age); //using dot notation
console.log(person['hobby']); //using bracket notation
console.log(person.fullName());
