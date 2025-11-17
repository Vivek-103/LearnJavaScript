// objects_in_javascript.js

/*
=====================================================
🏗️ JAVASCRIPT OBJECTS — COMPLETE GUIDE
=====================================================
This file covers everything about:
  - What objects are
  - Creating and accessing objects
  - Object properties & methods
  - Nested objects
  - The 'this' keyword
  - Object destructuring
  - Object cloning & merging
  - Prototypes & inheritance
  - ES6 Classes
  - Interview questions & answers
*/

// ===============================
// 1️⃣ WHAT IS AN OBJECT?
// ===============================

/*
Objects store key-value pairs. Each key (property name) is a string or symbol, and each value can be any data type.
*/

let person = {
  name: "Vivek",
  age: 21,
  city: "Bhubaneswar",
  isStudent: true,
  greet: function () {
    console.log(`Hello, my name is ${this.name}`);
  },
};

console.log(person.name); // Access property
person.greet(); // Call method

// ===============================
// 2️⃣ CREATING OBJECTS
// ===============================

// Object literal
let car = { brand: "Tesla", model: "Model 3" };

// Using new Object()
let user = new Object();
user.name = "John";
user.age = 25;

// Using constructor function
function Student(name, age) {
  this.name = name;
  this.age = age;
}
let s1 = new Student("Aarav", 20);

// Using Object.create()
let proto = { greet() { console.log("Hello!"); } };
let obj = Object.create(proto);
obj.greet();

// ===============================
// 3️⃣ ACCESSING PROPERTIES
// ===============================

console.log(person["age"]); // Bracket notation
person.country = "India"; // Add new property
delete person.city; // Delete property
console.log(person);

// ===============================
// 4️⃣ NESTED OBJECTS
// ===============================

let company = {
  name: "TechCorp",
  address: {
    city: "Mumbai",
    pincode: 400001,
  },
};

console.log(company.address.city);

// ===============================
// 5️⃣ OBJECT METHODS
// ===============================

let student = {
  name: "Sara",
  marks: 90,
  getMarks: function () {
    return this.marks;
  },
};
console.log(student.getMarks());

// ===============================
// 6️⃣ THE 'this' KEYWORD
// ===============================

let user1 = {
  name: "Riya",
  sayHi() {
    console.log(`Hi, I am ${this.name}`);
  },
};
user1.sayHi(); // Works fine

let greetUser = user1.sayHi;
greetUser(); // undefined (this lost)

// ===============================
// 7️⃣ OBJECT DESTRUCTURING
// ===============================

let { name, age } = person;
console.log(name, age);

let { brand: carBrand } = car;
console.log(carBrand);

// ===============================
// 8️⃣ OBJECT CLONING
// ===============================

let obj1 = { a: 1, b: 2 };
let clone1 = Object.assign({}, obj1); // Shallow copy
let clone2 = { ...obj1 }; // Spread operator

console.log(clone1, clone2);

// Deep copy
let deepOriginal = { x: 1, nested: { y: 2 } };
let deepCopy = JSON.parse(JSON.stringify(deepOriginal));

deepCopy.nested.y = 100;
console.log(deepOriginal, deepCopy);

// ===============================
// 9️⃣ OBJECT MERGING
// ===============================

let objA = { x: 10 };
let objB = { y: 20 };
let merged = Object.assign({}, objA, objB);
let merged2 = { ...objA, ...objB };
console.log(merged, merged2);

// ===============================
// 🔟 OBJECT METHODS (STATIC)
// ===============================

let carDetails = { brand: "BMW", model: "X5" };
console.log(Object.keys(carDetails)); // ['brand','model']
console.log(Object.values(carDetails)); // ['BMW','X5']
console.log(Object.entries(carDetails)); // [['brand','BMW'],['model','X5']]

Object.freeze(carDetails); // Prevent modification
Object.seal(person); // Can modify but not add/delete

// ===============================
// 1️⃣1️⃣ PROTOTYPES
// ===============================

/*
Every JavaScript object has an internal property called [[Prototype]]
which allows inheritance of methods/properties from another object.
*/

let animal = { eats: true };
let dog = Object.create(animal);
dog.barks = true;

console.log(dog.eats); // true (inherited)
console.log(dog.__proto__ === animal); // true

// ===============================
// 1️⃣2️⃣ CONSTRUCTOR FUNCTIONS & PROTOTYPE METHODS
// ===============================

function Person(name, age) {
  this.name = name;
  this.age = age;
}

Person.prototype.sayHello = function () {
  console.log(`Hi, I'm ${this.name}`);
};

let p1 = new Person("Vivek", 21);
p1.sayHello();

// ===============================
// 1️⃣3️⃣ ES6 CLASSES (syntactic sugar for prototypes)
// ===============================

class Employee {
  constructor(name, position) {
    this.name = name;
    this.position = position;
  }

  display() {
    console.log(`${this.name} works as ${this.position}`);
  }
}

class Manager extends Employee {
  constructor(name, position, teamSize) {
    super(name, position);
    this.teamSize = teamSize;
  }

  showTeam() {
    console.log(`${this.name} manages ${this.teamSize} people.`);
  }
}

let emp1 = new Manager("Aditi", "Project Manager", 10);
emp1.display();
emp1.showTeam();

// ===============================
// 1️⃣4️⃣ OBJECT ITERATION
// ===============================

for (let key in person) {
  console.log(`${key}: ${person[key]}`);
}

Object.entries(person).forEach(([key, value]) => {
  console.log(`${key} => ${value}`);
});

// ===============================
// 1️⃣5️⃣ COMMON INTERVIEW QUESTIONS
// ===============================

/*
❓ Q1: Difference between Object.freeze() and Object.seal()?
✅ freeze → cannot modify, add, or delete properties.
✅ seal → can modify existing, but cannot add or delete.
*/

/*
❓ Q2: What is a prototype in JS?
✅ An internal link that allows one object to inherit properties/methods from another.
*/

/*
❓ Q3: Difference between shallow and deep copy?
✅ Shallow → copies only first level.
✅ Deep → copies all nested objects.
*/

/*
❓ Q4: What is the difference between dot and bracket notation?
✅ Dot → used for static keys.
✅ Bracket → used for dynamic keys or invalid identifiers.
*/

/*
❓ Q5: Predict output:
let a = { val: 10 };
let b = a;
b.val = 20;
console.log(a.val);
✅ Output: 20 (objects are reference types)
*/

/*
❓ Q6: How can you merge two objects?
✅ Using Object.assign() or spread operator.
*/

/*
❓ Q7: What is the difference between class and constructor function?
✅ Classes are syntactic sugar over constructor functions and use 'extends' for inheritance.
*/

/*
❓ Q8: Explain 'this' keyword in JS.
✅ Refers to the object that is executing the current function.
*/

/*
❓ Q9: How does inheritance work in JS?
✅ Through the prototype chain — one object’s __proto__ links to another.
*/

/*
❓ Q10: Predict output:
function Foo() {}
Foo.prototype.bar = 10;
let x = new Foo();
console.log(x.bar);
✅ Output: 10 (inherited via prototype)
*/

// ===============================
// ✅ SUMMARY TABLE
// ===============================

/*
| Concept                | Example / Method                        | Description |
|------------------------|------------------------------------------|--------------|
| Object creation        | {}, new Object(), Object.create()        | Create objects |
| Accessing properties   | obj.key, obj['key']                      | Access data |
| Iterating properties   | for...in, Object.keys(), Object.entries()| Loop through |
| Cloning                | Object.assign(), {...obj}                | Copy objects |
| Freezing/Sealing       | Object.freeze(), Object.seal()           | Control modification |
| Prototypes             | Object.create(proto)                     | Inherit behavior |
| Classes & Inheritance  | class A extends B                        | Modern OOP syntax |
*/

// ===============================
// END OF FILE 🧠
// ===============================
