interface Student {
    firstName: string;
    lastName: string;
    age: number;
    location: string;
}

let firstStudent: Student = {
    firstName: "Martin",
    lastName: "Murithi",
    age: 27,
    location: "Kiambu"

}
let secondStudent: Student = {
    firstName: "Allan",
    lastName: "Murimi",
    age: 23,
    location: "Kiambu"
}

let studentList: Student[] = [firstStudent, secondStudent];

// Render table
const table = document.createElement("table");
table.border = "1"; // add border to make it visible

// Create header row
const headerRow = document.createElement("tr");
const headerName = document.createElement("th");
headerName.textContent = "First Name";
const headerLocation = document.createElement("th");
headerLocation.textContent = "Location";

headerRow.appendChild(headerName);
headerRow.appendChild(headerLocation);
table.appendChild(headerRow);

// Loop through studentList and add rows
studentList.forEach((student) => {
    const row = document.createElement("tr");

    const nameCell = document.createElement("td");
    nameCell.textContent = student.firstName;

    const locationCell = document.createElement("td");
    locationCell.textContent = student.location;

    row.appendChild(nameCell);
    row.appendChild(locationCell);

    table.appendChild(row);
});

// Append table to the body
document.body.appendChild(table);
