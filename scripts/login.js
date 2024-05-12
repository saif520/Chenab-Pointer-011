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

let userURL = "https://server-ve5q.onrender.com/users";
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
  saveUserData();
  // localStorage.setItem("loginCheck", JSON.stringify("true"));
});

async function saveUserData() {
  if (
    signupName.value &&
    signupUsername.value &&
    signupPassword.value &&
    signupEmail.value &&
    signupNumber.value
  ) {
    if (signupPassword.value.length < 5) {
      alert("Password must be 5 characters or more!");
    } else if (await verifyUserData()) {
      alert("User is already registered. Please Log in");
      signupForm.style.display = "none";
      loginForm.style.display = "block";
    } else {
      let newObj = {
        name: signupName.value,
        username: signupUsername.value,
        password: signupPassword.value,
        email: signupEmail.value,
        mobile: signupNumber.value,
      };
      try {
        await fetch(userURL, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(newObj),
        });
        alert("User Registered Successfuly!");
      } catch (error) {
        console.log(error);
      }
    }
  } else {
    alert("Fill in all the fields!");
  }
}

async function verifyUserData() {
  try {
    let res = await fetch(userURL);
    let data = await res.json();
    for (let element of data) {
      if (element.username == signupUsername.value) {
        return true;
      }
    }
  } catch (err) {
    console.log(err);
  }

  return false;
}

//login

loginBtn.addEventListener("click", (e) => {
  e.preventDefault();
  createLoginSession();
});

async function createLoginSession() {
  if (await userLogin()) {
    localStorage.setItem("loginToken", JSON.stringify("true"));
    alert("Logged In");
    window.location.href =
      "../html/index.html";
  } else {
    alert("Wrong Credentials!");
  }
}

async function userLogin() {
  if (loginUsername.value && loginPassword.value) {
    try {
      let res = await fetch(userURL);
      let data = await res.json();
      for (let element of data) {
        if (
          element.username == loginUsername.value &&
          element.password == loginPassword.value
        ) {
          return true;
        }
      }
    } catch (err) {
      console.log(err);
    }

    return false;
  } else {
    alert("Fill in all the Fields!");
  }
}
