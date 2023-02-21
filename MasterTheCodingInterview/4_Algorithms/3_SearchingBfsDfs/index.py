class Node:
    def __init__(self,val):
        self.val = val
        self.left = None
        self.right = None

class BinarySearchTree:
    def __init__(self):
        self.root = None

    def insert(self, val):
        new_node = Node(val)
        if self.root == None:
            self.root = new_node
            return
        temp = self.root
        while True:
            if new_node.val < temp.val:
                if temp.left == None:
                    temp.left = new_node
                    break
                else:
                    temp = temp.left
            elif new_node.val > temp.val:
                if temp.right == None:
                    temp.right = new_node
                    break
                else:
                    temp = temp.right

    def lookup(self,val):
      temp = self.root
      while True:
        if temp.val == val:
          return True
        elif temp == None:
          return False
        elif val < temp.val:
          temp = temp.left
        elif val > temp.val:
          temp = temp.right

    def breadthfirstsearch(self):
        currNode = self.root
        myList = []
        queue = []
        queue.append(currNode)
        while len(queue) > 0:
            currNode = queue[0]
            del queue[0]
            myList.append(currNode.val)
            if(currNode.left):
                queue.append(currNode.left)
            if(currNode.right):
                queue.append(currNode.right)
        return myList
    
    def recursivebfs(self, queue, mylist):
      if len(queue) == 0:
        return mylist
      currnode = queue[0]
      del queue[0]
      mylist.append(currnode.val)
      if currnode.left:
        queue.append(currnode.left)
      if currnode.right:
        queue.append(currnode.right)
    
    def inorder(self, currnode, mylist):
        if currnode != None:
            self.inorder(currnode.left, mylist)
            mylist.append(currnode.val)
            self.inorder(currnode.right, mylist)
        return mylist
    
    def preorder(self, currnode, mylist):
        if currnode != None:
            mylist.append(currnode.val)
            self.inorder(currnode.left, mylist)
            self.inorder(currnode.right, mylist)
        return mylist
    
    def postorder(self, currnode, mylist):
        if currnode.left:
            self.postorder(currnode.left, mylist)
        if currnode.right:
            self.postorder(currnode.right, mylist)
        mylist.append(currnode.val)
        return mylist

bst = BinarySearchTree()
bst.insert(9)
bst.insert(4)
bst.insert(6)
bst.insert(20)
bst.insert(170)
bst.insert(15)
bst.insert(1)

# print(bst.breadthfirstsearch())

print(bst.inorder(bst.root,[]))
print(bst.preorder(bst.root,[]))
print(bst.postorder(bst.root,[]))