/*
MODULE: Algorithms in JavaScript
CATEGORY: Professional Algorithms
EXERCISE: Magic Squares
FILE: magic-squares.js

GOAL
Determine whether a 3x3 grid is a magic square.

Every row, column, and major diagonal must sum to 15.

REASONING
1. Receive a flat array containing nine numbers.

2. Set the target sum to 15.

3. Use a for loop to check all three rows.
   Return false immediately if a row fails.

4. Use another for loop to check all three columns.
   Return false immediately if a column fails.

5. Calculate the sums of both major diagonals.

6. Return true only if both diagonal sums equal 15.

💡 DISCOVERY
A one-dimensional array can represent a 2D grid.

The positions are:

    0  1  2
    3  4  5
    6  7  8

The algorithm uses index calculations to find
the numbers belonging to each row and column.

This is called index mapping.

I want to practise understanding these index
calculations and writing them independently.

The function also uses early returns.
As soon as a row or column fails, no further
checks are necessary.

The final return combines two Boolean conditions
using the logical AND operator (&&).

MENTAL MODEL
A child inspects a square of nine number cards.

The child checks:
- Three horizontal rows.
- Three vertical columns.
- Two major diagonals.

Every line must add up to 15.

If any line fails, the child stops immediately
and reports false.

If every line passes, the result is true.

The loops manage the rows and columns.
The indexes identify the correct number cards.
The conditions check whether each sum is 15.
The function returns the final result.

NOTE
The assignment guarantees that the grid contains
the numbers 1 through 9 exactly once.
Additional input validation is not required.
*/

function isMagicSquare(grid) {
  const target = 15;

  // Check each row
  for (let row = 0; row < 3; row++) {
    const sum = grid[row * 3] + grid[row * 3 + 1] + grid[row * 3 + 2];
    if (sum !== target) return false;
  }

  // Check each column
  for (let column = 0; column < 3; column++) {
    const sum = grid[column] + grid[column + 3] + grid[column + 6];
    if (sum !== target) return false;
  }

  // Check both major diagonals
  const diagonal1 = grid[0] + grid[4] + grid[8];
  const diagonal2 = grid[2] + grid[4] + grid[6];

  return diagonal1 === target && diagonal2 === target;
}

console.log(isMagicSquare([8, 1, 6, 3, 5, 7, 4, 9, 2])); // true
console.log(isMagicSquare([2, 7, 6, 9, 5, 1, 4, 3, 8])); // true
console.log(isMagicSquare([3, 5, 7, 8, 1, 6, 4, 9, 2])); // false
console.log(isMagicSquare([8, 1, 6, 7, 5, 3, 4, 9, 2])); // false