/*
MODULE: Algorithms in JavaScript
CATEGORY: Basic Algorithms
EXERCISE: Sum of Printed Numbers
FILE: sum-of-printed-numbers.js

GOAL
Print every number from 1 to 135, together with
the running sum. Do not use an array.

REASONING
1. Initialize sum at 0 to start with an empty total.

2. Use a for loop starting at 1, not 0,
   because the assignment asks for numbers from 1 to 135.

3. Use number <= 135 to include 135 in the loop.

4. Add each number to the running total:

   sum += number;

5. Print the current number and updated sum
   during each iteration using a template literal.

6. After the loop, print the final sum.

NOTE
- sum uses let because its value changes.
- sum is declared outside the loop so it retains
  its value between iterations.
- No array or object is needed.
- No function is required for this exercise.

MENTAL MODEL
A child counts from 1 to 135 while keeping
a running total on a piece of paper.

Each new number is added to the total.
The child announces both numbers before continuing.

The loop manages the counting.
The variable sum remembers the total.
*/

let sum = 0;

for (let number = 1; number <= 135; number++) {
  sum += number;
  console.log(`Number is: ${number} Sum: ${sum}`);
}
console.log(`Final sum: ${sum}`);