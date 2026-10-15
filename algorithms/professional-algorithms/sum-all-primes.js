/*
MODULE: Algorithms in JavaScript
CATEGORY: Professional Algorithms
EXERCISE: Sum All Primes
FILE: sum-all-primes.js

GOAL
Find and sum all prime numbers up to and including
the provided number.

REASONING
1. Receive a number called num.

2. Initialize sum to 0.

3. Use an outer for loop to visit every candidate
   from 2 through num.

4. Start each candidate with isPrime = true.

5. Use an inner for loop to look for divisors.

6. If a divisor divides the candidate evenly:
   - Set isPrime to false.
   - Use break to stop checking further divisors.

7. If isPrime remains true, add the candidate to sum.

8. Return the final sum.

💡 DISCOVERY
This exercise uses nested loops again.

The outer loop selects a candidate number.
The inner loop checks whether it is prime.

isPrime is a Boolean flag.
It remembers whether the candidate has passed
the checks so far.

The break statement exits the inner loop early.
Unlike return, it does not exit the function.

SQUARE ROOT OPTIMIZATION
The inner loop only needs to check divisors
up to the square root of the candidate.

The condition:

divisor * divisor <= candidate

performs this check without calling Math.sqrt().

I want to revisit this optimization to understand
why it works and how to write it independently.

MENTAL MODEL
A child walks past numbered cards.

Each card is a candidate for the prime-number basket.

A second child checks whether the candidate
can be divided evenly by another number.

If a divisor is found, the candidate is rejected.
The second child stops checking it immediately.

If no divisor is found, the candidate goes
into the basket.

The outer loop visits the candidates.
The inner loop searches for divisors.
isPrime remembers the result of the inspection.
break stops an unnecessary search.
sum collects the accepted numbers.

The function returns the total.
*/

function sumPrimes(num) {
  let sum = 0;

  for (let candidate = 2; candidate <= num; candidate++) {
    let isPrime = true;

    for (let divisor = 2; divisor * divisor <= candidate; divisor++) {
      if (candidate % divisor === 0) {
        isPrime = false;
        break;
      }
    }

    if (isPrime) {
      sum += candidate;
      // Keep this console.log() for debugging purposes.
      // console.log("Sum after adding " + candidate + ": " + sum); 
    }
  }

  return sum;
}

console.log(sumPrimes(10));  // 17
console.log(sumPrimes(977)); // 73156
console.log(sumPrimes(25));  // 100

// Additional edge cases
console.log(sumPrimes(1));   // 0
console.log(sumPrimes(2));   // 2