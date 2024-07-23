// Day 11: Promises and Async await

// Activity 1: Understanding Promises

// Task 1:

const resolvePromise = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("Promise resolved");
  }, 2000);
});

resolvePromise.then((message) => {
  console.log(message);
});

// Task 2:

const rejectPromise = new Promise((resolve, reject) => {
  setTimeout(() => {
    reject("Promise rejected");
  }, 2000);
});
rejectPromise.catch((message) => {
  console.log(message);
});

// Activity 2: chaninig promises

// Task 3:

function fetchData(message, time) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve();
      console.log(message);
    }, time);
  });
}

fetchData("fetch data 1", 3000)
  .then(() => fetchData("fetch data 2", 5000))
  .then(() => fetchData("fetch data 3", 2000))
  .then(() => fetchData("fetch data 4", 3000));

// Activity 3: Using Async/Await

// Task 4:

function fetchValueResolved() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("value fetched");
    }, 5000);
  });
}

async function asyncFoo() {
  console.log("waiting for value");
  let value = await fetchValue();
  console.log(value);
}

asyncFoo();

// Task 5:

function fetchValueRejected() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      reject("Error comes while fetchin value");
    }, 5000);
  });
}

async function asyncFee() {
  console.log("waiting for value");
  try {
    let value = await fetchValueRejected();
    console.log(value);
  } catch (error) {
    console.log(error);
  }
}

asyncFee();

// Activity 4: fteching data from an Api

// Task 6:

fetch("https://api.github.com/users/Abhishek120797").then((response) => {
  console.log(response);
});

// // Task 7:

async function fetchApi() {
  const response = await fetch("https://api.github.com/users/Abhishek120797");

  console.log(response);
}

fetchApi();

// Activity 5: Concurrent Promises

// Task 8:

const firstPromise = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("First Promise resolved");
  }, 6000);
});

const secondPromise = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("Second Promise resolved");
  }, 3000);
});

const thirdPromise = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("Third Promise resolved");
  }, 5000);
});

Promise.all([firstPromise, secondPromise, thirdPromise]).then((messages) => {
  messages.forEach((message) => {
    console.log(message);
  });
});
// Task 9:
Promise.race([firstPromise, secondPromise, thirdPromise]).then((message) => {
  console.log(message);
});
