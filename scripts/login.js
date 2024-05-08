let loginForm = document.querySelector(".login-container");
let signupForm = document.querySelector(".signup-container");
let signupLink = document.querySelector(".signup-link");
let loginLink = document.querySelector(".login-link");

signupLink.addEventListener("click", (e) => {
  e.preventDefault();
  loginForm.style.display = "none";
  signupForm.style.display = "block";
});

loginLink.addEventListener("click", (e) => {
  e.preventDefault();
  signupForm.style.display = "none";
  loginForm.style.display = "block";
});
