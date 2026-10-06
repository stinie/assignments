/* ------------------------------------------------------------
   EXERCISE 7 — Rewrite using the ternary operator

   Original:
   if (a + b < 4) {
     result = "Below";
   } else {
     result = "Over";
   }
   ------------------------------------------------------------ */

// Test values added so the exercise can be run with Node.
let a = 1;
let b = 2;

let result = a + b < 4 ? "Below" : "Over";

// Console log kept for learning and testing.
// console.log(result); // Below