// Exercise 6 - Window Object
// Uses window.alert() and window.prompt(), so run in the browser (open index.html), not Node.

// Part 1 - When the button is clicked, show an alert, then run the greeting.
const button = document.querySelector("#helloButton");

button.addEventListener("click", () => {
  window.alert("Hello! You clicked the button.");
  greetUser(); // ← runs after the first alert
});

// Part 2 - Ask for the user's name with a prompt, then greet them with an alert.
function greetUser() {
  const name = window.prompt("What's your name?");
  if (name) {
    window.alert(`Hello, ${name}!`);
  } else {
    window.alert("Hello there!");
  }
}