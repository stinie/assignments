// Exercise 1 - Variables and Conditionals
// Uses prompt(), so run in the browser (open index.html), not Node.

// Part 1 - Store my age, then use if/else to log whether it's old enough to vote.
const age = 54;

if (age >= 18) {
  console.log("You are old enough to vote!");
} else {
  console.log("Sorry, you are not old enough to vote yet.");
}


// Part 2 - Ask for a name, then greet the user only if it matches "John".
// prompt() is browser-only, which is why this runs via index.html, not Node.
const userName = prompt("What is your name?");

if (userName === "John") {
  console.log("Hello, John!");
} else {
  console.log("You are not John.");
}