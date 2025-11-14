const SHEET_CSV_URL = "https://docs.google.com/spreadsheets/d/e/2PACX-1vQFABE9Tm8vvxKX4E93wHg1U8Nq7NmbiWdkfc1mVC0zz69eJFKuQn-FE0PtHDzN4TtbGjhUPFYWbhF0/pub?output=csv";

fetch(SHEET_CSV_URL)
  .then(res => res.text())
  .then(text => {
    const rows = text.trim().split("\n").map(r => r.split(","));
    const table = document.createElement("table");
    table.style.width = "100%";
    table.style.borderCollapse = "collapse";
    rows.forEach((row, i) => {
      const tr = document.createElement("tr");
      row.forEach(cell => {
        const cellEl = document.createElement(i === 0 ? "th" : "td");
        cellEl.textContent = cell.replace(/^"|"$/g, "");
        cellEl.style.border = "1px solid var(--muted)";
        cellEl.style.padding = "8px";
        cellEl.style.textAlign = "left";
        tr.appendChild(cellEl);
      });
      table.appendChild(tr);
    });
    document.getElementById("sheet-table-container").appendChild(table);
  })
  .catch(err => {
    console.error("Error loading sheet data:", err);
    const p = document.createElement("p");
    p.textContent = "Unable to load data.";
    document.getElementById("sheet-table-container").appendChild(p);
  });
