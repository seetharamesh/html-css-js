var quarters = 0;
var returnChange = false;
var cost = 4;
var moneyPaid = 10;

if (moneyPaid > cost) {
  var moneyBack = moneyPaid - cost;
  returnChange = true;
}

while (returnChange) {
  quarters = (moneyBack * 100) / 25;
  returnChange = false;
}
console.log("Number of Quarters that will be given back is: " + quarters);
