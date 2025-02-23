const form = document.getElementById('emailForm');
const emailInput = document.getElementById('emailInput');
const warningMessage = document.querySelector('.warning');

form.addEventListener('submit', (e) => {
    e.preventDefault();
    const email = emailInput.value.trim();

    if (validateEmail(email)) {
        // Valid email
        warningMessage.style.display = 'none';
        emailInput.classList.remove('input-error');
        emailInput.value = ''; // Clear on success
    } else {
        // Handle ALL invalid cases (including empty)
        warningMessage.textContent = 'Please provide a valid email address';
        warningMessage.style.display = 'block';
        emailInput.classList.add('input-error');
    }
});

function validateEmail(email) {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
}