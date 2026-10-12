/*
 * Module: Algorithms in JavaScript
 * Category: Basic Algorithms
 * Exercise: Number to String
 * File: number-to-string.js
 *
 * GOAL
 * Transform an array by replacing all negative numbers
 * with the string "Turing".
 * Keep positive numbers and zero unchanged.
 * Return a new array without modifying the original.
 *
 * REASONING
 * 1. Receive an array of numbers as the function argument.
 * 2. Use map() to visit each element of the array.
 * 3. For each element, check whether the number is
 *    smaller than zero.
 * 4. If the number is negative, return "Turing".
 * 5. Otherwise, return the original number unchanged.
 * 6. map() automatically collects each returned value
 *    into a new array.
 * 7. Store the completed array in a variable called result.
 * 8. Return result from the function.
 *
 * NAMING
 * The exercise is called "Number to String", so I keep
 * that name for the file: number-to-string.js.
 *
 * However, the function does not convert every number
 * into a string. It only replaces negative numbers
 * with the specific string "Turing".
 *
 * I therefore named my function replaceNegativesWithTuring()
 * because this describes exactly what the function does.
 *
 * This helps me practice choosing meaningful function names
 * based on their actual behavior rather than simply
 * copying the exercise title.
 *
 * NOTE
 * map() creates and fills the new array automatically.
 * The callback decides what value belongs in each position.
 *
 * The return statements inside map() provide individual
 * elements. The return statement outside map() returns
 * the completed array from the function.
 *
 * An else statement is unnecessary because returning
 * "Turing" immediately ends the callback for that element.
 *
 * The closing }); ends the callback function with }
 * and closes the map() call with ).
 *
 * I use a fixed array and console.log() to test the function,
 * without browser input, parsing, or input validation.
 *
 * MENTAL MODEL
 * map() manages the basket.
 * The callback decides what goes into it.
 * The function hands back the completed basket.
 */

function replaceNegativesWithTuring(arr) {
  // arr is the incoming array
  const result = arr.map((number) => {
    if (number < 0) {
      return "Turing";
    }
    return number;
  });
  return result;
}

const x = [1, -4, 0, -1];
const y = [10, -4, 0, 11, -1];

console.log(replaceNegativesWithTuring(x));
// [1, "Turing", 0, "Turing"]
console.log(replaceNegativesWithTuring(y));
// [10, "Turing", 0, 11, "Turing"]