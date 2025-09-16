const students = [
  { id: 1, name: 'Scarlet Frazer', sessionID:'INFO465-02' , status: 'Enrolled' },
  { id: 2, name: 'Bob Smith', sessionID:'MATH201-03', status: 'Enrolled' },
  { id: 3, name: 'Robert Lee', sessionID:'INFO465-02', status: 'Waitlisted' },
  { id: 4, name: 'Tom Jerry', sessionID:'MATH201-03', status: 'Enrolled' },
]

// Hide the sessions table until the login button is clicked
document.addEventListener('DOMContentLoaded', function() {
  const loginBtn = document.getElementById('instructorLoginBtn');
  if (loginBtn) {
    loginBtn.addEventListener('click', function() {
      renderStudents();
      document.getElementById('loginSection').style.display = 'none';
    });
  }
});

//Populate the table with students
function renderStudents() {
  const mySessionsDiv = document.getElementById('sessionInfo');
  if (!mySessionsDiv) return;
  mySessionsDiv.style.display = '';
  const tbody = mySessionsDiv.querySelector('.sessionHolder');
  if (!tbody) return;
  tbody.innerHTML = '';
  const filter = document.getElementById('sessionFilter');
  const selectedSession = filter ? filter.value : 'all';
  students
    .filter(student => selectedSession === 'all' || student.sessionID === selectedSession)
    .forEach(student => {
      const tr = document.createElement('tr');
      tr.innerHTML = `
        <td>${student.id}</td>
        <td>${student.name}</td>
        <td>${student.sessionID}</td>
        <td>${student.status}</td>
      `;
      tbody.appendChild(tr);
    });
}

// Add event listener for dropdown after DOMContentLoaded
document.addEventListener('DOMContentLoaded', function() {
  const filter = document.getElementById('sessionFilter');
  if (filter) {
    filter.addEventListener('change', renderStudents);
  }
});
