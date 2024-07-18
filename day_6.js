// Day 6: Array

// Activity 1: Array creation and access

// Task 1:

let arr = [1, 2, 3, 4, 5];
console.log(arr);
// Task 2:

console.log(arr[0]);
console.log(arr[4]);

// Activity 2:Array methods(basic)

// Task 3:

arr.push(6);
console.log(arr);

// Task 4:

arr.pop();
console.log(arr);

// Task 5:

arr.shift();
console.log(arr);

// Task 6:

arr.unshift(1);
console.log(arr);

// Activity 3:Array methods(Intermediate)

// Task 7:

const newArr = arr.map((num) => {
  return num * 2;
});

console.log(newArr);

// Task 8:

const evenArr = arr.filter((num) => {
  if (num % 2 === 0) {
    return num;
  }
});

console.log(evenArr);

// Task 9:

const sum = arr.reduce((sum, value) => {
  return sum + value;
}, 0);

console.log(sum);

// Activity 4:Array Iteration

// Task 10:

for (let i = 0; i < arr.length; i++) {
  console.log(arr[i]);
}

// Task 11: Array Iteration

arr.forEach((value) => {
  console.log(value);
});

// Activity 5: Multi-dimensional Array

// Task 12:

const multiArr = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
];
console.log(multiArr);

// Task 13:

console.log(multiArr[1][1]);
