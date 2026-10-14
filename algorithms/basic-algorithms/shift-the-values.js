/*
MODULE: Algorithms in JavaScript
CATEGORY: Basic Algorithms — JS Intermediate
EXERCISE: Shift the Values
FILE: shift-the-values.js

GOAL
Reverse the order of the elements in an array.

REASONING
1. Receive an array called array.

2. Use spread syntax [...array] to create a copy.

3. Apply reverse() to reverse the copied array.

4. Return the reversed copy.

💡 DISCOVERY
The assignment says "shift", but its expected
output actually reverses the entire array.

I used reverse() to match the given example.

reverse() is a mutating array method.
It changes the array on which it is called.

By creating a copy with spread syntax first,
I can reverse the values without modifying
the original array.

MENTAL MODEL
A row of children holds number cards.

First, I create a second row with copies
of their cards.

Then the second row turns around.

The last child becomes the first.
The first child becomes the last.

The original row stays unchanged.

Spread syntax creates the copy.
reverse() changes the order of the copy.
return gives back the reversed array.
*/

function shiftValues(array) {
  return [...array].reverse();
}

const values = [2, 1, 6, 4, -7];
const shoppingList = ["🍅", "🥚🥚🥚", "🍪", "🍞", "🍏", "🥑", "🍌🍌🍌"];

console.log(shiftValues(values)); // [-7, 4, 6, 1, 2]
console.log(shiftValues(shoppingList)); // ["🍌🍌🍌", "🥑", "🍏", "🍞", "🍪", "🥚🥚🥚", "🍅"]