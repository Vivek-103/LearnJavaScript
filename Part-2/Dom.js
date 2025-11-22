/******************************************************
 🧩 DOM MANIPULATION MASTERCLASS IN JAVASCRIPT
******************************************************/

/*
==========================================
📘 INTRODUCTION TO DOM
==========================================
DOM = Document Object Model
It represents the structure of an HTML document as a tree of nodes (objects).
Each element (like <div>, <p>, etc.) is a node that can be accessed and manipulated using JavaScript.

The DOM allows you to:
1. Access elements
2. Modify elements
3. Add or remove elements
4. Change CSS styles dynamically
5. Handle user events (click, hover, input, etc.)
*/

// Example: Accessing the document
console.log(document.title); // prints the title of the page
console.log(document.body);  // gives the <body> element


/*
==========================================
🔹 SELECTING ELEMENTS
==========================================
There are multiple ways to access elements in DOM.
*/

// 1️⃣ getElementById()
const title = document.getElementById("main-title");

// 2️⃣ getElementsByClassName() → returns HTMLCollection (live)
const boxes = document.getElementsByClassName("box");

// 3️⃣ getElementsByTagName() → returns HTMLCollection (live)
const allDivs = document.getElementsByTagName("div");

// 4️⃣ querySelector() → returns the first matching element
const firstBox = document.querySelector(".box");

// 5️⃣ querySelectorAll() → returns NodeList (can use forEach)
const allBoxes = document.querySelectorAll(".box");

// Example of looping through NodeList
allBoxes.forEach(box => {
  box.style.border = "1px solid red";
});


/*
==========================================
🔹 DIFFERENCE BETWEEN HTMLCollection & NodeList
==========================================
HTMLCollection → live (updates if DOM changes)
NodeList → static (does not auto-update)
*/


/*
==========================================
🔹 READING AND MODIFYING CONTENT
==========================================
*/

// Example element: <div id="demo">Hello <b>World</b></div>
const demo = document.getElementById("demo");

// innerText → shows visible text only
console.log(demo.innerText); // Hello World

// textContent → shows all text (even hidden)
console.log(demo.textContent); // Hello World (including hidden text)

// innerHTML → shows full HTML (tags + text)
console.log(demo.innerHTML); // Hello <b>World</b>

// Changing content
demo.innerText = "Changed using innerText";
demo.textContent = "Changed using textContent";
demo.innerHTML = "<h3>Changed using innerHTML</h3>";


/*
==========================================
🔹 CHANGING ATTRIBUTES AND CLASSES
==========================================
*/

const img = document.querySelector("img");

// Set attribute
img.setAttribute("src", "photo.jpg");
img.setAttribute("alt", "Sample Photo");

// Get attribute
console.log(img.getAttribute("src"));

// Remove attribute
img.removeAttribute("alt");

// Add / Remove / Toggle classes
demo.classList.add("highlight");
demo.classList.remove("hidden");
demo.classList.toggle("active");


/*
==========================================
🔹 STYLING ELEMENTS
==========================================
*/

demo.style.color = "blue";
demo.style.backgroundColor = "lightgray";
demo.style.padding = "10px";

/*
You can access computed styles too:
*/
console.log(window.getComputedStyle(demo).color);


/*
==========================================
🔹 CREATING, APPENDING & PREPENDING ELEMENTS
==========================================
*/

const newDiv = document.createElement("div");
newDiv.textContent = "I'm a new div!";

// append() → adds inside at the end
document.body.append(newDiv);

// prepend() → adds inside at the beginning
document.body.prepend(newDiv);

// before() → adds before the element
demo.before("Text before the div");

// after() → adds after the element
demo.after("Text after the div");

// remove() → deletes the element
// demo.remove();


/*
==========================================
🔹 DIFFERENCE: append() vs appendChild()
==========================================
append()  → can add multiple items & text
appendChild() → can add only one node

Example:
*/
const para = document.createElement("p");
const span = document.createElement("span");
span.textContent = "span text";
para.append("Text ", span);
document.body.appendChild(para);


/*
==========================================
🔹 DOM TRAVERSAL
==========================================
*/

const container = document.getElementById("container");

// Parent element
console.log(container.parentElement);

// Children
console.log(container.children); // HTMLCollection
console.log(container.firstElementChild);
console.log(container.lastElementChild);

// Siblings
console.log(container.nextElementSibling);
console.log(container.previousElementSibling);


/*
==========================================
🔹 EVENT HANDLING
==========================================
Events are actions that happen in the browser:
(click, input, mouseover, keypress, etc.)
*/

// Example 1: Inline handler (in HTML: <button onclick="sayHello()">)
function sayHello() {
  alert("Hello from JS!");
}

// Example 2: Using addEventListener
const btn = document.querySelector("button");
btn.addEventListener("click", () => {
  alert("Button clicked!");
});

// Removing an event
function handleClick() {
  console.log("Clicked!");
}
btn.addEventListener("click", handleClick);
btn.removeEventListener("click", handleClick);


/*
==========================================
🔹 EVENT OBJECT
==========================================
*/

btn.addEventListener("click", (event) => {
  console.log(event.type);   // click
  console.log(event.target); // which element triggered it
});


/*
==========================================
🔹 EVENT BUBBLING & CAPTURING
==========================================
- Bubbling: event moves from inner → outer
- Capturing: event moves from outer → inner
*/

document.querySelector(".parent").addEventListener("click", () => {
  console.log("Parent clicked");
});

document.querySelector(".child").addEventListener("click", (e) => {
  console.log("Child clicked");
  // e.stopPropagation(); // to stop bubbling
});


/*
==========================================
🔹 FORM HANDLING
==========================================
*/

const form = document.querySelector("form");
form.addEventListener("submit", (e) => {
  e.preventDefault(); // prevent page reload
  const inputVal = document.querySelector("input").value;
  console.log("User entered:", inputVal);
});


/*
==========================================
🔹 ADVANCED TOPICS
==========================================
*/

// 💡 Cloning nodes
const clone = demo.cloneNode(true); // true = deep clone
document.body.append(clone);

// 💡 Inserting HTML safely
demo.insertAdjacentHTML("beforebegin", "<p>Before begin</p>");
demo.insertAdjacentHTML("afterbegin", "<p>After begin</p>");
demo.insertAdjacentHTML("beforeend", "<p>Before end</p>");
demo.insertAdjacentHTML("afterend", "<p>After end</p>");

// 💡 Scroll and Viewport
window.scrollTo(0, 100); // scroll 100px down
demo.scrollIntoView({ behavior: "smooth" }); // smooth scroll to element


/*
==========================================
🏁 TOP DOM INTERVIEW QUESTIONS (With Answers)
==========================================
*/

/*
1️⃣ What is the DOM?
👉 The Document Object Model (DOM) is a tree-like structure representing the HTML document.
   It allows JavaScript to access and manipulate elements dynamically.

2️⃣ Difference between NodeList and HTMLCollection?
👉 NodeList can contain any node type and is static.
   HTMLCollection contains only HTML elements and is live.

3️⃣ innerText vs textContent vs innerHTML?
👉 innerText → visible text only
   textContent → all text (faster)
   innerHTML → returns or sets HTML markup

4️⃣ Difference between append() and appendChild()?
👉 append() can add multiple nodes or text.
   appendChild() can add only one node and no text directly.

5️⃣ What is event bubbling?
👉 When an event triggers on a child element and propagates up to parent elements.

6️⃣ What are event listeners?
👉 Functions that run when specific events occur, like clicks or inputs.

7️⃣ How to stop event propagation?
👉 Use event.stopPropagation() inside the event handler.

8️⃣ What’s the difference between querySelector() and getElementById()?
👉 querySelector() can select any CSS selector (id, class, tag),
   getElementById() selects only by ID and is slightly faster.

9️⃣ How to create and insert a new element dynamically?
👉 Use createElement() and append()/prepend() methods.

10️⃣ What is the difference between "==" and "===" in JS?
👉 "==" does type conversion before comparing; "===" checks both value and type.

11️⃣ How can you optimize DOM manipulation?
👉 Batch changes, use DocumentFragment, and minimize layout reflows.

12️⃣ What is the purpose of document.readyState?
👉 It tells if the document has finished loading ("loading", "interactive", or "complete").

13️⃣ How do you get and set CSS styles using JS?
👉 Use element.style.property = value, or getComputedStyle(element).

14️⃣ What is the difference between before(), after(), append(), and prepend()?
👉 before() / after() → insert outside an element
   append() / prepend() → insert inside an element
*/

console.log("✅ DOM Masterclass JS Loaded Successfully!");
