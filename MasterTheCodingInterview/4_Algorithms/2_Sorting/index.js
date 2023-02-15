// Sorting Algorithms:
const letters = ["a", "d", "z", "e", "r", "b"];
const basket = [2, 65, 34, 2, 1, 7, 8];
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
selectionSort(numbers);
console.log(numbers);
