// const login = document.getElementById('login');
// const saveButton = document.getElementById('saveBtn');
// const clearButton = document.getElementById('clearBtn');
// const password = document.getElementById('password');
// const display = document.getElementById('display');
// const savedText = document.getElementById('savedText');

// function saveData() {
//     if (login.value === '' || password.value === '') {
//         alert('Please fill all the inputs');
//         return;
//     }
//     sessionStorage.setItem('login', login.value);
//     sessionStorage.setItem('password', password.value);
//     alert('Data saved!');
// }
// function clearData() {
//     sessionStorage.removeItem('login');
//     sessionStorage.removeItem('password');
//     login.value = '';
//     password.value = '';
//     alert('Data cleared!');
// }
// function displayData() {
//     savedText.innerHTML = `<h1>Login: ${sessionStorage.getItem('login')}, Password: ${sessionStorage.getItem('password')}</h1><button class="clear" onclick="clearData()">Clear</button>`;

// }
// display.addEventListener('click', (e) => {
//     e.preventDefault();
//     displayData();
// });





const colorField = document.getElementById("colorField");
const saveButton = document.getElementById("saveBtn");

function saveData() {
  sessionStorage.setItem("color", colorField.value);
  document.body.style.backgroundColor = colorField.value;
}

function clearData() {
  sessionStorage.removeItem("color");
  document.body.style.backgroundColor = "white";
  colorField.value = '';
}

function displaySavedColor() {
  const saved = sessionStorage.getItem("color");
  document.body.style.backgroundColor = saved;
  colorField.value = saved;
}

saveButton.addEventListener("click", (e) => {
  e.preventDefault();
  saveData();
});

displaySavedColor();