// Sample data
const instructorSessions = [
  { id: "INFO465-02", name: "Projects In Information Systems", day: "MWF", time: "10:00-11:00", room: "Room 101" },
  { id: "MATH201-03", name: "Calculus II", day: "TTh", time: "09:00-10:30", room: "Room 202" }, 
];

// Hide the sessions table until the login button is clicked
document.addEventListener('DOMContentLoaded', function() {
  const loginBtn = document.getElementById('instructorLoginBtn');
  if (loginBtn) {
    loginBtn.addEventListener('click', function() {
      console.log('Login button clicked');
      renderSessions();
      document.getElementById('loginSection').style.display = 'none';
    });
  }
});

function renderSessions() {
  const mySessionsDiv = document.getElementById('mySessions');
  if (!mySessionsDiv) return;
  mySessionsDiv.style.display = '';
  const tbody = mySessionsDiv.querySelector('.sessionHolder');
  if (!tbody) return;
  tbody.innerHTML = '';
  instructorSessions.forEach(instructorSessions => {
    const tr = document.createElement('tr');
    tr.innerHTML = `
      <td>${instructorSessions.id}</td>
      <td>${instructorSessions.name}</td>
      <td>${instructorSessions.day}</td>
      <td>${instructorSessions.time}</td>
      <td>${instructorSessions.room}</td>
    `;
    tbody.appendChild(tr);
  });
}
