//converting BonusQuestonOnLogical.js to use a function. Nando went to the vending machine to buy himself a cookie.
//The cookie costs $2. He paid with a $20 bill,the vending machine paid him back in quarters.


var quarters = 0;

function returnChange(originalCost, moneyPaid) { //original cost is $2 and he paid using $20 bill
  if (moneyPaid > originalCost) { //Adding this check to see if Nando needs change back
    let moneyBack = moneyPaid - originalCost;
    quarters = (moneyBack * 100) / 25;
  } else {
    //moneyPaid is lesser than original cost
    console.log("Money paid to buy the item is lesser than the item cost!");
  }
  return quarters;
}

quarters = returnChange(2, 20);
console.log("Quarters returned are: " + quarters);
