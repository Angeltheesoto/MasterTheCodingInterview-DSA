// BFS + DFS (Searching)

// Example:All of these searches are in linear time. O(n)
let beasts = ["Centaur", "Godzilla", "Mosaura", "Minotaur", "Hydra", "Nessie"];
// 1. beasts.indexOf("Godzilla");
// 2. beasts.findIndex(function(item){
//   return item == 'Godzilla'
// })
// 3. beasts.find(function(item){
//   return item === 'Godzilla'
// })
// 4. beasts.includes('Godzilla')

// Quiz:
// ? If you know a solution is not far from the root of the tree:
// * BFS, because it searches by levels. Closes nodes
// ? If the tree is very deep and solutions are rare:
// * BFS, because DFS will take a really long time.
// ? If the tree is very wide:
// * DFS, because BFS will take a lot of memory.
// ? If solutions are frequent but located deep in the tree:
// * DFS, can find it quick since solutions are frequent.
// ? Determining whether a path exists between two nodes:
// * DFS, its what DFS is for.
// ? Finding the shortest path:
// * BFS

class Node {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
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
  remove(value) {
    if (!this.root) {
      return false;
    }
    let currentNode = this.root;
    let parentNode = null;
    while (currentNode) {
      if (value < currentNode.value) {
        parentNode = currentNode;
        currentNode = currentNode.left;
      } else if (value > currentNode.value) {
        parentNode = currentNode;
        currentNode = currentNode.right;
      } else if (currentNode.value === value) {
        //We have a match, get to work!

        //Option 1: No right child:
        if (currentNode.right === null) {
          if (parentNode === null) {
            this.root = currentNode.left;
          } else {
            //if parent > current value, make current left child a child of parent
            if (currentNode.value < parentNode.value) {
              parentNode.left = currentNode.left;

              //if parent < current value, make left child a right child of parent
            } else if (currentNode.value > parentNode.value) {
              parentNode.right = currentNode.left;
            }
          }

          //Option 2: Right child which doesnt have a left child
        } else if (currentNode.right.left === null) {
          currentNode.right.left = currentNode.left;
          if (parentNode === null) {
            this.root = currentNode.right;
          } else {
            //if parent > current, make right child of the left the parent
            if (currentNode.value < parentNode.value) {
              parentNode.left = currentNode.right;

              //if parent < current, make right child a right child of the parent
            } else if (currentNode.value > parentNode.value) {
              parentNode.right = currentNode.right;
            }
          }

          //Option 3: Right child that has a left child
        } else {
          //find the Right child's left most child
          let leftmost = currentNode.right.left;
          let leftmostParent = currentNode.right;
          while (leftmost.left !== null) {
            leftmostParent = leftmost;
            leftmost = leftmost.left;
          }

          //Parent's left subtree is now leftmost's right subtree
          leftmostParent.left = leftmost.right;
          leftmost.left = currentNode.left;
          leftmost.right = currentNode.right;

          if (parentNode === null) {
            this.root = leftmost;
          } else {
            if (currentNode.value < parentNode.value) {
              parentNode.left = leftmost;
            } else if (currentNode.value > parentNode.value) {
              parentNode.right = leftmost;
            }
          }
        }
        return true;
      }
    }
  }
  // Searching Algorithms

  // breadth first search
  breadthFirstSearch() {
    let currentNode = this.root;
    let list = []; // this is our answer.
    let queue = []; // Keeps track of the level we search for, we insert into list.
    queue.push(currentNode);
    while (queue.length > 0) {
      currentNode = queue.shift();
      list.push(currentNode.value);
      if (currentNode.left) {
        queue.push(currentNode.left);
      }
      if (currentNode.right) {
        queue.push(currentNode.right);
      }
    }
    console.log(list);
  }

  // breadth first search recursive
  breadthFirstSearchR(queue, list) {
    if (!queue.length) {
      return list;
    }
    let currentNode = queue.shift();
    list.push(currentNode.value);
    if (currentNode.left) {
      queue.push(currentNode.left);
    }
    if (currentNode.right) {
      queue.push(currentNode.right);
    }
    return this.breadthFirstSearchR(queue, list);
  }

  // DFS InOrder
  DFSInorder() {
    return traverseInOrder(this.root, []);
  }

  // DFS PreOrder
  DFSPreorder() {
    return traversePreOrder(this.root, []);
  }

  // DFS PostOrder
  DFSPostorder() {
    return traversePostOrder(this.root, []);
  }
}

// Traverse functions
function traverseInOrder(node, list) {
  if (node.left) {
    traverseInOrder(node.left, list);
  }
  list.push(node.value);
  if (node.right) {
    traverseInOrder(node.right, list);
  }
  return list;
}

function traversePreOrder(node, list) {
  list.push(node.value);
  if (node.left) {
    traversePreOrder(node.left, list);
  }
  if (node.right) {
    traversePreOrder(node.right, list);
  }
  return list;
}

function traversePostOrder(node, list) {
  if (node.left) {
    traversePostOrder(node.left, list);
  }
  if (node.right) {
    traversePostOrder(node.right, list);
  }
  list.push(node.value);
  return list;
}

function traverse(node) {
  const tree = { value: node.value };
  tree.left = node.left === null ? null : traverse(node.left);
  tree.right = node.right === null ? null : traverse(node.right);
  return tree;
}

const bst = new BinarySearchTree();
bst.insert(9);
bst.insert(4);
bst.insert(6);
bst.insert(20);
bst.insert(170);
bst.insert(15);
bst.insert(1);
// console.log(JSON.stringify(traverse(bst.root)));

// bst.breadthFirstSearch();
// console.log(bst.breadthFirstSearchR([bst.root], []));

console.log(bst.DFSInorder());
console.log(bst.DFSPreorder());
console.log(bst.DFSPostorder());

//       9
//    4     20
//  1  6  15  170
// BFS [9, 4, 20, 1, 6, 15, 170]
// DFS [9, 4, 1, 6, 20, 15, 170]
// InOrder - [1,4,6,9,15,20,170]
// PreOrder - [9,4,1,6,20,15,170]
// PostOrder - [1,6,4,15,170,20,9]
