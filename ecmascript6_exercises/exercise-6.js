/* ------------------------------------------------------------
   EXERCISE 6 — Sum all salaries

   Sum all salaries into `sum`.
   If `salaries` is empty, the result must be 0.
   ------------------------------------------------------------ */

let salaries = {
  Fred: 100,
  Ted: 160,
  Ghaith: 130
};

let sum = 0;

for (let salary of Object.values(salaries)) {
  sum += salary;
}

// Console log kept for learning and testing.
// console.log(sum); // 390