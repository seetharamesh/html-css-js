/* Nando went to the vending machine to buy himself a cookie. The cookie costs $4. He paid with a $10 bill,
 the vending machine paid him back in quarters. Write a loop that says how many quarters he got in return.*/

var quarters = 0;
var returnChange = false;
var cost = 4;
var moneyPaid = 10;
/* check if money paid by customer is more than cost of the item. Based on it we will execute the while*/
if (moneyPaid > cost) {
  var moneyBack = moneyPaid - cost;
  returnChange = true;
}
/*The while loop will execute only if quarters has to be returned*/
while (returnChange) {
  quarters = (moneyBack * 100) / 25;
  returnChange = false;
}
/*Output the number of quarters the customer will receive*/
console.log("Number of Quarters that will be given back is: " + quarters);
