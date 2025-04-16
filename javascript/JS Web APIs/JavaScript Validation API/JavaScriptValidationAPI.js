// JavaScript Validation API Example

// Function to validate input fields
function validateForm() {
    const emailInput = document.getElementById('email');
    const passwordInput = document.getElementById('password');
    let isValid = true;

    // Validate email
    if (!emailInput.checkValidity()) {
        document.getElementById('emailError').textContent = emailInput.validationMessage;
        isValid = false;
    } else {
        document.getElementById('emailError').textContent = '';
    }

    // Validate password
    if (!passwordInput.checkValidity()) {
        document.getElementById('passwordError').textContent = passwordInput.validationMessage;
        isValid = false;
    } else {
        document.getElementById('passwordError').textContent = '';
    }

    return isValid;
}

// Attach event listener to the form
document.getElementById('myForm').addEventListener('submit', function (event) {
    if (!validateForm()) {
        event.preventDefault(); // Prevent form submission if validation fails
    }
});