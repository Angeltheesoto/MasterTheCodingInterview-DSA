// GOOGLE INTERVIEW QUESTION-

// Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.

/*
Things to note:
1. collection of nums
2. find a matching pair that is equal to a sum
*/

const array = [7, 2, 4, 1, 3];
const sum = 11;

// steps brute force: T = O(a*b), M = O(1)
function doesPairEqualSum(arr, sum) {
  // 1. Create a for loop to loop through the array checking every element.
  for (let i = 0; i < arr.length; i++) {
    // 2. Create a second for loop to compare each element that is not the first iteration.
    for (let j = i + 1; j < arr.length; j++) {
      // a. If the first iterator plus the second iterator is equal to the sum. we return true
      if (arr[i] + arr[j] == sum) {
        return true;
      }
    }
  }
  // 3. else we return false
  return false;
}

// steps hashmap: T = O(a), M = O(a)
function doesPairEqualSum2(arr, sum) {
  // 1. create a set to store value if visited
  let set = new Set();
  // 2. Create a for loop to loop through the array.
  for (let i = 0; i < arr.length; i++) {
    // a. if the array item is in the set then we return true.
    if (arr[i] === set[i]) {
      return true;
    }
    // b. else if it's not then we add the item minus the sum to the set.
    let item = sum - arr[i];
    set.add(item);
  }
  // 3. else if the array is finished and we didnt find anything we return false
  return false;
}

// console.log(doesPairEqualSum(array, sum));
console.log(doesPairEqualSum2(array, sum));
