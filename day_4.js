//Day 4: Loops

// Activity 1:For Loop

// Task 1:

for (let i = 1; i <= 10; i++) {
  process.stdout.write(i.toString() + " ");
}
console.log();

// Task 2:

for (let i = 1; i <= 10; i++) {
  console.log(`${i * 5}`);
}

// Activity 2: While Loop

// Task 3:

let sum = 0;
let i = 10;
while (i) {
  sum += i;
  i--;
}
console.log(`Sum of numbers from 1 to 10 is ${sum}`);

// Task 4:

let num = 10;
while (num) {
  process.stdout.write(num.toString() + " ");
  num--;
}
console.log();

// Activity 3: Do...While Loop

// Task 5:
let start = 5;
do {
  process.stdout.write(start.toString() + " ");
  start--;
} while (start);

// Task 6:

let num_1 = 5;
let fact = 1;
let temp = num_1;
do {
  fact = fact * temp;
} while (--temp);

console.log(`Factorial of ${num_1} is ${fact}`);

// Activity 4: Nested Loop

// Task 7:

for (let i = 0; i < 6; i++) {
  for (let j = 0; j <= i; j++) {
    process.stdout.write("* ");
  }
  console.log();
}

// Activity 5: Loop control statements

// Task 8:

for (let i = 1; i <= 10; i++) {
  if (i === 5) continue;
  process.stdout.write(i.toString() + " ");
}
console.log();

// Task 9:
for (let i = 1; i <= 10; i++) {
  if (i === 7) break;
  process.stdout.write(i.toString() + " ");
}
