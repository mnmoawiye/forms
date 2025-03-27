document.getElementById("myForm").addEventListener("submit", function(eventTrigger) {
  eventTrigger.preventDefault();

  const userInput = document.getElementById("inputField");
  const patternCheck = /^[a-zA-Z0-9]+$/;

  if (patternCheck.test(userInput.value)) {
      userInput.setCustomValidity("Great! Your input is valid and ready to submit.");
  } else {
      userInput.setCustomValidity("Oops! Use only letters and numbers in your input.");
  }
  userInput.reportValidity();
});