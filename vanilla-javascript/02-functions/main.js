// Exercise 2 — Functions
// Pure logic, no browser needed — run with: node main.js

// Part 1 — Sum: a function that takes two numbers and returns their total.
function add(a, b) {
  return a + b;
}

console.log(add(2, 3));      // 5
console.log(add(10, 25));    // 35
console.log(add(-4, 4));     // 0

// Part 2 — Reverse a string: build a new string by walking the input
// from the last character (str.length - 1) back to 0.
function reverseString(str) {
  let reversed = "";
  for (let i = str.length - 1; i >= 0; i--) {
    reversed += str[i];
  }
  return reversed;
}

console.log(reverseString("Stinie"));           // "einitS"
console.log(reverseString("Stinie Swim"));      // "miwS einitS"
console.log(reverseString("Swim Stinie Swim")); // "miwS einitS miwS"