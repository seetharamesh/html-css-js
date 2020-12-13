// Example for Prototypal Inheritance -- It is unique to javascript and you create inheritance with objects.

function Employee(name){ //parent constructor object
  this.name = name;
}
Employee.prototype.getName = function(){  //add a function to Employee object using prototype
  return this.name;
}

function PermanentEmployee(salary){ //child constructor object
  this.salary = salary;
}

//If i have to associate the parent to child use prototype property and create instance for parent first.
// You cannot directly inherit the parent. It's done ONLY through parent's instance.
var employee = new Employee("Mark"); //create instance of parent
PermanentEmployee.prototype = employee; // associating parent to child
var pe = new PermanentEmployee(50000); //create instance of child
console.log(pe.getName()); //Output: Mark  //child accessing parent method
