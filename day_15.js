// Day 15: Closures

// Activity 1: Understanding Closures

// Task 1:

function outerFun() {
  const outerVar = "outer variable";
  function innerFun() {
    console.log(outerVar);
  }
  return innerFun;
}

const inner = outerFun();
inner();

// Task 2:

function counter() {
  let privateCounter = 0;
  return function () {
    return ++privateCounter;
  };
}
const getCounter = counter();
console.log(getCounter());
console.log(getCounter());

// Activity 2: Practical Closures

// Task 3:

function createUniqueIdGenerator() {
  let empId = 0;

  return function () {
    return ++empId;
  };
}

const generateId = createUniqueIdGenerator();
console.log(generateId());
console.log(generateId());
console.log(generateId());

// Task 4:

function createUserGreet(username) {
  return function () {
    console.log(`Welcome ${username}`);
  };
}

const greet = createUserGreet("Abhishek jaiswal");

greet();

// Activity 3: Closures in Loops

// Task 5:

function logfunctionIndex() {
  const funArr = [];
  for (let i = 0; i < 5; i++) {
    funArr.push(function () {
      console.log(i);
    });
  }

  return funArr;
}
const functions = logfunctionIndex();
functions.forEach((foo) => {
  foo();
});

// Activity 4: Module Pattern

// Task 6:

function createItemManger() {
  const items = [];

  return {
    addItem(item) {
      items.push(item);
    },
    removeItem(item) {
      const index = items.indexOf(item);
      if (index !== -1) {
        items.splice(index, 1);
      }
    },
    listItem() {
      return items.slice();
    },
  };
}

const itemManager = createItemManger();

itemManager.addItem("Apple");
itemManager.addItem("Banana");
itemManager.addItem("Orange");

console.log(itemManager.listItem());

itemManager.removeItem("Banana");

console.log(itemManager.listItem());

// Activity 5:Memoization

// Task 7:

function memoize(fn) {
  const cache = {};

  return function (...args) {
    const key = JSON.stringify(args);
    if (cache[key] !== undefined) {
      console.log("Fetching from cache:", key);
      return cache[key];
    } else {
      console.log("Computing result for:", key);
      const result = fn(...args);
      cache[key] = result;
      return result;
    }
  };
}

// Example usage
function add(a, b) {
  return a + b;
}

const memoizedAdd = memoize(add);

console.log(memoizedAdd(1, 2));
console.log(memoizedAdd(1, 2));
console.log(memoizedAdd(2, 3));
console.log(memoizedAdd(2, 3));

// Task 8:

function memoize(fn) {
  const cache = {};

  return function (...args) {
    const key = JSON.stringify(args);
    if (cache[key] !== undefined) {
      console.log("Fetching from cache:", key);
      return cache[key];
    } else {
      console.log("Computing result for:", key);
      const result = fn(...args);
      cache[key] = result;
      return result;
    }
  };
}

function factorial(n) {
  if (n === 0 || n === 1) {
    return 1;
  } else {
    return n * factorial(n - 1);
  }
}

const memoizedFactorial = memoize(factorial);

console.log(memoizedFactorial(5));
console.log(memoizedFactorial(5));
console.log(memoizedFactorial(6));
console.log(memoizedFactorial(6));
