// Day 5 : Functions

// Activity 1: Function declaration

// Task 1:

function check_even_odd(num) {
  if (num % 2 === 0) {
    console.log("Even number");
  } else {
    console.log("Odd nnumber");
  }
}

check_even_odd(11);

// Task 2:

function find_square(num) {
  return num * num;
}

let square = find_square(5);
console.log("square of 5 is ", square);

// Activity 2: Function expression

// Task 3:

const findMaxNum = function (num1, num2) {
  if (num1 > num2) {
    console.log(num1, " is greater");
  } else {
    console.log(num2, " is greater");
  }
};

findMaxNum(10, 5);

// Task 4:

const concatString = function (str1, str2) {
  return str1 + str2;
};

let string = concatString("abhishek ", "jaiswal");
console.log(string);

// Activity 3: Arrow Functions

// Task 5:

const sum = (num1, num2) => {
  return num1 + num2;
};

let result = sum(5, 6);
console.log(result);

// Task 6:

const checkChar = (char, str) => {
  for (let i = 0; i < str.length; i++) {
    if (str[i] === char) {
      return 1;
    }
  }
  return 0;
};

console.log(checkChar("i", "abhishek"));

// Activity 4: Functions parameter and default Values

// Task 7:

function findProduct(num1, num2 = 1) {
  return num1 * num2;
}

console.log(findProduct(10, 20));
console.log(findProduct(10));

// Task 8:

function greet(name, age = 1) {
  return "good morning " + name + " your age is " + age;
}

console.log(greet("abhishek", 27));

console.log(greet("aniket"));

// Activity 4: Higher-order function

// Task 9:

function print() {
  console.log("Function called !");
}

function callFunction(print, num) {
  for (let i = 1; i <= num; i++) {
    print();
  }
}

callFunction(print, 5);

// Task 10:

function fun1(value) {
  return value * 10;
}

function fun2(value) {
  return value / 100;
}

function find_10_percent(fun1, fun2, value) {
  let result = fun1(value);
  result = fun2(result);
  return result;
}

console.log(find_10_percent(fun1, fun2, 2000));
