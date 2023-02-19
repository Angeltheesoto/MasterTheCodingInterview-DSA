// Sorting Algorithms:
// const letters = ["a", "d", "z", "e", "r", "b"];
// const basket = [2, 65, 34, 2, 1, 7, 8];
// How you would think to sort it
// console.log(basket.sort());
// It uses the character code to sort the numbers.
// console.log("2".charCodeAt(0));
// console.log("65".charCodeAt(0));
// console.log("34".charCodeAt(0));
// console.log("7".charCodeAt(0));
// How to properly sort the function
// console.log(
//   basket.sort(function (a, b) {
//     return a - b;
//   })
// );

// Bubble sort: Time = O(n^2), Space = O(1)
const numbers = [99, 44, 6, 2, 1, 5, 63, 87, 283, 4, 0];
function bubbleSort(array) {
  const length = array.length;
  for (let i = 0; i < length; i++) {
    for (let j = 0; j < length; j++) {
      if (array[j] > array[j + 1]) {
        let temp = array[j];
        array[j] = array[j + 1];
        array[j + 1] = temp;
      }
    }
  }
}
// bubbleSort(numbers);
// console.log(numbers);

// Selection Sort: Time = O(n^2), Space = O(1)
const numbers2 = [99, 44, 6, 2, 1, 5, 63, 87, 283, 4, 0];
function selectionSort(array) {
  const length = array.length;
  for (let i = 0; i < length; i++) {
    let min = i;
    let temp = array[i];
    for (let j = i + 1; j < length; j++) {
      if (array[j] < array[min]) {
        min = j;
      }
    }
    array[i] = array[min];
    array[min] = temp;
  }
  return array;
}
// selectionSort(numbers2);
// console.log(numbers2);

// Insertion Sort: Time = O(n), Space = O(1)
const numbers3 = [99, 44, 6, 2, 1, 5, 63, 87, 283, 4, 0];
function insertionSort(array) {
  for (let i = 1; i < array.length; i++) {
    let numToInsert = array[i];
    let j = i - 1;
    while (j >= 0 && array[j] > numToInsert) {
      // console.table(array);
      array[j + 1] = array[j];
      j = j - 1;
    }
    array[j + 1] = numToInsert;
  }
}
// insertionSort(numbers3);
// console.log(numbers3);

// Merge Sort:
const numbers4 = [99, 44, 6, 2, 1, 5, 63, 87, 283, 4, 0];
function mergeSort(array) {
  if (array.length === 1) {
    return array;
  }
  // Split Array into right and left
  const length = array.length;
  const middle = Math.floor(length / 2);
  const left = array.slice(0, middle);
  const right = array.slice(middle);
  // console.log("left:", left);
  // console.log("right:", right);
  return merge(mergeSort(left), mergeSort(right));
}
function merge(left, right) {
  const result = [];
  let leftIndex = 0;
  let rightIndex = 0;
  while (leftIndex < left.length && rightIndex < right.length) {
    if (left[leftIndex] < right[rightIndex]) {
      result.push(left[leftIndex]);
      leftIndex++;
    } else {
      result.push(right[rightIndex]);
      rightIndex++;
    }
  }
  // console.log(left, right)
  return result.concat(left.slice(leftIndex)).concat(right.slice(rightIndex));
}
// mergeSort(numbers4);
// console.log(answer);

// Quick Sort:
const numbers5 = [99, 44, 6, 2, 1, 5, 63, 87, 283, 4, 0];
//
function quickSort(array, left, right) {
  let pivot;
  let partitionIndex;
  if (left < right) {
    pivot = right;
    partitionIndex = partition(array, pivot, left, right);
    // sort left and right
    quickSort(array, left, partitionIndex - 1);
    quickSort(array, partitionIndex + 1, right);
  }
  return array;
}
// divides values into parts
function partition(array, pivot, left, right) {
  let pivotValue = array[pivot];
  let partitionIndex = left;
  for (let i = left; i < right; i++) {
    if (array[i] < pivotValue) {
      swap(array, i, partitionIndex);
      partitionIndex++;
    }
  }
  swap(array, right, partitionIndex);
  return partitionIndex;
}
// swaps two indexes
function swap(array, firstIndex, secondIndex) {
  let temp = array[firstIndex];
  array[firstIndex] = array[secondIndex];
  array[secondIndex] = temp;
}
//Select first and last index as 2nd and 3rd parameters
quickSort(numbers5, 0, numbers5.length - 1);
console.log(numbers5);

// Practice:
//#1 - Sort 10 schools around your house by distance:
// Insertion sort, because the input size is small.

//#2 - eBay sorts listings by the current Bid amount:
// radix or counting sort, because a bid is usually a num between 1 and 100. Numbers that need to be sorted which is perfect for radix and counting.

//#3 - Sport scores on ESPN
// Quicksort, because its the most efficient. Doubt the scores will be sorted because theres so many diff kinds.

//#4 - Massive database (can't fit all into memory) needs to sort through past year's user data
// merge sort because if the data is so big you want to worry about the performance so a merge sort worst case is O(n log n).

//#5 - Almost sorted Udemy review data needs to update and add 2 new reviews
// Insertion sort, because the data might be huge and the previous data might already be sorted.

//#6 - Temperature Records for the past 50 years in Canada
// radix or counting sort, because if its dealing with only numbers. Else if it deals with decimals we use QUICK SORT.

//#7 - Large user name database needs to be sorted. Data is very random.
// merge sort if there is enough memory.
// quick sort if the data base is not large

//#8 - You want to teach sorting for the first time
// bubble sort because its used to teach people.
