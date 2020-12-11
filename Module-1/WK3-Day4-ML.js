// OOP - Inheritance
// Create a class called Fish
// Define a method Swim( )
// Create a class Nemo that inherits from Fish
// Define an attribute color
// Create a Nemo object. Can it swim?
// Find the difference between abstract class and an interface
// Which of the two can have implementation of a method in the class?

class Fish {
  constructor() {}
  Swim() {
    console.log("I can Swim");
  }
}
//use the keyword extends to inherit from parent - Fish. Call super() in child's constructor so parent's methods and properties are accessed.
class Nemo extends Fish {
  constructor(color) {
    super();
    this.color = color;
  }
}
const Nemo1 = new Nemo('red');
Nemo1.Swim();

//An abstract class has partial implementation of methods. Suppose you have 3 methods and knew the implementation
// of one and not the others then go with abstract class. The user when he extends this class he'll have his own
// implentation for the methods that don't have code written.
//An interface class is that has only specification and don't have any code(how to implement) for its methods.
//Eg., if i have a room class and i know its attributes like windows, screen and methods like open and close but don't know how
// to implement the code for those methods then it goes into interface type.
//In the same example if i know how open can be implemented and not for closing then i go with Abstract class.

//To the above question in the assignment implementation of a method will go in Abstract class.
