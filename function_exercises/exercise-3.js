// Exercise 3 — Ask
//
// Replace the Function Expressions in the code below with arrow functions.
//
// The ask() function receives three parameters:
// question — the question shown to the user
// yes      — a function to run when the user confirms
// no       — a function to run when the user cancels
//
// confirm(question) asks the user to confirm or cancel.
// If the user confirms, the yes function is called.
// Otherwise, the no function is called.
//
// Original exercise:

function ask(question, yes, no) {
  if (confirm(question)) yes()
  else no()
}
//
// ask(
//   "Do you agree?",
//   function() { alert("You agreed.") },
//   function() { alert("You canceled the execution.") }
// )

// Solution:

const askButton = document.getElementById("ask-button");

askButton.addEventListener("click", function () {
  ask(
    "Do you agree?",
    () => alert("You agreed."),
    () => alert("You canceled the execution.")
  );
});