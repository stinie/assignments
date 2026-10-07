// Exercise 1 — Check Age
//
// Rewrite checkAge(age) so that it performs the same behavior
// without if...else and uses an arrow function.
//
// If age is greater than 18, return true.
// Otherwise, ask the user for confirmation and return that result.

// Original exercise:
//
// function checkAge(age) {
//   if (age > 18) {
//     return true;
//   } else {
//     return confirm('Do you have your parents permission to access this page?');
//   }
// }

// Solution:
const checkAge = age =>
  age > 18
    ? true
    : confirm('Do you have your parents permission to access this page?');

// Browser setup for testing:
//
// The original exercise only requires rewriting checkAge().
// An HTML form is used here to provide an age and test the function
// in the browser, including the built-in confirm() behavior.

const ageForm = document.getElementById("age-form");

ageForm.addEventListener("submit", function (event) {
  event.preventDefault();
  const ageInput = document.getElementById("age");
  const age = parseInt(ageInput.value);
  checkAge(age);
});