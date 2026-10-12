/*
MODULE: Algorithms in JavaScript
CATEGORY: Basic Algorithms
EXERCISE: Print Odd Numbers 1–135
FILE: print-odd-numbers.js

GOAL
Print all odd numbers from 1 to 135.

REASONING
1. Use a for loop starting at 1 and ending at 135.

2. Use the modulo operator % to check the remainder
   when dividing a number by 2.

3. Print the number only when the remainder is not zero:

   if (number % 2 !== 0)

4. Continue until every number has been checked.

💡 DISCOVERY
My brain sometimes mixes up odd and even,
just as it sometimes mixes up vertical and horizontal.

I noticed this while reasoning, but remembered
the distinction before writing my condition.

The modulo operator helps me check:

- Remainder 0 means EVEN.
- Remainder not 0 means ODD.

Practicing this distinction helps me recognize
it more easily and confidently.

MENTAL MODEL
A child walks along a row of numbers.

At each number, the child checks:
"Is there a remainder when dividing by 2?"

YES -> Print the number.
NO  -> Move to the next number.

The loop manages the counting.
The if statement decides what gets printed.
*/
for (let number = 1; number <= 135; number++) {
  if (number % 2 !== 0) {
    console.log(number);
  }
}