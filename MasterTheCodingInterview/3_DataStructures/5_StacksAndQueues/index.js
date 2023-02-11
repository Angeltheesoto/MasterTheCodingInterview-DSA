// Stacks: Linked List
class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}
class Stack {
  constructor() {
    this.top = null;
    this.bottom = null;
    this.length = 0;
  }

  printStack() {
    const array = [];
    let currentNode = this.top;
    while (currentNode !== null) {
      array.push(currentNode.value + "->");
      currentNode = currentNode.next;
    }
    console.log("Length: ", this.length);
    console.log(array);
  }

  // see very top element
  peek() {
    console.log(this.top.value);
  }

  // add element to top of stack
  push(value) {
    const newNode = new Node(value);
    if (this.length == 0) {
      this.top = newNode;
      this.bottom = newNode;
    } else {
      const pointer = this.top;
      this.top = newNode;
      this.top.next = pointer;
    }

    this.length += 1;
  }

  // remove element from top of stack
  pop() {
    if (!this.top) {
      console.log(null);
    }
    if (this.top === this.bottom) {
      this.bottom = null;
    }
    this.top = this.top.next;
    this.length -= 1;
  }

  // check if stack is empty
  isEmpty() {
    console.log(this.length === 0);
  }
}
const myStack = new Stack();
myStack.push(1);
myStack.push(2);
myStack.push(3);
myStack.push(4);
myStack.pop();
// myStack.printStack();
// console.log(myStack);
// myStack.isEmpty();
// myStack.peek();

// Stacks: Arrays
class Stack2 {
  constructor() {
    this.array = [];
  }

  // see very top element
  peek() {
    console.log(this.array[this.array.length - 1]);
  }

  // add element to top of stack
  push(value) {
    this.array.push(value);
  }

  // remove element from top of stack
  pop() {
    this.array.pop();
  }

  // check if stack is empty
  isEmpty() {
    console.log(this.length === 0);
  }
}
const myStack2 = new Stack2();
myStack2.push(1);
myStack2.push(2);
myStack2.push(3);
myStack2.push(4);
myStack2.pop();
// console.log(myStack2);
// myStack.isEmpty();
// myStack.peek();

// Queues: Linked List
class Node2 {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}
class Queue {
  constructor() {
    this.first = null;
    this.last = null;
    this.length = 0;
  }

  printStack() {
    const array = [];
    let currentNode = this.first;
    while (currentNode !== null) {
      array.push(currentNode.value + "->");
      currentNode = currentNode.next;
    }
    console.log("Length: ", this.length);
    console.log(array);
  }

  // see first element
  peek() {
    console.log(this.first);
  }

  // add element to the queue
  enqueue(value) {
    const new_node = new Node2(value);
    if (this.length === 0) {
      this.first = new_node;
      this.last = new_node;
    } else {
      this.last.next = new_node;
      this.last = new_node;
    }
    this.length += 1;
  }

  // remove first element from the queue
  dequeue() {
    if (!this.first) {
      return null;
    }
    if (this.first === this.last) {
      this.last = null;
    }
    // const pointer = this.first;
    this.first = this.first.next;
    this.length -= 1;
  }

  // check if its empty
  isEmpty() {
    console.log(this.length === 0);
  }
}
const myQueue = new Queue();
myQueue.enqueue(1);
myQueue.enqueue(2);
myQueue.enqueue(3);
myQueue.enqueue(4);
myQueue.dequeue();
// console.log(myQueue);
// myQueue.printStack();

// Queues: Use Stack to implement Queue
var MyQueue = function () {
  this.stack = [];
};

MyQueue.prototype.printStack = function () {
  console.log(this);
};

MyQueue.prototype.push = function (value) {
  this.stack.push(value);
  console.log(this);
};

MyQueue.prototype.pop = function () {
  const length = this.stack.length;
  for (let i = 0; i < length; i++) {
    if (i) {
      console.log(i);
      break;
    }
  }
  // console.log(this.stack[0]);
};
// let i = length - 1; i >= 0; i--

MyQueue.prototype.peek = function () {
  console.log(this.stack[0]);
};

MyQueue.prototype.empty = function () {
  const length = this.stack.length;
  for (let i = 0; i < length; i++) {
    if (this.stack[i] === "undefined") {
      return true;
    }
  }
  // console.log(this.stack.length === 0);
};

// Your MyQueue object will be instantiated and called as such:
var obj = new MyQueue();
// obj.push([]);
// obj.push(1);
// obj.push(2);
// obj.push([]);
// obj.push([]);
// obj.push([]);

// obj.push([]);
// obj.push(1);
// obj.push([]);
// obj.push([]);

// obj.printStack();
// obj.empty();
// obj.pop();
