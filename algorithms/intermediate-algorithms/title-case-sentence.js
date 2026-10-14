/*
MODULE: Algorithms in JavaScript
CATEGORY: Intermediate Algorithms
EXERCISE: Title Case a Sentence
FILE: title-case-sentence.js

GOAL
Capitalize the first letter of every word in a sentence.
Convert the remaining letters to lowercase.
Return the transformed sentence as a string.

REASONING
1. Receive a string called sentence.

2. Convert the entire sentence to lowercase
   using toLowerCase().

3. Use split(" ") to create an array of words.

4. Use a for loop to visit each word.

5. For each word:
   - Access the first character using words[i][0].
   - Capitalize it using toUpperCase().
   - Keep the remaining characters using slice(1).
   - Join both parts using +.

6. Use join(" ") to combine the words into
   a new sentence.

7. Return the completed sentence.

💡 DISCOVERY
Several string methods can work together.

toLowerCase() normalizes the original sentence.
split() separates the words into an array.
toUpperCase() capitalizes the first character.
slice(1) keeps the rest of the word.
join() combines the array back into a string.

I am practising how to access characters inside
strings that are stored in an array.

The expression words[i][0] has two steps:
- words[i] selects a word from the array.
- [0] selects the first character of that word.

MENTAL MODEL
A workshop receives a sentence on a strip of paper.

First, all letters become lowercase.

The strip is cut into individual word cards.

A child visits each card and:
- Capitalizes its first letter.
- Keeps the remaining lowercase letters.
- Reassembles the word.

Finally, the cards are joined into a sentence.

The for loop manages the word cards.
slice() keeps everything after the first character.
join() puts the sentence back together.
return gives back the completed sentence.
*/
function titleCase(sentence) {
  const words = sentence.toLowerCase().split(" ");

  for (let i = 0; i < words.length; i++) {
    words[i] = words[i][0].toUpperCase() + words[i].slice(1);
  }

  return words.join(" ");
}

console.log(titleCase("I'm a little tea pot"));
// "I'm A Little Tea Pot"

console.log(titleCase("sHoRt AnD sToUt"));
// "Short And Stout"

console.log(titleCase("clarity is my love language"));
// "Clarity Is My Love Language"