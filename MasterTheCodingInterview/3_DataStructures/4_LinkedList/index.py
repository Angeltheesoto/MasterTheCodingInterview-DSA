# linked list in python

class Node():
    def __init__(self,data):
        self.data = data
        self.next = None
    
class LinkedList():
    
    def __init__(self):
        self.head = None
        self.tail = None
        self.length = 0

    def printList(self):
        curr = self.head
        while curr != None:
            print(curr.data, end = ' --> ')
            curr = curr.next
        print()
        print('Length = ' + str(self.length))

    def append(self, data):
        new_node = Node(data)
        if self.head == None:
            self.head = new_node
            self.tail = self.head
        else:
            self.tail.next = new_node
            self.tail = new_node
        self.length += 1

    def prepend(self, data):
        new_node = Node(data)
        new_node.next = self.head
        self.head = new_node
        self.length += 1

    def insert(self, index, data):
        new_node = Node(data)
        i = 0
        curr = self.head
        if index >= self.length:
            self.append(data)
        if index == 0:
            self.prepend(data)
        while i < self.length:
            if i == index - 1:
                # [NewNode pointer] = what [curr pointer] is
                new_node.next = curr.next
                # [curr pointer] = the [newnode location]
                curr.next = new_node
                break
            curr = curr.next
            i += 1
        self.length += 1

    def remove(self, index):
        curr = self.head
        i = 0
        if index >= self.length:
            print('Entered wrong index')
        if index == 0:
            self.head = self.head.next
            self.length -= 1
        while i < self.length:
            if i == index - 1:
                curr.next = curr.next.next
                self.length -= 1
                break
            i += 1
            curr = curr.next
    
    def reverse(self):
        prev = None
        self.tail = self.head
        while self.head != None:
            temp = self.head
            self.head = self.head.next
            temp.next = prev
            prev = temp
        self.head = temp

l = LinkedList()
l.append(10)
l.append(5)
l.append(6)
l.append(1)
l.insert(2, 99)

l.printList()

# Doubly Linked List
class Node2():
    def __init__(self,data):
        self.data = data
        self.next = None
        self.prev = None
    
class DoublyLinkedList():
    
    def __init__(self):
        self.head = None
        self.tail = None
        self.length = 0

    def printList(self):
        curr = self.head
        while curr != None:
            print(curr.data, end = ' <-> ')
            curr = curr.next
        print()
        print('Length = ' + str(self.length))

    def append(self, data):
        new_node = Node2(data)
        if self.head == None:
            self.head = new_node
            self.tail = self.head
        else:
            self.tail.next = new_node
            new_node.prev = self.tail
            self.tail = new_node
        self.length += 1

    def prepend(self, data):
        new_node = Node2(data)
        new_node.next = self.head
        self.head.prev = new_node
        self.head = new_node
        self.length += 1

    def insert(self, index, data):
        new_node = Node2(data)
        i = 0
        curr = self.head
        if index >= self.length:
            self.append(data)
        if index == 0:
            self.prepend(data)
        while i < self.length:
            if i == index - 1:
                # [NewNode pointer] = what [curr pointer] location i, which is the next node over.
                new_node.next = curr.next
                new_node.prev = curr
                # [curr pointer] = the [newnode location] is
                curr.next = new_node
                curr.next.prev = new_node
                break
            curr = curr.next
            i += 1
        self.length += 1

    def remove(self, index):
        curr = self.head
        i = 0
        if index >= self.length:
            print('Entered wrong index!')
        if index == 0:
            self.head = self.head.next
            self.length -= 1
        while i < self.length:
            if i == index - 1:
                curr.next = curr.next.next
                curr.next.next.prev = curr.next
                self.length -= 1
                break
            i += 1
            curr = curr.next
    
    def reverse(self):
        prev = None
        self.tail = self.head
        while self.head != None:
            temp = self.head
            self.head = self.head.next
            temp.next = prev
            prev = temp
        self.head = temp

l = DoublyLinkedList()
l.append(10)
l.append(5)
l.append(6)
l.append(1)
l.insert(2, 99)
l.remove(0)

l.printList()