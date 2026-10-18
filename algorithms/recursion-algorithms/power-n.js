/*
MODULE: Algorithms in JavaScript
CATEGORY: Recursion Algorithms
EXERCISE: Power N
FILE: power-n.js

GOAL
Calculate a number raised to a given power
using two different approaches:
iteration and recursion.

REASONING
1. Receive two numbers: base and n.

2. Iterative approach:
   - Start with result = 1.
   - Use a for loop to repeat n times.
   - Multiply result by base each time.
   - Return the final result.

3. Recursive approach:
   - Check the base case: n === 1.
   - Return base when n is 1.
   - Otherwise, call the function again
     with n reduced by 1.
   - Multiply base by the returned value.

4. Return the calculated power.

💡 DISCOVERY
Iteration uses a loop to repeat multiplication.

Recursion uses a function that calls itself.

The base stays the same during recursion.
The exponent n becomes smaller with each call.

A base case stops the recursive calls.

Both approaches produce the same result.

NOTE
- base is the number being multiplied.
- n is the exponent (the power).
- *= means multiply and assign.
- The exercise specifies base and n >= 1.
- The recursive solution uses n === 1
  as its base case.
- The original example uses exponent === 0,
  which is another valid base case.
- No built-in power function is needed.

MENTAL MODEL
Imagine building a tower of multiplication.

Iteration builds the tower step by step,
multiplying by the same number each time.

Recursion asks for a smaller tower first,
until reaching the simplest case.

Each returning call adds another multiplication.

Both approaches build the same result.
*/

function powerNIterative(base, n) {
  let result = 1;

  for (let count = 0; count < n; count++) {
    result *= base;
  }

  return result;
}

function powerNRecursive(base, n) {
  if (n === 1) {
    return base;
  }

  return base * powerNRecursive(base, n - 1);
}

console.log(powerNIterative(3, 1)); // 3
console.log(powerNIterative(3, 2)); // 9
console.log(powerNIterative(3, 3)); // 27

console.log(powerNRecursive(3, 1)); // 3
console.log(powerNRecursive(3, 2)); // 9
console.log(powerNRecursive(3, 3)); // 27