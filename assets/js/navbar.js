//Fake login button just for demo purposes
// Toggle user button text between 'Login' and 'User' on click
document.addEventListener('DOMContentLoaded', function() {
	const userBtn = document.getElementById('userNavBtn');
	const userDropdown = document.getElementById('userDropdown');
	if (userBtn && userDropdown) {
		userBtn.addEventListener('click', function() {
			if (userBtn.textContent === 'Login') {
				userBtn.textContent = 'User';
				userDropdown.style.display = 'block';
			} else {
				userBtn.textContent = 'Login';
				userDropdown.style.display = 'none';
			}
		});
		// Hide dropdown if clicking outside
		document.addEventListener('click', function(e) {
			if (!userBtn.contains(e.target) && !userDropdown.contains(e.target)) {
				userBtn.textContent = 'Login';
				userDropdown.style.display = 'none';
			}
		});
	}
});
