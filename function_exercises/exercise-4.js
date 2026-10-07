// Exercise 4 — Calculator
//
// Create an object calculator with three methods:
//
// read() — prompts for two values and saves them as object properties.
// sum()  — returns the sum of the saved values.
// mul()  — multiplies the saved values and returns the result.
//
// Original exercise:
//
// let calculator = {
//   // ... your code ...
// };
//
// calculator.read();
// alert(calculator.sum());
// alert(calculator.mul());

// Solution:
let calculator = {
  read() {
    this.a = Number(prompt("Enter the first number:", 0));
    this.b = Number(prompt("Enter the second number:", 0));
  },
  sum() {
    return this.a + this.b;
  },
  mul() {
    return this.a * this.b;
  }
};

const calculatorReadButton = document.getElementById("calculator-read-button");

calculatorReadButton.addEventListener("click", function () {
  calculator.read();
  // Kept for learning and testing:
  // console.log(calculator);
  alert("Sum: " + calculator.sum());
  alert("Multiplication: " + calculator.mul());
});