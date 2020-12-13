//Example for adding a method to constructor function object. Never add a function directly to construct function object. Because
// when you create instances it also create a copy of the method to each instances created and occupies more memory. So always input-group-add
// a method using prototype.

function Person(first, last, age, eye) {
  this.firstName = first;
  this.lastName = last;
  this.age = age;
  this.eyeColor = eye;
}
Person.prototype.hobby = function(){
  console.log("Good reader");
}
Person.prototype.greet = function(){
console.log(`Hello ${this.firstName} ${this.lastName}`);
}
var myFather = new Person("John", "Doe", 50, "blue");
var myMother = new Person("Mary", "Joseph", 45, "black");

myFather.hobby();
myMother.greet();
