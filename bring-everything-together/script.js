// --- grab the elements ---
const addBtn = document.querySelector("#add-plan");
const planInput = document.querySelector("#plan-name");
const priceInput = document.querySelector("#plan-price");
const bestForInput = document.querySelector("#plan-bestfor");
const tableBody = document.querySelector("#plans-body");

// --- FUNCTION: add a new plan row ---
function addPlan() {
  const values = [planInput.value, priceInput.value, bestForInput.value];

  // FOR LOOP #1 — validate: if any value is empty, warn and stop
  for (let i = 0; i < values.length; i++) {
    if (values[i].trim() === "") {
      alert("Please fill in all three fields.");
      return; // stops addPlan — nothing gets added
    }
  }
  // FOR LOOP #2 — build the row
  const row = document.createElement("tr");
  for (let i = 0; i < values.length; i++) {
    const cell = document.createElement("td");
    cell.textContent = values[i];
    row.appendChild(cell);
  }
  tableBody.appendChild(row);

  // clear the inputs
  planInput.value = "";
  priceInput.value = "";
  bestForInput.value = "";

}

// --- EVENT LISTENER ---
addBtn.addEventListener("click", addPlan);