// LeetCode Easy

// Activity 1: Two sum

// Task 1:

function twoSum(arr, target) {
  const diffHashMap = {};

  for (let i = 0; i < arr.length; i++) {
    const diff = target - arr[i];

    if (diffHashMap.hasOwnProperty(diff)) {
      return [diffHashMap[diff], i];
    }

    diffHashMap[arr[i]] = i;
  }

  return [];
}

const arrNum = [2, 7, 11, 15];
const target = 9;
console.log(twoSum(arrNum, target));

const arrNum2 = [0, 4, 3, 0];
const target2 = 0;
console.log(twoSum(arrNum2, target2));

const arrNum3 = [-1, -2, -3, -4, -5];
const target3 = -8;
console.log(twoSum(arrNum3, target3));

// Activity 2: Reverse Integer

// Task 2:

function reverseInteger(number) {
  let reverse = 0;
  let temp = Math.abs(number);

  while (temp != 0) {
    let rem = temp % 10;

    reverse = reverse * 10 + rem;
    temp = Math.floor(temp / 10);
  }

  return number < 0 ? -reverse : reverse;
}

console.log(reverseInteger(120));
console.log(reverseInteger(-123));
console.log(reverseInteger(123));

// Activity 3: Palindrome number

// Task 3:

function isNumberPalindrome(number) {
  if (number < 0) return false;

  let temp = number;
  let reverse = 0;

  while (temp != 0) {
    let rem = temp % 10;
    reverse = reverse * 10 + rem;
    temp = Math.floor(temp / 10);
  }
  return number === reverse ? true : false;
}

if (isNumberPalindrome(12321)) {
  console.log("Number is a palindorme");
} else {
  console.log("Number is not a palindrome");
}

if (isNumberPalindrome(-12321)) {
  console.log("Number is a palindorme");
} else {
  console.log("Number is not a palindrome");
}

if (isNumberPalindrome(12531)) {
  console.log("Number is a palindorme");
} else {
  console.log("Number is not a palindrome");
}

// Activity 4: Merge to sorted list

// Task 4:
class Node {
  constructor(value, next = null) {
    this.value = value;
    this.next = next;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
  }

  add(value) {
    const newNode = new Node(value);
    if (this.head === null) {
      this.head = newNode;
    } else {
      let temp = this.head;
      while (temp.next !== null) {
        temp = temp.next;
      }
      temp.next = newNode;
    }
  }

  print() {
    let temp = this.head;
    while (temp !== null) {
      process.stdout.write(temp.value.toString());
      if (temp.next !== null) {
        process.stdout.write(" -> ");
      }
      temp = temp.next;
    }
    console.log();
  }
}

const listOne = new LinkedList();
const listTwo = new LinkedList();

for (let i = 0; i < 10; i++) {
  listOne.add(i);
}
for (let i = 10; i < 21; i++) {
  listTwo.add(i);
}
listOne.print();
listTwo.print();
const listThree = mergeTwoSortedList(listOne, listTwo);
listThree.print();

function mergeTwoSortedList(listOne, listTwo) {
  let listOneTemp = listOne.head;
  let listTwoTemp = listTwo.head;
  const mergeList = new LinkedList();

  while (listOneTemp !== null && listTwoTemp != null) {
    if (listOneTemp.value < listTwoTemp.value) {
      mergeList.add(listOneTemp.value);
      listOneTemp = listOneTemp.next;
    } else {
      mergeList.add(listTwoTemp.value);
      listTwoTemp = listTwoTemp.next;
    }
  }

  while (listOneTemp !== null) {
    mergeList.add(listOneTemp.value);
    listOneTemp = listOneTemp.next;
  }

  while (listTwoTemp !== null) {
    mergeList.add(listTwoTemp.value);
    listTwoTemp = listTwoTemp.next;
  }

  return mergeList;
}

// Activity 5: Valid parentheses

// Task 5:

function isParenthesesValid(str) {
  const satck = [];

  const map = {
    "(": ")",
    "{": "}",
    "[": "]",
  };

  for (let char of str) {
    if (map[char]) {
      satck.push(map[char]);
    } else {
      if (satck.pop() != char) {
        return false;
      }
    }
  }
  return satck.length === 0;
}

const parantesis = "{[()]}}[]()()[()]";

if (isParenthesesValid(parantesis)) {
  console.log("Valid");
} else {
  console.log("Not Valid");
}
