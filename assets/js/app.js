// Sample data
const sessions = [
  { id: "CSC101-01", name: "Intro to CS", enrolled: 1, max: 2 },
  { id: "CSC201-01", name: "Data Structures", enrolled: 2, max: 2 }, // full
];

let enrollments = [{ student: "alex@example.edu", sessionId: "CSC101-01" }];

function $(id) { return document.getElementById(id); }

function renderEnrollments(email) {
  const mine = enrollments.filter(e => e.student === email);
  $("myEnrollments").innerHTML = mine.length
    ? `<ul>${mine.map(e => `<li>${e.sessionId}</li>`).join("")}</ul>`
    : "No enrollments yet.";
}

function renderSessions() {
  $("sessionSelect").innerHTML = sessions
    .map(s => `<option value="${s.id}">${s.id} – ${s.name} (${s.enrolled}/${s.max})</option>`)
    .join("");
}

$("studentLoginBtn").onclick = () => {
  const email = $("studentEmail").value.trim();
  if (!email) { alert("Enter an email"); return; }
  localStorage.setItem("student", email);
  renderEnrollments(email);
  renderSessions();
};

$("registerBtn").onclick = () => {
  const email = localStorage.getItem("student");
  if (!email) { $("regMessage").textContent = "Log in first"; return; }

  const sessionId = $("sessionSelect").value;
  const session = sessions.find(s => s.id === sessionId);

  // Duplicate check
  if (enrollments.some(e => e.student === email && e.sessionId === sessionId)) {
    $("regMessage").textContent = "Already enrolled!";
    return;
  }

  // Capacity check
  if (session.enrolled >= session.max) {
    $("regMessage").textContent = "Session is full!";
    return;
  }

  // Register
  enrollments.push({ student: email, sessionId });
  session.enrolled++;
  $("regMessage").textContent = "Enrollment successful!";
  renderEnrollments(email);
  renderSessions();
};
