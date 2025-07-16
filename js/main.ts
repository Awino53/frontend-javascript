interface Student {
  firstName: string;
  lastName: string;
  age: number;
  location: string;
}

const student1: Student = {
  firstName: "Esther",
  lastName: "Ojul",
  age: 21,
  location: "Eldoret",
};

const student2: Student = {
  firstName: "Brian",
  lastName: "Otieno",
  age: 23,
  location: "Nairobi",
};

const studentsList: Student[] = [student1, student2];

const table = document.createElement("table");
const thead = document.createElement("thead");
const tbody = document.createElement("tbody");

const headerRow = document.createElement("tr");
const headers = ["First Name", "Last Name", "Age", "Location"];

headers.forEach((text) => {
  const th = document.createElement("th");
  th.textContent = text;
  headerRow.appendChild(th);
});

thead.appendChild(headerRow);

studentsList.forEach((student) => {
  const row = document.createElement("tr");

  const firstNameCell = document.createElement("td");
  firstNameCell.textContent = student.firstName;

  const lastNameCell = document.createElement("td");
  lastNameCell.textContent = student.lastName;

  const ageCell = document.createElement("td");
  ageCell.textContent = student.age.toString();

  const locationCell = document.createElement("td");
  locationCell.textContent = student.location;

  row.appendChild(firstNameCell);
  row.appendChild(lastNameCell);
  row.appendChild(ageCell);
  row.appendChild(locationCell);

  tbody.appendChild(row);
});

table.appendChild(thead);
table.appendChild(tbody);
document.body.appendChild(table);
