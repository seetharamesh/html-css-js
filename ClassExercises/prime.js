var i = 0;
while (i < 200) {
   if(i > 10 && (i%5 == 0 || i%7 == 0)){/*This check is done because multiples of 5 and 7 are to be skipped for i > 10*/
      i++;
      continue;
      }
  else if (i == 0 || i == 1) { /* remember 0 and 1 are not prime*/
    i++;
    continue;
  }

  else if (i == 2 || i == 3) /* remember 2 and 3 are prime*/
    console.log(i + " is a prime number");
  else if (i % 2 != 0) /* checking if it's not even*/ {
    if (i % 3 != 0) /*checking if it's not odd*/
      console.log(i + " is a prime number");
  }
  i++;
}
