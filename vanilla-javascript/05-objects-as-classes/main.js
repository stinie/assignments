// Exercise 5 - Objects as Classes
// Pure logic, no browser needed - run with: node main.js

// Parts 1 & 2 - A car object (acts like a class) with start() and drive() methods,
// each logging a message.

const car = {
  make: "MINI",
  model: "Cooper",
  year: 2024,

  start() {
    console.log(`The ${this.make} ${this.model} is starting!`);
  },

  drive() {
    console.log(`The ${this.make} ${this.model} is driving!`);
  }
};

car.start(); // The MINI Cooper is starting!
car.drive(); // The MINI Cooper is driving!