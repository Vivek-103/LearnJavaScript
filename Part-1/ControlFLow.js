// control_flow_in_javascript.js

/*
=====================================================
🧭 JAVASCRIPT CONTROL FLOW — COMPLETE GUIDE
=====================================================
This file covers everything about:
  - What control flow is
  - Conditional statements
  - Looping constructs
  - Break & continue
  - Switch statements
  - Error handling (try...catch)
  - Interview questions and answers
*/

// ===============================
// 1️⃣ WHAT IS CONTROL FLOW?
// ===============================

/*
Control Flow refers to the order in which statements are executed in a program.
By default, JS runs code from top to bottom — but with control flow structures,
you can make decisions, repeat actions, or handle exceptions.
*/

// ===============================
// 2️⃣ CONDITIONAL STATEMENTS
// ===============================

// if statement
let age = 20;
if (age >= 18) {
  console.log("You are an adult.");
}

// if...else
let score = 35;
if (score >= 40) {
  console.log("Pass");
} else {
  console.log("Fail");
}

// if...else if...else chain
let marks = 75;
if (marks >= 90) {
  console.log("Grade: A+");
} else if (marks >= 75) {
  console.log("Grade: A");
} else if (marks >= 50) {
  console.log("Grade: B");
} else {
  console.log("Grade: F");
}

// Nested if example
let isMember = true;
let total = 1200;
if (isMember) {
  if (total > 1000) {
    console.log("Discount applied!");
  }
}

// ===============================
// 3️⃣ SWITCH STATEMENT
// ===============================

let day = 3;
switch (day) {
  case 1:
    console.log("Monday");
    break;
  case 2:
    console.log("Tuesday");
    break;
  case 3:
    console.log("Wednesday");
    break;
  case 4:
    console.log("Thursday");
    break;
  case 5:
    console.log("Friday");
    break;
  default:
    console.log("Weekend!");
}

// ===============================
// 4️⃣ LOOPING CONSTRUCTS
// ===============================

// for loop
for (let i = 1; i <= 5; i++) {
  console.log("Iteration", i);
}

// while loop
let count = 0;
while (count < 3) {
  console.log("While count:", count);
  count++;
}

// do...while loop
let j = 0;
do {
  console.log("Do-While count:", j);
  j++;
} while (j < 3);

// ===============================
// 5️⃣ for...of and for...in LOOPS
// ===============================

// for...of → iterate over iterable values
let arr = [10, 20, 30];
for (let num of arr) {
  console.log("for...of value:", num);
}

// for...in → iterate over object keys
let person = { name: "Vivek", age: 21, city: "Bhubaneswar" };
for (let key in person) {
  console.log(`${key}: ${person[key]}`);
}

// ===============================
// 6️⃣ BREAK & CONTINUE
// ===============================

for (let k = 1; k <= 5; k++) {
  if (k === 3) continue; // skip iteration 3
  if (k === 5) break;   // stop loop
  console.log(k);
}

// ===============================
// 7️⃣ NESTED LOOPS
// ===============================

for (let row = 1; row <= 3; row++) {
  for (let col = 1; col <= 3; col++) {
    console.log(`Row ${row}, Col ${col}`);
  }
}

// ===============================
// 8️⃣ ERROR HANDLING (try...catch...finally)
// ===============================

try {
  let x = y + 10; // ❌ y is not defined
} catch (error) {
  console.log("Error caught:", error.message);
} finally {
  console.log("This runs no matter what.");
}

// ===============================
// 9️⃣ CONTROL FLOW WITH FUNCTIONS
// ===============================

function checkNumber(n) {
  if (n > 0) return "Positive";
  else if (n < 0) return "Negative";
  return "Zero";
}

console.log(checkNumber(5));
console.log(checkNumber(-2));
console.log(checkNumber(0));

// ===============================
// 🔟 CONDITIONAL (TERNARY) OPERATOR
// ===============================

let temp = 25;
let weather = temp > 30 ? "Hot" : "Cool";
console.log(weather);

// ===============================
// 1️⃣1️⃣ SHORT-CIRCUIT EVALUATION
// ===============================

let name = "";
let defaultName = name || "Guest"; // if name is falsy → Guest
console.log(defaultName);

let isLoggedIn = true;
isLoggedIn && console.log("Welcome back!");

// ===============================
// 1️⃣2️⃣ COMMON INTERVIEW QUESTIONS
// ===============================

/*
❓ Q1: Difference between '==' and '===' ?
✅ '==' performs type coercion, '===' checks type and value strictly.
*/

/*
❓ Q2: What’s the difference between for...of and for...in ?
✅ for...of → iterates over values (arrays, strings)
✅ for...in → iterates over keys (objects)
*/

/*
❓ Q3: What is the difference between break and continue?
✅ break → exits the loop completely
✅ continue → skips current iteration
*/

/*
❓ Q4: Can we use switch with strings in JavaScript?
✅ Yes! Switch works with any data type (string, number, boolean).
*/

/*
❓ Q5: What is the difference between while and do...while loops?
✅ while → condition checked first.
✅ do...while → runs once before checking condition.
*/

/*
❓ Q6: Predict output:
for (let i = 0; i < 3; i++) {
  setTimeout(() => console.log(i), 1000);
}
✅ Output: 0, 1, 2 (because let is block-scoped)
*/

/*
❓ Q7: Predict output:
for (var i = 0; i < 3; i++) {
  setTimeout(() => console.log(i), 1000);
}
✅ Output: 3, 3, 3 (because var is function-scoped)
*/

/*
❓ Q8: How does try...catch work?
✅ Code in 'try' runs; if error occurs, control moves to 'catch'.
✅ 'finally' always runs afterward (cleanup or closing code).
*/

/*
❓ Q9: Can we use return inside loops?
✅ Yes, but only if the loop is inside a function. It exits the function.
*/

/*
❓ Q10: What is short-circuiting in control flow?
✅ In logical expressions, JS skips evaluation when result is already known.
✅ Example: true || anything → true; false && anything → false
*/

// ===============================
// ✅ SUMMARY TABLE
// ===============================

/*
| Control Structure  | Purpose                                   | Example |
|--------------------|--------------------------------------------|----------|
| if / else          | Conditional branching                     | if (x>0) {...} |
| switch             | Multiple condition checking               | switch(x){...} |
| for / while        | Loop through code multiple times          | for(i=0;i<5;i++) |
| for...in / for...of| Iterate over objects/arrays                | for(let k in obj) |
| break / continue   | Exit or skip loop iteration               | break; continue; |
| try...catch        | Handle runtime errors gracefully           | try{...}catch(e){...} |
*/

// ===============================
// END OF FILE 🧠
// ===============================
