/*
 * Module: Algorithms in JavaScript
 * Category: Professional Algorithms
 * Exercise: Game of 3s
 *
 * GOAL
 * Reduce a number to 1 by repeatedly dividing it by 3,
 * adding or subtracting 1 first when necessary.
 * Output each step, including the adjustment made (-1, 0, or +1).
 *
 * REASONING
 * 1. Keep repeating while the number is not 1.
 * 2. Start each repetition with an adjustment of 0.
 * 3. Check the remainder when dividing by 3:
 *    - Remainder 1 → subtract 1.
 *    - Remainder 2 → add 1.
 *    - Remainder 0 → no adjustment needed.
 * 4. Print the current number and its adjustment.
 * 5. Apply the adjustment and divide by 3.
 * 6. Continue with the resulting number.
 *
 * NOTE
 * This exercise focuses on understanding the algorithms.
 * I use fixed numbers and console.log() to test the functions,
 * without browser input, parsing, or input validation.
 */

const gameOfThree = function(number) {
  while (number !== 1) {
    let adjustment = 0;

    if (number % 3 === 1) {
      adjustment = -1;
    } else if (number % 3 === 2) {
      adjustment = 1;
    }

    console.log(`Number: ${number}, Adjustment: ${adjustment}`);
    number = (number + adjustment) / 3;
  }

  console.log(`Final result: ${number}`); // For a positive whole-number input, the algorithm ends when number reaches 1.
}

gameOfThree(100);