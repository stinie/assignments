/*
MODULE: Algorithms in JavaScript
CATEGORY: Professional Algorithms
EXERCISE: Search and Replace
FILE: search-and-replace.js

GOAL
Replace a specified word in a sentence.

Preserve the capitalization of the first letter
of the original word.

Return the updated sentence as a new string.

REASONING
1. Receive three arguments:
   - str: The original sentence.
   - before: The word to find.
   - after: The replacement word.

2. Check whether the first character of before
   is uppercase or lowercase.

3. Use if / else if to determine whether
   the replacement needs a capital or lowercase
   first letter.

4. Use toUpperCase() or toLowerCase()
   to adjust the first character.

5. Use slice(1) to preserve the remaining
   characters of the replacement word.

6. Use replace() to create the updated sentence.

7. Return the new string.

💡 DISCOVERY
This exercise combines several concepts
I've encountered in earlier exercises.

Character indexing:
before[0] accesses the first character.

String methods:
toUpperCase() and toLowerCase() change letter case.
slice(1) keeps the rest of the string.

Logical operators:
&& means AND.
! means NOT.

New method:
replace() replaces the first matching occurrence
and returns a new string.

Strings are immutable in JavaScript.
The original sentence is not modified.

MENTAL MODEL
A child works in a word replacement workshop.

The child receives three cards:
- The original sentence.
- The word to find.
- The replacement word.

First, the child inspects the original word.

Next, the child adjusts the replacement's
first letter to match the original capitalization.

Finally, the child replaces the word
and returns the updated sentence.

The conditions decide the capitalization.
The string methods prepare the replacement.
replace() creates the new sentence.
return gives back the result.

NOTE
This exercise focuses on matching the
capitalization of the first character.

The provided words are assumed to be nonempty.
*/
function myReplace(str, before, after) {
  const firstLetterIsUppercase = before[0] === before[0].toUpperCase();
  const firstLetterIsLowercase = before[0] === before[0].toLowerCase();

  if (firstLetterIsUppercase && !firstLetterIsLowercase) {
    after = after[0].toUpperCase() + after.slice(1);
  } else if (firstLetterIsLowercase && !firstLetterIsUppercase) {
    after = after[0].toLowerCase() + after.slice(1);
  }

  return str.replace(before, after);
}

console.log(
  myReplace("A quick brown fox jumped over the lazy dog", "jumped", "leaped")
);
// "A quick brown fox leaped over the lazy dog"

console.log(myReplace("I like Fish", "Fish", "books"));
// "I like Books"

console.log(myReplace("I like fish", "fish", "books"));
// "I like books"

console.log(myReplace("Clarity is my Love Thing", "Thing", "language"));
// "Clarity is my Love Language"