/*
MODULE: Algorithms in JavaScript
CATEGORY: Basic Algorithms — JS Intermediate
EXERCISE: Remove the Negative
FILE: remove-the-negative.js

GOAL
Remove all negative numbers from an array.
Keep positive numbers and zero.
Return a new array.

REASONING
1. Receive an array called numbers.

2. Use filter() to examine every number.

3. Provide an arrow function as a callback:

   number => number >= 0

4. Keep numbers that satisfy the condition.

5. Return the filtered array.

💡 DISCOVERY
filter() creates a new array containing only
elements that pass the condition.

Unlike map(), which transforms each element,
filter() decides which elements remain.

The arrow function uses an implicit return.
Because there are no curly braces, the result
of the comparison is returned automatically.

MENTAL MODEL
A row of children holds number cards.

Each child approaches a gate called filter().

The gatekeeper asks:
"Is this number zero or greater?"

YES -> The child passes through.
NO  -> The child stays behind.

The children who pass form a new row.
The original row remains unchanged.

filter() manages the selection.
The callback checks each number.
return gives back the filtered array.
*/

function removeNegatives(numbers) {
  return numbers.filter((number) => number >= 0);
}

const values = [1, -2, 4, 1];

console.log(removeNegatives(values)); // [1, 4, 1]
console.log(removeNegatives([1, -2, 4, 11, -5, 0])); // [1, 4, 11, 0]
console.log(removeNegatives([1, -2, 4, 11, -5, 0, -100, 55])); // [1, 4, 11, 0, 55]