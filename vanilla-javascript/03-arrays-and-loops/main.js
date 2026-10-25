// Exercise 3 - Arrays and Loops
// Pure logic, no browser needed - run with: node main.js

// Part 1 - Make an array of favorite fruits, then log each one with a for loop.
const fruits = ['Avocado', 'Banana', 'Blueberries'];

for (let i = 0; i < fruits.length; i++) {
  console.log(fruits[i]);
}

// Part 2 - Function: take an array of numbers, return their average.
const numbers = [1, 2, 3];

function average(nums) {
  const sum = nums.reduce((acc, cur) => acc + cur, 0);
  return sum / nums.length;
}

// Test on two different arrays to show it works on any input
console.log(average(numbers)); // 2
console.log(average([1, 2, 3, 4, 5])); // 3

// Part 3 - Loop through an array of numbers to find and log the largest one.

function largestElement(arr) {
    let largestNum = arr[0];
    for (let i = 1; i < arr.length; i++) {
        if (arr[i] > largestNum) {
            largestNum = arr[i];
        }
    }
    return largestNum;
}

const list = [11, 21, 13, 33, 7, 5, 9, 10, 54, 2, 1, 0];
const result = largestElement(list);

console.log("The largest element in the array is: " + result); // 54



// Part 4 - Make an array of words, join them into a sentence, log the sentence.

const words = ["Vanilla", "JavaScript", "is", "fun"];
let sentence = "";

for (let i = 0; i < words.length; i++) {
  sentence += words[i];

  if (i < words.length - 1) {
    sentence += " ";
  }
}

console.log(sentence); "Vanilla JavaScript is fun"



// Part 5 - Function: take an array of names + one name; return true/false if it's in the array.

function hasName(names, nameToFind) {
  return names.includes(nameToFind);
}

const names = ["Christine", "Robbie", "Sue"];

console.log(hasName(names, "Sue")); // true
console.log(hasName(names, "Sam")); // false



// Part 6 - Use a for loop + if to collect even numbers from 1 to 20 into an array, then log it.

const evenNumbers = [];

for (let number = 1; number <= 20; number++) {
  if (number % 2 === 0) {
    evenNumbers.push(number);
  }
}

console.log(evenNumbers); // [2,  4,  6,  8, 10, 12, 14, 16, 18, 20]