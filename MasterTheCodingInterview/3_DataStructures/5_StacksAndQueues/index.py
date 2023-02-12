# Stacks: Linked List
class Node:
    def __init__(self, value):
        self.value = value
        self.next = None

class Stack:
    def __init__(self):
        self.top = None
        self.bottom = None
        self.length = 0

    def printList(self):
        temp = self.top
        li = list()
        if self.length == 0:
            print('list is empty.')
        else:
          while temp != None:
            li.append(temp.value)
            li.append('-->')
            temp = temp.next
          li.append('null')
          print(li)
          print(self.length)
    
    def peek(self):
        if self.length == 0:
            print('Nothing to peek.')
        else:
          print(self.top.value)
    
    def push(self, value):
        new_node = Node(value)
        if self.length == 0:
            self.top = new_node
            self.bottom = new_node
        else:
            new_node.next = self.top
            self.top = new_node
        self.length += 1
    
    def pop(self):
        if self.length == 0:
            print('Nothing to pop.')
        else:
          temp = self.top
          self.top = self.top.next
          temp.next = None
          self.length -= 1
    
myStack = Stack()
# myStack.push(1)
# myStack.push(2)
# myStack.push(3)
# myStack.printList()
# myStack.pop()
myStack.peek()
myStack.printList()

# Stacks: Arrays

