// Exercise 5 — Minimum
//
// Write a function min(a, b) that returns the least of
// the two numbers a and b.
//
// Use an arrow function together with the ternary operator (?).
//
// The arrow function has two parameters: a and b.
// The ternary operator checks which number is smaller.
// Because the function contains a single expression,
// the result is returned implicitly without writing return.

// Solution:
const min = (a, b) => a < b ? a : b;

// Kept for learning and testing:
// console.log(min(2, 5)); // 2
// console.log(min(3, -1)); // -1
// console.log(min(1, 1)); // 1
// console.log(min(8, 3)); // 3