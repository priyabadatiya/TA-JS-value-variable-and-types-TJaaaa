//  Loop basics

// Do the following using loops:

// Using `console.log` log all the values from 1 to 10.

for (var i = 0; i <= 10; i = i + 1) {
    console.log(i);
}

// Using `console.log` log all the even values from 1 to 10.
var i = 0;
while (i <= 10) {
    if (i % 2 == 0) {
        console.log(i);
    }
    i = i + 1;
}

// Using `console.log` log all the odd values from 1 to 10.
var i = 0;
while (i <= 10) {
    if (i % 2 != 0) {
        console.log(i);
    }
    i = i + 1;
}


// Calculate the sum of all numbers from 1 to 10.
var x = 0
for (let i = 0; i <= 10; i++) {
    x = x + i
    console.log(x)
}

// Log all the values from 1 to 10 using while loop
var i = 0;
while (i <= 10) {
    console.log(i);
    i = i + 1;
}