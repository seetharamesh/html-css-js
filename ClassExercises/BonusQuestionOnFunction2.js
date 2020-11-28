// Nando went to Uniqio and bought himeself a nice plaid shirt for $27.83. He paid with $100 as he had no change.
// The cashier paid returned his change in large denominations since they needed change for other customers.
// Write a loop that prints out how many bills he received in return in as large denominations as possible.

var bills = "";
var moneyBack = 0;
function returnBills(originalCost, moneyPaid) {
  if (moneyPaid >= originalCost) { //continue the logic only if you have return change
     moneyBack = moneyPaid - originalCost;
     console.log("MoneyBack should be:$ " + moneyBack);
    //write logic to return bills.
    while(moneyBack >= 1){
    if(moneyBack < 100 && moneyBack >=50){//writing logic for $100 only
       bills = bills.concat("50");
       //console.log("bill 1:" + bills);
       moneyBack = moneyBack - 50;
       //console.log("remaining money:" + moneyBack);
     }
    if(moneyBack < 50 && moneyBack >= 20){
       bills = bills.concat(" ,20");
       //console.log("bill 2:" + bills);
       moneyBack = moneyBack - 20;
       //console.log("remaining money:" + moneyBack);
     }
    if(moneyBack < 20 && moneyBack >= 10){
       bills = bills.concat(" ,10");
       //console.log("bill 3:" + bills);
       moneyBack = moneyBack - 10;
       //console.log("remaining money:" + moneyBack);
     }
    if(moneyBack < 10 && moneyBack >= 5){
       bills = bills.concat(" ,5");
       //console.log("bill 4:" + bills);
       moneyBack = moneyBack - 5;
       //console.log("remaining money:" + moneyBack);
     }
    if(moneyBack < 5 && moneyBack >= 1){
       bills = bills.concat(" ,1");
       //console.log("bill 5:" + bills);
       moneyBack = moneyBack - 1;
       //console.log("remaining money:" + moneyBack);
     }
  }//while closing
  }//if closing
  else{
    //moneyPaid is lesser than original cost
    console.log("Money paid to buy the item is lesser than the actual item cost!");
  }

  return bills;
}//function closing

var listedPrice = parseFloat(12);
console.log("Listed Price is:$ " + listedPrice);
var paidWith = 100;
console.log("Gave the cashier:$ " + paidWith);
bills = returnBills(listedPrice, paidWith); // call the function
console.log("Bills returned are:$ " + bills);
console.log("Change returned is: " + parseFloat(moneyBack).toPrecision(2) + " cents");//use precision to trim to number of places you want to display
