/* ------------------------------------------------------------
   EXERCISE 8 — Rewrite using multiple ternary operators

   Original:
   if (login == "Employee") {
     message = "Hello";
   } else if (login == "Director") {
     message = "Greetings";
   } else if (login == "") {
     message = "No login";
   } else {
     message = "";
   }
   ------------------------------------------------------------ */

// Test value added so the exercise can be run with Node.
let login = "Employee";

let message =
  login == "Employee"
    ? "Hello"
    : login == "Director"
      ? "Greetings"
      : login == ""
        ? "No login"
        : "";

// Console log kept for learning and testing.
// console.log(message); // Hello