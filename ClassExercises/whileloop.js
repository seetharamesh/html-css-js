// // Keep printing integers in multiples of 3 as long as integers are less than 35 using a while loop
//
var i = 3;
while (i < 35) {
  // if(i%3 == 0)
  console.log(i);
  // else { i = i + 1;
  i = i + 3;
  // }
}
//
// //Keep printing integers in multiples of 5 as long as integers are less than 100
// console.log("Second Exercise");
var j = 1;
var multiple = 0;
while (j < 100) {
  multiple = j * 5;
  if (multiple < 100) {
    console.log(multiple);
    j++;
  } else {
    break;
  }
}

//Using a while loop for integers between 0 and 20. All numbers divisible by 2
//should be multiplied by 3 before they are output. All other integers should not be output.

var k = 0;
while(k < 20){
  if(k == 0){
    k++;
    continue;
  }
  if( k % 2 == 0)
    console.log(k + " is divisible by 2 so when multiplied by 3 it is: " + k * 3);
  k++;
}
