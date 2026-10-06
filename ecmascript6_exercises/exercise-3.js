/* ------------------------------------------------------------
   EXERCISE 3 — Scope

   What will happen when sayHi() is called, and why?

   Given code:
   ------------------------------------------------------------ */

let phrase = "Hello";

if (true) {
  let user = "John";

  function sayHi() {
    alert(`${phrase}, ${user}`);
  }
}

// Commented out because calling sayHi() outside the block causes a ReferenceError.
// sayHi();

/* ANSWER:
   The final sayHi() call causes a ReferenceError.

   sayHi is declared inside the if block, so it is scoped to
   that block and cannot be accessed from outside the block.

   Inside sayHi(), both phrase and user would be accessible:
   • phrase comes from the outer scope
   • user comes from the surrounding if block

   But the final sayHi() is outside the block, so the function
   itself is not accessible there.
*/