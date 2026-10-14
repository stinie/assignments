/*
MODULE: Algorithms in JavaScript
CATEGORY: Intermediate Algorithms
EXERCISE: Find the Longest Word in a String
FILE: find-longest-word.js

GOAL
Find and return the length of the longest word
in a given sentence.

REASONING
1. Receive a string called sentence.

2. Use split(" ") to separate the sentence
   into an array of words.

3. Initialize longestLength to 0.

4. Use a for loop to visit each word.

5. Compare the current word's length
   with longestLength.

6. If the current word is longer,
   update longestLength.

7. Return the final length as a number.

💡 DISCOVERY
split() is a string method that creates an array.

The length property has two different roles:

- words.length counts the elements in the array.
- words[i].length counts the characters in a word.

I am practising combining array indexing
with the length property.

The function returns a number, not the word itself.

MENTAL MODEL
A sentence becomes a row of word cards.

A child walks along the row with a measuring ruler.

The child carries a sign called longestLength,
which starts at 0.

At each card, the child measures the word.

If it is longer than the current record,
the child updates the sign.

The for loop manages the walk.
The if statement decides when to update.
longestLength remembers the longest measurement.

The function returns the final number.
*/

function findLongestWord(sentence) {
  const words = sentence.split(" ");
  let longestLength = 0;

  for (let i = 0; i < words.length; i++) {
    if (words[i].length > longestLength) {
      longestLength = words[i].length;
    }
  }

  return longestLength;
}

console.log(findLongestWord("The quick brown fox jumped over the lazy dog")); // 6
console.log(findLongestWord("May the force be with you")); // 5
console.log(findLongestWord("Clarity is my love language")); // 8