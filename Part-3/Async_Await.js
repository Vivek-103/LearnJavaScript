/************************************************************
 *  COMPLETE GUIDE TO ASYNC / AWAIT IN JAVASCRIPT (Single File)
 *  Author: Generated for Learning
 *  Purpose: Master async/await from Basics to Advanced
 ************************************************************/

/************************************************************
 1. WHAT IS ASYNC / AWAIT?
 ************************************************************/
// async/await is syntactic sugar over Promises
// It allows writing asynchronous code in a synchronous-looking way


/************************************************************
 2. ASYNC FUNCTION
 ************************************************************/
// An async function always returns a Promise

async function greet() {
  return "2. Hello from async";
}

greet().then(console.log);


/************************************************************
 3. AWAIT KEYWORD
 ************************************************************/
// await can only be used inside an async function

function getData() {
  return new Promise((resolve) => {
    setTimeout(() => resolve("3. Data Fetched"), 1000);
  });
}

async function fetchData() {
  const data = await getData();
  console.log(data);
}

fetchData();


/************************************************************
 4. ASYNC VS PROMISE THEN
 ************************************************************/
// Using then
getData().then((data) => console.log("4. Using then:", data));

// Using async/await
async function fetchWithAwait() {
  const data = await getData();
  console.log("4. Using await:", data);
}
fetchWithAwait();


/************************************************************
 5. ERROR HANDLING WITH TRY / CATCH
 ************************************************************/
function getError() {
  return new Promise((_, reject) => {
    setTimeout(() => reject("5. Something went wrong"), 1000);
  });
}

async function handleError() {
  try {
    const res = await getError();
    console.log(res);
  } catch (err) {
    console.log("5. Caught Error:", err);
  }
}

handleError();


/************************************************************
 6. MULTIPLE AWAIT (SEQUENTIAL)
 ************************************************************/
function task(name, delay) {
  return new Promise((resolve) => {
    setTimeout(() => resolve(name), delay);
  });
}

async function runSequential() {
  const a = await task("6. Task A", 1000);
  console.log(a);

  const b = await task("6. Task B", 1000);
  console.log(b);
}

runSequential();


/************************************************************
 7. PARALLEL EXECUTION WITH PROMISE.ALL + AWAIT
 ************************************************************/
async function runParallel() {
  const results = await Promise.all([
    task("7. Task 1", 1000),
    task("7. Task 2", 1000)
  ]);

  console.log("7. Parallel Result:", results);
}

runParallel();


/************************************************************
 8. ASYNC IIFE
 ************************************************************/
(async function () {
  const data = await task("8. IIFE Async", 1000);
  console.log(data);
})();


/************************************************************
 9. RETURN VALUE FROM ASYNC
 ************************************************************/
async function add(a, b) {
  return a + b;
}

add(5, 10).then((sum) => console.log("9. Sum:", sum));


/************************************************************
 10. ASYNC WITH LOOPS
 ************************************************************/
async function asyncLoop() {
  for (let i = 1; i <= 3; i++) {
    const val = await task(`10. Loop ${i}`, 500);
    console.log(val);
  }
}

asyncLoop();


/************************************************************
 11. ASYNC WITH forEach (COMMON MISTAKE)
 ************************************************************/
// forEach does NOT work well with await

async function wrongForEach() {
  [1, 2, 3].forEach(async (num) => {
    const res = await task(num, 500);
    console.log("11. forEach:", res);
  });
}

wrongForEach();


/************************************************************
 12. ASYNC WITH MAP + PROMISE.ALL (CORRECT WAY)
 ************************************************************/
async function correctMap() {
  const promises = [1, 2, 3].map((n) => task(n, 500));
  const results = await Promise.all(promises);
  console.log("12. map results:", results);
}

correctMap();


/************************************************************
 13. ASYNC WITH THIS
 ************************************************************/
const asyncObj = {
  value: 100,
  load: async function () {
    const data = await task("13. Async this", 500);
    console.log(data, this.value);
  }
};

asyncObj.load();


/************************************************************
 14. ASYNC FUNCTION ALWAYS RETURNS PROMISE
 ************************************************************/
async function demo() {
  return "14. Always Promise";
}

console.log(demo()); // Promise


/************************************************************
 15. ERROR PROPAGATION
 ************************************************************/
async function level1() {
  throw new Error("15. Failed at level 1");
}

async function level2() {
  await level1();
}

level2().catch((err) => console.log(err.message));


/************************************************************
 16. REAL-WORLD USE CASE (API STYLE SIMULATION)
 ************************************************************/
function fakeApi(url) {
  return new Promise((resolve) => {
    setTimeout(() => resolve("16. Data from " + url), 1000);
  });
}

async function loadUser() {
  const user = await fakeApi("/user");
  const posts = await fakeApi("/posts");

  console.log(user);
  console.log(posts);
}

loadUser();


/************************************************************
 17. ASYNC VS PROMISE - COMPARISON
 ************************************************************/
/*
Promise.then(): Chaining based
async/await: Cleaner, synchronous-like
Both use Promises internally
*/


/************************************************************
 18. COMMON MISTAKES
 ************************************************************/
// 1. Using await outside async
// 2. Forgetting try/catch
// 3. Using await in forEach
// 4. Blocking with unnecessary sequential awaits


/************************************************************
 19. BEST PRACTICES
 ************************************************************/
/*
1. Use try/catch
2. Run independent tasks in parallel
3. Handle errors properly
4. Avoid mixing too many then() with await
*/


/************************************************************
 20. INTERVIEW QUESTIONS WITH ANSWERS
 ************************************************************/
// Q1: Does async always return a promise?
// A: Yes

// Q2: Can we use await without async?
// A: No (except top-level await in modules)

// Q3: Difference between await and then?
// A: await pauses execution, then uses callbacks

// Q4: What happens when an error is thrown in async?
// A: The returned promise is rejected


/************************************************************
 END OF FILE
 ************************************************************/
