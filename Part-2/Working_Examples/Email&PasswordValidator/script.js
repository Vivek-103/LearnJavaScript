const email = document.getElementById("email");
const password = document.getElementById("password");
const emailError = document.getElementById("emailError");
const pwError = document.getElementById("pwError");
const result = document.getElementById("result");
const pwBar = document.getElementById("pwBar");
const form = document.getElementById("form");

const emailRegex =
  /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[A-Za-z]{2,}$/;

function checkEmail() {
  const value = email.value.trim();

  if (!value) {
    emailError.textContent = "Email is required";
    return false;
  }
  if (!emailRegex.test(value)) {
    emailError.textContent = "Enter a valid email";
    return false;
  }

  emailError.textContent = "";
  return true;
}

function passwordStrength() {
  const pw = password.value;
  let score = 0;

  if (pw.length >= 8) score++;
  if (/[A-Z]/.test(pw)) score++;
  if (/[0-9]/.test(pw)) score++;
  if (/[^A-Za-z0-9]/.test(pw)) score++;

  const widths = ["0%", "25%", "50%", "75%", "100%"];
  pwBar.style.width = widths[score];

  return score;
}

function checkPassword() {
  const pw = password.value;

  if (!pw) {
    pwError.textContent = "Password is required";
    return false;
  }
  if (pw.length < 8) {
    pwError.textContent = "Minimum 8 characters";
    return false;
  }
  if (passwordStrength() < 3) {
    pwError.textContent = "Password is weak";
    return false;
  }

  pwError.textContent = "";
  return true;
}

form.addEventListener("submit", (e) => {
  e.preventDefault();

  const emailValid = checkEmail();
  const pwValid = checkPassword();

  if (emailValid && pwValid) {
    result.textContent = "Validation Successful ✔";
    result.style.color = "green";
  } else {
    result.textContent = "Fix the errors above";
    result.style.color = "red";
  }
});

// Live checks
email.addEventListener("input", checkEmail);
password.addEventListener("input", passwordStrength);
