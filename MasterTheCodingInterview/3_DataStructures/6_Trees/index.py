# Trees:
# Binary Search Tree:
class Node:
    def __init__(self, value):
      self.left = None
      self.right = None
      self.value = value

class BinarySearchTree:
    def __init__(self):
      self.root = None

    def insert(self, value):
      new_node = Node(value)
      if self.root == None:
        self.root = new_node
      else:
        curr = self.root
        while(curr):
          if(value < curr.value):
            if(curr.left == None):
              curr.left = new_node
              return
            else:
              curr = curr.left
          else:
            if(curr.right == None):
              curr.right = new_node
              return
            else:
              curr = curr.right

    def lookup(self, value):
      curr = self.root
      while curr:
        if curr == None:
          print(False)
          return
        if curr.value == value:
          print(True)
          return
        elif (value < self.root.value):
            if not curr.left:
              print(False)
              return
            else:
              curr = curr.left
        else:
          if not curr.right:
            print(False)
            return
          else:
            curr = curr.right
      
    def remove(self,data):
      if self.root == None:
          return False

      currentNode = self.root
      parentNode = None

      while currentNode:
          if data < currentNode.data:
              parentNode = currentNode
              currentNode = currentNode.left
          elif data > currentNode.data:
              parentNode = currentNode
              currentNode = currentNode.right
          elif data == currentNode.data:
              # We have a match, get to work!

              # Option 1: No right child:
              if currentNode.right == None:
                  if parentNode == None:
                      self.root = currentNode.left
                  else:
                      #if parent > current data, make current left child a child of parent
                      if currentNode.data < parentNode.data:
                          parentNode.left = currentNode.left
                      #if parent < current data, make left child a right child of parent
                      elif currentNode.data > parentNode.data:
                          parentNode.right = currentNode.left

              #Option 2: Right child which doesnt have a left child
              elif currentNode.right.left == None:
                  currentNode.right.left = currentNode.left
                  if parentNode == None:
                      self.root = currentNode.right
                  else:
                      #//if parent > current, make right child of the left the parent
                      if currentNode.data < parentNode.data:
                          parentNode.left = currentNode.right
                      #//if parent < current, make right child a right child of the parent
                      elif currentNode.data > parentNode.data:
                          parentNode.right = currentNode.right


              #Option 3: Right child that has a left child
              else:
                  #find the Right child's left most child
                  leftmost = currentNode.right.left
                  leftmostParent = currentNode.right
                  while leftmost.left != None:
                      leftmostParent = leftmost
                      leftmost = leftmost.left

                  #Parent's left subtree is now leftmost's right subtree
                  leftmostParent.left = leftmost.right
                  leftmost.left = currentNode.left
                  leftmost.right = currentNode.right

                  if parentNode == None:
                      self.root = leftmost
                  else:
                      if currentNode.data < parentNode.data:
                          parentNode.left = leftmost
                      elif currentNode.data > parentNode.data:
                          parentNode.right = leftmost
          return True

    # Inorder Traversal (we get sorted order of elements in tree)
    def print_tree(self):
      if self.root != None:
          self.printt(self.root)
    def printt(self, curr_node):
      if curr_node != None:
          self.printt(curr_node.left)
          print(str(curr_node.value))
          self.printt(curr_node.right)

if __name__ == '__main__':
    myTree = BinarySearchTree()
    myTree.insert(10)
    myTree.insert(5)
    myTree.insert(6)
    myTree.insert(12)
    # myTree.printt(myTree.root)
    myTree.print_tree()
    myTree.lookup(100)