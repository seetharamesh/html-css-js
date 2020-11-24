// While loop
// 1. Using a while loop, print out all prime numbers between 0 - 20
var i = 0;
while (i < 20) {
  if (i == 0 || i == 1) { /* remember 0 and 1 are not prime*/
    i++;
    continue;
  } else if (i == 2 || i == 3) /* remember 2 and 3 are prime*/
    console.log(i + " is a prime number");
  else if (i % 2 != 0) /* checking if it's not even*/ {
    if (i % 3 != 0) /*checking if it's not odd*/
      console.log(i + " is a prime number");
  }
  i++;
}

// 2. Use a while loop to add up the numbers 1 to 20 into one variable. Print out the sum at the end
console.log("**********************");
var i = 1;
var sum = 0;
while(i <= 20){
  sum += i;
  i++;
}
console.log("Sum of numbers 1 to 20 is:" + sum);

// 3. Use a while loop to print out the even number from 1 to 20. (You'll need Modulus for this. And an IF Statement.)
console.log("**********************");
var i = 1;
while ( i <= 20){
  if(i % 2 == 0) console.log(i + " is an even number");
  i++;
}

// 4.While loops Fundamentals: https://csx.codesmith.io/units/precourse-part-2/challenge-while-loops-fundamentals
//Done online
