/*
MODULE: Algorithms in JavaScript
CATEGORY: Recursion Algorithms
EXERCISE: Bunny Ears
FILE: bunny-ears.js

GOAL
Calculate the total number of ears
for a given number of bunnies.

Use recursion without loops or multiplication.

REASONING
1. Receive the number of bunnies.

2. Check the base case:
   - If bunnies === 0, return 0.
   - No bunnies means no ears.

3. Otherwise, count two ears
   for the current bunny.

4. Call the function again with bunnies - 1.

5. Repeat until reaching the base case.

6. Return the total number of ears.

💡 DISCOVERY
Recursion allows a function to call itself.

Each recursive call handles one fewer bunny.

The base case stops the recursive calls.

Each returning call adds two ears.

No loops or multiplication are needed.

NOTE
- bunnies represents the number of bunnies.
- Every bunny has exactly two ears.
- bunnies === 0 is the base case.
- bunnies - 1 makes the problem smaller.
- The function assumes a non-negative
  whole number of bunnies.

MENTAL MODEL
Imagine a group of bunnies.

Each bunny has two big floppy ears.

We count one bunny's ears,
then ask the same question about
the remaining bunnies.

When no bunnies remain, we stop.

As each answer returns,
we add another pair of ears.

The final result is the total
number of ears in the group.
*/

function bunnyEars(bunnies) {
  if (bunnies === 0) {
    return 0;
  }

  return 2 + bunnyEars(bunnies - 1);
}

console.log(bunnyEars(0)); // 0
console.log(bunnyEars(1)); // 2
console.log(bunnyEars(2)); // 4