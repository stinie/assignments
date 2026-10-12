/*
MODULE: Algorithms in JavaScript
CATEGORY: Basic Algorithms
EXERCISE: Get Average
FILE: get-average.js

GOAL
Calculate and return the average of all numbers in an array.

REASONING
1. Receive an array called numbers.

2. Create a variable to hold the running total:

   let total = 0;

   I use let because the total changes as numbers are added.

3. Use a for...of loop to visit each number:

   for (const number of numbers)

   I discovered that for...of gives me the actual values
   directly, without needing to work with array indexes.

4. Add each number to the running total:

   total += number;

   This is shorthand for total = total + number.

5. After the loop, divide the total by the number
   of elements in the array:

   return total / numbers.length;

   The function returns one number: the average.

NOTE
- numbers is the incoming array.
- number represents one element during each iteration.
- numbers.length tells me how many elements are present.
- const number works because each iteration creates
  a new binding for the current element.
- for...of is useful when I need values, not indexes.
- Unlike map(), this loop does not create a new array.

VALIDATION
I assume the input is a nonempty array of numbers.
I deliberately leave out input validation and error
handling to focus on understanding the algorithm.

An empty array would cause division by zero.
Validation can be added when needed.

MENTAL MODEL
A child walks along a row of number cards,
carrying a basket for the running total.

The for...of loop hands the child one number at a time.
The child adds each number to the basket.

After visiting every card, the child divides
the total by the number of cards.

The loop collects the sum.
The array length provides the count.
The function returns the average.
*/

function getAverage(numbers) {
  let total = 0;

  for (const number of numbers) {
    total += number;
  }

  return total / numbers.length;
}

const numbers = [2, 1, 3];
console.log(getAverage(numbers)); //  2
console.log(getAverage([2, 6, 12, 5])); //  6.25
console.log(getAverage([2, 6, -5.5, 5])); //  1.625