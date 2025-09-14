var firstStudent = {
    firstName: "Martin",
    lastName: "Murithi",
    age: 27,
    location: "Kiambu"
};
var secondStudent = {
    firstName: "Allan",
    lastName: "Murimi",
    age: 23,
    location: "Kiambu"
};
var studentList = [firstStudent, secondStudent];
// Render table
var table = document.createElement("table");
table.border = "1"; // add border to make it visible
// Create header row
var headerRow = document.createElement("tr");
var headerName = document.createElement("th");
headerName.textContent = "First Name";
var headerLocation = document.createElement("th");
headerLocation.textContent = "Location";
headerRow.appendChild(headerName);
headerRow.appendChild(headerLocation);
table.appendChild(headerRow);
// Loop through studentList and add rows
studentList.forEach(function (student) {
    var row = document.createElement("tr");
    var nameCell = document.createElement("td");
    nameCell.textContent = student.firstName;
    var locationCell = document.createElement("td");
    locationCell.textContent = student.location;
    row.appendChild(nameCell);
    row.appendChild(locationCell);
    table.appendChild(row);
});
// Append table to the body
document.body.appendChild(table);
