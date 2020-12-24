class Pet {
  constructor(owner,name){
    this.owner = owner;
    this.name = name;
  }
  walk(){
    console.log(`${this.name} Walka Walka`);
  }
  run(){
    console.log(`${this.name} runs runs`);
  }
}//end of class Pet

//instantiating pet
const pet1 = new Pet('Jimmy the Owner','Browny the pet');
pet1.walk();
pet1.run();
console.log("************************************************");

class Dog extends Pet{
constructor(dogName,price){
  super("dogowner",dogName);
  this.price = price;
}
bark(){
  console.log(`${this.name} barks`);
}
chaseTail(){
  console.log('oh boy oh boy oh boy');
}
 getName(){
   return this.name;
 }

}
//instantiating part
const dog1 = new Dog("dalmation",20);
//dog1.
console.log(`The dog ${dog1.getName()} costs ${dog1.price}`);
dog1.price = 50; //changed one attribute of Dog class i.e price
console.log(`The dog ${dog1.getName()} costs ${dog1.price}`);

console.log("************************************************");

class Cat extends Pet{
constructor(catOwner, catName, price){
  super(catOwner,catName);
  this.price = price;
}
//cat class methods
purr(){
  console.log("purrrrrr");
}
clean(){
  console.log("cleaning");
}
getPrice(){
  return this.price;
}
walk(){
  console.log("strut strut");
}

}//end of Cat class
const cat1 = new Cat("catowner", "pussycat",35);
console.log(`${cat1.name} has a owner named ${cat1.owner} and its price is ${cat1.getPrice()}`);
cat1.name = "newpussy";//changed name of the cat
console.log(`${cat1.name} has a owner named ${cat1.owner} and its price is ${cat1.getPrice()}`);
