// OOP: Classes
// Let's create shaped objects


// Define a new class called Circle with appropriate attributes and instantiate a few Circle objects.
// Write a function called circle_area that returns the area of the object.
// Write a function total_sides that returns the number of sides of the object.

//const pi = 3.14; I can declare here too

class Circle{
  constructor(radius){
    this.radius = radius;
  }
  area(){
    const pi = 3.14;
    console.log("Area of a Circle: " + pi * Math.pow(this.radius,2) );
  }
  total_sides(){
    console.log("Total sides of Circle: 0");
  }
}

const circle1 = new Circle(5);
circle1.area();
circle1.total_sides();
const circle2 = new Circle(6);
circle2.area();
circle2.total_sides();

// Define a new class called Rectangle with appropriate attributes and instantiate a few Rectangle objects.
// Write a function called rectangle_area that returns the area of the given object.
// Write a function total_sides that returns the number of sides of the object.
console.log("**************************************");
class Rectangle{
  constructor(len,width){
    this.len = len;
    this.width = width;
  }
  rectangle_area(){
    console.log("Area of a rectangle: " + this.len * this.width);
  }
  total_sides(){
    console.log("Total sides of rectangle: 4");
  }
}

const rectangle1 = new Rectangle(4,2);
rectangle1.rectangle_area();
rectangle1.total_sides();
const rectangle2 = new Rectangle(6,3);
rectangle2.rectangle_area();
rectangle2.total_sides();
console.log("**************************************");

// Define a new class called Square with appropriate attributes and instantiate a few Square objects.
// Write a function called square_area that returns the area of the given object.
// Write a function total_sides that returns the number of sides of the object.

class Square{
  constructor(side){
    this.side = side;
  }
  area(){
    console.log("Area of the Square: " + Math.pow(this.side,2));
  }
  total_sides(){
    console.log("Total sides of the Square: 4");
  }
}

const square1 = new Square(4);
square1.area();
square1.total_sides();

const square2 = new Square(3);
square2.area();
square2.total_sides();
