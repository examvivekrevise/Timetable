document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    // Example hardcoded credentials
    const correctUsername = 'vivek';
    const correctPassword = 'elon musk';

    if (username === correctUsername && password === correctPassword) {
        window.location.href = 'table.html';  // Redirect to another page
    } else {
        alert('Incorrect username or password.');
    }
});
