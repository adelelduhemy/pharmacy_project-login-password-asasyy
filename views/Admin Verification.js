
const form = document.getElementById('password-form');
const passwordInput = document.getElementById('password');

form.addEventListener('submit', function (event) {
    event.preventDefault(); // Prevent form submission

    const enteredPassword = passwordInput.value;
    const correctPassword = '1234'; // Replace with your actual password

    if (enteredPassword === correctPassword) {
        // Redirect to the protected page
        window.location.href = '/Pharmacy Management System.html';
    } else {
        alert('Incorrect password. Please try again.');
    }
});

