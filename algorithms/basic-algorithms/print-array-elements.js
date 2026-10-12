/*
MODULE: Algorithms in JavaScript
CATEGORY: Basic Algorithms
EXERCISE: Print the Elements of an Array
FILE: print-array-elements.js

GOAL
Print each element of an array individually.
The solution must work with arrays of different lengths.

REASONING
1. Create an array called numbers.

2. Use for...of to visit each element directly:

   for (const number of numbers)

3. Print each number using console.log().

💡 DISCOVERY
I can use for...of when I need the values,
but not their indexes.

This makes the solution simpler:
no counter, index, or array length is needed.

MENTAL MODEL
A child walks along a row of number cards.

The loop hands the child one card at a time.
The child reads each number aloud.
*/

const numbers = [1, 4, 2, 12];

for (const number of numbers) {
  console.log(number);
}