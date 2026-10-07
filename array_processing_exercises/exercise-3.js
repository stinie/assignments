// Exercise 3 — Calculate Average Age
//
// Write a function getAverageAge(users) that calculates
// the average age of an array of user objects.

function getAverageAge(users) {
  let totalAge = users.reduce(
    (accumulator, currentUser) => accumulator + currentUser.age,
    0
  );

  return totalAge / users.length;
}

let john = { name: "John", age: 25 };
let pete = { name: "Pete", age: 30 };
let mary = { name: "Mary", age: 29 };

let arr = [john, pete, mary];

// Original exercise example:
// alert(getAverageAge(arr)); // (25 + 30 + 29) / 3 = 28

// The original exercise uses alert().
// Using console.log() instead to keep this exercise focused on JavaScript
// without requiring a browser or HTML file.
// Kept for learning and testing:
// console.log(getAverageAge(arr)); // 28