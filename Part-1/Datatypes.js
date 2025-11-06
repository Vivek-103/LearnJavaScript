// datatypes_and_type_system.js

/*
=====================================================
📘 JAVASCRIPT DATA TYPES & TYPE SYSTEM — COMPLETE GUIDE
=====================================================
This file teaches everything about:
  - JavaScript data types (primitive + reference)
  - typeof operator
  - dynamic typing
  - type conversion (explicit & implicit)
  - type coercion
  - equality operators (== vs ===)
  - common interview questions & solutions
*/

// ===============================
// 1️⃣ DATA TYPES IN JAVASCRIPT
// ===============================

/*
JavaScript has 8 main data types:
👉 7 Primitive types
👉 1 Non-primitive (object)
*/

// 🧩 Primitive types
let str = "Hello";               // String
let num = 42;                    // Number
let bool = true;                 // Boolean
let und;                         // Undefined
let nul = null;                  // Null
let sym = Symbol("id");          // Symbol
let bigIntNum = 12345678901234567890n; // BigInt

console.log(typeof str);      // "string"
console.log(typeof num);      // "number"
console.log(typeof bool);     // "boolean"
console.log(typeof und);      // "undefined"
console.log(typeof nul);      // ⚠️ "object" (known JS bug)
console.log(typeof sym);      // "symbol"
console.log(typeof bigIntNum);// "bigint"

// 🧩 Non-primitive types (reference types)
let obj = { name: "Vivek", age: 21 }; // Object
let arr = [1, 2, 3];                   // Array (special object)
function greet() { console.log("Hello JS!"); } // Function

console.log(typeof obj);  // "object"
console.log(typeof arr);  // "object"
console.log(typeof greet);// "function"

// ===============================
// 2️⃣ DYNAMIC TYPING
// ===============================

/*
JavaScript is dynamically typed:
→ You don’t have to declare variable types explicitly.
→ The type is decided at runtime.
*/

let x = 10;     // number
x = "ten";      // now a string
x = true;       // now a boolean
console.log(typeof x); // "boolean"

// ===============================
// 3️⃣ EXPLICIT TYPE CONVERSION
// ===============================

// Convert manually
console.log(Number("123"));   // 123
console.log(String(123));      // "123"
console.log(Boolean(1));       // true
console.log(Boolean(0));       // false

// ===============================
// 4️⃣ IMPLICIT TYPE COERCION (Automatic Conversion)
// ===============================

// When JS automatically converts data types
console.log('5' + 2);   // "52" (number → string)
console.log('5' - 2);   // 3   (string → number)
console.log(true + 1);  // 2   (true → 1)
console.log(false + 5); // 5   (false → 0)
console.log(null + 1);  // 1   (null → 0)
console.log(undefined + 1); // NaN

// ===============================
// 5️⃣ TYPE COERCION IN EQUALITY
// ===============================

console.log(5 == "5");   // true  (coercion)
console.log(5 === "5");  // false (strict)
console.log(false == 0);  // true  (false → 0)
console.log(false === 0); // false (different types)

// ===============================
// 6️⃣ typeof OPERATOR QUIRKS
// ===============================

console.log(typeof NaN); // "number"
console.log(typeof null); // ⚠️ "object" (legacy bug)
console.log(typeof []);   // "object"
console.log(typeof {});   // "object"
console.log(typeof function(){}); // "function"

// ===============================
// 7️⃣ SPECIAL NOTES
// ===============================

/*
🔹 null represents intentional absence of value.
🔹 undefined means a variable is declared but not assigned.
🔹 BigInt is used for integers beyond 2^53 - 1.
🔹 Symbol creates unique identifiers.
*/

// ===============================
// 8️⃣ COMMON INTERVIEW QUESTIONS
// ===============================

/*
❓ Q1: What’s the difference between undefined and null?
✅ undefined → variable declared but not assigned a value.
✅ null → explicitly set to "no value" by the programmer.
*/

/*
❓ Q2: What will be the output?
console.log(typeof null);
✅ Output: "object" (this is a known bug in JS)
*/

/*
❓ Q3: Explain == vs ===
✅ == allows type coercion (5 == '5' → true)
✅ === checks both type and value strictly (5 === '5' → false)
*/

/*
❓ Q4: What is type coercion?
✅ Automatic conversion of one type to another during an operation.
Example: '5' - 2 → 3 (string converted to number)
*/

/*
❓ Q5: What is NaN?
✅ NaN means 'Not a Number', a special numeric value indicating invalid math operations.
Example: Number('abc') → NaN
*/

/*
❓ Q6: What’s the difference between primitive and non-primitive types?
✅ Primitive → stored directly in memory (immutable)
✅ Non-primitive → stored by reference (mutable)
*/

/*
❓ Q7: What is dynamic typing in JavaScript?
✅ Variable types are decided at runtime, not at compile-time.
*/

/*
❓ Q8: Predict output:
console.log([] + []); // ""
console.log([] + {}); // "[object Object]"
console.log({} + []); // 0 or "[object Object]" (depends on context)
*/

// ===============================
// 🧩 QUICK SUMMARY TABLE
// ===============================

/*
| Type           | Example                   | typeof Result  |
|----------------|---------------------------|----------------|
| String         | 'hello'                   | 'string'       |
| Number         | 42                        | 'number'       |
| Boolean        | true                      | 'boolean'      |
| Undefined      | let a;                    | 'undefined'    |
| Null           | null                      | 'object' ⚠️    |
| Symbol         | Symbol('id')              | 'symbol'       |
| BigInt         | 123n                      | 'bigint'       |
| Object         | {name: 'Vivek'}           | 'object'       |
| Array          | [1,2,3]                   | 'object'       |
| Function       | function(){}              | 'function'     |
*/

// ===============================
// END OF FILE 🧠
// ===============================
