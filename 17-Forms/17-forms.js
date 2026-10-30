const form = document.getElementById("registrationForm");
const fullName = document.getElementById("fullName");
const email = document.getElementById("email");
const password = document.getElementById("password");
const message = document.getElementById("message");

// Handle form submission
form.addEventListener("submit", event => {
  event.preventDefault();

  // Read and clean input
  const nameValue = fullName.value.trim();
  const emailValue = email.value.trim();
  const passwordValue = password.value;

  // Check name
  if (nameValue.length < 2) {
    message.textContent = "Name must have at least 2 characters.";
    return;
  }

  // Check email
  if (!emailValue.includes("@")) {
    message.textContent = "Enter a valid email.";
    return;
  }

  // Check password length
  if (passwordValue.length < 8) {
    message.textContent = "Password must have at least 8 characters.";
    return;
  }

  // Show success
  message.textContent = `Welcome, ${nameValue}!`;
  form.reset();
});

// Check input as the user types
fullName.addEventListener("input", () => {
  console.log(fullName.value.trim());
});

// Use browser validity checks
email.addEventListener("input", () => {
  console.log(email.validity.valid);
});

// Set a custom validation message
password.addEventListener("input", () => {
  if (password.value.length < 8) {
    password.setCustomValidity("Use at least 8 characters.");
  } else {
    password.setCustomValidity("");
  }
});

// Prevent blank submissions with HTML required attributes
// The browser also performs built-in form validation.

// Inspect the form data
form.addEventListener("submit", event => {
  event.preventDefault();
  console.log("Form submission handled");
});