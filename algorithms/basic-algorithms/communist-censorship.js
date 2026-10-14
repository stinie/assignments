
/*
MODULE: Algorithms in JavaScript
CATEGORY: Basic Algorithms — JS Intermediate
EXERCISE: Communist Censorship
FILE: communist-censorship.js

GOAL
Replace a chosen word in an array with asterisks.
The number of asterisks must match the word's length.
The solution should work with different target words.

REASONING
1. Create a function receiving words and target.

2. Use map() to visit each word and create a new array.

3. Compare each word with the target using ===.

4. Use the ternary operator ? : to choose:

   - Match -> Replace the word with asterisks.
   - No match -> Keep the original word.

5. Use repeat() to generate the required asterisks:

   "*".repeat(word.length)

6. Return the new array.

💡 DISCOVERY
The ternary operator is a compact alternative
to an if / else statement.

The syntax is:

condition ? valueIfTrue : valueIfFalse

I am also practising map() with an arrow function
used as a callback.

repeat() creates a string by repeating another
string a specified number of times.

Using word.length makes the replacement work
with words of different lengths.

MENTAL MODEL
A row of children holds word cards.

Each child passes through a censorship machine.

The machine asks:
"Does this word match the target?"

YES -> Replace each letter with an asterisk.
NO  -> Keep the original word.

map() processes each card and creates a new row.

The original row remains unchanged.

The ternary operator makes the decision.
repeat() creates the asterisks.
return gives back the completed array.
*/

function censorWord(words, target) {
  return words.map((word) =>
    word === target ? "*".repeat(word.length) : word
  );
}

const words = ["Man", "I", "Love", "The", "Matrix", "Program"];

console.log(censorWord(words, "Program"));
// ["Man", "I", "Love", "The", "Matrix", "*******"]

console.log(censorWord(words, "Matrix"));
// ["Man", "I", "Love", "The", "******", "Program"]