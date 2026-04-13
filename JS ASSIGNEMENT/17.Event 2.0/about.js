// 3. In previous assignment you have created a tabular data using javascript. Let’s modify that. Create a form which takes student’s details and show each student detail in table. Each row of table must contain a delete button and an edit button. On click on delete button entire row should be deleted. On click on edit button, a hidden form will appear with the values of that row.



let form = document.getElementById("student");
let inform = document.querySelector(".inform");

let bioData = JSON.parse(localStorage.getItem("bioData")) || [];
let Edit = -1;

let table = document.createElement("table");
inform.appendChild(table);

function renderTable() {
    table.innerHTML = `
    <tr>
    <th>First Name</th>
    <th>Last Name</th>
    <th>Email</th>
    <th>Actions</th>
    </tr>
    `;
    bioData.forEach((student, index) => {
    let row = document.createElement("tr");
    row.innerHTML = `
    <td>${student.name}</td>
    <td>${student.lastname}</td>
    <td>${student.email}</td>
    `;
    
    let cell = document.createElement('td');
    let deleteBtn = document.createElement('button');
    deleteBtn.textContent='Delete'
    deleteBtn.addEventListener("click", () => {
        deleteForm(index);})
        
        
        let editBtn = document.createElement('button');
        editBtn.textContent='Edit';
        
        editBtn.addEventListener("click", () => {
            editForm(index);
        });
        
        cell.appendChild(deleteBtn)
        cell.appendChild(editBtn)
        row.appendChild(cell);
        deleteBtn.className='delete';
        editBtn.className='edit';
        
        table.appendChild(row);

        
    })
    
    
};


form.addEventListener("submit", (e) => {
  e.preventDefault();
  let StudentName = document.getElementById("first-name").value;
  let StudentLastName = document.getElementById("last-name").value;
  let StudentEmail = document.getElementById("email").value;
  let password = document.getElementById('password').value;

  if (Edit === -1) {
    bioData.push({
      name: StudentName,
      lastname: StudentLastName,
      email: StudentEmail,
      password: password,
    });
} else {
    bioData[Edit] = {
        name: StudentName,
        lastname: StudentLastName,
        email: StudentEmail,
        password: password,
    };
    Edit = -1;
  }
  localStorage.setItem("bioData", JSON.stringify(bioData));

  form.reset();

  renderTable();
});

function deleteForm(index) {
  bioData.splice(index, 1);
  localStorage.setItem("bioData", JSON.stringify(bioData));
  renderTable();
}

function editForm(index) {
  let student = bioData[index];
  document.getElementById("first-name").value = student.name;
  document.getElementById("last-name").value = student.lastname;
  document.getElementById("email").value = student.email;

  Edit = index;
}
renderTable();
