//Polymorphism example
// Basically Polymorphism is you can implement the base class however you want.
// Base class provides you the specifications and not implementation.

function shape(){
  this.shapeName = "none";
}
shape.prototype.draw = function(){ //adding a function to shape object constructor function
  return "Drawing Shape";
}

function circle(shapeName){
  this.shapeName = shapeName;
}
circle.prototype = Object.create(shape.prototype);//this makes the circle object inherit properties of  class shape
circle.prototype.draw = function(){ //adding a function to circle object constructor function
  return "Drawing Circle";
}

function square(shapeName){
  this.shapeName = shapeName;
}
square.prototype = Object.create(shape.prototype);//this makes the circle object inherit properties of  class shape
square.prototype.draw = function(){ //adding a function to circle object constructor function
  return "Drawing Square";
}

function triangle(shapeName){
  this.shapeName = shapeName;
}
triangle.prototype = Object.create(shape.prototype);//this makes the circle object inherit properties of  class shape

var s = [new shape(), new circle(), new square(), new triangle()];
s.forEach(function(shape){
console.log(shape.draw());
});
