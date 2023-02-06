// Interview exercise:
// Given 2 arrays, create a function that let's a user know (true/false) whether these two arrays contain any common items
// For Example:
// const array1 = ['a', 'b', 'c', 'x']
// const array2 = ['z', 'y', 'i']
// Should return false
// 2 paramaters - arrays - no size limit
// return true or false

// Video code walkthrough
// T = O(a*b), M = O(1)
// function commonItems(arr1, arr2) {
//   for (let i = 0; i < arr1.length; i++) {
//     for (let j = 0; j < arr2.length; j++) {
//       if (arr1[i] === arr2[j]) {
//         return true;
//       }
//     }
//   }
//   return false;
// }

// T = O(a + b), M = O(a)
// function commonItems(arr1, arr2) {
//   // 1. Loop through first array and create object where properties === items in the arr
//   let hashmap = {};
//   for (let i = 0; i < arr1.length; i++) {
//     if (!hashmap[arr1[i]]) {
//       const item = arr1[i];
//       hashmap[item] = true;
//     }
//   }
//   // return hashmap;

//   // 2. loop through second array and check if item in second array exists on created object.
//   for (let j = 0; j < arr2.length; j++) {
//     if (hashmap[arr2[j]]) {
//       return true;
//     }
//   }
//   return false;
// }

// Make it more readable
function commonItems(arr1, arr2) {
  return arr1.some((item) => arr2.includes(item));
}

console.log(commonItems(["a", "b", "c", "x"], ["z", "y", "x"]));
