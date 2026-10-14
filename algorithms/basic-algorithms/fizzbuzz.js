/*
MODULE: Algorithms in JavaScript
CATEGORY: Basic Algorithms — JS Intermediate
EXERCISE: FizzBuzz
FILE: fizzbuzz.js

GOAL
Create an array containing the numbers from 1 to 135.

Replace numbers divisible by 3 with "Fizz",
numbers divisible by 5 with "Buzz",
and numbers divisible by both with "FizzBuzz".

REASONING
1. Create an empty array called result.

2. Use a for loop to count from 1 to 135.

3. Check each number using the modulo operator %.

4. Use if / else if / else to decide what to add:

   - Divisible by both 3 and 5 -> "FizzBuzz"
   - Divisible by 3          -> "Fizz"
   - Divisible by 5          -> "Buzz"
   - Otherwise               -> Original number

5. Use push() to add the chosen value to result.

6. Print the completed array.

💡 DISCOVERY
The order of the conditions matters.

I must check divisibility by BOTH 3 and 5 first.
Otherwise, a number divisible by both would already
match an earlier condition.

The if / else if / else structure ensures that
only one branch runs for each number.

MENTAL MODEL
A conveyor belt carries number cards from 1 to 135.

A child checks each card at three checkpoints:

1. Both 3 and 5? -> FizzBuzz
2. Only 3?       -> Fizz
3. Only 5?       -> Buzz

Otherwise, the original number stays.

The child puts the chosen value into a basket
called result.

The for loop moves the cards along.
The conditions choose the correct value.
push() adds it to the basket.

At the end, the basket contains the completed array.
*/

const result = [];

for (let number = 1; number <= 135; number++) {
  if (number % 3 === 0 && number % 5 === 0) {
    result.push("FizzBuzz");
  } else if (number % 3 === 0) {
    result.push("Fizz");
  } else if (number % 5 === 0) {
    result.push("Buzz");
  } else {
    result.push(number);
  }
}

console.log(result);