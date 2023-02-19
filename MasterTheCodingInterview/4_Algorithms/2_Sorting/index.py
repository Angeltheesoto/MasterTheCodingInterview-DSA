# Sorting Algorithms
arr = [99, 44, 6, 2, 1, 5, 63, 87, 283, 4, 0];

# Bubble Sort
def bubble_sort(arr):
    for i in range(len(arr)):
        j = i + 1
        for j in range(len(arr)):
            if arr[i] < arr[j]:
                temp = arr[i]
                arr[i] = arr[j]
                arr[j] = temp
    return arr
# print(bubble_sort(arr))

# Selection Sort
def selection_sort(arr):
    i = 0
    for i in range(len(arr)):
      min = i
      for j in range(i+1,len(arr)):
        if arr[j] < arr[min]:
          min = j
      arr[i] , arr[min] = arr[min] , arr[i]
      i += 1
    return arr
# print(selection_sort(arr))

# Insertion Sort
def insertion_sort(arr):
    for i in range(1, len(arr)):
      numToInsert = arr[i]
      j = i - 1
      while j >= 0 and arr[j] > numToInsert:
          arr[j+1] = arr[j]
          j -= 1
      arr[j+1] = numToInsert
    return arr
# print(insertion_sort(arr))

# Merge Sort
def merge_sort(arr):
  if len(arr) == 1:
    return arr
  length = len(arr)
  mid = length // 2
  left = arr[:mid]
  right = arr[mid:]
  # print('Left {}'.format(left))
  # print('Right {}'.format(right))
  return merge(merge_sort(left),merge_sort(right))

def merge(left,right):
  result = []
  leftindex = 0
  rightindex = 0
  while leftindex < len(left) and rightindex < len(right):
    if left[leftindex] < right[rightindex]:
      result.append(left[leftindex])
      leftindex += 1
    else:
      result.append(right[rightindex])
      rightindex += 1
  # print(left,right)
  # print( result + left[leftindex:] + right[rightindex:] )
  return result + left[leftindex:] + right[rightindex:]

# print(merge_sort(arr))

# Quick Sort
def quick_sort(arr, left, right):
    ln = len(arr)
    if left < right:
        pivot = right
        partitionindex = partition(arr, pivot, left, right)

        quick_sort(arr, left, partitionindex -1)
        quick_sort(arr, partitionindex +1, right)
    return arr

def partition(array, pivot, left, right):
    pivotvalue = array[pivot]
    partitionindex = left
    for i in range(left,right):
        if array[i] < pivotvalue:
            swap(array, i, partitionindex)
            partitionindex += 1
    swap(array, right, partitionindex)
    return partitionindex

def swap(array, firstindex, secondindex):
    temp = array[firstindex]
    array[firstindex] = array[secondindex]
    array[secondindex] = temp

# print(quick_sort(arr, 0, len(arr)-1))