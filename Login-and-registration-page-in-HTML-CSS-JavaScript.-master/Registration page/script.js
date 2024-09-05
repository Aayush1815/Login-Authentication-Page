document.getElementById("registrationForm").addEventListener("submit", function(event) {
    event.preventDefault();
    
    const firstName = document.getElementById("firstName").value;
    const lastName = document.getElementById("lastName").value;
    const password = document.getElementById("password").value;

    if (firstName === "" || lastName === "" || password === "") {
        alert("Please fill out all required fields.");
        return false;
    }

    alert("Registration Successful!");
});

const passwordInput = document.getElementById("password");

passwordInput.onfocus = function() {
    document.getElementById("message").style.display = "block";
}

passwordInput.onblur = function() {
    document.getElementById("message").style.display = "none";
}

passwordInput.onkeyup = function() {
    validatePassword(passwordInput.value);
}

function validatePassword(password) {
    const letter = /[a-z]/g;
    const capital = /[A-Z]/g;
    const number = /[0-9]/g;

    if (password.match(letter)) {
        // Code to handle valid lowercase letter
    }
    
    if (password.match(capital)) {
        // Code to handle valid uppercase letter
    }
    
    if (password.match(number)) {
        // Code to handle valid number
    }
    
    if (password.length >= 8) {
        // Code to handle valid length
    }
}
