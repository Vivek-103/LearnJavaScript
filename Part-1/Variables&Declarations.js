// variables_and_declarations.js

/*
============================================
📘 VARIABLES & DECLARATIONS IN JAVASCRIPT
============================================
This file explains how variables work in JS:
  - Declaration keywords (var, let, const)
  - Scope differences
  - Hoisting
  - Temporal Dead Zone (TDZ)
  - Re-declaration & Re-assignment
*/

// ===============================
// 1️⃣ VAR — The old way
// ===============================

// 'var' has FUNCTION scope (not block scope)
var oldVar = 'I am var';
console.log(oldVar); // ✅ Works fine

if (true) {
  var oldVar = 'I can be accessed outside block';
}
console.log(oldVar); // ✅ Same variable (no block scope)

// Hoisting example:
console.log(hoistedVar); // ✅ undefined (hoisted)
var hoistedVar = 10;
console.log(hoistedVar); // ✅ 10

// ===============================
// 2️⃣ LET — The modern variable
// ===============================

// 'let' has BLOCK scope
let modernLet = 'I am let';
console.log(modernLet);

if (true) {
  let modernLet = 'I live only in this block';
  console.log(modernLet); // ✅ Works only here
}
// console.log(modernLet); // ✅ Works again (outer one)

// Hoisting with TDZ
// console.log(tempVar); // ❌ ReferenceError (TDZ)
let tempVar = 'Declared after TDZ';

// ===============================
// 3️⃣ CONST — For constants (unchangeable references)
// ===============================

const constantValue = 3.14159;
console.log(constantValue);

// constantValue = 10; // ❌ TypeError: Assignment to constant variable

// But note: const objects and arrays can still be mutated
const person = { name: 'Vivek', age: 21 };
person.age = 22; // ✅ allowed (changing internal property)
console.log(person);

// ===============================
// 4️⃣ DIFFERENCES BETWEEN VAR / LET / CONST
// ===============================

/*
| Feature                  | var               | let                | const               |
|---------------------------|-------------------|--------------------|---------------------|
| Scope                    | Function scope    | Block scope        | Block scope         |
| Hoisted?                 | Yes               | Yes (TDZ applies)  | Yes (TDZ applies)   |
| Default initialization   | undefined         | ❌ No               | ❌ No                |
| Redeclaration allowed?   | ✅ Yes             | ❌ No               | ❌ No                |
| Reassignment allowed?    | ✅ Yes             | ✅ Yes              | ❌ No                |
*/

// ===============================
// 5️⃣ TEMPORAL DEAD ZONE (TDZ)
// ===============================

// The TDZ is the time between when a variable is hoisted
// and when it’s actually initialized.
// Accessing it in this period throws a ReferenceError.

// Example:
// console.log(x); // ❌ ReferenceError
let x = 5;
console.log(x); // ✅ 5

// ===============================
// 6️⃣ BEST PRACTICES
// ===============================

/* ✅ Use 'const' by default
   ✅ Use 'let' only if value will change
   🚫 Avoid 'var' (can cause confusing bugs)
*/

// Example of good usage:
const API_URL = 'https://api.example.com';
let count = 0;

function increment() {
  count++;
  console.log(`Count is now ${count}`);
}

increment(); // ✅ Count is now 1

// ===============================
// END OF FILE 🧠
// ===============================
