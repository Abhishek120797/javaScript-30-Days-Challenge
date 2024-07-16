//Day 3: Control structure

// Activity 1:if-else statements

// Task 1:

let num = 10;
if (num > 0) {
  console.log("number is positive");
}
if (num < 0) {
  console.log("number is negative");
}
if (num == 0) {
  console.log("number is Zero");
}

// Task 2:

let age = 18;

if (age >= 18) {
  console.log("person is eligible to vote");
} else {
  console.log("person not eligible to vote");
}

// Activity 2: nested if-else statements

// Task 3:

let a = 10,
  b = 5,
  c = 2;

if (a > b) {
  if (a > c) {
    console.log(`largest number is ${a}`);
  } else {
    console.log(`largest number is ${c}`);
  }
} else {
  if (b > c) {
    console.log(`largest number is ${b}`);
  } else {
    console.log(`largest number is ${c}`);
  }
}

// Activity 3: switch case

// Task 4:

let day = 5;
switch (day) {
  case 1:
    console.log("Monday");
    break;
  case 2:
    console.log("Tuesday");
    break;
  case 3:
    console.log("Wendsday");
    break;
  case 4:
    console.log("Thursday");
    break;
  case 5:
    console.log("Friday");
    break;
  case 6:
    console.log("Saturday");
    break;
  case 7:
    console.log("Sunday");
    break;
  default:
    console.log("Invalid day");
}

// Task 5:

let score = 75;
switch (true) {
  case score >= 90 && score <= 100:
    grade = "A";
    break;
  case score >= 80 && score < 90:
    grade = "B";
    break;
  case score >= 70 && score < 80:
    grade = "C";
    break;
  case score >= 60 && score < 70:
    grade = "D";
    break;
  case score >= 0 && score < 60:
    grade = "F";
    break;
  default:
    console.log("Invalid score. Please enter a score between 0 and 100.");
    break;
}

console.log(`The grade for a score of ${score} is: ${grade}`);

// Activity 4: conditional (Ternary) operator

// Task 6:

let number = 10;
number % 2 === 0
  ? console.log(`${number} is EVEN`)
  : console.log(`${number} is ODD`);

// Activity 5: combining conditions

// Task 7:

let year = 2024;

if (year % 4 === 0) {
  if (year % 100 === 0) {
    if (year % 400 === 0) {
      console.log("Leap year");
    } else {
      console.log("not a Leap year");
    }
  } else {
    console.log("Leap year");
  }
} else {
  console.log("not a Leap year");
}
