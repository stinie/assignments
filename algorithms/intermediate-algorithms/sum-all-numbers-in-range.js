/*
MODULE: Algorithms in JavaScript
CATEGORY: Intermediate Algorithms
EXERCISE: Sum All Numbers in a Range
FILE: sum-all-numbers-in-range.js

GOAL
Return the sum of two numbers and every integer
between them, including both endpoints.

The numbers can be provided in either order.

REASONING
1. Receive an array containing two numbers.

2. Use Math.min() to find the smaller number.

3. Use Math.max() to find the larger number.

4. Initialize sum to 0.

5. Use a for loop starting at low and ending at high.

6. Add each number to sum using +=.

7. Return the accumulated sum.

💡 DISCOVERY
The order of the input numbers does not matter.

Math.min() and Math.max() establish the boundaries
before the loop begins.

The condition number <= high ensures that
the final number is included.

I am practising how to combine built-in
JavaScript functions with my own loop.

MENTAL MODEL
Two children stand on a number line.

One holds the smaller number, low.
The other holds the larger number, high.

A third child starts at low and walks toward high.

At each number, the child adds that number
to a basket called sum.

The walk includes both endpoints.

Math.min() finds the starting point.
Math.max() finds the ending point.
The for loop manages the walk.
sum remembers the accumulated total.

The function returns the basket's total.
*/

function sumAll(arr) {
  const low = Math.min(arr[0], arr[1]);
  const high = Math.max(arr[0], arr[1]);
  let sum = 0;

  for (let number = low; number <= high; number++) {
    sum += number;
  }

  return sum;
}

console.log(sumAll([1, 4]));  // 10
console.log(sumAll([4, 1]));  // 10
console.log(sumAll([5, 10])); // 45
console.log(sumAll([-5, 10])); // 40
console.log(sumAll([-5, -10])); // -45