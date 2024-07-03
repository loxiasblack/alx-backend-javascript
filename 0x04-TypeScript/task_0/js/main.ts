interface Student {
    firstName: string,
    lastName: string,
    age: number,
    location: string,
}


const student1 : Student = {
    firstName: "Los",
    lastName: "HerManos",
    age: 22,
    location: "Los Angelos",
}

const student2 : Student = {
    firstName: "Floyd",
    lastName: "maywEather",
    age: 24,
    location: "Miami"
}

const studentsList : Student [] = [student1, student2];

const table = document.createElement("table");
table.style.border = "1px solid black";
table.style.borderCollapse = "collapse";

const headerRow = document.createElement("tr");

const header1 = document.createElement("th");
header1.textContent = "First Name";
header1.style.border = "1px solid black";

const header2 = document.createElement("th");
header2.textContent = "Location";
header2.style.border = "1px solid black";

headerRow.appendChild(header1);
headerRow.appendChild(header2);
table.appendChild(headerRow);

studentsList.forEach(student => {
  const row = document.createElement("tr");

  const cell1 = document.createElement("td");
  cell1.textContent = student.firstName;
  cell1.style.border = "1px solid black";

  const cell2 = document.createElement("td");
  cell2.textContent = student.location;
  cell2.style.border = "1px solid black";

  row.appendChild(cell1);
  row.appendChild(cell2);
  table.appendChild(row);
});

document.body.appendChild(table);
