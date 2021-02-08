// if..else

/*
1. Write a program that asks the user for a number and check the following conditions:

  - `if` the number is even print the message " number is even"
  - `if` the number is odd print the message "number is odd"
*/
let age = prompt("input a number and check whether its even or odd");
if (age % 2 == 0) {
    alert("number is even");
} else {
    alert("number is odd");
}

// 2. Write a program to accept two numbers from user using`prompt` and alert the max value.

let num1 = prompt("input first number");
let num2 = prompt("input second number");
if (num1 > num2) {
    alert(num1 + " is max value")
} else {
    alert(num2 + " is max value");
}

// 3. Convert the above code using`?` terniary operator
let num3 = prompt("input first number");
let num4 = prompt("input second number");
(num3 > num4) ? alert(num3 + " is max value"): alert(num4 + " is max value");


/*
4. Write a program that asks the user for the house name and check the following conditions:

  - `if` house name is "stark" then print the message " Winter is coming"
  - `if` house name is "lannister" then print the message " A lannister always pays his debt"
  - `else` print the message " All men must die"
*/
var house = prompt("house name");
if (house == "stark") {
    alert("Winter is coming");
} else if (house == "lannister") {
    alert("A lannister always pays his debt");
} else {
    alert(" All men must die")
}

// 5. Convert the above code using`?` terniary operator
var house = prompt("house name");
(house == "stark") ? alert("Winter is coming"): (house == "lannister") ? alert("A lannister always pays his debt") : alert(" All men must die");
// Switch

// 6. Write a program that takes the number of the month(1 - 12) and alert number of days in the month.
let month = +prompt("input month number");
switch (month) {
    case 1:
        alert("31");
        break;
    case 2:
        alert("28");
        break;
    case 3:
        alert("31");
        break;
    case 4:
        alert("30");
        break;
    case 5:
        alert("31");
        break;
    case 6:
        alert("31");
        break;
    case 7:
        alert("30");
        break;
    case 8:
        alert("31");
        break;
    case 9:
        alert("30");
        break;
    case 10:
        alert("31");
        break;
    case 11:
        alert("30");
        break;
    case 12:
        alert("31");
        break;
    default:
        alert("match not found!");

}

/* 7.
- Write a program that take the salery of the user using prompt and alert the in -hand amount.You will find out the in -hand amount by deducting the tax amoun from salery.Conditions are given below.
  - `Salary <= 20000` tax is 10 %
  - `Salary <= 40000` tax is 20 %
  - `Salary > 50000` tax is 30 %

*/
var salary = prompt("in -hand amount");
switch (true) {
    case salary <= 20000:
        alert("tax is 10 %")
        break;
    case salary <= 40000:
        alert("tax is 20 %")
        break;
    case salary <= 50000:
        alert("tax is 30 %");
        break;
    default:
        alert("match not found!");
}


//  if..else vs switch

/* 8.
Implement the condition give below using`if..else` and`switch` statement.

  - `marks > 100` alert`"Marks can't be greater than 100"`
  - `marks > 80 && marks < 100` alert`"Grade A"`
  - `marks > 50 && marks < 80` alert`"Grade B"`
  - `marks > 30 && marks < 50` alert`"Grade C"`
  - `marks > 0` alert`"Grade D"`

*/
var marks = prompt("marks number");
if (marks > 100) {
    alert("Marks can't be greater than 100");
} else if (marks > 80 && marks < 100) {
    alert(" Grade A");
} else if (marks > 50 && marks < 80) {
    alert("Grade B")
} else if (marks > 30 && marks < 50) {
    alert("Grade C")
} else if (marks > 0) {
    alert("Grade D")
} else {
    alert("poor");
}
//switch //
var marks = prompt("marks number");
switch (true) {
    case marks > 100:
        alert("Marks can't be greater than 100");
        break;
    case marks > 80 && marks < 100:
        alert("Grade A");
        break;
    case marks > 50 && marks < 80:
        alert("Grade B");
        break;
    case marks > 30 && marks < 50:
        alert("Grade C");
        break;
    case marks > 0:
        alert("Grade D");
        break;
    default:
        alert("poor");
}

/* 9. Weather app

  - Ask user to provide the condition of the weather outside by asking `What is the weather like outside?`
  - If user says`sunny` alert`Wear a T-shirt`
  - If`rainy` alert`Don't forget to take your raincoat`
  - If`hot` alert`Get a hanky`
  - If`freezing` alert`Get your sweeter on`
  - Anything else should alert`Not a valid input`
*/

var weather = prompt("What is the weather like outside?")
switch (true) {
    case weather == "sunny":
        alert("Wear a T-shirt");
        break;
    case weather == "rainy":
        alert("Don't forget to take your raincoat");
        break;
    case weather == "hot":
        alert("Get a hanky");
        break;
    case weather == "freezing":
        alert("Get your sweeter on");
        break;
    default:
        alert("Not a valid input");
}