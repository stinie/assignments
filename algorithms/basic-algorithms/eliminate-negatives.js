/*
MODULE: Algorithms in JavaScript
CATEGORY: Basic Algorithms
EXERCISE: Eliminate the Negatives
FILE: eliminate-negatives.js

GOAL
Replace all negative numbers in an array with 0.
Keep positive numbers and zero unchanged.
Return a new array.

REASONING
1. Receive an array called arr.

2. Use map() to visit each number and create a new array.

3. Check whether the current number is negative:

   if (number < 0)

4. Return 0 for negative numbers.
   Otherwise, return the original number.

5. Store the new array in result and return it.

💡 DISCOVERY
The exercise is called "Eliminate the Negatives".

I initially interpreted "eliminate" as removing
negative numbers, so I thought about filter().

But the assignment actually asks me to REPLACE
negative numbers with 0, not remove them.

I therefore named my function replaceNegatives()
because it describes what the function actually does.

NOTE
- filter() removes elements that fail a condition.
- map() transforms elements while preserving their positions.
- The original array remains unchanged.
- No input validation is needed for this exercise.

MENTAL MODEL
filter() decides which cards stay in the row.
map() decides what appears on each card.

The callback chooses the replacement.
map() builds the new array.
*/

function replaceNegatives(arr) {
  // arr is the incoming array
  const result = arr.map((number) => {
    if (number < 0) {
      return 0;
    }
    return number;
  });
  return result;
}

const x = [2, -1, 4, -3];
const y = [-2, -1, 14, -3, 0];
console.log(replaceNegatives(x)); //  [2, 0, 4, 0]  
console.log(replaceNegatives(y)); //  [0, 0, 14, 0, 0]