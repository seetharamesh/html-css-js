// 1. Write a for loop for the given output:
//  1, 3, 5, 7, 9
//  2, 4, 6, 8, 10

for(let i = 1; i < 10; i=i+2){
  process.stdout.write(String(i));
  if(i != 9) process.stdout.write(' , ');
}
console.log();
for(let j = 2; j <=10; j=j+2){
  process.stdout.write(String(j));
  if(j != 10) process.stdout.write(' , ');
}

// 2. write a for loop that iterates between 0 and 10 and prints all even numbers.
// HINT: Read on Module/Remainder operator.
console.log("\n");
for(let i = 0; i <= 10; i++){
  if(i > 0){
    if(i%2 == 0) console.log(i);
  }
}

// 3. Write a for loop that iterates from 1 - 20. Prints “prime” for all prime numbers,
//“even” for all even numbers, and “odd” for all odd numbers.
// Treat 2 as an even number and 1 & 3 as odd
console.log("\n");
for(let i = 1; i <= 20; i++){
  if(i == 1 || i%3 == 0)console.log(i + " is odd;"+"\n");
  else if(i == 2 || i%2 == 0) console.log(i + " is even;" + "\n");
  else console.log(i + " is prime;" + "\n")
}
