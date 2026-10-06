/* ------------------------------------------------------------
   EXERCISE 4 — Object operations

   1. Create an empty object `user`.
   2. Add property name = "John".
   3. Add property surname = "Smith".
   4. Change name to "Pete".
   5. Remove the property name.
   ------------------------------------------------------------ */

let user = {};

user.name = "John";
// Console logs kept for learning and testing.
// console.log(user); // after adding name: { name: 'John' }

user.surname = "Smith";
user.name = "Pete";
// console.log(user); // after adding surname and changing name:
// { name: 'Pete', surname: 'Smith' }

delete user.name;
// console.log(user); // after deleting name: { surname: 'Smith' }