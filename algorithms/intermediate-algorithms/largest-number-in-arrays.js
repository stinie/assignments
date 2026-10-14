/*
MODULE: Algorithms in JavaScript
CATEGORY: Intermediate Algorithms
EXERCISE: Largest Number in Arrays
FILE: largest-number-in-arrays.js

GOAL
Find the largest number in each sub-array.
Return a new array containing these largest values.

REASONING
1. Receive an array containing four sub-arrays.

2. Create an empty array called largestNumbers.

3. Use an outer for loop to visit each sub-array.

4. Initialize largest with the first element
   of the current sub-array.

5. Use an inner for loop to examine the remaining
   elements of that sub-array.

6. Compare each number with largest.
   Update largest whenever a bigger number is found.

7. After checking the entire sub-array,
   use push() to add its largest value to largestNumbers.

8. Repeat for every sub-array.

9. Return largestNumbers.

💡 DISCOVERY
This exercise builds on my earlier Find Max exercise.

The new concept is nested loops:
a for loop inside another for loop.

The outer loop selects a sub-array.
The inner loop examines its elements.

arr[i][j] uses two indexes:
- i identifies the sub-array.
- j identifies an element within that sub-array.

Starting largest with the first element also
allows the algorithm to handle negative numbers.

MENTAL MODEL
A school has four classrooms.

Each classroom contains children holding number cards.

The outer loop moves between classrooms.
The inner loop visits the children in each classroom.

A sign called largest remembers the highest
number found in the current classroom.

When all children have been checked,
the winning number goes into a basket
called largestNumbers.

The process repeats for every classroom.

At the end, the basket contains one winner
from each classroom.
*/

function largestOfFour(arr) {
  const largestNumbers = [];

  for (let i = 0; i < arr.length; i++) {
    let largest = arr[i][0];

    for (let j = 1; j < arr[i].length; j++) {
      if (arr[i][j] > largest) {
        largest = arr[i][j];
      }
    }

    largestNumbers.push(largest);
  }

  return largestNumbers;
}

console.log(
  largestOfFour([
    [4, 5, 1, 3],
    [13, 27, 18, 26],
    [32, 35, 37, 39],
    [1000, 1001, 857, 1],
  ])
);

// [5, 27, 39, 1001]

console.log(
  largestOfFour([
    [4, 5, 1, -3],
    [13, 27, 18, 26],
    [32, 35, -37, 39],
    [-1000, -1001, -857, 1],
  ])
);

// [ 5, 27, 39, 1 ]