const loginForm = document.getElementById("loginForm");
const errorMessage = document.getElementById("errorMessage");


loginForm.addEventListener('submit', (event) => {
    event.preventDefault(); // Беттің өздігінен жаңартылуын тоқтады

    const emailValue = document.getElementById('email').value;
    const passwordValue = document.getElementById('password').value;

    if (!emailValue.includes('@')) {
        errorMessage.textContent = "Поштаңыз толық емес!"
        errorMessage.style.color = "red";
    } else if (passwordValue.length < 6) {
        errorMessage.textContent = 'Қупия сөз кем дегенде 6 символдан тұруы керек';
        errorMessage.style.color = "red";
    } else {
        errorMessage.style.color = "greenyellow";
        errorMessage.textContent = "Форма сәтті жіберілді!";
        window.location.href = "index(1).html";// Басқа бетке жібереді
    }
});
