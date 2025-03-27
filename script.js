document.getElementById("userForm").addEventListener("submit", function(event) {
  event.preventDefault();

  const userInput = document.getElementById("textInput");
  const pattern = /^[a-zA-Z0-9]+$/;

  if (pattern.test(userInput.value)) {
      userInput.setCustomValidity("Success! Your input has been accepted.");
  } else {
      userInput.setCustomValidity("Error! Please enter only letters and numbers.");
  }
});
