/*
MODULE: Algorithms in JavaScript
CATEGORY: Professional Algorithms
EXERCISE: Sum All Odd Fibonacci
FILE: sum-all-odd-fibonacci.js

GOAL
Sum all odd Fibonacci numbers that are less than
or equal to the provided positive integer.

REASONING
1. Start the Fibonacci sequence with 1 and 1.

2. Initialize sum to 0.

3. Use a while loop to continue while
   previous is within the given limit.

4. Check whether previous is odd
   using the modulo operator (%).

5. If the number is odd, add it to sum.

6. Use destructuring assignment to move
   previous and current forward.

7. Return the accumulated sum.

💡 DISCOVERY
This exercise connects to my earlier
Fibonacci exercises.

The sequence is generated in the same way,
but this time I collect only odd numbers.

The while loop checks the limit.
The if statement decides what enters the basket.

Destructuring assignment updates both
Fibonacci variables together.

I want to revisit:
- while loops
- destructuring assignment
- running sums

MENTAL MODEL
Two children hold Fibonacci number cards.

A third child carries a basket.

The first child shows the number to inspect.

If the number is odd, it goes into the basket.
If it is even, the basket stays unchanged.

Then both children move to their next numbers.

The process continues until the limit is exceeded.

The while loop controls when to stop.
The modulo operator identifies odd numbers.
sum remembers the collected total.
return gives back the final sum.
*/

function sumFibs(num) {
  let previous = 1;
  let current = 1;
  let sum = 0;

  while (previous <= num) {
    if (previous % 2 !== 0) {
      sum += previous;
      // console.log(`Adding ${previous} to sum. New sum: ${sum}`); // Keep for debugging
    }

    [previous, current] = [current, previous + current];

  }

  return sum;
}

console.log(sumFibs(10)); // 10
console.log(sumFibs(4));  // 5

// Edge cases
console.log(sumFibs(1));  // 2
console.log(sumFibs(2));  // 2