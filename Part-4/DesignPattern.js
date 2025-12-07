/*
==========================================================
DESIGN PATTERNS IN JAVASCRIPT – BEGINNER TO ADVANCED
==========================================================

HOW TO USE THIS FILE:
- Treat this as a mini "book" inside a single JS file.
- Read from top to bottom, OR jump via the SECTION INDEX below.
- Every pattern has:
  1. Plain-English explanation
  2. When to use
  3. JS example

IMPORTANT:
- You do NOT need to memorize every pattern.
- Focus on: what problem does this pattern solve?

==========================================================
SECTION INDEX
==========================================================
0.  Core JS Concepts (very quick recap)
1.  CREATIONAL PATTERNS
    1.1 Constructor Pattern
    1.2 Factory Pattern
    1.3 Singleton Pattern
    1.4 Module Pattern
    1.5 Revealing Module Pattern
    1.6 Builder Pattern (simple variant)
2.  STRUCTURAL PATTERNS
    2.1 Adapter Pattern
    2.2 Facade Pattern
    2.3 Decorator Pattern
    2.4 Proxy Pattern
    2.5 Composite Pattern
    2.6 Flyweight Pattern (lightweight explanation)
3.  BEHAVIORAL PATTERNS
    3.1 Observer Pattern
    3.2 Pub-Sub Pattern (variation of Observer)
    3.3 Strategy Pattern
    3.4 Command Pattern
    3.5 Iterator Pattern
    3.6 State Pattern
    3.7 Template Method Pattern
    3.8 Chain of Responsibility Pattern
    3.9 Mediator Pattern
4.  ASYNC / JS-SPECIFIC PATTERNS
    4.1 Callback Pattern (and problems)
    4.2 Promise Pattern
    4.3 Async/Await Pattern
    4.4 Middleware Pattern (like Express.js)
5.  ARCHITECTURE LEVEL PATTERNS (high-level)
    5.1 MVC (Model-View-Controller)
    5.2 MVVM (Model-View-ViewModel)
6.  HOW TO PICK A PATTERN (mental model)
==========================================================
NOTE: This is a "big picture + examples" file, not literally
      every pattern in the world, but it covers most patterns
      you’ll see in interviews and real projects.
==========================================================
*/

// ========================================================
// 0. CORE JS CONCEPTS QUICK RECAP
// ========================================================

/*
Design patterns sit on top of basic JS features. Quick reminders:

- Functions are FIRST-CLASS (can be passed around like variables).
- Closures: inner function remembers variables from outer function.
- Prototypes: objects inherit via prototype chain.
- Modules: grouping code into reusable units (ES modules / IIFE).
*/

// Example closure:
function counter() {
  let count = 0;
  return function () {
    count++;
    return count;
  };
}
const myCounter = counter(); // myCounter() -> 1,2,3 ...

// This closure idea is heavily used in many JS patterns (module, singleton, etc.)

// ========================================================
// 1. CREATIONAL PATTERNS
// ========================================================

/*
Creational patterns are about HOW we create objects.

Main goal:
- Avoid duplicating object creation logic everywhere.
- Make creation flexible and easier to change.
*/

// --------------------------------------------------------
// 1.1 CONSTRUCTOR PATTERN
// --------------------------------------------------------

/*
Idea:
- Use a function (or class) as a "blueprint" to create objects.
- In JS, this is often done with `class` or function constructors.

When to use:
- When you want many similar objects with same properties/methods.
*/

function User(name, email) {
  // function constructor style
  this.name = name;
  this.email = email;
}

User.prototype.describe = function () {
  return `${this.name} <${this.email}>`;
};

const u1 = new User("Vivek", "vivek@example.com");
// console.log(u1.describe());

/*
ES6 class version (syntactic sugar over prototype):
*/

class UserClass {
  constructor(name, email) {
    this.name = name;
    this.email = email;
  }

  describe() {
    return `${this.name} <${this.email}>`;
  }
}

const u2 = new UserClass("JS Learner", "js@example.com");

// --------------------------------------------------------
// 1.2 FACTORY PATTERN
// --------------------------------------------------------

/*
Idea:
- A function that RETURNS different types of objects
  but hides the exact creation logic.

When to use:
- When creating objects is complex
- When you want to decide the "type" at runtime
*/

function createUser(type, name) {
  if (type === "admin") {
    return {
      role: "admin",
      name,
      permissions: ["read", "write", "delete"],
    };
  }

  if (type === "guest") {
    return {
      role: "guest",
      name,
      permissions: ["read"],
    };
  }

  // default
  return {
    role: "user",
    name,
    permissions: ["read", "write"],
  };
}

const adminUser = createUser("admin", "Alice");
const guestUser = createUser("guest", "Bob");

// --------------------------------------------------------
// 1.3 SINGLETON PATTERN
// --------------------------------------------------------

/*
Idea:
- Only one instance of an object should exist.
- Provide a global access point to it.

When to use:
- Global configuration
- Logging service
- Database connection (on server side)

In JS (browser), global singletons can be risky, but useful.
*/

const AppConfig = (function () {
  let instance;

  function createInstance() {
    const config = {
      apiBaseUrl: "https://api.example.com",
      retryCount: 3,
    };
    return config;
  }

  return {
    getInstance() {
      if (!instance) {
        instance = createInstance();
      }
      return instance;
    },
  };
})();

const config1 = AppConfig.getInstance();
const config2 = AppConfig.getInstance();
// config1 === config2 -> true

// --------------------------------------------------------
// 1.4 MODULE PATTERN
// --------------------------------------------------------

/*
Idea:
- Encapsulate related variables and functions into a private scope.
- Return only what you want to expose (public API).

Technically:
- Often implemented using an IIFE (Immediately Invoked Function Expression).

When to use:
- Organise code
- Avoid polluting global scope
*/

const MathModule = (function () {
  // private members
  const PI = 3.14159;

  function square(x) {
    return x * x;
  }

  // public API
  return {
    circleArea(radius) {
      return PI * square(radius);
    },
    square,
  };
})();

// MathModule.circleArea(2);

// --------------------------------------------------------
// 1.5 REVEALING MODULE PATTERN
// --------------------------------------------------------

/*
Idea:
- Similar to module pattern
- BUT at the end we "reveal" which inner functions map to public names.

Why?
- Code becomes more readable: all public methods are at the bottom.

*/

const UserService = (function () {
  // private
  let users = [];

  function addUser(name) {
    users.push(name);
  }

  function removeUser(name) {
    users = users.filter((u) => u !== name);
  }

  function listUsers() {
    return users;
  }

  // revealing: map internal names -> public names
  return {
    add: addUser,
    remove: removeUser,
    list: listUsers,
  };
})();

// UserService.add("Vivek");
// UserService.list();

// --------------------------------------------------------
// 1.6 BUILDER PATTERN (simple)
// --------------------------------------------------------

/*
Idea:
- Build complex objects step by step using a chainable API.
- At the end call `build()` to get final object.

When to use:
- Complex object with many optional fields.
*/

class QueryBuilder {
  constructor() {
    this.query = {
      select: [],
      from: "",
      where: [],
    };
  }

  select(fields) {
    this.query.select = fields;
    return this; // allow chaining
  }

  from(table) {
    this.query.from = table;
    return this;
  }

  where(condition) {
    this.query.where.push(condition);
    return this;
  }

  build() {
    // Very naive SQL string builder
    const selectPart = `SELECT ${this.query.select.join(", ")}`;
    const fromPart = `FROM ${this.query.from}`;
    const wherePart =
      this.query.where.length > 0
        ? `WHERE ${this.query.where.join(" AND ")}`
        : "";
    return `${selectPart} ${fromPart} ${wherePart}`.trim();
  }
}

const qb = new QueryBuilder()
  .select(["id", "name"])
  .from("users")
  .where("age > 18")
  .where("active = 1")
  .build();

// ========================================================
// 2. STRUCTURAL PATTERNS
// ========================================================

/*
Structural patterns are about how objects/classes are COMPOSED
into larger structures.

They help:
- Organise relationships between objects
- Control complexity
*/

// --------------------------------------------------------
// 2.1 ADAPTER PATTERN
// --------------------------------------------------------

/*
Idea:
- Convert one interface into another that the client expects.
- You "wrap" an object so it works with different methods.

When to use:
- You integrate a library that has a different API than your code expects.
*/

class OldApi {
  oldRequest() {
    return "old data";
  }
}

class NewApiAdapter {
  constructor(oldApi) {
    this.oldApi = oldApi;
  }

  // new method name expected by client
  getData() {
    return this.oldApi.oldRequest(); // adapt call
  }
}

const legacy = new OldApi();
const api = new NewApiAdapter(legacy);
// api.getData() -> "old data"

// --------------------------------------------------------
// 2.2 FACADE PATTERN
// --------------------------------------------------------

/*
Idea:
- Provide a SIMPLE interface over a complex subsystem.

When to use:
- You have multiple complex functions/classes, but want a single entry point.

Example:
- A function `createUserAccount` that internally:
  - validates input
  - saves to DB
  - sends email
  - logs analytics
*/

class EmailService {
  sendWelcomeEmail(user) {
    // complex stuff...
  }
}
class UserRepository {
  save(user) {
    // save to DB...
  }
}
class AnalyticsService {
  track(eventName, data) {
    // send to analytics...
  }
}

class UserFacade {
  constructor() {
    this.emailService = new EmailService();
    this.repo = new UserRepository();
    this.analytics = new AnalyticsService();
  }

  registerUser(user) {
    // simple API
    this.repo.save(user);
    this.emailService.sendWelcomeEmail(user);
    this.analytics.track("user_registered", { userId: user.id });
  }
}

// --------------------------------------------------------
// 2.3 DECORATOR PATTERN
// --------------------------------------------------------

/*
Idea:
- Add new behavior to an object without changing its original code.
- You "wrap" the object in another object that extends behavior.

When to use:
- Add logging, caching, permissions, etc. around an existing function.

*/

function basicLogger(message) {
  console.log(message);
}

// Decorator that adds timestamp
function withTimestamp(loggerFn) {
  return function (message) {
    const ts = new Date().toISOString();
    loggerFn(`[${ts}] ${message}`);
  };
}

const loggerWithTime = withTimestamp(basicLogger);
// loggerWithTime("User logged in");

// --------------------------------------------------------
// 2.4 PROXY PATTERN
// --------------------------------------------------------

/*
Idea:
- A proxy is an object that controls access to another object.
- You can add lazy loading, access control, logging, etc.

When to use:
- Control expensive operations (like network calls)
- Add validation or security before calling real object

Modern JS also has `new Proxy()` built-in, but we’ll show a simple conceptual one.
*/

class ApiService {
  fetchData() {
    // pretend this is expensive
    return "real data from API";
  }
}

class ApiServiceProxy {
  constructor() {
    this.apiService = new ApiService();
    this.cache = null;
  }

  fetchData() {
    if (!this.cache) {
      this.cache = this.apiService.fetchData();
      // we could log / check permissions here too
    }
    return this.cache; // cached result
  }
}

const apiProxy = new ApiServiceProxy();
// apiProxy.fetchData();

// --------------------------------------------------------
// 2.5 COMPOSITE PATTERN
// --------------------------------------------------------

/*
Idea:
- Treat individual objects and groups of objects in the same way.

Example:
- File system
  - File (leaf)
  - Folder (can contain files OR folders)
- You want to call `getSize()` on both and it should work.

When to use:
- Tree structures (DOM, menus, organization charts, etc.)
*/

class FileLeaf {
  constructor(name, size) {
    this.name = name;
    this.size = size; // in bytes
  }
  getSize() {
    return this.size;
  }
}

class FolderComposite {
  constructor(name) {
    this.name = name;
    this.children = [];
  }
  add(child) {
    this.children.push(child);
  }
  getSize() {
    return this.children.reduce((total, child) => total + child.getSize(), 0);
  }
}

const file1 = new FileLeaf("a.txt", 10);
const file2 = new FileLeaf("b.txt", 20);
const folder = new FolderComposite("folder1");
folder.add(file1);
folder.add(file2);
// folder.getSize() -> 30

// --------------------------------------------------------
// 2.6 FLYWEIGHT PATTERN (lightly)
// --------------------------------------------------------

/*
Idea:
- Reduce memory usage by sharing common data between many objects.

Example:
- Game with thousands of trees:
  - Each tree shares sprite, texture, etc.
  - Only position is unique per tree.

In JS, you might:
- Share common data on prototype
- Or use a factory that reuses objects

We’ll show a small conceptual example.
*/

class IconFlyweight {
  constructor(iconUrl) {
    this.iconUrl = iconUrl; // shared data
  }

  draw(x, y) {
    // draw icon at (x, y) using same iconUrl
  }
}

class IconFactory {
  constructor() {
    this.icons = {};
  }

  getIcon(iconUrl) {
    if (!this.icons[iconUrl]) {
      this.icons[iconUrl] = new IconFlyweight(iconUrl);
    }
    return this.icons[iconUrl];
  }
}

const iconFactory = new IconFactory();
const icon1 = iconFactory.getIcon("/img/pin.png");
const icon2 = iconFactory.getIcon("/img/pin.png");
// icon1 === icon2 -> true (shared instance)

// ========================================================
// 3. BEHAVIORAL PATTERNS
// ========================================================

/*
Behavioral patterns are about how objects COMMUNICATE and
how responsibilities are divided.
*/

// --------------------------------------------------------
// 3.1 OBSERVER PATTERN
// --------------------------------------------------------

/*
Idea:
- One object (subject) maintains a list of observers.
- When subject changes, it notifies all observers.

In JS:
- DOM events
- Custom event emitters
*/

class Subject {
  constructor() {
    this.observers = [];
  }

  subscribe(fn) {
    this.observers.push(fn);
  }

  unsubscribe(fn) {
    this.observers = this.observers.filter((observer) => observer !== fn);
  }

  notify(data) {
    this.observers.forEach((observer) => observer(data));
  }
}

const subject = new Subject();
function observer1(data) {
  // console.log("Observer 1:", data);
}
function observer2(data) {
  // console.log("Observer 2:", data);
}

subject.subscribe(observer1);
subject.subscribe(observer2);
// subject.notify("Hello observers!");

// --------------------------------------------------------
// 3.2 PUB-SUB PATTERN (variation of Observer)
// --------------------------------------------------------

/*
Observer vs Pub-Sub (high level):
- Observer: subject directly knows observers.
- Pub-Sub: there is a central "event bus". Publishers and subscribers don’t know each other.

In JS:
- Many libs implement an event bus.

We’ll make a simple PubSub.
*/

const PubSub = (function () {
  const events = {};

  return {
    subscribe(eventName, handler) {
      if (!events[eventName]) events[eventName] = [];
      events[eventName].push(handler);
    },
    publish(eventName, data) {
      if (!events[eventName]) return;
      events[eventName].forEach((handler) => handler(data));
    },
  };
})();

// PubSub.subscribe("LOGIN", (user) => console.log("User logged in:", user));
// PubSub.publish("LOGIN", { name: "Vivek" });

// --------------------------------------------------------
// 3.3 STRATEGY PATTERN
// --------------------------------------------------------

/*
Idea:
- Define a family of algorithms (strategies).
- Make them interchangeable at runtime.

When to use:
- You have multiple ways to do something (e.g., different sorting strategies, payment methods, etc.)

*/

const paymentStrategies = {
  card(amount) {
    // console.log("Paid by card:", amount);
  },
  upi(amount) {
    // console.log("Paid by UPI:", amount);
  },
  cash(amount) {
    // console.log("Paid by cash:", amount);
  },
};

function pay(amount, method) {
  const strategy = paymentStrategies[method];
  if (!strategy) throw new Error("Unknown payment method");
  strategy(amount);
}

// pay(100, "upi");

// --------------------------------------------------------
// 3.4 COMMAND PATTERN
// --------------------------------------------------------

/*
Idea:
- Encapsulate a request (action) as an object.
- Allows undo/redo, queueing, logging of operations.

When to use:
- Text editor (undo/redo)
- UI buttons where each command is object/func

We’ll define commands as objects with `execute` and `undo`.
*/

class Calculator {
  constructor() {
    this.value = 0;
  }
}

class AddCommand {
  constructor(valueToAdd) {
    this.valueToAdd = valueToAdd;
  }
  execute(currentValue) {
    return currentValue + this.valueToAdd;
  }
  undo(currentValue) {
    return currentValue - this.valueToAdd;
  }
}

class CommandManager {
  constructor(calculator) {
    this.calculator = calculator;
    this.history = [];
  }

  executeCommand(command) {
    this.calculator.value = command.execute(this.calculator.value);
    this.history.push(command);
  }

  undo() {
    const command = this.history.pop();
    if (!command) return;
    this.calculator.value = command.undo(this.calculator.value);
  }
}

const calc = new Calculator();
const manager = new CommandManager(calc);
manager.executeCommand(new AddCommand(10));
// manager.executeCommand(new AddCommand(5));
// manager.undo();

// --------------------------------------------------------
// 3.5 ITERATOR PATTERN
// --------------------------------------------------------

/*
Idea:
- Provide a standard way to access elements of a collection
  without exposing its internal structure.

In JS:
- Built-in iterators: `for...of`, `[Symbol.iterator]`, etc.
*/

const iterableObject = {
  data: [1, 2, 3],
  [Symbol.iterator]() {
    let index = 0;
    const data = this.data;
    return {
      next() {
        if (index < data.length) {
          return { value: data[index++], done: false };
        } else {
          return { value: undefined, done: true };
        }
      },
    };
  },
};

// for (const item of iterableObject) {
//   console.log(item);
// }

// --------------------------------------------------------
// 3.6 STATE PATTERN
// --------------------------------------------------------

/*
Idea:
- An object changes its behavior when its internal state changes.
- State is represented as separate objects.

Example:
- Traffic light: Red, Yellow, Green. Same object, different behavior.

*/

class RedLight {
  handle() {
    return "Stop";
  }
}
class YellowLight {
  handle() {
    return "Get Ready";
  }
}
class GreenLight {
  handle() {
    return "Go";
  }
}

class TrafficLight {
  constructor() {
    this.states = [new RedLight(), new YellowLight(), new GreenLight()];
    this.current = 0;
  }

  next() {
    this.current = (this.current + 1) % this.states.length;
  }

  action() {
    return this.states[this.current].handle();
  }
}

const light = new TrafficLight();
// light.action(); // "Stop"
// light.next();
// light.action(); // "Get Ready"

// --------------------------------------------------------
// 3.7 TEMPLATE METHOD PATTERN
// --------------------------------------------------------

/*
Idea:
- Define the SKELETON of an algorithm in a base "class"
- Let subclasses override specific steps.

In JS:
- Sometimes done with classes or just higher-order functions.

Example:
- "Generate report" algorithm:
  - fetchData()
  - format()
  - print()
*/

class DataExporter {
  export() {
    const data = this.fetchData();
    const formatted = this.format(data);
    this.save(formatted);
  }

  fetchData() {
    throw new Error("fetchData() must be implemented");
  }

  format(data) {
    throw new Error("format() must be implemented");
  }

  save(formattedData) {
    // default implementation
    // console.log("Saving:", formattedData);
  }
}

class JSONExporter extends DataExporter {
  fetchData() {
    return { hello: "world" };
  }

  format(data) {
    return JSON.stringify(data);
  }
}

class CSVExporter extends DataExporter {
  fetchData() {
    return [
      ["name", "age"],
      ["Alice", 25],
      ["Bob", 30],
    ];
  }

  format(data) {
    return data.map((row) => row.join(",")).join("\n");
  }
}

const jsonExporter = new JSONExporter();
const csvExporter = new CSVExporter();
// jsonExporter.export();
// csvExporter.export();

// --------------------------------------------------------
// 3.8 CHAIN OF RESPONSIBILITY PATTERN
// --------------------------------------------------------

/*
Idea:
- Pass a request along a chain of handlers.
- Each handler decides:
  - handle it or
  - pass to next handler.

When to use:
- Validation pipelines
- Middleware-like logic
*/

class Handler {
  setNext(handler) {
    this.next = handler;
    return handler;
  }

  handle(request) {
    if (this.next) return this.next.handle(request);
    return request;
  }
}

class AuthHandler extends Handler {
  handle(request) {
    if (!request.user) {
      return { error: "Not authenticated" };
    }
    return super.handle(request);
  }
}

class RoleHandler extends Handler {
  handle(request) {
    if (request.user.role !== "admin") {
      return { error: "Not authorized" };
    }
    return super.handle(request);
  }
}

class DataHandler extends Handler {
  handle(request) {
    request.data = "secret data";
    return super.handle(request);
  }
}

const auth = new AuthHandler();
const role = new RoleHandler();
const dataHandler = new DataHandler();
auth.setNext(role).setNext(dataHandler);

const request = { user: { name: "Vivek", role: "admin" } };
// const response = auth.handle(request);

// --------------------------------------------------------
// 3.9 MEDIATOR PATTERN
// --------------------------------------------------------

/*
Idea:
- An object (mediator) encapsulates how a set of objects interact.
- Objects don’t talk directly; they go through mediator.

When to use:
- Many-to-many communication would become messy.
- Chat room, UI components communication, etc.
*/

class ChatRoom {
  showMessage(user, message) {
    // console.log(`${user.name}: ${message}`);
  }
}

class ChatUser {
  constructor(name, chatRoom) {
    this.name = name;
    this.chatRoom = chatRoom;
  }

  send(message) {
    this.chatRoom.showMessage(this, message);
  }
}

const room = new ChatRoom();
const userA = new ChatUser("A", room);
const userB = new ChatUser("B", room);
// userA.send("Hello, B!");
// userB.send("Hi, A!");

// ========================================================
// 4. ASYNC / JS-SPECIFIC PATTERNS
// ========================================================

// --------------------------------------------------------
// 4.1 CALLBACK PATTERN (and callback hell)
// --------------------------------------------------------

/*
Idea:
- Pass a function (callback) to be executed after an async operation.

Problem:
- Nested callbacks -> "callback hell".

Example with setTimeout:
*/

function doTask1(callback) {
  setTimeout(() => {
    // console.log("Task 1 done");
    callback();
  }, 100);
}

function doTask2(callback) {
  setTimeout(() => {
    // console.log("Task 2 done");
    callback();
  }, 100);
}

// NESTED (bad style)
doTask1(() => {
  doTask2(() => {
    // console.log("All done");
  });
});

// --------------------------------------------------------
// 4.2 PROMISE PATTERN
// --------------------------------------------------------

/*
Idea:
- Promise represents a value that may be available now,
  later, or never.
- Avoids callback hell (chaining, error handling).

Basic usage:
*/

function asyncTask(value) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (value > 0) resolve(value * 2);
      else reject(new Error("Value must be positive"));
    }, 100);
  });
}

// asyncTask(5)
//   .then((result) => {
//     console.log("Result:", result);
//     return asyncTask(result);
//   })
//   .then((result2) => {
//     console.log("Second result:", result2);
//   })
//   .catch((err) => console.error("Error:", err));

// --------------------------------------------------------
// 4.3 ASYNC/AWAIT PATTERN
// --------------------------------------------------------

/*
Idea:
- Syntactic sugar over promises to make async code look synchronous.
*/

async function doAsyncFlow() {
  try {
    const r1 = await asyncTask(5);
    const r2 = await asyncTask(r1);
    // console.log("Final:", r2);
  } catch (e) {
    // console.error(e);
  }
}

// doAsyncFlow();

// --------------------------------------------------------
// 4.4 MIDDLEWARE PATTERN (Express-style)
// --------------------------------------------------------

/*
Idea:
- Request passes through a chain of functions (middleware).
- Each middleware can:
  - modify request/response
  - stop the chain
  - or call next()

Used heavily in:
- Express.js
- Redux (with a slightly different style)
*/

function createMiddlewarePipeline(...middlewares) {
  return function (req, res) {
    let index = 0;

    function next() {
      const middleware = middlewares[index++];
      if (middleware) {
        middleware(req, res, next);
      }
    }

    next(); // start chain
  };
}

function loggerMiddleware(req, res, next) {
  // console.log("Request:", req.url);
  next();
}

function authMiddleware(req, res, next) {
  if (!req.user) {
    res.error = "Unauthorized";
    // stop the chain by NOT calling next()
  } else {
    next();
  }
}

function handlerMiddleware(req, res) {
  res.data = "Some data";
}

const appPipeline = createMiddlewarePipeline(
  loggerMiddleware,
  authMiddleware,
  handlerMiddleware
);

const reqObj = { url: "/home", user: { name: "Vivek" } };
const resObj = {};
// appPipeline(reqObj, resObj);

// ========================================================
// 5. ARCHITECTURE LEVEL PATTERNS (high level)
// ========================================================

/*
These are not small code snippets but ways to STRUCTURE
your whole application.

We’ll only briefly describe them with tiny examples.
*/

// --------------------------------------------------------
// 5.1 MVC (Model-View-Controller)
// --------------------------------------------------------

/*
Idea:
- Model: data + business logic (e.g., User, Post)
- View: UI (HTML templates, components)
- Controller: handles user input, talks to Model & View

Front-end frameworks like Angular (early), backend frameworks (Rails, etc.).
*/

const MVCExample = {
  // Model
  model: {
    todos: [],
    addTodo(text) {
      this.todos.push({ text, done: false });
    },
  },
  // View (very simplified)
  view: {
    render(todos) {
      // imagine DOM rendering here
      // console.log("Rendering todos:", todos);
    },
  },
  // Controller
  controller: {
    init(model, view) {
      this.model = model;
      this.view = view;
      this.view.render(this.model.todos);
    },
    addNewTodo(text) {
      this.model.addTodo(text);
      this.view.render(this.model.todos);
    },
  },
};

// MVCExample.controller.init(MVCExample.model, MVCExample.view);

// --------------------------------------------------------
// 5.2 MVVM (Model-View-ViewModel)
// --------------------------------------------------------

/*
Idea:
- Model: data and business logic
- View: UI
- ViewModel: an abstraction of the View, holds data and logic
            in a way that's easy to bind to the View.

Modern frameworks:
- React (with hooks/state) feels like MVVM-ish.
*/

const MVVMExample = {
  model: {
    todos: [],
    addTodo(text) {
      this.todos.push({ text, done: false });
    },
  },
  viewModel: {
    init(model) {
      this.model = model;
      this.todos = model.todos;
    },
    addTodo(text) {
      this.model.addTodo(text);
      // In real code, View auto-updates via bindings
    },
  },
  view: {
    // In real framework, this would re-render based on viewModel.todos
  },
};

// ========================================================
// 6. HOW TO PICK A PATTERN (MENTAL MODEL)
// ========================================================

/*
You said: "I get confused very easily". So here’s a simple
cheat sheet to reduce confusion:

1) ASK: What problem am I facing?

   a) Object creation feels messy?
      -> Look at CREATIONAL patterns
         - Many similar objects? => Constructor / Factory
         - Only one global instance? => Singleton
         - Hide internal details? => Module / Revealing Module
         - Complex object with many options? => Builder

   b) Relationships between objects are confusing?
      -> STRUCTURAL patterns
         - Need simple interface over complex system? => Facade
         - Need to convert one API to another? => Adapter
         - Need to add behavior WITHOUT changing original code? => Decorator
         - Need to control access / caching / lazy loading? => Proxy
         - Need tree structure (part-whole)? => Composite
         - Too many similar objects (memory)? => Flyweight

   c) How objects talk / behave is messy?
      -> BEHAVIORAL patterns
         - Many listeners for an event? => Observer / Pub-Sub
         - Many algorithms, choose at runtime? => Strategy
         - Need undo / redo of actions? => Command
         - Need chain/pipe of handlers? => Chain of Responsibility / Middleware
         - Need state-based behavior? => State
         - Need algorithm skeleton with overridable steps? => Template Method
         - Many-to-many communication? => Mediator
         - Need iteration over custom collection? => Iterator

2) DON'T overuse patterns.
   - If plain functions/objects solve it clearly, that's fine.
   - Patterns are tools, not rules.

3) LEARNING STRATEGY:
   - Pick 1–2 patterns at a time.
   - Re-implement them from memory in a small example.
   - Use them in small side projects (e.g., pub-sub in a todo app).

==========================================================
END OF FILE
==========================================================
*/
