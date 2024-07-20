// Day 8: ES6+ Features

// Activity 1: Template literals

// Task 1:

let name = "Abhishek";
let age = 27;

let person = `person name is ${name} and age is ${age}`;

console.log(person);

// Task 2:

let mutiString = `my name is Abhishek Jaiswal,
my age is 27 
and i live in mumbai`;

console.log(mutiString);

// Activity 2: Destructuring

// Task 3:

let num = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

let [num1, num2] = num;

console.log(`Array first element ${num1} and second element is ${num2}`);

// Task 4:

const book = {
  title: "javascript",
  author: "Hitesh Choudhary",
  year: 2023,
};

let { title, author } = book;

console.log(`Title of book is ${title} and their author is ${author}`);

let { title: Title, author: Author } = book;

console.log(`Title of book is ${Title} and their author is ${Author}`);

// Activity 3: Spread and Rest operator

// Task 5:

const element = ["c++", true, 5000];

const newElement = [...element, "Java", 10000];

console.log(newElement);

// Task 6:

function sum(...num) {
  return num.reduce((prev, current) => {
    return prev + current;
  });
}

console.log(sum(1, 2, 3, 4, 5));

// Activity 4: Default parameters

// Task 7:

function product(num1, num2 = 1) {
  return num1 * num2;
}

console.log(product(5, 10));
console.log(product(3));

// Activity 5: Enhanced Object Literals

// Task 8:

const Name = "Abhishek";
const Age = 27;
const email = "abhi@example.com";

const myself = {
  Name,
  age,
  email,
  greet() {
    console.log(`Hello, my name is ${this.name}`);
  },
};

console.log(myself);

// Task 9:

const salaryProp = "salary";
const companyName = "company";
const About = function () {
  console.log("I am a web devloper in Google");
};

const myProfile = {
  [salaryProp]: 100000,
  [companyName]: "Google",
  About,
};

console.log(myProfile);
