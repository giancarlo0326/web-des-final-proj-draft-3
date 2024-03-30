function validateForm(event) {
    event.preventDefault();

    var email = document.getElementById("email").value;
    var password = document.getElementById("password").value;
    var errorMessage = document.getElementById("error-message");
    errorMessage.innerHTML = "";

    if (email.trim() === "" && password.trim() === "") {
        errorMessage.innerHTML = "Please enter your email and password.";
        return;
    }

    var emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    if (!emailRegex.test(email)) {
        errorMessage.innerHTML += "Invalid email format. ";
    }

    var passwordRegex = /^[a-zA-Z0-9!@#$%^&*()_+]{12,}$/;
    if (!passwordRegex.test(password)) {
        errorMessage.innerHTML += "Invalid password format.";
    }

    if (errorMessage.innerHTML === "") {
        document.getElementById("loginForm").submit();
    }
}

document.getElementById("loginForm").addEventListener("submit", validateForm);
