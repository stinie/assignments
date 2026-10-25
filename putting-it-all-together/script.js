/*
MODULE: Object-Oriented Programming
CATEGORY: JavaScript ES6
EXERCISE: Putting It All Together
FILE: script.js

GOAL
Practice classes, objects, callbacks, the this keyword,
Promises, basic error handling in the console,
and displaying successful results in HTML.

REASONING
1. Define a Person class with a constructor
   and an introduce() method.

2. Create person1 as an instance of Person.

3. Create describePerson(callback) to receive
   and execute a function with person1 as this.

4. Use a named function, showIntroduction(),
   to display the person's introduction.

5. Create wait(milliseconds), returning a Promise
   that resolves after a valid delay or rejects
   when the delay is negative.

6. Use .then() to display the resolved value.
   Use .catch() to handle Promise errors.

7. Display successful results in the browser.
   Practise error handling in the console.

💡 DISCOVERY
A class defines the blueprint.
The constructor initializes each new instance.
this refers to the object in the current context.

Parameters receive arguments.
Object properties store values.

introduce() returns a string using template literals
and string interpolation. return does not print.

Callbacks were difficult to understand at first.
Passing a function without parentheses passes
the function itself, rather than calling it.

I deliberately chose a named callback function
instead of an anonymous function because it makes
the separate steps easier for me to follow.

I learned that .call(person1) executes the callback
with person1 as its this context.

This helped me understand the exercise without
needing to use .bind().

A Promise is returned immediately and remains
pending until resolve() fulfills it.

I chose the expanded Promise syntax to see
where setTimeout() runs and when resolve() is called.

The Promise resolves independently of .then().
.then() lets me react to its fulfilled value
and display visible feedback.

ERROR HANDLING — CONSOLE PRACTICE
throw signals an error.
try...catch handles a synchronous error.

reject() rejects a Promise.
.catch() handles a Promise rejection.

I practise error handling in the console,
without adding error messages to the HTML.

The document object is available in the browser,
but not in Node.js by default.

Connecting JavaScript to HTML helped me see
the successful results directly in the browser.

Understanding the individual pieces first helped
me connect them and complete the assignment.
*/

// Exercise 1: Create a Person class
class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  introduce() {
    return `Hi, my name is ${this.name} and I am ${this.age} years old.`;
  }
}

// Exercise 2: Create person1 and call a callback with person1 as `this`
const person1 = new Person("Christine", 54);

function describePerson(callback) {
  if (typeof callback !== "function") {
    throw new TypeError("Callback must be a function.");
  }

  callback.call(person1);
}

function showIntroduction() {
  const introduction = this.introduce();

  console.log(introduction); // Keep for learning purposes

  // Display in HTML only when running in a browser
  if (typeof document !== "undefined") {
    document.querySelector("#introduction").textContent = introduction;
  }
}

// Handle callback errors in the console
try {
  describePerson(showIntroduction);
} catch (error) {
  console.error("Introduction error:", error.message);
}

// Exercise 3: Return a Promise that resolves after the given delay
function wait(milliseconds) {
  return new Promise((resolve, reject) => {
    if (milliseconds < 0) {
      reject(new Error("Delay cannot be negative."));
      return;
    }

    setTimeout(() => {
      resolve("Wait is finished!");
    }, milliseconds);
  });
}

// Test the Promise
wait(1000)
  .then((message) => {
    console.log(message); // Keep for learning purposes

    // Display in HTML only when running in a browser
    if (typeof document !== "undefined") {
      document.querySelector("#promise-result").textContent = message;
    }
  })
  .catch((error) => {
    console.error("Promise error:", error.message);
  });
