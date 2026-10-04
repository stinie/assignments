const form = document.querySelector("#my-form");
const button = document.querySelector(".btn");
const list = document.querySelector(".items");

button.addEventListener("click", function (e) {
  e.preventDefault(); // stop the form submitting + refreshing

  form.style.backgroundColor = "red";         // form turns red
  document.body.classList.add("bg-dark");     // whole page goes dark


  // replace the LAST <li> with a real <h1>Hello</h1>
  const li = list.lastElementChild;
  li.textContent = "";
  const heading = document.createElement("h1");
  heading.textContent = "Hello";
  li.appendChild(heading);

  // bonus: recolour the button too
  button.style.backgroundColor = "#2e7d32";
});