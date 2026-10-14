/*
MODULE: Algorithms in JavaScript
CATEGORY: Basic Algorithms — JS Intermediate
EXERCISE: Addition
FILE: addition.js

GOAL
Add all numbers from 200 to 2700, inclusive,
that are divisible by 3 or 5, but not both.

REASONING
1. Initialize total to 0.

2. Use a for loop from 200 through 2700.

3. Check divisibility using the modulo operator %.

4. Store the results in two Boolean variables:
   divisibleBy3 and divisibleBy5.

5. Compare the Boolean values using !==.

   If they are different, exactly one
   divisibility condition is true.

6. Add qualifying numbers to total using +=.

7. Print the final total.

💡 DISCOVERY
The !== operator can compare Boolean values.

When two conditions must be different,
this provides a concise way to express
"either one, but not both".

The condition is also known as
exclusive OR (XOR).

MENTAL MODEL
A child walks along a row of number cards.

Two gatekeepers examine each card:

Gatekeeper 3 checks divisibility by 3.
Gatekeeper 5 checks divisibility by 5.

If their answers are different,
the child adds the number to a basket.

If their answers are the same,
the child skips that number.

The for loop manages the walk.
The Boolean variables remember the answers.
The !== operator compares them.
total is the basket collecting the sum.
*/

let total = 0;

for (let number = 200; number <= 2700; number++) {
  const divisibleBy3 = number % 3 === 0;
  const divisibleBy5 = number % 5 === 0;

  if (divisibleBy3 !== divisibleBy5) {
    total += number;
  }
}

console.log(total); // 1450197