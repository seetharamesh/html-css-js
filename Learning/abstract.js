// Example for abstract class ClassName
// Abstract class has only partial implementation so you cannot create instances out of it.

function shape(){ // Lets say we want to create this function as an abstract class that has one attribute shapename
  this.shapeName = "none";
  throw new Error("abstract class"); //since i want this function to be abstract i am throwing error so no one can create instances.
}
shape.prototype.draw = function(){ //adding a function to shape object constructor function
  return "Drawing" + this.shapeName;
}

//var s = new shape();
function circle(shapeName){
  this.shapeName = shapeName;
}
circle.prototype = Object.create(shape.prototype);//this makes the circle object inherit properties of abstract class shape
var c = new circle(" ccccccc");
console.log(c.draw());
//end
