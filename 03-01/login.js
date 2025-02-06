const toggleBtn = document.getElementById("toggle-btn");
const formTitle = document.getElementById("form-title");
const nameField = document.getElementById("name-field");
const submitButton = document.querySelector("button");
const formBox = document.querySelector(".form-box");

toggleBtn.addEventListener("click", () => {
  const isLogin = formTitle.textContent !== "Login";

  if (isLogin) {
    formTitle.textContent = "Login";
    nameField.classList.add("hidden");
    submitButton.textContent = "Login";
    toggleBtn.textContent = "Sign Up";
  } else {
    formTitle.textContent = "Sign Up";
    nameField.classList.remove("hidden");
    submitButton.textContent = "Sign Up";
    toggleBtn.textContent = "Login";
  }

  formBox.classList.add("flip-animation");
  setTimeout(() => formBox.classList.remove("flip-animation"), 600);
});
