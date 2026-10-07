// Exercise 2 — Map Users to Names
//
// Convert an array of user objects into a new array
// containing only the name of each user.

let john = { name: "John", age: 25 };
let pete = { name: "Pete", age: 30 };
let mary = { name: "Mary", age: 28 };

let users = [john, pete, mary];

let names = users.map(user => user.name);

// Original exercise example:
// alert(names); // John, Pete, Mary

// The original exercise uses alert().
// Using console.log() instead to keep this exercise focused on JavaScript
// without requiring a browser or HTML file.
// Kept for learning and testing:
// console.log(names); // ["John", "Pete", "Mary"]
// console.log(users); // original array of user objects is unchanged