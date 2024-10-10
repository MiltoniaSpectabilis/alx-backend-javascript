// Define the Student interface
interface Student {
  firstName: string;
  lastName: string;
  age: number;
  location: string;
}

// Create two student objects
const student1: Student = {
  firstName: "Nero",
  lastName: "Wolfe",
  age: 50,
  location: "New York"
};

const student2: Student = {
  firstName: "Archie",
  lastName: "Goodwin",
  age: 22,
  location: "New York"
};

// Create an array containing the students
const studentsList: Student[] = [student1, student2];

// Function to render the table
function renderTable(): void {
  const table = document.createElement('table');
  const tbody = document.createElement('tbody');

  studentsList.forEach((student) => {
    const row = document.createElement('tr');

    const firstNameCell = document.createElement('td');
    firstNameCell.textContent = student.firstName;

    const locationCell = document.createElement('td');
    locationCell.textContent = student.location;

    row.appendChild(firstNameCell);
    row.appendChild(locationCell);
    tbody.appendChild(row);
  });

  table.appendChild(tbody);
  document.body.appendChild(table);
}

// Render the table when the page loads
window.onload = () => {
  renderTable();
};
