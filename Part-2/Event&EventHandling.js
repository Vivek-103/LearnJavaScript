// EVENTS AND EVENT HANDLING IN JAVASCRIPT
// -----------------------------------------------------------
// This file teaches EVERYTHING you must know about events, their types,
// event flow, propagation, listeners, advanced event handling, and more.
// At the end, you get top interview questions with answers.

// -----------------------------------------------------------
// 1. WHAT ARE EVENTS?
// -----------------------------------------------------------
// Events are actions or occurrences that happen in the browser.
// Examples:
// - Clicking a button
// - Typing in an input box
// - Page load finished
// - Hovering over an element
// - Scrolling
// - Pressing a key

// JavaScript lets you "listen" to these events and execute code.


// -----------------------------------------------------------
// 2. ADDING EVENT LISTENERS
// -----------------------------------------------------------
// There are 3 ways to handle events in JS.

// Method 1: Inline events (Not recommended)
// <button onclick="sayHello()">Click Me</button>
function sayHello() {
    console.log("Hello from inline event!");
}

// Method 2: Element property
const btn1 = document.getElementById("btn1");
if(btn1) {
    btn1.onclick = function() {
        console.log("Button clicked using element property!");
    };
}

// Method 3: addEventListener() (Best practice)
const btn2 = document.getElementById("btn2");
if(btn2) {
    btn2.addEventListener("click", function() {
        console.log("Button clicked via addEventListener");
    });
}


// -----------------------------------------------------------
// 3. EVENT TYPES
// -----------------------------------------------------------
// MOUSE EVENTS:
// click, dblclick, mousedown, mouseup, mouseover, mousemove, mouseout

// KEYBOARD EVENTS:
// keydown, keyup, keypress

// FORM EVENTS:
// submit, change, input, focus, blur

// WINDOW EVENTS:
// load, scroll, resize

// TOUCH EVENTS (mobile):
// touchstart, touchend, touchmove


// -----------------------------------------------------------
// 4. EVENT OBJECT (VERY IMPORTANT)
// -----------------------------------------------------------
// The event object contains details about the event.

const box = document.getElementById("box");
if(box) {
    box.addEventListener("mousemove", function(event) {
        console.log("X:", event.clientX, "Y:", event.clientY);
    });
}


// -----------------------------------------------------------
// 5. EVENT FLOW (CAPTURING VS BUBBLING)
// -----------------------------------------------------------
// Event flow has two phases:
// 1. Capturing phase (top → down)
// 2. Bubbling phase (bottom → up)
// By default, addEventListener uses bubbling.

const parent = document.getElementById("parent");
const child = document.getElementById("child");

if(parent) {
    parent.addEventListener("click", function() {
        console.log("Parent clicked - Bubbling");
    });
}

if(child) {
    child.addEventListener("click", function() {
        console.log("Child clicked - Bubbling");
    });
}

// Capturing phase example:
// element.addEventListener(event, handler, true);

if(parent) {
    parent.addEventListener("click", function() {
        console.log("Parent clicked - Capturing");
    }, true);
}


// -----------------------------------------------------------
// 6. STOPPING EVENT PROPAGATION
// -----------------------------------------------------------
// stopPropagation() → stops bubbling
// stopImmediatePropagation() → stops bubbling + stops other listeners

if(child) {
    child.addEventListener("click", function(event) {
        event.stopPropagation();
        console.log("Child clicked but bubbling stopped");
    });
}


// -----------------------------------------------------------
// 7. PREVENT DEFAULT
// -----------------------------------------------------------
// Used to stop default browser behaviour.
// Example: Prevent form from submitting or prevent link navigation.

const link = document.getElementById("myLink");
if(link) {
    link.addEventListener("click", function(event) {
        event.preventDefault();
        console.log("Default prevented. Not navigating.");
    });
}


// -----------------------------------------------------------
// 8. EVENT DELEGATION
// -----------------------------------------------------------
// Instead of adding event listeners to many child items,
// add **one** listener to the parent and detect the clicked child.

const list = document.getElementById("todoList");
if(list) {
    list.addEventListener("click", function(event) {
        if (event.target.tagName === "LI") {
            console.log("You clicked:", event.target.textContent);
        }
    });
}

// Why use event delegation?
// - Better performance
// - Fewer listeners
// - Works for dynamically added elements


// -----------------------------------------------------------
// 9. ONCE OPTION (run only one time)
// -----------------------------------------------------------
if(btn2) {
    btn2.addEventListener("click", function() {
        console.log("This will run only once");
    }, { once: true });
}


// -----------------------------------------------------------
// 10. PASSING PARAMETERS TO EVENT HANDLERS
// -----------------------------------------------------------
const customButton = document.getElementById("customBtn");
function greet(name) {
    console.log(`Hello, ${name}`);
}

if(customButton) {
    customButton.addEventListener("click", function() {
        greet("Vivek");
    });
}


// -----------------------------------------------------------
// 11. REMOVING EVENTS
// -----------------------------------------------------------
function hello() {
    console.log("Hello");
}

const removeBtn = document.getElementById("removeBtn");
if(removeBtn) {
    removeBtn.addEventListener("click", hello);

    // Remove after 3 seconds
    setTimeout(() => {
        removeBtn.removeEventListener("click", hello);
    }, 3000);
}


// -----------------------------------------------------------
// 12. CUSTOM EVENTS
// -----------------------------------------------------------
const customEvent = new Event("myCustomEvent");

document.addEventListener("myCustomEvent", function() {
    console.log("Custom event triggered");
});

setTimeout(() => {
    document.dispatchEvent(customEvent);
}, 2000);


// -----------------------------------------------------------
// TOP INTERVIEW QUESTIONS & ANSWERS
// -----------------------------------------------------------

/*
1. What is event bubbling?
Answer: When an event triggers on the deepest element first and then moves upward to the ancestors.

2. What is event capturing?
Answer: Opposite of bubbling. Event moves from top (window) → down to the element.
You enable it by passing `true` in addEventListener.

3. Difference between event.target and event.currentTarget?
- event.target → actual element clicked
- event.currentTarget → element whose listener is running

4. What is event delegation?
Answer: Handling events at a parent level instead of adding listeners to each child.

5. Why use addEventListener over onclick?
- Supports multiple listeners
- More modern
- Supports options like once, capture

6. How do you stop event propagation?
Use event.stopPropagation();

7. How to stop default behaviour?
Use event.preventDefault();

8. Can we pass arguments to event handlers?
Yes, by wrapping inside another function.

9. What is the difference between input, change, and submit events?
- input → fires on every keystroke
- change → fires when field loses focus and value changed
- submit → fires when form submitted

10. What are custom events?
User-created events using `new Event()` or `new CustomEvent()`.
*/
