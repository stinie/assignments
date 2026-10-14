/*
MODULE: Algorithms in JavaScript
CATEGORY: Intermediate Algorithms
EXERCISE: Fibonacci Sequence
FILE: fibonacci-sequence.js

GOAL
Return the n-th term of the Fibonacci sequence.

The sequence starts with 1, 1.
Each following term is the sum of the previous two.

The solution must support very large Fibonacci numbers.

REASONING
1. Receive a positive integer called n.

2. If n is 1 or 2, return 1n.

3. Initialize previous and current to 1n.

4. Use a for loop starting at term 3
   and continuing through n.

5. Calculate the next Fibonacci number.

6. Use destructuring assignment to update
   previous and current together.

7. Return current, which holds the n-th term.

INPUT VALIDATION
The function accepts positive integers only.

Before calculating, I check whether n is an integer
and greater than zero.

Invalid inputs return an explanatory message.

💡 DISCOVERY — INPUT VALIDATION
This is another example of an early return.

The function checks whether the input is valid
before continuing with the algorithm.

I also want to revisit:

- BigInt: When and why to use it.
- Destructuring assignment: How two variables
  can be updated together without losing values.
- Input validation: How to handle unexpected values.

These concepts are still new to me.
I can follow the solution, but need more practice
using them independently.

💡 DISCOVERY
This exercise builds on my earlier Fibonacci exercise.

Previously, I calculated the SUM of Fibonacci values.
Now I need to return ONE specific term.

I am learning two new concepts:

1. BigInt
   The n suffix represents an integer using BigInt.
   This allows calculations beyond JavaScript's
   maximum safe integer.

2. Destructuring Assignment
   I can update two variables together:

   [previous, current] = [current, previous + current];

   JavaScript evaluates the right side first,
   so the previous values are not lost.

The function assumes n is a positive integer.

MENTAL MODEL
Two children hold number cards.

Both start with 1.

At every step, they create the next number
by adding their current numbers together.

The first child receives the second child's number.
The second child receives the newly calculated number.

Destructuring assignment moves both cards
without losing their previous values.

The for loop counts the sequence positions.

When the required position is reached,
the function returns the current number.
*/


function fibonacciBigInt(n) {
  if (!Number.isInteger(n) || n <= 0) {
    return "Please provide a positive integer.";
  }

  if (n <= 2) {
    return 1n;
  }

  let previous = 1n;
  let current = 1n;

  for (let term = 3; term <= n; term++) {
    [previous, current] = [current, previous + current];
  }

  return current;
}

// Valid inputs
console.log(fibonacciBigInt(4).toString()); // 3
console.log(fibonacciBigInt(7).toString()); // 13
console.log(fibonacciBigInt(43).toString()); // 433494437
console.log(fibonacciBigInt(100).toString()); // 354224848179261915075
console.log(fibonacciBigInt(881).toString()); // 12200160415121876738... (a very large number)

// Edge cases
console.log(fibonacciBigInt(0));  // Please provide a positive integer.
console.log(fibonacciBigInt(-5)); // Please provide a positive integer.
console.log(fibonacciBigInt(2.5)); // Please provide a positive integer.
console.log(fibonacciBigInt("🍅")); // Please provide a positive integer.