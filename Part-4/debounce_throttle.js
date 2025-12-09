/*******************************************************
 *  DEBOUNCING & THROTTLING IN JAVASCRIPT
 *  From Beginner to Advanced (With Interview Q&A)
 *
 *  Author: Your Name
 *  File: debounce_throttle.js
 *******************************************************/

/*
=======================================================
1️⃣ WHY DO WE NEED DEBOUNCING & THROTTLING?
=======================================================

When browser events fire too frequently, like:
- scroll
- resize
- keypress
- mousemove
- window resize
- button spam click

They can:
❌ cause performance issues
❌ overload APIs
❌ crash UI
❌ make apps lag

So we CONTROL execution using:

✅ Debouncing
✅ Throttling
*/


/*
=======================================================
2️⃣ WHAT IS DEBOUNCING?
=======================================================

👉 Debouncing means:
"Execute the function ONLY after a certain time has passed
 since the LAST time it was called."

In simple words:
- User keeps typing → function NOT called
- User STOPS typing for X ms → function called ONCE
*/


// ❌ WITHOUT DEBOUNCE (BAD PRACTICE)
function searchAPI(query) {
  console.log("API CALL:", query);
}

// Every keypress triggers API → BAD
// input.addEventListener("input", (e) => {
//   searchAPI(e.target.value);
// });


/*
=======================================================
3️⃣ BASIC DEBOUNCE IMPLEMENTATION
=======================================================
*/

function debounce(fn, delay) {
  let timerId;

  return function (...args) {
    clearTimeout(timerId);

    timerId = setTimeout(() => {
      fn.apply(this, args);
    }, delay);
  };
}


// ✅ USING DEBOUNCE
const debouncedSearch = debounce(searchAPI, 500);

// Example usage:
// debouncedSearch("react");
// debouncedSearch("react js");
// debouncedSearch("react js debounce");

/*
Only the LAST call runs after 500ms.
*/


/*
=======================================================
4️⃣ REAL-WORLD DEBOUNCE USE CASES
=======================================================

✅ Search Box API Calls
✅ Form Validation
✅ Window Resize Calculations
✅ Auto Save Draft
✅ Button Spam Prevention
*/


/*
=======================================================
5️⃣ ADVANCED DEBOUNCE (IMMEDIATE MODE)
=======================================================
*/

function debounceAdvanced(fn, delay, immediate = false) {
  let timer;

  return function (...args) {
    const callNow = immediate && !timer;

    clearTimeout(timer);

    timer = setTimeout(() => {
      timer = null;
      if (!immediate) fn.apply(this, args);
    }, delay);

    if (callNow) {
      fn.apply(this, args);
    }
  };
}


// Example:
// const debouncedClick = debounceAdvanced(() => console.log("Clicked"), 1000, true);


/*
=======================================================
6️⃣ WHAT IS THROTTLING?
=======================================================

👉 Throttling means:
"Execute a function at MOST once in a given time interval,
 no matter how many times it is triggered."

Example:
- Scroll event fires 200 times per second
- Throttle ensures it runs only every 500ms
*/


/*
=======================================================
7️⃣ BASIC THROTTLE IMPLEMENTATION
=======================================================
*/

function throttle(fn, delay) {
  let lastCall = 0;

  return function (...args) {
    const now = Date.now();

    if (now - lastCall >= delay) {
      lastCall = now;
      fn.apply(this, args);
    }
  };
}


// ✅ USING THROTTLE
function onScroll() {
  console.log("Scroll event fired:", Date.now());
}

const throttledScroll = throttle(onScroll, 1000);

// window.addEventListener("scroll", throttledScroll);


/*
=======================================================
8️⃣ ADVANCED THROTTLE WITH TRAILING CALL
=======================================================
*/

function throttleAdvanced(fn, delay) {
  let lastTime = 0;
  let timer;

  return function (...args) {
    const now = Date.now();

    if (now - lastTime >= delay) {
      lastTime = now;
      fn.apply(this, args);
    } else {
      clearTimeout(timer);
      timer = setTimeout(() => {
        lastTime = Date.now();
        fn.apply(this, args);
      }, delay - (now - lastTime));
    }
  };
}


/*
=======================================================
9️⃣ DEBOUNCE vs THROTTLE (INTERVIEW COMPARISON)
=======================================================

Debounce:
✅ Executes only AFTER delay
✅ Waits for user to STOP
✅ Best for search & validation

Throttle:
✅ Executes every X ms
✅ Runs continuously
✅ Best for scroll, resize, drag
*/


/*
=======================================================
🔟 REAL-LIFE EXAMPLES
=======================================================

// ✅ Debounce Example: Search Bar API Call
const searchHandler = debounce((text) => {
  console.log("Searching for:", text);
}, 500);


// ✅ Throttle Example: Infinite Scroll
const scrollHandler = throttle(() => {
  console.log("Loading more data...");
}, 1000);
*/


/*
=======================================================
1️⃣1️⃣ COMMON MISTAKES
=======================================================

❌ Forgetting to return function in debounce
❌ Using debounce for scroll animations
❌ Using throttle for search APIs
❌ Not clearing timers
*/


/*
=======================================================
1️⃣2️⃣ INTERVIEW QUESTIONS & ANSWERS
=======================================================
*/

// Q1: What is debouncing?
// A: It delays function execution until the user stops triggering the event.


// Q2: What is throttling?
// A: It ensures function runs only once in a fixed time interval.


// Q3: Difference between debounce and throttle?
/*
Debounce → runs after delay only once.
Throttle → runs every delay continuously.
*/


// Q4: Give real use cases.
/*
Debounce → Search input, button clicks, form validation
Throttle → Scroll, resize, mousemove
*/


// Q5: Which is better for search box?
// ✅ Debounce


// Q6: Which is better for scroll?
// ✅ Throttle


// Q7: Implement debounce from scratch.
// ✅ Already implemented above.


// Q8: Is debounce synchronous or asynchronous?
// ✅ Asynchronous (uses setTimeout)


// Q9: Can debounce return a value?
// ❌ No directly, because execution is delayed.


// Q10: Does throttle use closures?
// ✅ Yes, it remembers last execution time.


// Q11: Difference between setTimeout & requestAnimationFrame?
/*
setTimeout → time-based delay
requestAnimationFrame → frame-based (used for animations)
Throttle is often combined with rAF for better performance.
*/


/*
=======================================================
1️⃣3️⃣ BONUS: DEBOUNCE USING REQUEST ANIMATION FRAME
=======================================================
*/

function debounceRAF(fn) {
  let frame;

  return function (...args) {
    cancelAnimationFrame(frame);

    frame = requestAnimationFrame(() => {
      fn.apply(this, args);
    });
  };
}


/*
=======================================================
1️⃣4️⃣ FINAL ONE-LINER DEFINITIONS
=======================================================

Debounce:
"Executes a function after user stops triggering the event."

Throttle:
"Executes a function at fixed time intervals."

=======================================================
✅ END OF FILE
=======================================================
*/
