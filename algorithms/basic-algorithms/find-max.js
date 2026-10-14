/*
MODULE: Algorithms in JavaScript
CATEGORY: Basic Algorithms
EXERCISE: Find Max
FILE: find-max.js

GOAL
Find and return the largest number in an array,
including arrays containing negative numbers or zero.

REASONING
1. Receive an array called numbers.

2. Store the first element in a variable called maximum:

   let maximum = numbers[0];

   I initially considered starting with 0, but realized
   this would fail if all numbers were negative.
   I use let because maximum may change.

3. Use a for loop starting at index 1 because
   the first element is already stored in maximum.

4. Compare each remaining element with maximum:

   if (numbers[i] > maximum)

   If the current number is larger, update maximum:

   maximum = numbers[i];

5. If the current number is not larger, keep maximum.
   No else statement is needed.

6. Return maximum after the loop finishes,
   so every element has been examined.

NOTE
- numbers is the incoming array.
- numbers[i] is the element at the current index.
- numbers.length is the number of elements.
- maximum remembers the largest number found so far.
- Unlike map(), this function returns one number,
  not a new array.
- The input array is assumed to contain at least one number.

MENTAL MODEL
A child walks along a row of number cards,
holding a sign showing the largest number seen so far.

The first number goes on the sign.

At each following card, the child asks:
"Is this number bigger than the one on my sign?"

YES -> Update the sign.
NO  -> Keep the sign unchanged.

The loop manages the walk.
The if statement decides whether to update the sign.
The variable maximum remembers the current winner.
The function returns the final winner.
*/

function findMax(numbers) {
  let maximum = numbers[0];
  for (let i = 1; i < numbers.length; i++) {
    if (numbers[i] > maximum) {
      maximum = numbers[i];
    }
  }
  return maximum;
}

const x = [2, -3, -1];
const y = [2, -3, 5, -1];

console.log(findMax(x)); // 2
console.log(findMax(y)); // 5

/*
💡 DISCOVERY — BUILT-IN ALTERNATIVE
I wanted to explore another way to find the maximum
using JavaScript's built-in Math.max() function.

The spread syntax (...numbers) passes the array elements
as individual arguments to Math.max().

I can declare maximum again because the variable inside
findMax() has its own function scope.
*/

const numbers = [2, 8, 3, 11, 5];

const maximum = Math.max(...numbers);

console.log(maximum); // 11