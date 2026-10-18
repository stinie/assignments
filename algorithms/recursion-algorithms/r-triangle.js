/*
MODULE: Algorithms in JavaScript
CATEGORY: Recursion Algorithms
EXERCISE: r Triangle
FILE: r-triangle.js

GOAL
Calculate the total number of blocks
in a triangle with a given number of rows.

Use recursion without loops or multiplication.

REASONING
1. Receive the number of rows.

2. Check the base case:
   - If rows === 0, return 0.
   - There are no blocks in an empty triangle.

3. Otherwise, add the current row's blocks
   to the total from the previous rows.

4. Call the function again with rows - 1.

5. Repeat until reaching the base case.

6. Return the total number of blocks.

💡 DISCOVERY
Recursion allows a function to call itself.

Each recursive call handles a smaller triangle.

The base case stops the recursive calls.

The function adds the blocks from each row
while the recursive calls return their results.

No loops or multiplication are needed.

NOTE
- rows represents the number of rows.
- Each row contains one more block than
  the row above it.
- rows === 0 is the base case.
- rows - 1 makes the problem smaller.
- The original exercise uses both triangle()
  and rTriangle() as function names.
- This solution consistently uses rTriangle().

MENTAL MODEL
Imagine building a triangle with blocks.

The top row has one block.
The next row has two blocks.
The next row has three blocks.

Recursion asks how many blocks are in
the smaller triangle above the current row.

Each returning call adds its own row.

The complete triangle contains
all the blocks added together.
*/

function rTriangle(rows) {
  if (rows === 0) {
    return 0;
  }

  return rows + rTriangle(rows - 1);
}

console.log(rTriangle(0)); // 0
console.log(rTriangle(1)); // 1
console.log(rTriangle(2)); // 3
console.log(rTriangle(4)); // 10