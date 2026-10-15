/*
MODULE: Algorithms in JavaScript
CATEGORY: Sorting Algorithms
EXERCISE: Selection Sort
FILE: selection-sort.js

GOAL
Sort an array of numbers in ascending order.

Return a sorted copy without changing
the original array.

REASONING
1. Receive an array called arr.

2. Create a copy using the spread operator:

   const sortedArray = [...arr];

3. Use an outer for loop to select each position
   where the next smallest number belongs.

4. Initialize minIdx with the current position.

5. Use an inner for loop to search the remaining
   unsorted elements for the smallest value.

6. If a smaller value is found,
   update minIdx to remember its index.

7. After the inner loop finishes,
   swap the smallest value into position i.

8. Repeat until the array is sorted.

9. Return the sorted array.

💡 DISCOVERY
Selection Sort uses nested loops.

The outer loop selects the next position to fill.
The inner loop searches for the smallest value.

minIdx remembers the INDEX of the smallest
number found so far, not the number itself.

The swap happens AFTER the inner loop finishes.

Destructuring assignment exchanges two elements
without needing a temporary variable.

The spread operator creates a copy.
The copied array is mutated during sorting,
but the original array remains unchanged.

MENTAL MODEL
A row of children holds number cards.

First, I create a second row with copies
of their cards.

A child searches the unsorted part of the row
for the smallest number.

The child remembers where that number is.

After checking all remaining cards,
the smallest number changes places with
the number at the next available position.

That position is now sorted.

The process repeats with the remaining children.

The sorted group grows from left to right.

The outer loop chooses the position.
The inner loop searches for the smallest number.
minIdx remembers where that number is.
Destructuring assignment performs the swap.

Finally, return gives back the sorted array.

NOTE
- minIdx means minimum index.
- The original array remains unchanged.
- The final element needs no separate sorting pass.
- A swap may exchange a position with itself
  when the smallest number is already there.
*/

function selectionSort(arr) {
  const sortedArray = [...arr]; // Sort a copy, leaving the original unchanged

  for (let i = 0; i < sortedArray.length - 1; i++) {
    let minIdx = i;

    // Find the smallest value in the unsorted portion
    for (let j = i + 1; j < sortedArray.length; j++) {
      if (sortedArray[j] < sortedArray[minIdx]) {
        minIdx = j;
      }
    }

    // Put that smallest value at position i
    [sortedArray[i], sortedArray[minIdx]] = [sortedArray[minIdx], sortedArray[i]];
  }

  return sortedArray;
}

console.log(selectionSort([29, 72, 98, 13, 87, 66, 52, 51, 36])); // [13, 29, 36, 51, 52, 66, 72, 87, 98]
console.log(selectionSort([3, 2, 11, -4])); // [-4, 2, 3, 11]
console.log(selectionSort([4, 3, 2, 1])); // [1, 2, 3, 4]
console.log(selectionSort([1, 2, 3, 4])); // [1, 2, 3, 4] ;-)