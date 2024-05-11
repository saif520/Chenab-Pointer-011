localStorage.setItem("loginCheck", JSON.stringify("false"));

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

let loginUsername = document.querySelector(".login-username");
let loginPassword = document.querySelector(".login-password");
let signupName = document.querySelector(".signup-name");
let signupUsername = document.querySelector(".signup-username");
let signupPassword = document.querySelector(".signup-password");
let signupEmail = document.querySelector(".signup-email");
let signupNumber = document.querySelector(".signup-number");
let signupBtn = document.querySelector(".signup-btn");
let loginBtn = document.querySelector(".login-btn");

signupBtn.addEventListener("click", (e) => {
  e.preventDefault();

  if (
    signupName.value == "" ||
    signupUsername.value == "" ||
    signupPassword.value == "" ||
    signupEmail.value == "" ||
    signupNumber.value == ""
  ) {
    alert("Fill all the details!");
  } else {
    localStorage.setItem("loginCheck", JSON.stringify("true"));
    let obj = {
      name: signupName.value,
      username: signupUsername.value,
      password: signupPassword.value,
      email: signupEmail.value,
      mobile: signupNumber.value,
    };
    saveUserData(obj);
  }
});

async function saveUserData(obj) {
  try {
    let res = await fetch("http://localhost:3000/users", {
      method: "PUT",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify(obj),
    });
    let data = await res.json();
    console.log(data);
  } catch (error) {
    console.log(error);
  }
}
