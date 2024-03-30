document.addEventListener('DOMContentLoaded', function () {
    const usernameField = document.getElementById('username');
    const emailField = document.getElementById('email');
    const passwordField = document.getElementById('password');
    const createAccountButton = document.getElementById('create-account');
    const termsCheckbox = document.getElementById('defaultCheck1');

    const validateUsername = () => {
        const username = usernameField.value;
        const regex = /^[a-zA-Z][a-zA-Z0-9]{11,}$/;
        return regex.test(username);
    };

    const validateEmail = () => {
        const email = emailField.value;
        const regex = /^[a-zA-Z][a-zA-Z0-9]{10,}@([a-zA-Z]+\.[a-zA-Z]+)$/;
        return regex.test(email);
    };

    const validatePassword = () => {
        const password = passwordField.value;
        return password.length >= 12;
    };

    const validateCheckbox = () => {
        return termsCheckbox.checked;
    };

    const updateButtonState = () => {
        createAccountButton.disabled = !(validateUsername() && validateEmail() && validatePassword() && validateCheckbox());
    };

    usernameField.addEventListener('input', updateButtonState);
    emailField.addEventListener('input', updateButtonState);
    passwordField.addEventListener('input', updateButtonState);
    termsCheckbox.addEventListener('change', updateButtonState);

    createAccountButton.addEventListener('click', function(event) {
        event.preventDefault();

        if (validateUsername() && validateEmail() && validatePassword() && validateCheckbox()) {
            window.location.href = 'account.html';
        }
    });
});
