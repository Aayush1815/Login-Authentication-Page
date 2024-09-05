document.getElementById('loginForm').addEventListener('submit', function (e) {
    e.preventDefault();

    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    if (username === "" || password === "") {
        alert("Please enter both username and password.");
    } else {
        alert(`Username: ${username}\nPassword: ${password}`);
        // Here you can add your logic to process the login credentials
    }
});
