
// Create an Animal class.
// The class will have name, age, color, legs, superPower attributes
class Animal{
  constructor(name,age,color,legs,superPower){
    this.name = name;
    this.age = age;
    this.color = color;
    this.legs = legs;
    this.superPower = superPower;
  }
  // create three methods for this class - include one method named userSuperPower()
  userSuperPower(){

  }
  eat(){
    console.log("I am eating");
  }
  sleep(){
    console.log("I am sleeping");
  }
}
// Create two objects for this class.
// Create two objects of this class - both with a unique superPower
const obj1 = new Animal('monkey',10,'brown',4,'memory');
const obj2 = new Animal('cheetah',15,'yellow',4,'fastrunner');

// Create a class name User.
// This class with have firstName, lastName, department attributes
// Create three objects for this class ??????????????????????
class User{
constructor(firstName,lastName,department){
  this.firstName = firstName;
  this.lastName = lastName;
  this.department = department;
}
// a method name changeDepartment()
changeDepartment(){
  console.log("Your department is changed");
}
}
// Create three instances of this class
// Change department for two of the instances
const user1 = new User('Seetha','Ramesh','Software Engineering');
const user2 = new User('John','Abraham','Human Resources');
const user3 = new User('Richard','Gosh','');
