/*
MODULE: Algorithms in JavaScript
CATEGORY: Basic Algorithms
EXERCISE: Print 1–135
FILE: print-1-to-135.js

GOAL
Print every number from 1 to 135.

REASONING
1. Use a for loop starting at 1.

2. Continue while number <= 135,
   so the final number is included.

3. Increase number by 1 after each iteration.

4. Print the current number using console.log().

NOTE
I deliberately keep this solution minimal.
The numbers are defined by the assignment,
so no user input or input validation is needed.

💡 DISCOVERY
I chose to work from the more challenging exercises
toward the easier ones.

This allowed me to finish the day with a simpler task
while continuing to practice the fundamentals.

MENTAL MODEL
A child counts aloud from 1 to 135.

The loop keeps track of the current number.
console.log() announces each number.
*/

for (let number = 1; number <= 135; number++) {
  console.log(number);
}