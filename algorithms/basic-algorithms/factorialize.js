/*
MODULE: Algorithms in JavaScript
CATEGORY: Basic Algorithms
EXERCISE: Factorialize!
FILE: factorialize.js

GOAL
Create a function that calculates the factorial
of a non-negative integer.

REASONING
1. Receive an integer called n.

2. Initialize result to 1.
   Multiplication starts at 1, not 0.

3. Use a for loop starting at 2 and ending at n.

4. Multiply result by each number using *=.

   result *= number;

   This is shorthand for:
   result = result * number;

5. Return the final product.

💡 DISCOVERY
Starting result at 1 also handles 0!.

When n is 0, the loop never runs.
The function simply returns 1.

Starting the loop at 2 avoids an unnecessary
multiplication by 1.

MENTAL MODEL
A child walks along a row of number cards.

The child carries a basket called result,
which starts with the value 1.

At each card, the child multiplies the number
in the basket by the number on the card.

The basket remembers the growing product.

The for loop manages the walk.
The *= operator updates the basket.
The function returns the final product.
*/

function factorialize(n) {
  let result = 1;

  for (let number = 2; number <= n; number++) {
    result *= number;
  }

  return result;
}

console.log(factorialize(0));  // 1
console.log(factorialize(5));  // 120
console.log(factorialize(10)); // 3628800
console.log(factorialize(20)); // 2432902008176640000