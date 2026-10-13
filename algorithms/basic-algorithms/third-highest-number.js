/*
MODULE: Algorithms in JavaScript
CATEGORY: Basic Algorithms
EXERCISE: 3rd Highest Number in Array
FILE: third-highest-number.js

GOAL
Find the third-highest number in an array using only one loop.

REASONING
1. Initialize first, second, and third with -Infinity.
2. Use for...of to visit each number directly.
3. Compare the number with the three current highest values.
4. Update only the positions that need to change.
5. Display the third-highest number after the loop.

💡 DISCOVERY
I learned how to track three values simultaneously.

JavaScript executes assignments from top to bottom.
When an if condition is true, the following else if
conditions are skipped.

-Infinity is a special JavaScript numeric value
smaller than every finite number.
Unlike 0, it allows negative numbers to be ranked.

EDGE CASES
I tested positive numbers, negative numbers,
duplicate values, and arrays with fewer than three elements.

I chose to count duplicates as separate positions.
Ranking only distinct values would be another interpretation.

For fewer than three elements, I display a message
instead of returning -Infinity.

TESTING
I keep different test arrays commented out for
learning, debugging, and future reference.
I uncomment one array at a time.

MENTAL MODEL
Three children stand on a winners' podium.

Each new child is compared with the current winners.
Only the necessary positions change.

The loop visits each child once.
The conditions determine who takes each position.
*/

const input = [2, 5, 3, 1, 4];
// const input = [5, 2, 8, 20, -2, 0, 11, 7, 3, 9, 31];
// const input = [5, 5, 4, 3, 2];
// const input = [-8, -3, -12, -1];
// const input = [-8, -3];

let first = -Infinity;
let second = -Infinity;
let third = -Infinity;

for (const number of input) {
  if (number > first) {
    third = second;
    second = first;
    first = number;
  } else if (number > second) {
    third = second;
    second = number;
  } else if (number > third) {
    third = number;
  }
}

if (input.length < 3) {
  console.log("No third-highest number exists.");
} else {
  console.log(third);
}