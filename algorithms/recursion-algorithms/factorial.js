/*
 * Module: Algorithms in JavaScript
 * Category: Recursion Algorithms
 * Exercise: Factorial — Recursive vs. Iterative
 *
 * GOAL
 * Calculate the factorial of a number using two approaches:
 * recursion (a function calling itself) and iteration (a loop).
 *
 * REASONING — RECURSIVE
 * 1. Check whether the number is 0 or 1.
 * 2. If so, return 1. This is the base case.
 * 3. Otherwise, multiply the number by the factorial
 *    of the number before it.
 * 4. Keep calling the function with a smaller number
 *    until the base case is reached.
 * 5. Return the results back through the function calls.
 *
 * REASONING — ITERATIVE
 * 1. Start with a result of 1.
 * 2. Start counting backwards from the given number.
 * 3. Multiply the result by the current number.
 * 4. Decrease the counter by 1.
 * 5. Repeat until the counter is smaller than 2.
 * 6. Return the final result.
 *
 * NOTE
 * This exercise focuses on understanding the algorithms.
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