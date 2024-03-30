document.addEventListener('DOMContentLoaded', function() {
    const cardNumberInput = document.getElementById('cardNumber');
    const holderNameInput = document.getElementById('holderName');
    const passcodeInput = document.getElementById('passcode');
    const payNowBtn = document.getElementById('payNowBtn');

    function validateCardNumber(cardNumber) {
        const regex = /^\d{4} \d{4} \d{4} \d{4}$/;
        return regex.test(cardNumber);
    }

    function formatCardNumber(cardNumber) {
        const numericValue = cardNumber.replace(/\D/g, '');
        const formattedValue = numericValue.replace(/(\d{4})/g, '$1 ').trim();
        return formattedValue;
    }

    function validateHolderName(holderName) {
        const regex = /^[a-zA-Z\s]{12,}$/;
        return regex.test(holderName);
    }

    function validatePasscode(passcode) {
        const regex = /^\d{0,4}$/;
        return regex.test(passcode);
    }

    function validateForm() {
        const cardNumber = cardNumberInput.value.trim();
        const holderName = holderNameInput.value.trim();
        const passcode = passcodeInput.value.trim();

        if (!validateCardNumber(cardNumber)) {
            alert("Please enter a valid card number.");
            return false;
        }

        if (!validateHolderName(holderName)) {
            alert("Please enter a valid holder's name with minimum 12 characters.");
            return false;
        }

        if (!validatePasscode(passcode)) {
            alert("Please enter a valid 4-digit passcode.");
            return false;
        }

        return true;
    }

    payNowBtn.addEventListener('click', function() {
        if (validateForm()) {
            clearCartItems();
            window.location.href = 'history.html';
        }
    });

    function clearCartItems() {
        localStorage.removeItem('cartItems');
    }

    cardNumberInput.addEventListener('input', function(event) {
        const formattedValue = formatCardNumber(event.target.value);
        event.target.value = formattedValue;
    });

    passcodeInput.addEventListener('keydown', function(event) {
        if (event.key === 'Backspace' || /\d/.test(event.key)) {
            return;
        }
        event.preventDefault();
    });
});
