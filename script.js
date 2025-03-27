document.getElementById("formElement").addEventListener("submit", function(eventObject) {
  eventObject.preventDefault();

  const userInput = document.getElementById("userTextField");
  const alphanumericCheck = /^[a-zA-Z0-9]+$/;

  if (alphanumericCheck.test(userInput.value)) {
      userInput.setCustomValidity("Input accepted! Form ready to submit.");
  } else {
      userInput.setCustomValidity("Oops! Only letters and numbers are allowed.");
  }
  
  userInput.reportValidity();
});