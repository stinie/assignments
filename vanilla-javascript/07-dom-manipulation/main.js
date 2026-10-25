// Exercise 7 - DOM Manipulation
// Runs in the browser (open index.html), not Node.

// Part 1 - Change the div's text when the button is clicked.
const changeTextButton = document.querySelector("#changeTextButton");
const textContainer = document.querySelector("#textContainer");

changeTextButton.addEventListener("click", () => {
  textContainer.textContent = "The text has changed!";
});

// Part 2 - Add a new <li> to a list when a button is clicked.
const addItemButton = document.querySelector("#addItemButton");
const todoList = document.querySelector("#todoList");

addItemButton.addEventListener("click", () => {
  const newItem = document.createElement("li"); // make a new <li> element
  newItem.textContent = "New item";             // put text inside it
  todoList.appendChild(newItem);                // attach it to the <ul>
});

// Part 3 - Change an image's source when a button is clicked.
const changeImageButton = document.querySelector("#changeImageButton");
const myImage = document.querySelector("#myImage");

changeImageButton.addEventListener("click", () => {
  myImage.src = "https://picsum.photos/id/1025/300/200";
});

// Part 4 - Validate a login form on submit; show a success/failure message.
const loginForm = document.querySelector("#loginForm");
const loginMessage = document.querySelector("#loginMessage");

loginForm.addEventListener("submit", (event) => {
  event.preventDefault(); // stop the page reloading, so JS can handle it

  const username = document.querySelector("#username").value;
  const password = document.querySelector("#password").value;

  if (username === "admin" && password === "1234") {
    loginMessage.textContent = "Login successful!";
  } else {
    loginMessage.textContent = "Wrong username or password.";
  }
});