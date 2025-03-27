const form = document.getElementById('myForm');
const inputField = document.getElementById('inputField');

const alphanumericPattern = /^[a-zA-Z0-9]+$/;

inputField.addEventListener('input', function() {
    if (alphanumericPattern.test(inputField.value)) {
        inputField.setCustomValidity('');
    } else {
        inputField.setCustomValidity('Please enter only alphanumeric characters');
    }
});

form.addEventListener('submit', function(event) {
    if (!alphanumericPattern.test(inputField.value)) {
        event.preventDefault();
        inputField.reportValidity();
    }
});