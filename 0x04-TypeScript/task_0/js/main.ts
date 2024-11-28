interface Student {
    firstName: string,
    lastName: string,
    age: number,
    location: string
}

const s1: Student = {
    firstName: 'ilias',
    lastName: 'chokairi',
    age: 29,
    location: 'Morocco'
}

const s2: Student = {
    firstName: 'Ali',
    lastName: 'Benzaouia',
    age: 28,
    location: 'Morocco'
}

const studentsList: Student[] = [s1, s2];

const table = document.createElement("table");

studentsList.forEach((student) => {
    const row = table.insertRow();
    const cell1 = row.insertCell(0);
    const cell2 = row.insertCell(1);

    cell1.textContent = student.firstName;
    cell2.textContent = student.location;
})

document.body.appendChild(table);
