//Example for Object Literal

 var person = {
  firstName: "John",
  lastName : "Doe",
  id     : 5566,
  fullName : function() {
    return this.firstName + " " + this.lastName;
  }
};
// Now p and person are both the same objects. if you change anything using p will change the attributes of person.
//Note:- p is NOT a copy of person. It's person itself.
var p = person;
p.firstName = "Mark";
console.log(p.firstName);
console.log(person.firstName);
