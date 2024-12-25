const askRow = parseFloat(prompt("How many rows you want?"));

const askColumn = parseFloat(prompt("How many column you want?"));

document.getElementById("button").addEventListener("click", function (event) {
  const newTable = document.createElement("table");
  newTable.style.border = "2px solid black";

  for (i = 0; i < askRow; i++) {
    const newRow = document.createElement("tr");

    for (l = 0; l < askColumn; l++) {
      const newColumn = document.createElement("td");
      newColumn.textContent = `Row ${i + 1}, Column ${l + 1}`;
      newColumn.style.border = "2px solid black";
      newRow.appendChild(newColumn);
    }
    newTable.appendChild(newRow);
  }
  document.body.appendChild(newTable);
});
