// Day 12 : Error Handling

// Activity 1: Basic error handling with try catch block

// Task 1:

function throwError() {
  throw new Error("Error throws Intenstionaly");
}

try {
  throwError();
} catch (error) {
  console.log("Error : ", error.message);
}

// Task 2:

function divide(numerator, denominator) {
  if (denominator === 0) {
    throw new Error("Division by zero is not allowed");
  }
  return numerator / denominator;
}

try {
  let result = divide(10, 0);
  console.log(result);
} catch (error) {
  console.log("Error : ", error.message);
}

// Activity 2: Finally block

// Task 3:

try {
  console.log("Execution start in try");
  throwError();
  console.log("this will not execute because error comes before that line");
} catch (error) {
  console.log("Catch block executed and Error : ", error.message);
} finally {
  console.log("Finally block executed");
}

// Activity 3: Custom Error Object

// Task 4:

class CustomError extends Error {
  constructor(message) {
    super(message);
    this.name = "CustomError";
  }
}

function throwcustomError() {
  throw new CustomError("instance of Custom eror thrown");
}

try {
  throwcustomError();
} catch (error) {
  if (error instanceof CustomError) {
    console.log("custom error : ", error.message);
  } else {
    console.log("Unexpected error : ", error.message);
  }
}

// Task 5:

class CustomeStringError extends Error {
  constructor() {
    super("string is empty");
    this.name = "StringEmptyError";
  }
}

function checkStringEmpty(str) {
  if (!str) {
    throw new CustomeStringError();
  }
  console.log(str);
}

try {
  checkStringEmpty("String is not empty");
  checkStringEmpty("");
} catch (error) {
  if (error instanceof CustomeStringError) {
    console.log("custome string error : ", error.message);
  } else {
    console.log("Unexpected error : ", error.message);
  }
}

// Activity 4: Error handling in Promises

// Task 6:

function randomPromise() {
  return new Promise((resolve, reject) => {
    const success = Math.random() > 0.5;

    if (success) {
      resolve("Promise resolved !");
    } else {
      reject("Promise rejected !");
    }
  });
}

randomPromise()
  .then((response) => {
    console.log(response);
  })
  .catch((response) => {
    console.log(response);
  });

// Task 7:

function promiseResult() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const success = Math.random() > 0.5;

      if (success) {
        resolve("Promise resolved !");
      } else {
        reject("Promise rejected !");
      }
    }, 5000);
  });
}

async function handlePromiseResult() {
  try {
    const result = await promiseResult();
    console.log(result);
  } catch (reject) {
    console.log(reject);
  }
}

handlePromiseResult();

// Activity 5: Gracefulll error handling in fetch

// Task 8:

const invalid_url = "https://api.github.com/users/Abhishek12097";

fetch(invalid_url)
  .then((response) => {
    if (!response.ok) {
      throw new Error(`Http Error : ${response.status}`);
    }
    return response.json();
  })
  .then((data) => {
    console.log(data);
  })
  .catch((error) => {
    console.log("Error : ", error.message);
  });

// Task 9:

async function handleFetch() {
  try {
    const response = await fetch(invalid_url);

    if (!response.ok) {
      throw new Error(`Http Error : ${response.status}`);
    }
    const data = await response.json();
    console.log(data);
  } catch (error) {
    console.log("Error : ", error.message);
  }
}
handleFetch();
