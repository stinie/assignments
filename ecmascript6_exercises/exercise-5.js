/* ------------------------------------------------------------
   EXERCISE 5 — Can you change a const object?

   Given:
   const user = { name: "John" };

   Does this work?
   user.name = "Pete";

   Explain why.
   ------------------------------------------------------------ */

const user = {
  name: "John"
};

user.name = "Pete";

/* ANSWER:
   Yes, this works.

   `const` means that the variable `user` cannot be reassigned
   to a different value or object.

   The properties of the object can still be changed.
   `user` still refers to the same object; only its `name`
   property changes from "John" to "Pete".
*/

// Console log kept for learning and testing.
// console.log(user); // { name: 'Pete' }