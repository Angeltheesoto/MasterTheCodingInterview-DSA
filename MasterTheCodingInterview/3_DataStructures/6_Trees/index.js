// Trees:

// Binary Trees:
class Node {
  constructor(value) {
    this.left = null;
    this.right = null;
    this.value = value;
  }
}

class BinarySearchTree {
  constructor() {
    this.root = null;
  }

  insert(value) {
    const newNode = new Node(value);
    if (!this.root) {
      this.root = newNode;
    } else {
      let curr = this.root;
      while (true) {
        if (value < curr.value) {
          if (!curr.left) {
            curr.left = newNode;
            return this;
          }
          curr = curr.left;
        } else {
          if (!curr.right) {
            curr.right = newNode;
            return this;
          }
          curr = curr.right;
        }
      }
    }
  }

  lookup(value) {
    if (!this.root) {
      console.log(false);
    } else {
      let curr = this.root;
      while (true) {
        if (value == curr.value) {
          return console.log(true);
        } else if (value < curr.value) {
          if (!curr.left) {
            return console.log(false);
          }
          curr = curr.left;
        } else {
          if (!curr.right) {
            return console.log(false);
          }
          curr = curr.right;
        }
      }
    }
  }

  // most likely you wont encounter in an interview.
  remove() {}
}

function traverse(node) {
  const tree = { value: node.value };
  tree.left = node.left === null ? null : traverse(node.left);
  tree.right = node.right === null ? null : traverse(node.right);
  return tree;
}

const bst = new BinarySearchTree();
bst.insert(10);
bst.insert(4);
bst.insert(6);
bst.insert(20);
bst.insert(170);
bst.insert(15);
bst.insert(1);
// bst.lookup(1);
// bst.remove(170)
console.log(JSON.stringify(traverse(bst.root)));

// Notes:
// function BinaryTreeNode(value) {
//   this.value = value;
//   this.left = null;
//   this.right = null;
// }
// levels of nodes:
// level 0: 2^0 = 1
// level 1: 2^1 = 2
// level 2: 2^2 = 4
// level 3: 2^3 = 8
// # of nodes = 2^h - 1;
// log nodes = steps
// log 100 = 2
// 10^2 = 100
