strings = ['a', 'b', 'c', 'd']
# 4*4 = 16 bytes of storage is used

# print(strings[2])

# push
strings.append('e')  # O(1)
# pop
strings.pop()
strings.pop()  # O(n)

# addFirstelement
strings.insert(0, 'x')  # O(n)

# splice
strings.insert(2, 'alien')  # O(n)

# print(strings)

# Array native python methods:
# append() - Adds an element at the end of the list.
# clear() - Removes all the elements from the list.
# copy() - Returns a copy of the list.
# count() - Returns the number of elements with the specified value.
# extend() - Add the elements of a list (or any iterable), to the end of the current list.
# index() - Returns the index of the first element with the specified value.
# insert() - Adds an element at the specified position.
# pop() - Removes the element at the specified position.
# remove() - Removes the first item with the specified value.
# reverse() - Reverses the order of the list.
# sort() - Sorts the list.

# List objects in python are implemented as arrays.
# They are optimized for fast fixed-length operations and incur O(n) memory movement costs for pop(0) and insert(0, v)
# operations which change both the size and position of the underlying data representation.

# classes in python:
class Array:
    def __init__(self):
        self.length = 0
        self.data = {}

    def __str__(self):
        return str(self.__dict__)

    def get(self, index):
        return self.data[index]

    def push(self, item):
        self.data[self.length] = item
        self.length += 1

    def pop(self):
        lastitem = self.data[self.length - 1]
        del self.data[self.length - 1]
        self.length -= 1
        return lastitem
    
    def delete(self, index):
        deleteditem = self.data[index]
        lastindex = self.length - 1
        for i in range(index, lastindex):
            self.data[i] = self.data[i+1]
        del self.data[self.length-1]
        self.length -= 1
        return deleteditem

arr = Array()
arr.push('a')
arr.push('b')
arr.push('c')
arr.push('d')
arr.push('e')
# print(arr.delete(2))
# print(arr)


# Excercise: Reverse a string
# create a function that reverses a string:
def reverse_string(string):
    li = []
    for i in range(len(string)-1,-1,-1):
    # range(str val, increment val, end check val)
        li.append(string[i])
    return ''.join(li)

def reverse_string2(string):
    return string[::-1]

# print(reverse_string('Angel Soto'))
# print(reverse_string2('Angel Soto'))

# Excercise: Merge two arrays
# create a function that combines two sorted arrays:
def merge_two_arrays(arr1, arr2):
    if len(arr1) == 0 or len(arr2) == 0:
        return arr2+arr1
    mergedArray = []
    i = 0
    j = 0
    while i < len(arr1) and j < len(arr2):
        if arr1[i] <= arr2[j]:
            mergedArray.append(arr1[i])
            i+=1
        else:
            mergedArray.append(arr2[j])
            j+=1
    return mergedArray

# print(merge_two_arrays([1,3,4,6,20], [2,3,4,5,6,9,11,76]))