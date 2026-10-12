/*
 * Module: Algorithms in JavaScript
 * Category: Recursion Algorithms
 * Exercise: Factorial — Recursive vs. Iterative
 *
 * Goal: Calculate the factorial of a number using two approaches:
 * recursion (a function calling itself) and iteration (a loop).
 *
 * Note: This exercise focuses on understanding the algorithms.
 * I use fixed numbers and console.log() to test the functions,
 * without browser input, parsing, or input validation.
 */

// Recursive approach: count down to the base case, then return the results back up.
const recursiveFactorial = (number) => {
  // Base case: 0! and 1! are both 1.
  if (number === 0 || number === 1) {
    return 1;
  }

  // Recursive case: call the function with a smaller number.
  return number * recursiveFactorial(number - 1);
};

console.log(`Factorial of 3 (recursive): ${recursiveFactorial(3)}`);
console.log(`Factorial of 5 (recursive): ${recursiveFactorial(5)}`);


// Iterative approach: count backwards, updating the result at each step.
const iterativeFactorial = (number) => {
  let result = 1;

  for (let i = number; i >= 2; i--) {
    result *= i;
  }

  return result;
};

console.log(`Factorial of 3 (iterative): ${iterativeFactorial(3)}`);
console.log(`Factorial of 5 (iterative): ${iterativeFactorial(5)}`);