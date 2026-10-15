/*
MODULE: Algorithms in JavaScript
CATEGORY: Sorting Algorithms
EXERCISE: Bubble Sort
FILE: bubble-sort.js

GOAL
Sort an array of numbers in ascending order.

Return a sorted copy without changing
the original array.

REASONING
1. Receive an array called arr.

2. Create a copy using the spread operator:

   const sorted = [...arr];

3. Use an outer for loop to repeat sorting passes.

4. Use an inner for loop to compare
   two neighboring elements:

   sorted[position]
   sorted[position + 1]

5. If the left number is larger,
   swap the two elements.

6. After each pass, the largest remaining number
   has reached its correct position.

7. The inner loop becomes shorter because
   the sorted elements at the end
   no longer need checking.

8. Return the sorted array.

💡 DISCOVERY
Bubble Sort uses nested loops with different jobs.

The outer loop counts the passes.
The inner loop walks through neighboring pairs.

The spread operator creates a new array.

Destructuring assignment allows two elements
to exchange positions without a temporary variable.

The algorithm changes the copied array,
not the original input array.

NOTE
- Adjacent elements are neighboring elements.
- A pass is one walk through the unsorted part.
- The comparison uses > for ascending order.
- reverse() would reverse an array, not sort it.
- The original array remains unchanged.

MENTAL MODEL
A row of children holds number cards.

First, I create a second row with copies
of their cards.

Two neighboring children compare their numbers.

If the left number is larger,
the children exchange places.

They continue comparing neighboring pairs
until they reach the end of the unsorted part.

After the first pass, the largest number
has moved to the end.

On the next pass, that position is already correct.

Each new pass has a little less work to do.

The outer loop organizes the passes.
The inner loop compares neighboring children.
The if statement decides whether they swap.
Destructuring assignment performs the swap.

Finally, return gives back the sorted array.
*/

function bubbleSort(arr) {
  const sorted = [...arr];

  for (let pass = 0; pass < sorted.length - 1; pass++) {
    for (let position = 0; position < sorted.length - 1 - pass; position++) {
      if (sorted[position] > sorted[position + 1]) {
        [sorted[position], sorted[position + 1]] = [
          sorted[position + 1],
          sorted[position]
        ];
      }
    }
  }

  return sorted;
}

console.log(bubbleSort([5, 1, 9, 4, 3, 7])); // [1, 3, 4, 5, 7, 9]
console.log(bubbleSort([51, 11, -9, 4, 3, 7, 0])); // [-9, 0, 3, 4, 7, 11, 51]