// Exercise 2 — Power
//
// Write a function pow(x, n) that returns x to the power n.
// In other words, multiply x by itself n times and return the result.
//
// The function only needs to support natural values of n:
// integers starting from 1.
//
// Examples:
//
// pow(3, 2) = 3 * 3 = 9
// pow(3, 3) = 3 * 3 * 3 = 27
// pow(1, 100) = 1 * 1 * ... * 1 = 1
//
// Solution:
//
// Start result at 1 because multiplication by 0 would always remain 0.
// The for loop runs n times.
// Each iteration multiplies the current result by x.
// After the loop has finished, return the final result.

function pow(x, n) {
  let result = 1;

  for (let i = 0; i < n; i++) {
    result = result * x;
  }

  return result;
}

// Kept for learning and testing:
// console.log(pow(3, 2)); // 9
// console.log(pow(3, 3)); // 27
// console.log(pow(1, 100)); // 1