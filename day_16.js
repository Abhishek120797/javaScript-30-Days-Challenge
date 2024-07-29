// Task 1:

function factorial(num) {
  if (num <= 1) {
    return 1;
  }
  return num * factorial(num - 1);
}

console.log("Factorial of 5 is ", factorial(5));
console.log("Factorial of 1 is ", factorial(1));
console.log("Factorial of 0 is ", factorial(0));

// Task 2:
function febonacciNthTerm(num) {
  if (num <= 1) {
    return num;
  }
  return febonacciNthTerm(num - 1) + febonacciNthTerm(num - 2);
}

console.log("10th term in febonacci series is ", febonacciNthTerm(10));
console.log("1st term in febonacci series is ", febonacciNthTerm(1));
console.log("2nd term in febonacci series is ", febonacciNthTerm(2));
console.log("3rd term in febonacci series is ", febonacciNthTerm(3));

// Task 3:

function sumArrayElement(arr) {
  if (arr.length === 0) {
    return 0;
  }
  return arr[0] + sumArrayElement(arr.slice(1));
}
const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const sum = sumArrayElement(arr);
console.log("sum of ", arr, " is ", sum);

// task 4:

function findMax(arr) {
  if (arr.length === 1) {
    return arr[0];
  }
  const max = findMax(arr.slice(1));

  return arr[0] > max ? arr[0] : max;
}

const maxArr = [1, 8, 6, 7, 14, 56, 0, 3, 6, 9];
console.log("Max element is array ", maxArr, " is ", findMax(maxArr));

// task 5:

function reverseString(str) {
  if (str.length === 1) {
    return str;
  }
  return reverseString(str.slice(1)) + str[0];
}
let str = "Abhishek";
console.log("revers of string ", str, " is ", reverseString(str));

// Task 6:

function isPalindrome(str) {
  str = str.toLowerCase();
  if (str.length <= 1) {
    return true;
  }
  if (str[0] === str[str.length - 1]) {
    return isPalindrome(str.slice(1, -1));
  } else {
    return false;
  }
}

console.log(isPalindrome("racecar"));
console.log(isPalindrome("level"));
console.log(isPalindrome("madam"));

// Task 7:

const sortedArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];

function binarySearch(arr, target, left = 0, right = arr.length - 1) {
  if (left > right) {
    return -1;
  }

  let mid = Math.floor((left + right) / 2);

  if (arr[mid] === target) {
    return mid;
  } else if (arr[mid] < target) {
    return binarySearch(arr, target, mid + 1, right);
  } else {
    return binarySearch(arr, target, left, mid - 1);
  }
}
let index = binarySearch(sortedArray, 13);
if (index >= 0) {
  console.log("Element found at index ", index);
}

// Task 8:
function countOccurence(arr, element, index = 0) {
  if (index == arr.length) {
    return 0;
  }

  if (arr[index] === element) {
    return 1 + countOccurence(arr, element, index + 1);
  } else {
    return countOccurence(arr, element, index + 1);
  }
}

const duplicatArr = [
  1, 2, 3, 1, 3, 4, 2, 1, 5, 6, 3, 2, 1, 6, 7, 8, 4, 7, 2, 1,
];

let count = countOccurence(duplicatArr, 1);
console.log("accurence of 1 is ", count);

// Task 9:

class TreeNode {
  constructor(key) {
    this.left = null;
    this.right = null;
    this.val = key;
  }
}

function inOrderTraversal(root) {
  if (root != null) {
    inOrderTraversal(root.left);

    console.log(root.val);

    inOrderTraversal(root.right);
  }
}

let root = new TreeNode(4);
root.left = new TreeNode(2);
root.right = new TreeNode(6);
root.left.left = new TreeNode(1);
root.left.right = new TreeNode(3);
root.right.left = new TreeNode(5);
root.right.right = new TreeNode(7);
root.right.right.left = new TreeNode(15);
root.left.right.right = new TreeNode(20);

inOrderTraversal(root);
// Task 10:

function findDepth(root) {
  if (root === null) {
    return 0;
  } else {
    let leftDepth = findDepth(root.left);
    let rightDepth = findDepth(root.right);

    return Math.max(leftDepth, rightDepth) + 1;
  }
}
console.log("Depth of the binary tree is: " + findDepth(root));
