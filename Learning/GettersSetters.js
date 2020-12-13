//Example for getters and setters.

class Car {
  constructor(brand) {
 this._carName = brand;
}

set carName(x) {
 this._carName = x;
}
get carName() {
  return this._carName;
}
}

let myCar = new Car("Ford");
var s = myCar.carName; //calls get carName(). Note you don't need () when calling the method.
console.log(s);

myCar.carName = "Honda"; //calls the set carName() to set the value to Honda
console.log(myCar);
