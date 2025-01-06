
// const nameField = document.getElementById('name');
// const helperText = document.getElementById('helperText');

// nameField.addEventListener('focus', () => {
//     nameField.style.background = 'black';
//     nameField.style.color = 'white';
//     helperText.textContent = 'Толтырыңыз';
// })
// nameField.addEventListener('blur', () => {
//     nameField.style.background = "white";
//     nameField.style.color = 'black';
//     helperText.textContent = '';
// })

// const email = document.getElementById('email');
// const liveOuptut = document.getElementById('liveOutput');

// email.addEventListener('input', () => {
//     liveOuptut.textContent =email.value;
// });



const errorMessage = document.getElementById("errorMessage");
const signinForm = document.getElementById("signinForm");

signinForm.addEventListener("submit", (event) => {
    event.preventDefault();
    
    const nameValue = document.getElementById("name").value; // ""
    const emailValue = document.getElementById("email").value;
    const passwordValue = document.getElementById("password").value;
    const confirmPassword = document.getElementById("confirmPassword").value;
    
    if (nameValue === "") {
        errorMessage.style.color = "red";
        errorMessage.textContent = "Есіміңізді дұрыс енгізіңіз!";
    }
    else if (!emailValue.includes("@")) {
        errorMessage.style.color = "red";
        errorMessage.textContent = "Поштаны дұрыс енгізіңіз!";
    }
    else if (passwordValue < 6) {
        errorMessage.style.color = "red";
        errorMessage.textContent = "Құпия сөз 6 символдан аз!";
    }
    else if (passwordValue !== confirmPassword) {
        errorMessage.style.color = "red";
        errorMessage.textContent = "Құпия сөз сай келмейді!";
    }
    else {
        errorMessage.style.color = "green";
        errorMessage.textContent = "Форма сәтті жіберілді!"
    }
});
