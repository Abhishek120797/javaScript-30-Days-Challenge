// Day 19: Regular Expression

// Activity 1: Basic regular Expression

// Task 1:

const text_1 =
  "JavaScript is a versatile language. Many developers love JavaScript.";
const pattern_1 = /JavaScript/g;
const matches_1 = text_1.match(pattern_1);

if (matches_1) {
  console.log("Matches found:", matches_1);
} else {
  console.log("No matches found.");
}

// Task 2:
const text_2 = "There are 3 apples, 12 bananas, and 5 oranges.";
const pattern_2 = /\d/g;
const matches_2 = text_2.match(pattern_2);

if (matches_2) {
  console.log("Matches found:", matches_2);
} else {
  console.log("No matches found.");
}

// Activity 2: Charecter classes and Quntifier

// Task 3:

const text_3 =
  "JavaScript is a versatile Language. Many Developers love JavaScript.";
const pattern_3 = /\b[A-Z][a-z]*\b/g;
const matches_3 = text_3.match(pattern_3);

if (matches_3) {
  console.log("Matches found:", matches_3);
} else {
  console.log("No matches found.");
}

// Task 4:

const text_4 = "There are 3 apples, 12 bananas, and 555 oranges.";
const pattern_4 = /\d+/g;
const matches_4 = text_4.match(pattern_4);

if (matches_4) {
  console.log("Matches found:", matches_4);
} else {
  console.log("No matches found.");
}

// Activity 3: Grouping and Capturing

// Task 5:

const text_5 = "(123) 456-7890";
const pattern_5 = /\((\d{3})\) (\d{3})-(\d{4})/;
const matches_5 = text_5.match(pattern_5);

if (matches_5) {
  const areaCode = matches_5[1];
  const centralOfficeCode = matches_5[2];
  const lineNumber = matches_5[3];
  console.log("Matches found:");
  console.log("Area Code:", areaCode);
  console.log("Central Office Code:", centralOfficeCode);
  console.log("Line Number:", lineNumber);
} else {
  console.log("No matches found.");
}

// Task 6:

const text_6 = "example.username@domain.com";
const pattern_6 = /^([^@]+)@([^@\.]+\.[^@\.]+)$/;
const matches_6 = text_6.match(pattern_6);

if (matches_6) {
  const username = matches_6[1];
  const domain = matches_6[2];
  console.log("Matches found:");
  console.log("Username:", username);
  console.log("Domain:", domain);
} else {
  console.log("No matches found.");
}

// Activity 4: Assretions and Boundaries

// Task 7:

const text_7 = "Hello world! This is a test.";
const pattern_7 = /^Hello\b/;
const matches_7 = text_7.match(pattern_7);

if (matches_7) {
  console.log("Match found:", matches_7[0]);
} else {
  console.log("No match found.");
}

// Task 8:

const text_8 = "This is a test world";
const pattern_8 = /\bworld\b$/;
const matches_8 = text_8.match(pattern_8);

if (matches_8) {
  console.log("Match found:", matches_8[0]);
} else {
  console.log("No match found.");
}

// Activity 5: Practical Applications

// Task 9:

const password = "Example1@";
const pattern_9 =
  /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@!#\$%^&*()_+{}\[\]:;"'<>,.?/]).{8,}$/;
const isValid_9 = pattern_9.test(password);

if (isValid_9) {
  console.log("Password is valid.");
} else {
  console.log("Password is invalid.");
}

// Task 10:

const url = "https://www.example.com/path?query=string#fragment";
const pattern_10 =
  /^(https?:\/\/)?(www\.)?[a-zA-Z0-9-]+\.[a-zA-Z]{2,}(\/[a-zA-Z0-9-._~:?#[\]@!$&'()*+,;=]*)?$/;
const isValid_10 = pattern_10.test(url);

if (isValid_10) {
  console.log("URL is valid.");
} else {
  console.log("URL is invalid.");
}
