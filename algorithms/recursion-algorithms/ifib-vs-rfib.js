/*
MODULE: Algorithms in JavaScript
CATEGORY: Recursion Algorithms
EXERCISE: iFib vs rFib
FILE: ifib-vs-rfib.js

GOAL
Calculate the nth Fibonacci number using
two different approaches:
iteration and recursion.

REASONING
1. Receive a number n.

2. Check that n is a positive integer.

3. Iterative approach (iFib):
   - Start with the first two Fibonacci numbers.
   - Use a for loop to calculate the next number.
   - Remember the previous and current values.
   - Repeat until reaching position n.
   - Return the current value.

4. Recursive approach (rFib):
   - Check the base case.
   - The first two Fibonacci numbers are 1.
   - Otherwise, call the function recursively
     for the two preceding positions.
   - Add their results together.

5. Return the nth Fibonacci number.

💡 DISCOVERY
Iteration uses a loop to repeat calculations.

Recursion uses a function that calls itself.

The iterative approach remembers two values:
previous and current.

The recursive approach breaks the problem
into smaller versions of itself.

A base case stops the recursion.

Both approaches produce the same result.

NOTE
- iFib means iterative Fibonacci.
- rFib means recursive Fibonacci.
- n represents the position in the sequence.
- Number.isInteger() checks for whole numbers.
- Invalid input returns undefined.
- The sequence starts at position 1.
- The original exercise incorrectly states
  that fibonacci(7) returns 21.
  The correct result is 13.

MENTAL MODEL
Imagine a staircase of Fibonacci numbers.

Iteration climbs the staircase step by step,
remembering the previous two numbers.

Recursion asks smaller versions of the same
question until reaching the first two steps.

The answers are then combined on the way back.

Both journeys reach the same Fibonacci number.
*/

function iFib(n) {
  if (!Number.isInteger(n) || n < 1) {
    return undefined;
  }

  let previous = 1;
  let current = 1;

  for (let position = 3; position <= n; position++) {
    const next = previous + current;
    previous = current;
    current = next;
  }

  return current;
}

function rFib(n) {
  if (!Number.isInteger(n) || n < 1) {
    return undefined;
  }

  if (n <= 2) {
    return 1;
  }

  return rFib(n - 1) + rFib(n - 2);
}

console.log(iFib(1), rFib(1)); // 1 1
console.log(iFib(2), rFib(2)); // 1 1
console.log(iFib(3), rFib(3)); // 2 2
console.log(iFib(7), rFib(7)); // 13 13