// Day 18: Algorithms

// Activity 1: Sorting Algorithm

// Task 1:

const numArray = [1, 5, 3, 2, 4, 7, 6, 8, 9];

function bubbleSort(arr) {
  let n = arr.length;
  let flag = false;

  for (let i = n - 1; i >= 0; i--) {
    for (let j = 0; j <= i; j++) {
      if (arr[j] > arr[j + 1]) {
        let temp = arr[j + 1];
        arr[j + 1] = arr[j];
        arr[j] = temp;
        flag = true;
      }
    }
    if (!flag) {
      break;
    }
  }
  return arr;
}

console.log(bubbleSort(numArray));

// Task 2:

function selectionSort(arr) {
  let n = arr.length;
  for (let i = 0; i < n; i++) {
    let minIndex = i;
    for (let j = i + 1; j < n; j++) {
      if (arr[j] < arr[minIndex]) {
        minIndex = j;
      }
    }
    let temp = arr[i];
    arr[i] = arr[minIndex];
    arr[minIndex] = temp;
  }
  return arr;
}
console.log(selectionSort(numArray));

function insertionSort(arr) {
  let n = arr.length;

  for (let i = 1; i < n; i++) {
    let pivot = arr[i];
    let j;
    for (j = i - 1; j >= 0 && arr[j] > pivot; j--) {
      arr[j + 1] = arr[j];
    }

    arr[j + 1] = pivot;
  }

  return arr;
}
console.log(insertionSort(numArray));

// Task 3:

function quickSort(arr) {
  if (arr.length <= 1) {
    return arr;
  }

  let pivot = arr[Math.floor(arr.length / 2)];
  let left = [];
  let right = [];

  for (let i = 0; i < arr.length; i++) {
    if (i === Math.floor(arr.length / 2)) {
      continue;
    }

    if (arr[i] < pivot) {
      left.push(arr[i]);
    } else {
      right.push(arr[i]);
    }
  }

  return quickSort(left).concat(pivot, quickSort(right));
}

console.log(quickSort(numArray));

// Activity 2: Searching Algorithm

// Task 4:
function linearSearch(arr, target) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === target) {
      console.log(`Targte value ${target} is found at index : ${i}`);
      return i;
    }
  }
  console.log(`Target value ${target} not found in the array`);
  return -1;
}

linearSearch(numArray, 8);
linearSearch(numArray, 20);

// Task 5:

const sortedArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14];

function binarySearch(arr, target) {
  let start = 0;
  let end = arr.length - 1;

  while (start <= end) {
    let mid = Math.floor((start + end) / 2);
    console.log("test");
    if (arr[mid] === target) {
      console.log(`Targte value ${target} is found at index : ${mid}`);
      return mid;
    } else {
      if (arr[mid] < target) {
        start = mid + 1;
      } else {
        end = mid - 1;
      }
    }
  }

  console.log(`Target value ${target} not found in the array.`);
  return -1;
}

binarySearch(sortedArray, 10);

// Activity 3: String Algorithm

// Task 6:

const string = "Abhishek jaiswal";

function charOccurence(str) {
  const freq = new Map();

  for (const char of str) {
    if (freq.has(char)) {
      freq.set(char, freq.get(char) + 1);
    } else {
      freq.set(char, 1);
    }
  }

  console.log(freq);
}

charOccurence(string);

// Task 7:

// Activity 4: Array Algorithm

// Task 8:

const rotateArray = [1, 2, 3, 4, 5, 6, 7, 8, 9];

function rotate(arr, position) {
  if (arr.length === 0 || position % arr.length === 0) {
    return arr;
  }

  position = position % arr.length;

  const rotateArray = arr.slice(-position).concat(arr.slice(0, -position));

  return rotateArray;
}

console.log(rotate(rotateArray, 3));

// Task 9:

function merge(arrOne, arrTwo) {
  const newarray = [];
  let i = 0;
  let j = 0;

  while (i < arrOne.length && j < arrTwo.length) {
    if (arrOne[i] < arrTwo[j]) {
      newarray.push(arrOne[i++]);
    } else {
      newarray.push(arrTwo[j++]);
    }
  }

  while (i < arrOne.length) {
    newarray.push(arrOne[i++]);
  }

  while (j < arrTwo.length) {
    newarray.push(arrTwo[j++]);
  }

  return newarray;
}

const arrOne = [1, 3, 5, 7, 9];
const arrTwo = [2, 4, 6, 8, 10, 12, 14, 16];

console.log(merge(arrOne, arrTwo));

// Activity 5: Daynamic programing

// Task 10:

// Task 11:
