/************************************************************
 *  COMPLETE GUIDE TO CALLBACKS IN JAVASCRIPT (Single File)
 *  Author: Generated for Learning
 *  Purpose: Understand Callbacks from Basic to Advanced
 ************************************************************/

/************************************************************
 1. WHAT IS A CALLBACK?
 ************************************************************/
// A callback is a function passed as an argument to another function
// and executed later.

function greet(name, callback) {
  console.log("Hello", name);
  callback();
}

function sayBye() {
  console.log("Goodbye!");
}

greet("Vivek", sayBye);


/************************************************************
 2. SYNCHRONOUS CALLBACK
 ************************************************************/
function calculate(a, b, operation) {
  return operation(a, b);
}

function add(x, y) {
  return x + y;
}

const result = calculate(10, 5, add);
console.log("2. Sync Callback Result:", result);


/************************************************************
 3. ASYNCHRONOUS CALLBACK
 ************************************************************/
console.log("3. Start");

setTimeout(function () {
  console.log("3. Async Callback After 2s");
}, 2000);

console.log("3. End");


/************************************************************
 4. CALLBACK WITH ARROW FUNCTION
 ************************************************************/
setTimeout(() => {
  console.log("4. Arrow Function Callback");
}, 1000);


/************************************************************
 5. CALLBACK INSIDE ARRAY METHODS
 ************************************************************/
const numbers = [1, 2, 3, 4, 5];

const doubled = numbers.map(function (num) {
  return num * 2;
});

const evens = numbers.filter((num) => num % 2 === 0);

numbers.forEach((num) => {
  console.log("5. forEach Callback:", num);
});

console.log("5. map:", doubled);
console.log("5. filter:", evens);


/************************************************************
 6. CALLBACK IN EVENT HANDLING (Browser)
 ************************************************************/
/*
<button id="btn">Click</button>

const btn = document.getElementById("btn");
btn.addEventListener("click", function () {
  console.log("6. Button Clicked (Callback)");
});
*/


/************************************************************
 7. CALLBACK WITH API STYLE FUNCTION (SIMULATION)
 ************************************************************/
function fetchData(callback) {
  console.log("7. Fetching data...");
  setTimeout(() => {
    const data = { id: 1, name: "Laptop" };
    callback(data);
  }, 1500);
}

fetchData(function (response) {
  console.log("7. Data received:", response);
});


/************************************************************
 8. CALLBACK HELL (PYRAMID OF DOOM)
 ************************************************************/
function step1(cb) {
  setTimeout(() => {
    console.log("8. Step 1 completed");
    cb();
  }, 1000);
}

function step2(cb) {
  setTimeout(() => {
    console.log("8. Step 2 completed");
    cb();
  }, 1000);
}

function step3(cb) {
  setTimeout(() => {
    console.log("8. Step 3 completed");
    cb();
  }, 1000);
}

step1(() => {
  step2(() => {
    step3(() => {
      console.log("8. All steps done (Callback Hell)");
    });
  });
});


/************************************************************
 9. SOLVING CALLBACK HELL USING PROMISES
 ************************************************************/
function stepPromise(msg) {
  return new Promise((resolve) => {
    setTimeout(() => {
      console.log(msg);
      resolve();
    }, 1000);
  });
}

stepPromise("9. Step 1")
  .then(() => stepPromise("9. Step 2"))
  .then(() => stepPromise("9. Step 3"))
  .then(() => console.log("9. All steps done (Promises)"));


/************************************************************
 10. CALLBACK WITH ERROR HANDLING (Node.js Style)
 ************************************************************/
function readFileMock(fileName, callback) {
  setTimeout(() => {
    if (!fileName) {
      callback(new Error("File name required"), null);
    } else {
      callback(null, "File content of " + fileName);
    }
  }, 1000);
}

readFileMock("data.txt", function (err, data) {
  if (err) {
    console.log("10. Error:", err.message);
  } else {
    console.log("10. Success:", data);
  }
});


/************************************************************
 11. MULTIPLE CALLBACKS
 ************************************************************/
function downloadFile(successCb, errorCb) {
  const success = true;
  setTimeout(() => {
    if (success) successCb("File downloaded");
    else errorCb("Download failed");
  }, 1000);
}

downloadFile(
  (msg) => console.log("11. Success:", msg),
  (err) => console.log("11. Error:", err)
);


/************************************************************
 12. CALLBACK VS RETURN
 ************************************************************/
function asyncAdd(a, b, callback) {
  setTimeout(() => {
    callback(a + b);
  }, 1000);
}

asyncAdd(5, 10, function (sum) {
  console.log("12. Callback Result:", sum);
});


/************************************************************
 13. CALLBACK WITH `this`
 ************************************************************/
const user = {
  name: "Vivek",
  show: function () {
    setTimeout(function () {
      console.log("13a. Normal Callback this:", this.name); // undefined
    }, 1000);

    setTimeout(() => {
      console.log("13b. Arrow Callback this:", this.name); // Vivek
    }, 1000);
  }
};

user.show();


/************************************************************
 14. CALLBACK WITH CLOSURE
 ************************************************************/
function counter(callback) {
  let count = 0;

  setInterval(() => {
    count++;
    callback(count);
  }, 1000);
}

counter(function (value) {
  console.log("14. Counter:", value);
});


/************************************************************
 15. REAL-WORLD USE CASES OF CALLBACKS
 ************************************************************/
/*
1. setTimeout, setInterval
2. Event handling
3. API calls
4. Array methods (map, filter, reduce)
5. File handling in Node.js
*/


/************************************************************
 16. COMMON MISTAKES WITH CALLBACKS
 ************************************************************/
// Mistake 1: Expecting return from async callback
function wrongExample() {
  let data;
  setTimeout(() => {
    data = 10;
  }, 1000);
  return data; // undefined
}
console.log("16. Wrong Example:", wrongExample());


/************************************************************
 17. BEST PRACTICES
 ************************************************************/
/*
1. Avoid deeply nested callbacks
2. Use named functions
3. Handle errors properly
4. Prefer Promises or async/await for complex async flow
*/


/************************************************************
 18. INTERVIEW QUESTIONS WITH ANSWERS
 ************************************************************/
// Q1: What is a callback?
// A: A function passed to another function and executed later.

// Q2: What is callback hell?
// A: Deeply nested callbacks that make code unreadable.

// Q3: How to avoid callback hell?
// A: Using Promises or async/await.

// Q4: Are callbacks synchronous?
// A: They can be both sync and async.

// Q5: What is error-first callback?
// A: Node.js pattern where first argument is error.


/************************************************************
 END OF FILE
 ************************************************************/
