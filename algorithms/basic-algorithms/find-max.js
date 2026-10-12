/*
MODULE: Algorithms in JavaScript
CATEGORY: Basic Algorithms
EXERCISE: Find Max
FILE: find-max.js

GOAL
Find and return the largest number in an array.
The solution must also work when the array contains
negative numbers or zero.

REASONING
1. Create a function that receives an array called numbers.

2. We need to remember the largest number found so far.
   This value may change as we examine the array,
   so we use let instead of const.

3. Initialize maximum with the first element:

   let maximum = numbers[0];

   We do NOT initialize maximum with 0.

   WHY?
   If every number in the array is negative, 0 would
   incorrectly remain the maximum, even though 0
   does not appear in the array.

4. Use a for loop to walk through the array.

   Start at index 1 because we have already used
   the element at index 0 to initialize maximum.

   numbers.length tells us how many elements
   the array contains.

5. During each iteration, numbers[i] represents
   the current element we are examining.

6. Compare the current element with maximum:

   if (numbers[i] > maximum)

   If the current number is larger, update maximum:

   maximum = numbers[i];

7. If the current number is NOT larger, do nothing.
   There is no need for an else statement.

8. Continue until every remaining element
   has been examined.

9. Return maximum AFTER the loop has finished,
   but still INSIDE the function.

   Returning inside the loop would stop the search
   before we had examined all the numbers.

IMPORTANT DISTINCTIONS
- numbers is the function parameter: the incoming array.
- numbers[i] is one element of that array.
- i is the index that keeps track of our current position.
- maximum remembers the largest value encountered so far.
- We use let because maximum may need to be reassigned.
- Unlike map(), we are NOT creating a new array.
- We return one value: the largest number.

ASSUMPTION
The input array contains at least one number.
An empty array would need separate handling.

MENTAL MODEL
Imagine a child walking along a row of number cards.

The child carries a sign that says:
"Largest number I have seen so far."

The child starts by writing the first number
on the sign.

At each following card, the child asks:
"Is this number bigger than the number on my sign?"

YES -> Replace the number on the sign.
NO  -> Keep the sign unchanged.

Only after examining every card does the child
announce the largest number.

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