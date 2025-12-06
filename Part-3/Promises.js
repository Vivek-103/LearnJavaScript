/************************************************************
 *  COMPLETE GUIDE TO PROMISES IN JAVASCRIPT (Single File)
 *  Author: Generated for Learning
 *  Purpose: Master Promises from Basics to Advanced
 ************************************************************/

/************************************************************
 1. WHAT IS A PROMISE?
 ************************************************************/
// A Promise represents a value that may be available now,
// in the future, or never.
// States: pending -> fulfilled | rejected


/************************************************************
 2. CREATING A PROMISE
 ************************************************************/
const myPromise = new Promise((resolve, reject) => {
  const success = true;

  setTimeout(() => {
    if (success) resolve("2. Promise Resolved");
    else reject("2. Promise Rejected");
  }, 1000);
});

myPromise
  .then((result) => console.log(result))
  .catch((error) => console.log(error));


/************************************************************
 3. SYNCHRONOUS VS ASYNCHRONOUS PROMISE
 ************************************************************/
const syncPromise = Promise.resolve("3. Sync Promise Done");
syncPromise.then(console.log);

const asyncPromise = new Promise((res) => {
  setTimeout(() => res("3. Async Promise Done"), 1000);
});
asyncPromise.then(console.log);


/************************************************************
 4. PROMISE CHAINING
 ************************************************************/
function stepPromise(step) {
  return new Promise((resolve) => {
    setTimeout(() => {
      console.log("4. Step", step);
      resolve(step);
    }, 1000);
  });
}

stepPromise(1)
  .then(() => stepPromise(2))
  .then(() => stepPromise(3))
  .then(() => console.log("4. All steps completed"));


/************************************************************
 5. RETURNING VALUES IN THEN
 ************************************************************/
Promise.resolve(5)
  .then((num) => num * 2)
  .then((num) => num + 10)
  .then((final) => console.log("5. Final Value:", final));


/************************************************************
 6. ERROR HANDLING WITH CATCH
 ************************************************************/
Promise.reject("6. Something went wrong")
  .then(() => console.log("This will not run"))
  .catch((err) => console.log(err));


/************************************************************
 7. FINALLY METHOD
 ************************************************************/
new Promise((resolve) => {
  setTimeout(() => resolve("7. Data Loaded"), 1000);
})
  .then((data) => console.log(data))
  .catch((err) => console.log(err))
  .finally(() => console.log("7. Cleanup Done"));


/************************************************************
 8. PROMISE.ALL
 ************************************************************/
const p1 = Promise.resolve(1);
const p2 = new Promise((res) => setTimeout(() => res(2), 1000));
const p3 = new Promise((res) => setTimeout(() => res(3), 2000));

Promise.all([p1, p2, p3]).then((values) => {
  console.log("8. Promise.all:", values);
});


/************************************************************
 9. PROMISE.RACE
 ************************************************************/
const race1 = new Promise((res) => setTimeout(() => res("First"), 2000));
const race2 = new Promise((res) => setTimeout(() => res("Second"), 1000));

Promise.race([race1, race2]).then((winner) => {
  console.log("9. Promise.race Winner:", winner);
});


/************************************************************
 10. PROMISE.ALLSETTLED
 ************************************************************/
const ok = Promise.resolve("Success");
const bad = Promise.reject("Fail");

Promise.allSettled([ok, bad]).then((results) => {
  console.log("10. Promise.allSettled:", results);
});


/************************************************************
 11. PROMISE.ANY
 ************************************************************/
const fail1 = Promise.reject("err1");
const success1 = new Promise((res) => setTimeout(() => res("win"), 1000));

Promise.any([fail1, success1]).then((result) => {
  console.log("11. Promise.any:", result);
});


/************************************************************
 12. CONVERTING CALLBACK TO PROMISE
 ************************************************************/
function callbackAPI(cb) {
  setTimeout(() => cb(null, "Data from callback"), 1000);
}

function promisifiedAPI() {
  return new Promise((resolve, reject) => {
    callbackAPI((err, data) => {
      if (err) reject(err);
      else resolve(data);
    });
  });
}

promisifiedAPI().then((data) => console.log("12:", data));


/************************************************************
 13. PROMISE WITH THIS
 ************************************************************/
const obj = {
  name: "Vivek",
  load: function () {
    return new Promise((resolve) => {
      setTimeout(() => resolve(this.name), 1000);
    });
  }
};

obj.load().then((name) => console.log("13. this in Promise:", name));


/************************************************************
 14. PROMISE RECURSION
 ************************************************************/
function repeat(count) {
  if (count === 0) return Promise.resolve("Done");

  return Promise.resolve()
    .then(() => console.log("14. Count:", count))
    .then(() => repeat(count - 1));
}

repeat(3).then(console.log);


/************************************************************
 15. PROMISE VS CALLBACK
 ************************************************************/
/*
1. Promises avoid callback hell
2. Better error handling
3. More readable
4. Chainable
*/


/************************************************************
 16. COMMON MISTAKES
 ************************************************************/
// Mistake 1: Forgetting to return promise
function wrongPromise() {
  new Promise((res) => setTimeout(() => res(10), 1000));
}
wrongPromise(); // unresolved

// Correct
function correctPromise() {
  return new Promise((res) => setTimeout(() => res(10), 1000));
}
correctPromise().then((v) => console.log("16. Correct:", v));


/************************************************************
 17. REAL-WORLD USE CASES
 ************************************************************/
/*
1. API calls (fetch)
2. File handling
3. Database queries
4. Timers
5. Data pipelines
*/


/************************************************************
 18. INTERVIEW QUESTIONS WITH ANSWERS
 ************************************************************/
// Q1: What are Promise states?
// A: pending, fulfilled, rejected

// Q2: Difference between Promise.all and Promise.race?
// A: all waits for all, race returns first settled

// Q3: What is Promise.any?
// A: Returns the first fulfilled promise

// Q4: What happens if a promise rejects in Promise.all?
// A: The entire Promise.all rejects

// Q5: Can you chain multiple then?
// A: Yes, and each then returns a new promise


/************************************************************
 END OF FILE
 ************************************************************/
