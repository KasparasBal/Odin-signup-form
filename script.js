const formInputs = document.querySelectorAll(".form input");
const passwordInput = document.getElementById("password");
const confirmPasswordInput = document.getElementById("confirmPassword");
const form = document.getElementById("form");
const formMessage = document.querySelector(".formMessage");

formInputs.forEach((input) => {
  input.addEventListener("blur", () => {
    input.dataset.touched = "true";
  });
});

form.addEventListener("submit", (e) => {
  e.preventDefault();
  if (passwordInput.value !== confirmPasswordInput.value) {
    formMessage.style.display = "block";
    formMessage.style.color = "#b91c1c";
    formMessage.textContent = "Password do not match!";
  } else {
    formMessage.style.display = "block";
    formMessage.style.color = "#596d48";
    formMessage.textContent = "Your has been submitted successfully!";
    formInputs.value = "";
  }
});
