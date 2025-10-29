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
  console.log("count is " + i);}
