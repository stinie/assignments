
/*
MODULE: Object-Oriented Programming
CATEGORY: JavaScript ES6
EXERCISE: Putting It All Together
FILE: script.js

GOAL
Practice classes, objects, callbacks, the this keyword,
Promises, and displaying JavaScript results in HTML.

REASONING
1. Define a Person class with a constructor
   and an introduce() method.

2. Create person1 as an instance of Person.

3. Create describePerson(callback) to receive
   and execute a function with person1 as this.

4. Use a named function, showIntroduction(),
   to display the person's introduction.

5. Create wait(milliseconds), returning a Promise
   that resolves after the specified delay.

6. Use .then() to display the resolved value.

7. Use querySelector() and textContent to show
   the results on the webpage as well as in the console.

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

Connecting JavaScript to HTML helped me see
the results directly in the browser.

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
  callback.call(person1);
}

function showIntroduction() {
  console.log(this.introduce()); // Keep for learning purposes
  document.querySelector("#introduction").textContent = this.introduce();
}

describePerson(showIntroduction);

// Exercise 3: Return a Promise that resolves after the given delay
function wait(milliseconds) {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve("Wait is finished!");
    }, milliseconds);
  });
}

// Test the Promise


wait(1000).then((message) => {
  console.log(message); // Keep for learning purposes
  document.querySelector("#promise-result").textContent = message;
});