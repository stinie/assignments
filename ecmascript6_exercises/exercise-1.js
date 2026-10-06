/* ------------------------------------------------------------
   EXERCISE 1 — Destructuring assignment

   Write ONE destructuring assignment that reads:
   • name -> variable `name`
   • years -> variable `age` renames the destructured variable.
   • isAdmin -> variable `isAdmin` (default false if absent)
   ------------------------------------------------------------ */

let user = {
  name: "John",
  years: 30
};

let { name, years: age, isAdmin = false } = user;

// Kept for learning and testing:
// console.log(user); //{ name: 'John', years: 30 }
// console.log(name); // John
// console.log(age); // 30
// console.log(isAdmin); // false