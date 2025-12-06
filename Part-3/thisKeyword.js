/************************************************************
 *  COMPLETE GUIDE TO `this` KEYWORD IN JAVASCRIPT
 *  Author: Generated for Learning
 *  Purpose: Understand `this` in ALL contexts in one file
 ************************************************************/

/************************************************************
 1. GLOBAL CONTEXT
 ************************************************************/
// In browsers, `this` in global scope refers to the window object
// In Node.js, `this` refers to module.exports (empty object {})

console.log("1. Global this:", this);


/************************************************************
 2. `this` INSIDE A NORMAL FUNCTION
 ************************************************************/
function normalFunction() {
  console.log("2. Normal Function this:", this);
}
normalFunction(); // window (browser) | undefined (strict mode)

'use strict';
function strictFunction() {
  console.log("2. Strict Mode Function this:", this);
}
strictFunction(); // undefined


/************************************************************
 3. `this` INSIDE AN OBJECT METHOD
 ************************************************************/
const user = {
  name: "Vivek",
  age: 22,
  greet: function () {
    console.log("3. Object Method this:", this); // refers to `user`
    console.log("Hello", this.name);
  }
};
user.greet();


/************************************************************
 4. `this` IN ARROW FUNCTIONS
 ************************************************************/
// Arrow functions DO NOT have their own `this`
// They inherit `this` from the parent scope

const arrowObj = {
  name: "Rahul",
  normalFn: function () {
    console.log("4a. normalFn this:", this);

    const arrowFn = () => {
      console.log("4b. arrowFn this:", this); // inherits from normalFn
    };

    arrowFn();
  }
};

arrowObj.normalFn();


/************************************************************
 5. `this` IN CONSTRUCTOR FUNCTIONS
 ************************************************************/
function Person(name, age) {
  this.name = name;
  this.age = age;
}

const p1 = new Person("Amit", 25);
const p2 = new Person("Neha", 24);

console.log("5. Constructor this:", p1, p2);


/************************************************************
 6. `this` IN CLASSES
 ************************************************************/
class Student {
  constructor(name, marks) {
    this.name = name;
    this.marks = marks;
  }

  getDetails() {
    console.log("6. Class this:", this);
  }
}

const s1 = new Student("Rohit", 90);
s1.getDetails();


/************************************************************
 7. CALL, APPLY, BIND
 ************************************************************/
function showDetails(city, country) {
  console.log("7. this:", this.name, city, country);
}

const personA = { name: "Kunal" };
const personB = { name: "Priya" };

showDetails.call(personA, "Delhi", "India");
showDetails.apply(personB, ["Mumbai", "India"]);

const boundFn = showDetails.bind(personA, "Pune", "India");
boundFn();


/************************************************************
 8. `this` IN EVENT HANDLERS (Browser Use)
 ************************************************************/
/*
<button id="btn">Click Me</button>

const btn = document.getElementById("btn");

btn.addEventListener("click", function () {
  console.log("8a. Normal function in event:", this); // button
});

btn.addEventListener("click", () => {
  console.log("8b. Arrow function in event:", this); // window
});
*/


/************************************************************
 9. `this` WITH setTimeout
 ************************************************************/
const timerObj = {
  name: "Timer",
  start: function () {
    setTimeout(function () {
      console.log("9a. setTimeout normal:", this); // window
    }, 1000);

    setTimeout(() => {
      console.log("9b. setTimeout arrow:", this); // timerObj
    }, 1000);
  }
};

timerObj.start();


/************************************************************
 10. `this` IN NESTED FUNCTIONS
 ************************************************************/
const nestedObj = {
  name: "Nested",
  outer: function () {
    console.log("10a. Outer this:", this);

    function inner() {
      console.log("10b. Inner this:", this); // window
    }

    inner();
  }
};

nestedObj.outer();


/************************************************************
 11. EXPLICIT VS IMPLICIT BINDING
 ************************************************************/
const implicitObj = {
  name: "Implicit",
  show: function () {
    console.log("11a. Implicit this:", this.name);
  }
};
implicitObj.show();

const explicitShow = implicitObj.show.bind({ name: "Explicit" });
explicitShow();


/************************************************************
 12. `this` IN IIFE
 ************************************************************/
(function () {
  console.log("12. IIFE this:", this);
})();


/************************************************************
 13. `this` IN PROTOTYPES
 ************************************************************/
function Car(model) {
  this.model = model;
}

Car.prototype.getModel = function () {
  console.log("13. Prototype this:", this.model);
};

const car1 = new Car("BMW");
car1.getModel();


/************************************************************
 14. COMMON MISTAKES
 ************************************************************/
// Mistake 1: Losing `this`
const lostObj = {
  name: "Lost",
  show: function () {
    console.log("14. Lost this:", this.name);
  }
};

const lostFn = lostObj.show;
lostFn(); // undefined

// Fix using bind
const fixedFn = lostObj.show.bind(lostObj);
fixedFn();


/************************************************************
 15. SUMMARY (Quick Rules)
 ************************************************************/
/*
1. Global scope -> window (browser)
2. Normal function -> depends on caller
3. Object method -> object itself
4. Arrow function -> parent scope
5. Constructor -> new object
6. call/apply/bind -> explicitly set
7. Event handler -> target element
8. setTimeout -> window unless arrow
*/


/************************************************************
 16. INTERVIEW QUESTIONS WITH ANSWERS
 ************************************************************/

// Q1: Difference between arrow and normal function `this`?
// A: Arrow inherits this, normal function creates its own.

// Q2: How to fix `this` loss?
// A: Using bind(), arrow functions, or storing in variable.

// Q3: What does bind() return?
// A: A new function with permanently bound `this`.

// Q4: Does `this` work in strict mode?
// A: Yes, but becomes undefined in normal functions.


/************************************************************
 END OF FILE
 ************************************************************/
