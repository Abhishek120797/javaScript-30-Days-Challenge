// Day 14: Classes

// Activity 1: class Defination

class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  greet() {
    return `Welcome ${this.name}`;
  }

  setAge(age) {
    this.age = age;
  }

  getName() {
    return this.name;
  }

  setName(fName, lName) {
    this.name = fName + " " + lName;
  }

  static genericGreet() {
    return `Welocome to the world !`;
  }
}

// Task 1:

const personOne = new Person("Abhishek", 27);

console.log(personOne.greet());

// Task 2:
console.log(`Age of Person ${personOne.name} is ${personOne.age}`);

personOne.setAge(24);

console.log(`Age of Person ${personOne.name} is updated to ${personOne.age}`);

// Activity 2 class Inheritance

// Task 3:

class Student extends Person {
  static count = 0;

  constructor(name, age, studentId) {
    super(name, age);
    this.studentId = studentId;
    Student.count++;
  }

  getStudentID() {
    return this.studentId;
  }
  greet() {
    return `Hi ${this.name} your student Id is ${this.studentId} `;
  }
}

const studentOne = new Student("Aniket", 18, 112);

console.log(
  `Student ${studentOne.name} has student ID ${studentOne.getStudentID()}`
);

// Task 4:

console.log(studentOne.greet());

// Activity 3: Static method and properties

// Task 5:

console.log(Person.genericGreet());

// Task 6:

console.log(`Total Students is ${Student.count}`);
const studentTwo = new Student("Alice", 16, 113);
const studentThree = new Student("Jhon", 14, 114);

console.log(`Total Students is ${Student.count}`);

// Activity 4: Getters and Setters

// Task 7:
const personTwo = new Person("Avinash", 30);
console.log(`name of person two ${personTwo.name}`);

// Task 8:

personTwo.setName("Avinash", "Jaiswal");
console.log(`Updated name of person two ${personTwo.name}`);

// Activity 5: Private Fields

// Task 9:

class Account {
  #balance;
  constructor() {
    this.#balance = 0;
  }

  deposit(money) {
    this.#balance += money;
  }

  withdraw(money) {
    this.#balance -= money;
  }

  getbalance() {
    return this.#balance;
  }
}

// Task 10:

const acc = new Account();

acc.deposit(10000);
console.log(`Balance = ${acc.getbalance()}`);

acc.withdraw(1000);
console.log(`Balance = ${acc.getbalance()}`);

acc.withdraw(500);
console.log(`Balance = ${acc.getbalance()}`);

acc.deposit(200);
console.log(`Balance = ${acc.getbalance()}`);
