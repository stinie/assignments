// Exercise 1 — Filter a Range
//
// Write a function filterRange(arr, a, b) that returns a new array
// containing the elements from arr that are between a and b.
// The original array must not be modified.

function filterRange(arr, a, b) {
  return arr.filter(element => element >= a && element <= b);
}

let arr = [5, 3, 8, 1];

let filtered = filterRange(arr, 1, 4);

// Original exercise examples:
// alert(filtered); // 3,1
// alert(arr);      // 5,3,8,1

// The original exercise uses alert().
// Using console.log() instead to keep this exercise focused on JavaScript
// without requiring a browser or HTML file.
// Kept for learning and testing:
// console.log(filtered); // [3, 1]
// console.log(arr);      // [5, 3, 8, 1] — original array is unchanged