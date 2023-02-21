function addTo80(n) {
  console.log("long time");
  return n + 80;
}
// console.log(addTo80(5));
// console.log(addTo80(5))

// this creates the cache to store the value so we don't do the calculation more than once.
function memoizedAddTo80() {
  let cache = {};
  return function (n) {
    if (n in cache) {
      return cache[n];
    } else {
      console.log("long time");
      cache[n] = n + 80;
      return cache[n];
    }
  };
}
const memoized = memoizedAddTo80();
// *console.log("1", memoized(5));
// *console.log("2", memoized(5));

// !Example of why dynamic programming is important:
// 0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144, 233...
let calculations = 0;
function fibonacci(n) {
  calculations++;
  if (n < 2) {
    return n;
  }
  return fibonacci(n - 1) + fibonacci(n - 2);
}
// *console.log(fibonacci(50));

function fibonacciMaster() {
  let cache = {};
  return function fib(n) {
    calculations++;
    if (n in cache) {
      return cache[n];
    } else {
      if (n < 2) {
        return n;
      } else {
        cache[n] = fib(n - 1) + fib(n - 2);
        return cache[n];
      }
    }
  };
}
function fibonacciMaster2(n) {
  let answer = [0, 1];
  for (let i = 2; i <= n; i++) {
    answer.push(answer[i - 2] + answer[i - 1]);
  }
  return answer.pop();
}
// *console.log("OP", fibonacci(43));
// *console.log("DP", fibonacciMaster(1476));
// *console.log("DP2", fibonacciMaster2(1476));
// *console.log("we did " + calculations + " calculations.");

// !Interview Questions: Dynamic Programming
// ?198 - House Robber - Array | Dynamic Programming
var rob = function (nums) {
  if (!nums.length) return 0;
  if (nums.length === 1) return nums[0];
  if (nums.length === 2) return Math.max(nums[0], nums[1]);
  for (let i = 2; i < nums.length; i++) {
    nums[i] = Math.max(nums[i - 2] + nums[i], (nums[i - 3] || 0) + nums[i]);
  }
  return Math.max(nums[nums.length - 1], nums[nums.length - 2]);
  // return cache;
};
// *console.log(rob([1, 2, 3, 1])); // 4
// *console.log(rob([2, 7, 9, 3, 1])); // 12
// *console.log(rob([1, 2])); // 2

// ?121 - Best Time to Buy and Sell - Array | Dynamic Programming
var maxProfit = function (prices) {
  let buy = prices[0];
  let profit = 0;
  let len = prices.length;
  for (let i = 1; i < len; i++) {
    if (buy > prices[i]) {
      buy = prices[i];
      prices[i] = 0;
    } else {
      profit = Math.max(prices[i] - buy, profit);
    }
  }
  return profit;
};
// *console.log(maxProfit([7, 1, 5, 3, 6, 4])); // 5
// *console.log(maxProfit([7, 6, 4, 3, 1])); // 0

// ?70 - Climbing Stairs - Math | Dynamic Programming | Memoization
var climbStairs = function (n) {
  const memo = [1, 1, 2];
  for (let i = 3; i <= n; i++) {
    memo[i] = memo[i - 1] + memo[i - 2];
  }
  return memo[n];
};
// *console.log(climbStairs(2)); // 2
// *console.log(climbStairs(3)); // 3
