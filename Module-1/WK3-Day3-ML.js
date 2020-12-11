//OOP - Classes: Model a vending machine
// When we wanted to access snacks within our object we had to put the name of the object in it to access the snacks
// a vending machine is an object
// it has an array of snacks (make 3 snacks)
// snacks are objects that have a name and a price
// a vending machine has a function vend that allows user to enter the array position (a number) of the snack
// and then that snack will be returned
// Be able to call vendingMachine.vend() with a valid integer to return a snack

const vendingMachine = {
  snacks: [
      {
        name: 'potato chips',
        price: 0.50,
      },
      {
        name: 'pretzels',
        price: 0.75,
      },
      {
        name: 'muffin',
        price: 1.25
      }
    ],
//This how function is defined in ES6 inside object literals
vend(indexPosition){
//console.log(vendingMachine.snacks[indexPosition]);
console.log(this.snacks[indexPosition]);

}
//This is how function is defined in ES5 inside object literals
// vend: function(indexPosition){
// console.log(vendingMachine.snacks[indexPosition]);
// }
}
vendingMachine.vend(2); //call the vend function using object name and pass an index to retrieve the correct snack
