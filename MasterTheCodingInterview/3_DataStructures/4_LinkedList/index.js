const basket = ["apples", "grapes", "pears"];

// linked list: [[apples, 8947] --> [grapes, 8742] --> [pears, 372] --> [null]]
/*
  apples
  8947   --->  grapes
                8742 ---> pears
                          372   ---> null
*/

// const obj1 = { a: true };
// const obj2 = obj1;
// obj1.a = "booya";
// delete obj1;
// obj2 = "hello";

// console.log("1", obj1);
// console.log("2", obj2);

// create a linked list
// 10 --> 5 --> 16
// let myLinkedList = {
//   head: {
//     value: 10,
//     next: {
//       value: 5,
//       next: {
//         value: 16,
//         next: null,
//       },
//     },
//   },
// };

class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class LinkedList {
  constructor(value) {
    (this.head = {
      value: value,
      next: null,
    }),
      (this.tail = this.head);
    this.length = 1;
  }

  append(value) {
    const newNode = new Node(value);
    this.tail.next = newNode;
    this.tail = newNode;
    this.length++;
  }

  prepend(value) {
    const newNode = new Node(value);
    newNode.next = this.head;
    this.head = newNode;
    this.length++;
  }

  printList() {
    const array = [];
    let currentNode = this.head;
    while (currentNode !== null) {
      array.push(currentNode.value + "-->");
      currentNode = currentNode.next;
    }
    array.push("null");
    console.log("Length: ", this.length);
    console.log(array);
  }

  insert(index, value) {
    const newNode = new Node(value);
    if (index >= this.length) {
      return this.append(value);
    }
    let curr = this.head;
    for (let i = 0; i < index - 1; i++) {
      curr = curr.next;
    }
    newNode.next = curr.next;
    curr.next = newNode;
    this.length++;
  }

  remove(index) {
    if (index > this.length) {
      index = null;
    }
    let curr = this.head;
    for (let i = 0; i < index - 1; i++) {
      curr = curr.next;
    }
    curr.next = curr.next.next;
    this.length--;
  }

  // our list to reverse:
  // [] = head, {} = head.next, () = tail
  // [1 <-- [10] --> {16} --> (88) --> null]
  reverse() {
    // This is the first node or the head node = [1]
    let first = this.head;
    // first item becomes the tail.
    this.tail = this.head;
    // This is the second node = scond = [10]
    let second = first.next;
    while (second) {
      // pointer that points to third element = [16]
      let third = second.next;
      // pointer of [10] points to [1]
      second.next = first;
      // head equals second element = [10]
      first = second;
      // [10] = [16]
      second = third;
    }
    // head points to null = [10] --> null
    this.head.next = null;
    // last index becomes the head.
    this.head = first;
  }
}

const myLinkedList = new LinkedList(1);
myLinkedList.append(10);
myLinkedList.append(16);
myLinkedList.append(88);
// myLinkedList.insert(2, 99);
// myLinkedList.remove(2);
// myLinkedList.remove(1);
// console.log(myLinkedList);
myLinkedList.printList();
myLinkedList.reverse();
myLinkedList.printList();

// Doubly Linked List
class Node2 {
  constructor(value) {
    (this.value = value), (this.next = null), (this.prev = null);
  }
}

class DoublyLinkedList {
  constructor(value) {
    (this.head = {
      value: value,
      next: null,
      prev: null,
    }),
      (this.tail = this.head);
    this.length = 1;
  }

  printList() {
    const array = [];
    let currentNode = this.head;
    while (currentNode !== null) {
      array.push("<-" + currentNode.value + "->");
      currentNode = currentNode.next;
    }
    console.log("Length: ", this.length);
    console.log(array);
  }

  append(value) {
    const newNode = new Node2(value);
    newNode.prev = this.tail;
    this.tail.next = newNode;
    this.tail = newNode;
    this.length++;
  }

  prepend(value) {
    const newNode = new Node(value);
    newNode.next = this.head;
    this.head.prev = newNode;
    this.head = newNode;
    this.length++;
  }

  insert(index, value) {
    const newNode = new Node(value);
    if (index >= this.length) {
      return this.append(value);
    }
    let curr = this.head;
    for (let i = 0; i < index - 1; i++) {
      curr = curr.next;
    }
    newNode.next = curr.next;
    newNode.prev = curr;
    curr.next = newNode;
    curr.next.prev = newNode;
    this.length++;
  }

  remove(index) {
    if (index > this.length) {
      index = null;
    }
    let curr = this.head;
    for (let i = 0; i < index - 1; i++) {
      curr = curr.next;
    }
    curr.next = curr.next.next;
    curr.next.next.prev = curr.next;
    this.length--;
  }
}

const myDoublyLinkedList = new DoublyLinkedList(1);
myDoublyLinkedList.append(10);
myDoublyLinkedList.append(16);
myDoublyLinkedList.append(88);
myDoublyLinkedList.prepend(3);
myDoublyLinkedList.insert(2, 6);
myDoublyLinkedList.remove(2);
// myDoublyLinkedList.printList();
