// -------- Global Variables --------
let count = 0;

// -------- Feature 1: Dark Mode Toggle --------
const themeToggle = document.getElementById("themeToggle");
themeToggle.addEventListener("click", () => {
  document.body.classList.toggle("dark-mode");
});

// -------- Feature 2: Click Counter --------
const counterBtn = document.getElementById("counterBtn");
const countDisplay = document.getElementById("countDisplay");

counterBtn.addEventListener("click", () => {
  count++;
  countDisplay.textContent = count;
});

// -------- Feature 3: Custom Form Validation --------
const signupForm = document.getElementById("signupForm");
const formMessage = document.getElementById("formMessage");

signupForm.addEventListener("submit", function (e) {
  e.preventDefault(); // Prevent default form submission

  // Get field values
  const username = document.getElementById("username").value.trim();
  const email = document.getElementById("email").value.trim();
  const password = document.getElementById("password").value.trim();

  // Custom validation rules
  if (username.length < 3) {
    formMessage.textContent = "Username must be at least 3 characters long.";
    formMessage.style.color = "red";
    return;
  }

  const emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
  if (!emailPattern.test(email)) {
    formMessage.textContent = "Please enter a valid email address.";
    formMessage.style.color = "red";
    return;
  }

  if (password.length < 6) {
    formMessage.textContent = "Password must be at least 6 characters long.";
    formMessage.style.color = "red";
    return;
  }

  // If validation passes
  formMessage.textContent = "Form submitted successfully!";
  formMessage.style.color = "green";
  signupForm.reset();
});
