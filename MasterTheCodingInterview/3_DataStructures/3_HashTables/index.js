// Collisions slow down reading an writing in a hash table.

// Object
let user = {
  age: 54,
  name: "Kylie",
  magic: true,
  scream: function () {
    console.log("ahhhhh!");
  },
};
// console.log(user.age); // O(1)
// user.spell = "abra kadabra"; // O(1)
// console.log(user); // O(1)

// maps
const a = new Map();

// sets
const b = new Set();

class HashTable {
  // This is another way to instantiate an Array in Javascript
  constructor(size) {
    this.data = new Array(size);
  }

  // This generates a hash for us.
  _hash(key) {
    let hash = 0;
    for (let i = 0; i < key.length; i++) {
      hash = (hash + key.charCodeAt(i) * i) % this.data.length;
    }
    return hash;
  }

  set(key, value) {
    let address = this._hash(key);
    if (!this.data[address]) {
      this.data[address] = [];
    }
    this.data[address].push([key, value]);
    return this.data;
  }

  get(key) {
    let address = this._hash(key);
    const currentBucket = this.data[address];
    if (currentBucket.length) {
      for (let i = 0; i < currentBucket.length; i++) {
        if (currentBucket[i][0] === key) {
          return currentBucket[i][1];
        }
      }
    } // O(1)
    return undefined;
  }

  keys() {
    const keysArray = [];
    for (let i = 0; i < this.data.length; i++) {
      if (this.data[i]) {
        keysArray.push(this.data[i][0]);
      }
    }
    return keysArray;
  }
}

const myHashTable = new HashTable(50);
myHashTable.set("grapes", 10000);
myHashTable.set("apples", 54);
myHashTable.set("oranges", 2);
// console.log(myHashTable.keys());

// Google Question:
// Given an array = [2,5,1,2,3,5,1,2,4]:
// It should return 2
// Given an array = [2,1,1,2,3,5,1,2,4]:
// It should return 1
// Given an array = [2,3,4,5]:
// It should return undefined

// Iterative approach - T = O(n^2), S = O(1)
function firstRecurringCharacter(arr) {
  for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[i] === arr[j]) {
        return arr[i];
      }
    }
  }
  return "There are no duplicates.";
}

// HashTable approach - T = O(n), S = O(n)
function firstRecurringCharacter2(arr) {
  let hashMap = new Map();
  for (let i = 0; i < arr.length; i++) {
    // if this arr item doesnt exist in the map
    if (!hashMap[arr[i]]) {
      // add it to the map
      hashMap[arr[i]] = i;
    } else {
      // if it does exist then we just return that item
      return arr[i];
    }
  }
  console.log(undefined);
}

console.log(firstRecurringCharacter([2, 5, 1, 2, 3, 5, 1, 2, 4]));
console.log(firstRecurringCharacter2([2, 5, 5, 2, 3, 5, 1, 2, 4]));
