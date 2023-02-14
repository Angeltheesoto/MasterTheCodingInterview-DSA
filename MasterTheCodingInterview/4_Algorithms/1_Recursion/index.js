// Recursion:

// let counter = 0;
// function inception() {
//   console.log(counter);
//   if (counter > 3) {
//     return "done!";
//   }
//   counter++;
//   // inception();
//   return inception();
// }
// console.log(inception());

// Write two functions that finds the factorial of any number. One should use recursive, the other should just use a for loop
function findFactorialRecursive(number) {
  if (number === 2) {
    return 2;
  }
  return number * findFactorialRecursive(number - 1);
}
function findFactorialIterative(number) {
  let answer = 1;
  if (number === 2) {
    answer = 2;
  }
  for (let i = number; i > 0; i--) {
    answer *= [i];
  }
  return answer;
}
// console.log(findFactorialRecursive(5));
// console.log(findFactorialIterative(5));

// Given a number N return the index value of the Fibonacci sequence, where the sequence is:
// 0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144 ...
// the pattern of the sequence is that each value is the sum of the 2 previous values, that means that for N=5 → 2+3
//For example: fibonacciRecursive(6) should return 8

// T = O(2^n) = Exponential
function fibonacciRecursive(n) {
  if (n < 2) {
    return n;
  }
  return fibonacciRecursive(n - 1) + n - 2;
}

// T = O(n) = logarithmic
function fibonacciIterative(n) {
  let arr = [0, 1];
  for (let i = 2; i <= n; i++) {
    arr[i] = arr[i - 1] + arr[i - 2];
  }
  return arr;
}

console.log(fibonacciRecursive(40));
// console.log(fibonacciIterative(10));
