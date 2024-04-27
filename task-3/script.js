document.getElementById("myForm").addEventListener("submit", function (event) {
  event.preventDefault(); // Prevent default form submission

  // Retrieve form values
  let username = document.getElementById("username").value;
  let password = document.getElementById("password").value;

  // Basic form validation
  let usernameError = document.getElementById("usernameError");
  let passwordError = document.getElementById("passwordError");
  usernameError.innerHTML = "";
  passwordError.innerHTML = "";

  if (username.trim() === "") {
    usernameError.innerHTML = "Username is required.";
    return;
  }

  if (password.trim() === "") {
    passwordError.innerHTML = "Password is required.";
    return;
  }

  // Securely handle user input to prevent XSS attacks
  username = sanitizeInput(username);
  password = sanitizeInput(password);

  // Simulate server-side validation
  if (password.length < 8) {
    passwordError.innerHTML = "Password must be at least 8 characters long.";
    return;
  }

  // Display output
  let outputDiv = document.getElementById("output");
  outputDiv.innerHTML = "<p>Welcome, " + username + "!</p>";
});

// Function to sanitize user input
function sanitizeInput(input) {
  return input.replace(/</g, "&lt;").replace(/>/g, "&gt;");
}
