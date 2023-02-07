// Example1:
// const strings = ["a", "b", "c", "d"];
// 4 * 4 = 16 bytes of storage

// console.log(strings[2]);

// push(): add item to end of array. O(1) operation
// pop(): removes an item from the end. O(1)
// shift(): add item to end of array. O(n)
// unshift(): add item to beginning of array. O(n)
// splice(2, 0, 'alien'): adds an item at a specific index. O(n/2)

// classes in JavaScript:
// refrence type
var object1 = { value: 10 };
var object2 = object1;
var object = { value: 10 };
// context vs scope
// scope is created when it sees curly brackets
// context tells you where we are within the object
function b() {
  let a = a;
}
// you can pack functions in objects
const object4 = {
  a: function () {
    console.log(this);
  },
};
// instantiation
// It is when you make a copy of an object and you reuse the code.
class Player {
  // constructure(When you create a class) says that every time you make a copy of player the first thing that runs is the constructure to give it those properties.
  constructor(name, type) {
    this.name = name;
    this.type = type;
  }
  introduce() {
    console.log(`Hi I am ${this.name}, I'm a ${this.type}`);
  }
}
class Wizard extends Player {
  constructor(name, type) {
    super(name, type);
  }
  play() {
    console.log(`WEEEEE I'm a ${this.type}`);
  }
}
const wizard1 = new Wizard("Shelly", "Healer");
const wizard2 = new Wizard("Shawn", "Dark Magic");

// Implementing An array:
class MyArray {
  constructor() {
    this.length = 0;
    this.data = {};
  }

  get(index) {
    return this.data[index];
  }

  push(item) {
    this.data[this.length] = item;
    this.length++;
    return this.length;
  }

  pop() {
    const lastItem = this.data[this.length - 1];
    delete this.data[this.length - 1];
    this.length--;
    return lastItem;
  }

  delete(index) {
    const item = this.data[index];
    this.shiftItems(index);
    return item;
  }

  // METHODS
  // T = O(a + b), S = O(1)
  deleteOdd() {
    console.log(this.data);
    for (let i = 0; i <= this.length; i += 2) {
      console.log(`Deleted: `, this.data[i]);
      // delete this.data[i];
      this.data[i] = this.data[i + 1];
    }
    // this shifts all items down to the right index
    for (let j = 1; j < this.length; j++) {
      this.data[j] = this.data[j + 2];
    }
    // this deletes half of the array that is not in use.
    this.deleteHalf();
  }

  deleteEven() {
    console.log(this.data);
    for (let i = 1; i < this.length + 1; i += 2) {
      console.log(`Deleted: `, this.data[i]);
      this.data[i] = this.data[i + 1];
    }
    for (let j = 2; j < this.length; j++) {
      this.data[j] = this.data[j + 2];
    }
    this.deleteHalf();
  }

  deleteHalf() {
    let lastItem = this.length - 1;
    let middleItem = Math.floor(this.length / 2);
    for (let i = lastItem; i >= middleItem; i--) {
      delete this.data[i];
      this.length--;
    }
  }

  shiftItems(index) {
    for (let i = index; i < this.length; i++) {
      this.data[i] = this.data[i + 1];
    }
    delete this.data[this.length - 1];
    this.length--;
  }
}

const newArray = new MyArray();
newArray.push("one");
newArray.push("two");
newArray.push("three");
newArray.push("four");
newArray.push("five");
newArray.push("six");
newArray.push("seven");
// console.log(newArray);

// Excercise: Reverse a string
// create a function that reverses a string:

// T = O(n), S = O(n)
function reverse(str) {
  if (!str || str.length < 2 || typeof str !== "string") {
    return str;
  }
  let reverseStr = [];
  for (let i = str.length - 1; i >= 0; i--) {
    reverseStr.push(str[i]);
  }
  return reverseStr.join("");
}
function reverse2(str) {
  return str.split("").reverse().join("");
}
const reverse3 = (str) => str.split("").reverse().join("");
const reverse4 = (str) => [...str].reverse().join("");

// console.log(reverse("Angel Soto"));
// console.log(reverse2("Angel Soto"));
// console.log(reverse3("Angel Soto"));
// console.log(reverse4("Angel Soto"));

// Excercise: Merge Sorted arrays
// Merge two sorted arrays into one sorted array.

function mergeSortedArrays(arr1, arr2) {
  let sortedArray = [];
  let pointerA = arr1[0];
  let pointerB = arr2[0];
  let i = 1;
  let j = 1;

  if (arr1.length === 0) {
    return arr2;
  }
  if (arr2.length === 0) {
    return arr1;
  }

  while (pointerA || pointerB) {
    console.log(pointerA, pointerB);
    if (!pointerB || pointerA < pointerB) {
      sortedArray.push(pointerA);
      pointerA = arr1[i];
      i++;
    } else {
      sortedArray.push(pointerB);
      pointerB = arr2[j];
      j++;
    }
  }
  return sortedArray;
}

const arr1 = [0, 3, 4, 31];
const arr2 = [4, 6, 30];
console.log(mergeSortedArrays(arr1, arr2));
