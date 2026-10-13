/*
MODULE: Algorithms in JavaScript
CATEGORY: Basic Algorithms
EXERCISE: Palindrome Checker
FILE: palindrome-checker.js

GOAL
Determine whether a word or sentence is a palindrome,
ignoring capitalization, spaces, and punctuation.

REASONING
1. Convert the input to lowercase using toLowerCase().
2. Use a regular expression to remove non-alphanumeric
   characters while preserving Unicode letters and numbers.
3. Use a traditional for loop because indexes are needed.
4. Compare characters from opposite ends of the string.
5. Return false immediately if two characters differ.
6. Return true after all comparisons succeed.

💡 DISCOVERY
A palindrome can have an even or odd number of characters.
The middle character needs no comparison with itself.

Math.floor() lets the loop stop before the middle.

One counter, i, controls movement in both directions:
the left index increases while the right index decreases.

I discovered that regular expressions limited to a-z
would remove letters such as ü in my surname, Fürst.
A Unicode-aware expression preserves these letters.

NOTE
The original example removes spaces and changes case,
but does not remove punctuation.

I extended the cleaning step to meet the requirements.

MENTAL MODEL
Two children stand at opposite ends of a word.

They compare their letters and walk toward the middle.

If their letters differ, they stop: false.
If every pair matches, the result is true.

One counter guides both children in opposite directions.
*/

function isPalindrome(str) {
  const cleaned = str.toLowerCase().replace(/[^\p{L}\p{N}]/gu, "");

  for (let i = 0; i < Math.floor(cleaned.length / 2); i++) {
    if (cleaned[i] !== cleaned[cleaned.length - 1 - i]) {
      return false;
    }
  }

  return true;
}

console.log(isPalindrome("A man, a plan, a canal: Panama")); // true
console.log(isPalindrome("race car")); // true
console.log(isPalindrome("rasecar")); // false
console.log(isPalindrome("Christine Fürst")); // false
console.log(isPalindrome("racecar"));  // true
console.log(isPalindrome("Race, car!")); // true
console.log(isPalindrome("hello")); // false
console.log(isPalindrome("abba")); // true
console.log(isPalindrome("Fürst")); // false
// 💡 EDGE CASE: Emojis are removed by the regular expression.
// An empty string has no mismatches, so the function returns true.
// Different emoji sequences can therefore incorrectly pass as palindromes.
console.log(isPalindrome("🍅")); // true
console.log(isPalindrome("🍎🍐🍎")); // true
console.log(isPalindrome("🍎🍐🍐")); // false