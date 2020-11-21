//javascript for display the larger of two integers

var num1 = 80;
var num2 = -50;
if (num1 > num2)
  console.log("Larger of numbers: " + num1 + " and " + num2 + " is " + num1);
else
  console.log("Larger of numbers: " + num1 + " and " + num2 + " is " + num1);


//Write an if/else statement for the following requirements:

//If student gets 90 or higher: console log  A
//If students get 80 or above: console log B
//If students get 70 or above: console log C
//If students get 55 or above: console log D
//Any grade lower than 55 is F

var studentScore = 75;
if (studentScore >= 90)
  console.log("The student scored >90 or higher and his grade is: " + "A");
else if (studentScore >= 80 && studentScore < 90)
  console.log("The student scored >=80 and < 90 and his grade is: " + "B");
else if (studentScore >= 70 && studentScore < 80)
  console.log("The student scored >=70 and < 80 and his grade is: " + "C");
else if (studentScore >= 55 && studentScore < 70)
  console.log("The student scored >=55 and < 70 and his grade is: " + "D");
else console.log("The student scored < 55 and he failed with a grade: " + "F");


//Write a JavaScript program that displays "Good Morning" if time is between 5AM-11:59 |
//"Good Afternoon" if time is between 12 - 16 | otherwise "Hey there"

var time = '12:00:00';
if (time >= "05:00:00" && time <= "11:59:00")
  console.log("Good morning!");
else if (time > "11:59:00" && time <= "16:00:00")
  console.log("Good afternoon");
else console.log("Hey there");
