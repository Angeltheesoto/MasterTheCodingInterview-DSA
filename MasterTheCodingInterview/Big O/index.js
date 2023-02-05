// My Big-O cheatsheet
// O(1) = Constant = Calculate not dependent on input size
// O(n) = Linear = 1 for loop
// O(n^2) = Quadratic = 2 for loop
// O(log n) = Logarithmic = input reduce by half

// ===============>
// This measures how much time it takes to run a function on your computer, but its not as important when it comes to Big O because everyone has different computers that run at different speeds.
// ===============>
// const nemo = ["nemo"];
// const everyone = [
//   "dory",
//   "bruce",
//   "marlin",
//   "nemo",
//   "gill",
//   "bloat",
//   "nigel",
//   "squirt",
//   "darla",
//   "hank",
// ];
// const large = new Array(100000).fill("nemo");
// function findNemo(array) {
//   let t0 = performance.now();
//   for (let i = 0; i < array.length; i++) {
//     if (array[i] === "nemo") {
//       console.log("Found NEMO!");
//     }
//   }
//   let t1 = performance.now();
//   console.log("Call to find Nemo took: " + (t1 - t0) + " milliseconds");
// }
// findNemo(large);
// O(n) ==> Linear Time
// As the input size grows the number of operations grows.

// ===============>
// This shows the time complexity stays constant with the operations everytime because the number of operations is limited to what you put in it.
// ===============>
// const boxes = [0, 1, 2, 3, 4];
// function logFirstTwoBoxes(boxes) {
//   console.log(boxes[0]); // O(1)
//   console.log(boxes[1]); // O(1)
// }
// logFirstTwoBoxes(boxes); // O(2)
// O(1) ==> constant Time
// It takes the same amount of time with the same number of operations.

// EXAMPLE: Rule Book(step2: Remove Constant)
// function printFirstItemThenFirstHalfThenSayHi100Times(items) {
//   console.log(items[0]); // O(1)
//   var middleIndex = Math.floor(items.length / 2); // O(n/2)
//   var index = 0; // O(1)

//   while (index < middleIndex) {
//     console.log(items[index]);
//     index++;
//   }
//   for (var i = 0; i < 100; i++) {
//     console.log("hi");
//   }
// }
// printFirstItemThenFirstHalfThenSayHi100Times();
// O(1 + n/2 + 100) = O(n/2 + 101) = O(n)

// EXAMPLE: Rule Book(step3: Different terms for inputs)
// function compressBoxesTwice(boxes) {
//   boxes.forEach(function (boxes) {
//     console.log(boxes);
//   });
//   boxes.forEach(function (boxes) {
//     console.log(boxes);
//   });
// }
// O(2n) = O(n)

// However if you pass two parameters..
// function compressBoxesTwice(boxes, boxes2) {
//   boxes.forEach(function (boxes) {
//     console.log(boxes);
//   });
//   boxes2.forEach(function (boxes) {
//     console.log(boxes);
//   });
// }
// O(a + b)

// Log all pairs of array
// When you see loop one after another we use addition(+) and if they are nested, we use multiplication(*).
// const boxes = ["a", "b", "c", "d", "e"];
// function logAllPairs(arr) {
//   for (let i = 0; i < arr.length; i++) {
//     for (let j = 0; j < arr.length; j++) {
//       console.log(arr[i], arr[j]);
//     }
//   }
// }
// logAllPairs(boxes);
// O(n * n) = O(n^2)

// function printAllNumbersThenAllPairSums(numbers) {
//   console.log("these are the numbers:");
//   numbers.forEach(function (number) {
//     // O(n)
//     console.log(number);
//   });
//   console.log("and these are their sums:");
//   numbers.forEach(function (firstNumber) {
//     // O(n)
//     numbers.forEach(function (secondNumber) {
//       // O(n)
//       console.log(firstNumber + secondNumber);
//     });
//   });
// }
// printAllNumbersThenAllPairSums([1, 2, 3, 4, 5]);
// O(n + (n * n)) = O(n + n^2) = O(2n^2)

// Testing space complexity:
// function booooo(n) {
//   for (let i = 0; i < n.length; i++) {
//     console.log("boooooo!");
//   }
// }

// booooo([1, 2, 3, 4, 5]); // T = O(n), M = O(1)

// function arrayOfHiNTimes(n) {
//   let hiArray = [];
//   for (let i = 0; i < n; i++) {
//     hiArray[i] = "hi";
//   }
//   console.log(hiArray);
// }
// arrayOfHiNTimes(6); // M = O(n), because we fill hiArray with n loops and ignore the variable i because its a constant.

// Assume your boss asks you to build a feature that allows anyone to click a button and retrieve their oldest tweet and newest tweet. What can we assume about this problem. based on big O notation
// 1. Find 1st, Find Nth...
// const array = [
//   {
//     tweet: "hi",
//     data: 2012,
//   },
//   {
//     tweet: "my",
//     data: 2014,
//   },
//   {
//     tweet: "teddy",
//     data: 2018,
//   },
// ]; // O(n^2)
// array[0]; // O(1)
// array[array.length - 1]; // O(1)
