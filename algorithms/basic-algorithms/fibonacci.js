/*
MODULE: Algorithms in JavaScript
CATEGORY: Basic Algorithms
EXERCISE: Fibonacci
FILE: fibonacci.js

GOAL
Calculate the sum of all Fibonacci numbers below a given limit,
starting with 0 and 1.

REASONING
1. Create a function that receives a limit.
2. Validate that the limit is a positive, finite number.
3. Initialize previous, current, and total.
4. Use a while loop while current is below the limit.
5. Add current to the running total before updating it.
6. Calculate next by adding previous and current.
7. Move the values forward and repeat.
8. Return the accumulated total.

💡 DISCOVERY
I learned to distinguish two different jobs:
next generates the next Fibonacci number,
while total remembers the accumulated sum.

The order of reassignment matters.
I collect the current number before moving forward.

A while loop continues as long as its condition is true.
I understand this when reading code, but want more
practice writing while loops independently.

EDGE CASE
I tested an emoji as input.

Without quotation marks, 🍅 causes a syntax error.
With quotation marks, "🍅" is a string that the
validation can recognize as invalid input.

💡 A syntax error means JavaScript cannot parse the code.
Invalid input means the code is valid, but the supplied
value does not meet the function's requirements.

MENTAL MODEL
Two children hold the previous and current numbers.

They add their numbers to create the next number.
Before moving forward, the current child puts
their number into a basket.

The basket keeps the running total.

The while loop keeps them moving until the limit
is reached. The function returns the basket's total.
*/

function sumFibonacci(limit) {

  let previous = 0;
  let current = 1;
  let total = 0;

   if (typeof limit !== "number" || !Number.isFinite(limit) || limit <= 0) {
    return "Please provide a positive, finite number.";
  }

  while (current < limit) {
    total += current;

    const next = previous + current;
    previous = current;
    current = next;
  }

  return total;
}

console.log(sumFibonacci(1000000)); // 2178308
console.log(sumFibonacci("🍅")); // Please provide a positive, finite number.