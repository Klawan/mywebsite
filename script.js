function togglePasswordVisibility() {
  var passwordInput = document.getElementById("password");
  var toggleButton = document.querySelector(".toggle-password");

  if (passwordInput.type === "password") {
    passwordInput.type = "text";
    toggleButton.classList.add("show-password");
  } else {
    passwordInput.type = "password";
    toggleButton.classList.remove("show-password");
  }
} 

function showAlert(message) {
  var modal = document.getElementById("custom-alert");
  var alertMessage = document.getElementById("alert-message");
  var closeButton = document.getElementById("close-alert");

  alertMessage.textContent = message;
  modal.style.display = "block";

  closeButton.onclick = function() {
    modal.style.display = "none";
  }

  window.onclick = function(event) {
    if (event.target == modal) {
      modal.style.display = "none";
    }
  }
}

document.getElementById("login-form").addEventListener("submit", function(event) {
  event.preventDefault();
  var usernameInput = document.getElementById("username");
  var passwordInput = document.getElementById("password");
  var errorMessage = document.getElementById("error-message");
  var username = usernameInput.value;
  var password = passwordInput.value;
  
  if (username === "klawan" && password === "12345") {
    // Login successful
    showAlert("Welcome to Klawan's website!");
    window.location.href = "homepage.html"; // Redirect immediately after alert
  } else {
    // Invalid username or password
    usernameInput.classList.add("error");
    passwordInput.classList.add("error");
    errorMessage.textContent = "Invalid username or password. Please try again.";
  }
});