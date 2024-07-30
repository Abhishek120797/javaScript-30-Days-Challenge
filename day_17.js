// Day 17: Data Structures

// Activity 1: Linked List

// Task 1:

class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

// Task 2:

class LinkedList {
  constructor() {
    this.head = null;
  }

  addNodeAtEnd(value) {
    const newNode = new Node(value);

    if (this.head === null) {
      this.head = newNode;
    } else {
      let temp = this.head;
      while (temp.next != null) {
        temp = temp.next;
      }
      temp.next = newNode;
    }
  }

  removeEndNode() {
    if (this.head === null) {
      return;
    }
    if (this.head.next === null) {
      this.head = null;
      return;
    }
    let temp = this.head;
    while (temp.next.next != null) {
      temp = temp.next;
    }
    temp.next = null;
  }

  displayList() {
    let temp = this.head;
    let listString = "";
    while (temp != null) {
      listString += temp.value + " -> ";
      temp = temp.next;
    }
    listString = listString + "null";
    console.log(listString);
  }
}

// const list = new LinkedList();

// list.addNodeAtEnd(1);
// list.addNodeAtEnd(2);
// list.addNodeAtEnd(3);
// list.addNodeAtEnd(4);
// list.displayList();
// list.removeEndNode();
// list.displayList();

// Activity 2: Stack

// Task 3:

class Stack {
  constructor() {
    this.list = new LinkedList();
  }

  push(value) {
    this.list.addNodeAtEnd(value);
  }

  pop() {
    let temp = this.list.head;
    while (temp.next != null) {
      temp = temp.next;
    }
    let lastValue = temp.value;
    this.list.removeEndNode();

    return lastValue;
  }

  peek() {
    if (this.list.head === null) {
      return null;
    }
    let temp = this.list.head;
    while (temp.next != null) {
      temp = temp.next;
    }
    return temp.value;
  }

  isEmpty() {
    if (this.list.head === null) {
      return true;
    } else {
      return false;
    }
  }

  displayStack() {
    this.list.displayList();
  }
}

// const stackList = new Stack();

// stackList.push(1);
// stackList.push(2);
// stackList.push(3);
// stackList.push(4);
// stackList.displayStack();
// console.log("Peek element : ", stackList.peek());
// console.log("poped element : ", stackList.pop());
// stackList.displayStack();
// console.log("Peek element : ", stackList.peek());

// // Task 4:
// let myString = "Abhishek jaiswal";
// const stringStack = new Stack();

// for (let char of myString) {
//   stringStack.push(char);
// }

// let reversedString = "";

// while (stringStack.list.head != null) {
//   reversedString += stringStack.pop();
// }
// console.log(reversedString);

// Activity 3: Queue

// Task 5:

class Queue {
  constructor() {
    this.list = new LinkedList();
  }

  enqueue(value) {
    this.list.addNodeAtEnd(value);
  }

  dequeue() {
    if (this.list.head === null) {
      return;
    }
    let firstValue = this.list.head.value;
    this.list.head = this.list.head.next;
    return firstValue;
  }

  frontElement() {
    if (this.list.head === null) {
      return null;
    } else {
      return this.list.head.value;
    }
  }

  isEmpty() {
    if (this.list.head === null) {
      return true;
    } else {
      return false;
    }
  }

  displayQueue() {
    this.list.displayList();
  }
}

// const queue = new Queue();

// queue.enqueue(1);
// queue.enqueue(2);
// queue.enqueue(3);
// queue.enqueue(4);
// queue.displayQueue();
// console.log("dequeued element :", queue.dequeue());
// queue.displayQueue();

// console.log("front element : ", queue.frontElement());

// Task 6:

// const printer = new Queue();

// printer.enqueue("first Document");
// printer.enqueue("second Document");
// printer.enqueue("third Document");
// console.log(printer.dequeue(), " printed");
// console.log(printer.dequeue(), " printed");
// console.log(printer.dequeue(), " printed");

// Activity 4:Binary Tree

// Task 7:

class TreeNode {
  constructor(value = null) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

// Task 8:

class BinaryTree {
  constructor() {
    this.root = null;
  }

  insertValue(value) {
    const newNode = new TreeNode(value);

    if (this.root === null) {
      this.root = newNode;
      return;
    }

    let currentNode = this.root;

    while (true) {
      if (value < currentNode.value) {
        if (currentNode.left === null) {
          currentNode.left = newNode;
          return;
        }
        currentNode = currentNode.left;
      } else {
        if (currentNode.right == null) {
          currentNode.right = newNode;
          return;
        }
        currentNode = currentNode.right;
      }
    }
  }

  inOrderTraversal(node = this.root) {
    if (node != null) {
      this.inOrderTraversal(node.left);
      console.log(node.value);
      this.inOrderTraversal(node.right);
    }
  }
}

// const binaryTree = new BinaryTree();

// binaryTree.insertValue(10);
// binaryTree.insertValue(5);
// binaryTree.insertValue(15);
// binaryTree.insertValue(3);
// binaryTree.insertValue(7);
// binaryTree.insertValue(12);
// binaryTree.insertValue(18);

// binaryTree.inOrderTraversal();

// Activity 5: Graph

// Task 9:

class Graph {
  constructor() {
    this.adjencyList = [];
  }

  addVertex(vertex) {
    if (!this.adjencyList[vertex]) {
      this.adjencyList[vertex] = new LinkedList();
    }
  }

  addEdge(vertexOne, vertexTwo) {
    if (!this.adjencyList[vertexOne]) {
      this.addVertex(vertexOne);
    }
    if (!this.adjencyList[vertexTwo]) {
      this.addVertex(vertexTwo);
    }

    this.adjencyList[vertexOne].addNodeAtEnd(vertexTwo);
    // this.adjencyList[vertexTwo].addNodeAtEnd(vertexOne); // uncomment for undirected graph
  }

  printGraph() {
    this.adjencyList.forEach((list, index) => {
      if (list != null) {
        process.stdout.write(index + " -> ");
        list.displayList();
      }
    });
  }

  DFS(startVertex) {
    const visited = new Array(this.adjencyList.length).fill(false);
    const stack = new Stack();

    stack.push(startVertex);
    visited[startVertex] = true;

    while (!stack.isEmpty()) {
      const currentVertex = stack.pop();
      console.log(currentVertex);

      let temp = this.adjencyList[currentVertex].head;

      while (temp != null) {
        if (!visited[temp.value]) {
          stack.push(temp.value);
          visited[temp.value] = true;
        }
        temp = temp.next;
      }
    }
  }

  BFS(startVertex) {
    const visited = new Array(this.adjencyList.length).fill(false);
    const queue = new Queue();

    queue.enqueue(startVertex);
    visited[startVertex] = true;

    while (!queue.isEmpty()) {
      const currentVertex = queue.dequeue();
      console.log(currentVertex);

      let temp = this.adjencyList[currentVertex].head;

      while (temp != null) {
        if (!visited[temp.value]) {
          queue.enqueue(temp.value);
          visited[temp.value] = true;
        }
        temp = temp.next;
      }
    }
  }
}

const graph = new Graph();

graph.addVertex(0);
graph.addVertex(1);
graph.addVertex(2);
graph.addVertex(3);
graph.addVertex(4);

graph.addEdge(0, 1);
graph.addEdge(0, 2);
graph.addEdge(1, 3);
graph.addEdge(2, 4);

graph.printGraph();

graph.DFS(0);

graph.BFS(0);

// Task 10:

//
