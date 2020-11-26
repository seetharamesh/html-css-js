
var quarters = 0;

function returnChange(originalCost, moneyPaid) {
  if (moneyPaid > originalCost) {
    let moneyBack = moneyPaid - originalCost;
    quarters = (moneyBack * 100) / 25;
  }
  else {
    //moneyPaid is lesser than original const
    console.log("Money paid to buy the item is lesser than the item cost!");
  }
  return quarters;
}

quarters = returnChange(2, 20)
console.log("Quarters returned are: " + quarters);
