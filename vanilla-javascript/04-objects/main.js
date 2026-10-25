// Exercise 4 - Objects
// Pure logic, no browser needed - run with: node main.js

// Part 1 - Create a book object (title, author, year), then print its details to the console.

const book = {
  title: "Matilda",
  author: "Roald Dahl",
  year: 1988
};

console.log(`${book.title} was written by ${book.author} in ${book.year}.`); // Matilda was written by Roald Dahl in 1988.

// Part 2 - Create a person object (name, age, gender). Then write a function that takes a
// person object as a parameter and logs a message with their information.

const person = {
  name: "Sue",
  age: 74,
  gender: "female"
};

function introduce(person) {
  console.log(`${person.name} is ${person.age} years old and is ${person.gender}.`); // Sue is 74 years old and is female.
}

introduce(person);