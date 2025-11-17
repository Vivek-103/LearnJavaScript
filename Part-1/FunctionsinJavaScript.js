// arrays_in_javascript.js

/*
=====================================================
📘 JAVASCRIPT ARRAYS — COMPLETE GUIDE
=====================================================
This file covers everything about:
  - What arrays are
  - Creating arrays
  - Accessing elements
  - Array methods (mutating & non-mutating)
  - Iteration methods
  - Spread, Rest, and Destructuring
  - Multidimensional arrays
  - Common use-cases & tricks
  - Interview questions and answers
*/

// ===============================
// 1️⃣ WHAT IS AN ARRAY?
// ===============================

/*
An array is a special type of object used to store multiple values in a single variable.
Arrays are zero-indexed, meaning the first element starts at index 0.
*/

let fruits = ["apple", "banana", "mango"];
console.log(fruits[0]); // apple
console.log(fruits.length); // 3

// ===============================
// 2️⃣ CREATING ARRAYS
// ===============================

let arr1 = [1, 2, 3]; // literal syntax
let arr2 = new Array(4, 5, 6); // constructor syntax
let arr3 = Array.of(7, 8, 9); // ES6 static method

console.log(arr1, arr2, arr3);

// ===============================
// 3️⃣ ACCESSING & MODIFYING ELEMENTS
// ===============================

let colors = ["red", "green", "blue"];
colors[1] = "yellow"; // modify element
console.log(colors);

colors.push("purple"); // add to end
colors.unshift("orange"); // add to beginning
colors.pop(); // remove last
colors.shift(); // remove first

console.log(colors);

// ===============================
// 4️⃣ COMMON ARRAY METHODS
// ===============================

let nums = [1, 2, 3, 4, 5];

// Mutating methods (change original array)
nums.reverse(); // [5,4,3,2,1]
nums.sort(); // [1,2,3,4,5]
nums.splice(2, 1, 99); // remove 1 element at index 2, add 99
console.log(nums);

// Non-mutating methods (return new array)
let sliced = nums.slice(1, 4); // [2,99,4]
let concatenated = nums.concat([6, 7]); // combine arrays
let mapped = nums.map(n => n * 2); // [2,4,198,8,10]
console.log(sliced, concatenated, mapped);

// ===============================
// 5️⃣ ITERATION METHODS
// ===============================

let arr = [10, 20, 30, 40, 50];

arr.forEach(num => console.log(num)); // loops through elements

let filtered = arr.filter(num => num > 25); // returns elements > 25
console.log(filtered);

let found = arr.find(num => num === 30); // returns first match
console.log(found);

let total = arr.reduce((acc, num) => acc + num, 0); // sum of all
console.log(total);

let everyCheck = arr.every(num => num > 5); // true
let someCheck = arr.some(num => num > 45); // true
console.log(everyCheck, someCheck);

// ===============================
// 6️⃣ SPREAD, REST & DESTRUCTURING
// ===============================

let a = [1, 2, 3];
let b = [4, 5, ...a]; // spread combines arrays
console.log(b);

function sum(...args) { // rest collects arguments
  return args.reduce((acc, val) => acc + val, 0);
}
console.log(sum(1, 2, 3, 4)); // 10

let [first, second, ...rest] = [10, 20, 30, 40];
console.log(first, second, rest); // 10 20 [30,40]

// ===============================
// 7️⃣ MULTIDIMENSIONAL ARRAYS
// ===============================

let matrix = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9]
];
console.log(matrix[1][2]); // 6

// ===============================
// 8️⃣ ARRAY SEARCHING METHODS
// ===============================

let animals = ["cat", "dog", "cow", "cat"];
console.log(animals.indexOf("cat")); // 0
console.log(animals.lastIndexOf("cat")); // 3
console.log(animals.includes("dog")); // true

// ===============================
// 9️⃣ ARRAY CONVERSION METHODS
// ===============================

let strArray = ["JS", "is", "awesome"];
console.log(strArray.join(" ")); // "JS is awesome"
console.log(Array.isArray(strArray)); // true
console.log(strArray.toString()); // "JS,is,awesome"

// ===============================
// 🔟 FLAT, FLATMAP & FROM
// ===============================

let nested = [1, [2, [3, [4]]]];
console.log(nested.flat(2)); // [1, 2, 3, [4]]

let words = ["hello", "world"];
console.log(words.flatMap(word => word.split('')));

console.log(Array.from('Vivek')); // ['V','i','v','e','k']

// ===============================
// 1️⃣1️⃣ ARRAY COPY METHODS
// ===============================

let numbers = [1, 2, 3];
let copy1 = numbers.slice(); // non-mutating copy
let copy2 = [...numbers]; // spread copy

copy1.push(4);
console.log(numbers, copy1, copy2);

// ===============================
// 1️⃣2️⃣ ARRAY DESTRUCTURING WITH DEFAULTS
// ===============================

let [x = 1, y = 2, z = 3] = [10, 20];
console.log(x, y, z); // 10 20 3

// ===============================
// 1️⃣3️⃣ COMMON ARRAY TRICKS
// ===============================

console.log(Array(5).fill(0)); // [0,0,0,0,0]
console.log([...Array(5).keys()]); // [0,1,2,3,4]
console.log([1, 2, 3].includes(2)); // true

// ===============================
// 1️⃣4️⃣ COMMON INTERVIEW QUESTIONS
// ===============================

/*
❓ Q1: Difference between forEach, map, filter, and reduce?
✅ forEach → iterates (no return)
✅ map → transforms (returns new array)
✅ filter → selects (returns subset)
✅ reduce → accumulates (returns single value)
*/

/*
❓ Q2: How do you remove duplicates from an array?
✅ Use Set:
*/
let dupArr = [1, 2, 2, 3, 4, 4];
let uniqueArr = [...new Set(dupArr)];
console.log(uniqueArr);

/*
❓ Q3: How to flatten an array?
✅ Use flat():
*/
let flatArr = [1, [2, [3, 4]]].flat(2);
console.log(flatArr);

/*
❓ Q4: Difference between slice() and splice()?
✅ slice → returns new array (non-mutating)
✅ splice → modifies original array
*/

/*
❓ Q5: What is the difference between Array.of() and Array()? 
✅ Array(3) → creates empty array of length 3
✅ Array.of(3) → creates array [3]
*/

/*
❓ Q6: How to check if a variable is an array?
✅ Use Array.isArray(var)
*/

/*
❓ Q7: Predict output:
console.log([1, 2] + [3, 4]);
✅ Output: '1,23,4' → arrays converted to strings before concatenation.
*/

/*
❓ Q8: Explain shallow vs deep copy.
✅ Shallow → copies only top-level elements (spread, slice)
✅ Deep → copies nested structures (use JSON.parse(JSON.stringify(obj)))
*/

/*
❓ Q9: How to convert a string to an array?
✅ Use split(): 'hello'.split('') → ['h','e','l','l','o']
*/

/*
❓ Q10: Predict output:
let a = [1, 2, 3];
let b = a;
b.push(4);
console.log(a);
✅ [1,2,3,4] — because both refer to same array (reference type).
*/

// ===============================
// ✅ SUMMARY TABLE
// ===============================

/*
| Category            | Methods / Concepts                          | Example |
|---------------------|----------------------------------------------|----------|
| Add/Remove          | push, pop, shift, unshift, splice            | arr.push(1) |
| Searching           | indexOf, lastIndexOf, includes, find         | arr.find(fn) |
| Iteration           | forEach, map, filter, reduce, some, every    | arr.map(fn) |
| Combining           | concat, spread (...)                         | [...a, ...b] |
| Conversion          | join, toString, Array.from, flat             | arr.join(' ') |
| Copy                | slice, spread                                | arr.slice() |
| Checking            | Array.isArray(), instanceof Array            | Array.isArray(x) |
*/

// ===============================
// END OF FILE 🧠
// ===============================
