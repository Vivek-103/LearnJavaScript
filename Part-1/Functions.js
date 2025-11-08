// functions_in_javascript.js

/*
=====================================================
⚙️ JAVASCRIPT FUNCTIONS — COMPLETE GUIDE
=====================================================
This file covers everything about:
  - What functions are
  - Function declaration & expression
  - Parameters & arguments
  - Return values
  - Arrow functions
  - Default parameters
  - Rest & spread operators
  - Higher-order functions
  - Callbacks
  - Anonymous & IIFE functions
  - Closures
  - Scope & Hoisting
  - Interview questions and answers
*/

// ===============================
// 1️⃣ WHAT IS A FUNCTION?
// ===============================

/*
A function is a reusable block of code that performs a specific task.
It allows code reusability, modularity, and cleaner logic.
*/

function greet() {
  console.log("Hello, JavaScript!");
}

greet(); // Call the function

// ===============================
// 2️⃣ FUNCTION DECLARATION
// ===============================

function add(a, b) {
  return a + b;
}
console.log(add(5, 3)); // 8

// ===============================
// 3️⃣ FUNCTION EXPRESSION
// ===============================

const multiply = function (x, y) {
  return x * y;
};
console.log(multiply(4, 2)); // 8

// ===============================
// 4️⃣ ARROW FUNCTIONS (ES6)
// ===============================

const subtract = (a, b) => a - b;
console.log(subtract(10, 3)); // 7

const sayHello = () => console.log("Hello from arrow function!");
sayHello();

// ===============================
// 5️⃣ DEFAULT PARAMETERS
// ===============================

function greetUser(name = "Guest") {
  console.log(`Hello, ${name}!`);
}
greetUser(); // Hello, Guest!
greetUser("Vivek"); // Hello, Vivek!

// ===============================
// 6️⃣ REST PARAMETERS
// ===============================

function sumAll(...nums) {
  return nums.reduce((acc, n) => acc + n, 0);
}
console.log(sumAll(1, 2, 3, 4)); // 10

// ===============================
// 7️⃣ SPREAD OPERATOR
// ===============================

const arr1 = [1, 2, 3];
const arr2 = [4, 5, 6];
const combined = [...arr1, ...arr2];
console.log(combined); // [1,2,3,4,5,6]

// ===============================
// 8️⃣ HIGHER-ORDER FUNCTIONS
// ===============================

/*
A higher-order function takes another function as an argument
or returns a function.
*/

function applyOperation(a, b, operation) {
  return operation(a, b);
}

console.log(applyOperation(5, 2, add)); // 7
console.log(applyOperation(5, 2, multiply)); // 10

// ===============================
// 9️⃣ CALLBACK FUNCTIONS
// ===============================

function fetchData(callback) {
  setTimeout(() => {
    console.log("Data fetched!");
    callback();
  }, 1000);
}

fetchData(() => console.log("Callback executed!"));

// ===============================
// 🔟 ANONYMOUS FUNCTIONS
// ===============================

setTimeout(function () {
  console.log("This runs after 1 second.");
}, 1000);

// ===============================
// 1️⃣1️⃣ IMMEDIATELY INVOKED FUNCTION EXPRESSION (IIFE)
// ===============================

(function () {
  console.log("IIFE executed immediately!");
})();

// ===============================
// 1️⃣2️⃣ CLOSURES
// ===============================

/*
A closure is a function that remembers the variables
from its parent scope even after the parent function has closed.
*/

function outer() {
  let count = 0;
  return function inner() {
    count++;
    console.log(`Count: ${count}`);
  };
}

const counter = outer();
counter(); // Count: 1
counter(); // Count: 2

// ===============================
// 1️⃣3️⃣ SCOPE & HOISTING
// ===============================

/*
Scope defines the accessibility of variables.
Hoisting means moving function declarations to the top of scope.
*/

sayHi(); // Works because function declarations are hoisted
function sayHi() {
  console.log("Hi there!");
}

// Function expressions are NOT hoisted
// greetAgain(); ❌ Error
const greetAgain = function () {
  console.log("Hi again!");
};

// ===============================
// 1️⃣4️⃣ PURE vs IMPURE FUNCTIONS
// ===============================

function pureAdd(x, y) {
  return x + y; // No side effects
}

let z = 10;
function impureAdd(a) {
  z += a; // Modifies external variable
  return z;
}

console.log(pureAdd(2, 3)); // 5
console.log(impureAdd(5));  // 15

// ===============================
// 1️⃣5️⃣ RECURSION
// ===============================

function factorial(n) {
  if (n === 0) return 1;
  return n * factorial(n - 1);
}
console.log(factorial(5)); // 120

// ===============================
// 1️⃣6️⃣ COMMON INTERVIEW QUESTIONS
// ===============================

/*
❓ Q1: Difference between function declaration and expression?
✅ Declarations are hoisted; expressions are not.
*/

/*
❓ Q2: What are arrow functions and their limitations?
✅ Shorter syntax; don’t have their own 'this', 'arguments', or 'prototype'.
*/

/*
❓ Q3: What is a closure?
✅ A function that has access to variables from its outer scope.
*/

/*
❓ Q4: What is the difference between parameters and arguments?
✅ Parameters → placeholders in function definition.
✅ Arguments → actual values passed when calling.
*/

/*
❓ Q5: What is an IIFE?
✅ A function executed immediately after its definition.
*/

/*
❓ Q6: Predict output:
function test() {
  var x = 1;
  setTimeout(() => console.log(x), 1000);
  x = 2;
}
test();
✅ Output: 2 (arrow function uses closure, sees updated x)
*/

/*
❓ Q7: How do rest parameters differ from spread?
✅ Rest → collects multiple arguments into array.
✅ Spread → expands array into individual elements.
*/

/*
❓ Q8: What is a higher-order function?
✅ A function that takes or returns another function.
*/

/*
❓ Q9: What’s the difference between call, apply, and bind?
✅ call → invoke with arguments separately.
✅ apply → invoke with arguments as array.
✅ bind → returns new function with bound context.
*/

/*
❓ Q10: Predict output:
(function(){
  var a = b = 3;
})();
console.log(typeof a); // undefined
console.log(typeof b); // number (b is global)
*/

// ===============================
// ✅ SUMMARY TABLE
// ===============================

/*
| Concept               | Example / Keyword            | Description |
|------------------------|------------------------------|--------------|
| Declaration            | function add(a,b){}          | Hoisted function |
| Expression             | const add = function(){}     | Not hoisted |
| Arrow Function         | const add = () => {}         | Short syntax, no 'this' |
| Default Parameter      | function f(x=10){}           | Provides fallback value |
| Rest Operator          | function f(...args){}        | Collects arguments |
| Spread Operator        | [...arr]                     | Expands iterable |
| Closure                | function outer(){return inner;} | Access outer vars |
| IIFE                   | (function(){})()             | Executes immediately |
| Higher-Order Function  | fn(callback)                 | Uses function as input/output |
*/

// ===============================
// END OF FILE 🧠
// ===============================
