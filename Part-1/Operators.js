// operators_in_javascript.js

/*
=====================================================
⚙️ JAVASCRIPT OPERATORS — COMPLETE GUIDE
=====================================================
This file covers everything about:
  - What operators are
  - Types of operators
  - How they work with examples
  - Operator precedence
  - Interview questions and answers
*/

// ===============================
// 1️⃣ WHAT ARE OPERATORS?
// ===============================

/*
Operators are special symbols used to perform operations on operands (variables and values).
Example: 5 + 3 → '+' is an operator, 5 and 3 are operands.
*/

// ===============================
// 2️⃣ TYPES OF OPERATORS IN JS
// ===============================

/*
1. Arithmetic Operators
2. Assignment Operators
3. Comparison Operators
4. Logical Operators
5. Bitwise Operators
6. String Operators
7. Ternary Operator
8. Type Operators
*/

// ===============================
// 3️⃣ ARITHMETIC OPERATORS
// ===============================

let a = 10, b = 3;
console.log(a + b); // Addition → 13
console.log(a - b); // Subtraction → 7
console.log(a * b); // Multiplication → 30
console.log(a / b); // Division → 3.333...
console.log(a % b); // Modulus (remainder) → 1
console.log(a ** b); // Exponentiation → 10^3 = 1000

// Increment / Decrement
let c = 5;
console.log(++c); // Pre-increment → 6
console.log(c++); // Post-increment → 6 (then becomes 7)
console.log(--c); // Pre-decrement → 6

// ===============================
// 4️⃣ ASSIGNMENT OPERATORS
// ===============================

let x = 10;
x += 5; // x = x + 5 → 15
x -= 3; // x = x - 3 → 12
x *= 2; // 24
x /= 4; // 6
x %= 5; // 1
x **= 3; // 1^3 = 1
console.log(x);

// ===============================
// 5️⃣ COMPARISON OPERATORS
// ===============================

/* Used to compare two values, returning true/false */

console.log(5 == "5");   // true (loose equality)
console.log(5 === "5");  // false (strict equality)
console.log(5 != 6);      // true
console.log(5 !== "5");   // true
console.log(10 > 5);      // true
console.log(10 < 5);      // false
console.log(10 >= 10);    // true
console.log(10 <= 9);     // false

// ===============================
// 6️⃣ LOGICAL OPERATORS
// ===============================

let p = true, q = false;

console.log(p && q); // AND → false
console.log(p || q); // OR → true
console.log(!p);     // NOT → false

// Logical operator examples:
let age = 20;
if (age > 18 && age < 60) {
  console.log("Adult");
}

// ===============================
// 7️⃣ BITWISE OPERATORS (rare but important)
// ===============================

/* Works at binary level */
console.log(5 & 1);  // AND → 1
console.log(5 | 1);  // OR → 5
console.log(5 ^ 1);  // XOR → 4
console.log(~5);     // NOT → -6
console.log(5 << 1); // Left shift → 10
console.log(5 >> 1); // Right shift → 2

// ===============================
// 8️⃣ STRING OPERATORS
// ===============================

let firstName = "Vivek";
let lastName = "Srivastava";
console.log(firstName + " " + lastName); // Concatenation

let greeting = `Hello, ${firstName}!`; // Template literal
console.log(greeting);

// ===============================
// 9️⃣ TERNARY OPERATOR
// ===============================

let marks = 85;
let result = (marks >= 40) ? "Pass" : "Fail";
console.log(result); // Pass

// ===============================
// 🔟 TYPE OPERATORS
// ===============================

console.log(typeof "Hello"); // string
console.log(typeof 123);      // number

let arr = [1,2,3];
console.log(Array.isArray(arr)); // true

// instanceof → checks if object belongs to a certain class
let date = new Date();
console.log(date instanceof Date); // true

// ===============================
// 1️⃣1️⃣ OPERATOR PRECEDENCE (ORDER OF EXECUTION)
// ===============================

/*
Precedence determines which operator executes first.
Example:
*/
let res = 10 + 5 * 2; // Multiplication runs first → 10 + 10 = 20
console.log(res);

// Use parentheses to override default precedence
res = (10 + 5) * 2; // → 30
console.log(res);

// ===============================
// 1️⃣2️⃣ COMMON INTERVIEW QUESTIONS
// ===============================

/*
❓ Q1: What's the difference between == and === ?
✅ '==' checks only value (allows type coercion)
✅ '===' checks both value & type strictly.
*/

/*
❓ Q2: What's the difference between && and || ?
✅ '&&' returns the first falsy value or last true.
✅ '||' returns the first truthy value.
Example:
*/
console.log(0 && "Hello"); // 0
console.log(1 && "Hello"); // "Hello"
console.log(0 || "Hi");    // "Hi"
console.log("JS" || 0);     // "JS"

/*
❓ Q3: What will be output?
console.log(3 > 2 > 1);
✅ Step-by-step:
3 > 2 → true
true > 1 → false (true is coerced to 1, 1 > 1 → false)
*/

/*
❓ Q4: Explain difference between pre and post increment.
✅ ++a increments first then returns the value.
✅ a++ returns current value then increments.
*/

/*
❓ Q5: What is operator precedence and associativity?
✅ Precedence → which operator runs first.
✅ Associativity → direction of execution when precedence is same.
*/

/*
❓ Q6: Predict output:
console.log('5' + 5);
console.log('5' - 5);
✅ '5' + 5 → '55' (string concatenation)
✅ '5' - 5 → 0   (string converted to number)
*/

/*
❓ Q7: What is the purpose of typeof and instanceof?
✅ typeof → tells primitive data type.
✅ instanceof → checks object inheritance.
*/

/*
❓ Q8: What does !! (double NOT) do?
✅ Converts value to boolean.
Example:
console.log(!!"text"); // true
console.log(!!0);       // false
*/

/*
❓ Q9: What will be output?
console.log(null == undefined); // true (coercion)
console.log(null === undefined); // false (different types)
*/

/*
❓ Q10: Explain bitwise NOT (~) operator.
✅ It inverts all bits and adds 1.
✅ ~5 → -6
*/

// ===============================
// ✅ SUMMARY TABLE
// ===============================

/*
| Type             | Examples                   | Description |
|------------------|----------------------------|--------------|
| Arithmetic       | +, -, *, /, %, **          | Math ops |
| Assignment       | =, +=, -=, *=, /=, %=      | Assign values |
| Comparison       | ==, ===, !=, !==, >, <     | Compare values |
| Logical          | &&, ||, !                  | Combine boolean expressions |
| Bitwise          | &, |, ^, ~, <<, >>         | Operate on binary bits |
| String           | +, +=                      | Join strings |
| Ternary          | ? :                        | Conditional shorthand |
| Type             | typeof, instanceof         | Check types |
*/

// ===============================
// END OF FILE 🧠
// ===============================
