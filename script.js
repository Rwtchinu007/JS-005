// We will learn about loops in javaScript
// loops are used to repeat a bkock of code until a specified condition is met

// There are different types of loops in javaScript
// for loop
for (let i = 0; i <= 50; i++) {
  console.log("count is " + i);
}

// while loop
let j = 0;
while (j <= 69) {
  console.log("count is " + j);
  j++;
}

// do while loop
let k = 1;
do {
  console.log("count is " + k);
  k++;
} while (k <= 20);

// break and continue statements
for (i = 0; i <= 200; i++) {
  if (i === 69) {
    console.log("loop stopped at " + i);
    break;
  }
  console.log("count is " + i);
}

for (i = 0; i <= 20; i++) {
  if (i === 13) {
    console.log("skipping number " + i);
    continue;
  }
  console.log("count is " + i);
}

// practice problems
// printing numbers from 1 to 10
//  for (let i=1;i<=10;i++){
//     console.log(i);
//   }

// printing numbers from 10 to 1
// let num = 10;
// while (num >= 1) {
//   console.log(num);
//   num--;
// }

// printing odd numbers from 1 to 20
// let num = 1;
// while (num <= 20) {
//   if (num % 2 !== 0) {
//     console.log(num);
//   }
//    num++;
// }

// asking user from a number and check if its positive or negative
// let num = +prompt("Enter a number:");
// if (num >= 0) {
//   console.log(`${num} is a positive number.`);
// } else {
//   console.log(`${num} is a negative number.`);
// }

// checking age eligibility for voting
let age = prompt("Enter your age:");
if (age === null) {
  console.error("User cancelled the prompt.");
} else {
  if (age.trim() === "") {
    console.error("No age entered.");
  }
  age = Number(age.trim());
  if (isNaN(age)) {
    console.error("Invalid character entered.");
  } else {
    if (age >= 18) {
      console.log("You are eligible to vote.");
    } else {
      console.log("You are not eligible to vote.");
    }
  }
}

// printing the table of 5
// for(let i = 1;i<=10;i++){
//     console.log("5 x " + i + " = " + (5*i));
// }

// sum of numbers from 1 to 100
// let sum = 0;
// for(let i=1;i<=100;i++){
//     sum += i;
// }
// console.log("Sum of numbers from 1 to 100 is " + sum);

// get input from user and check if it is even or odd
// let num = prompt("Enter a number:");
// if (num % 2 === 0) {
//   console.log(num + " is an even number.");
// } else {
//   console.log(num + " is an odd number.");
// }
