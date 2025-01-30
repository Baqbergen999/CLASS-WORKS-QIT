// localStorage.setItem('name', 'John');

// const name = localStorage.getItem('name');
// console.log(name);

// localStorage.removeItem('name');

// localStorage.clear();




// const nameField = document.getElementById('nameField');
// // const saveButton = document.getElementById('saveBtn');
// // const clearButton = document.getElementById('clearBtn');
// // const ageField = document.getElementById('ageField');
// // const display = document.getElementById('display');

// // function saveData() {
// //     if (nameField.value === '' || ageField.value === '') {
// //         alert('Please fill in all the fields');
// //         return;
// //     }
// //     localStorage.setItem('name', nameField.value);
// //     localStorage.setItem('age', ageField.value);
// // }
// // function clearData() {
// //     localStorage.clear();
// //     nameField.value = '';
// //     ageField.value = '';
// // }
// // function displayData() {
// //     alert(`Name: ${localStorage.getItem('name')}, Age: ${localStorage.getItem('age')}`);
// // }









const text = document.getElementById('text');
const savedText = document.getElementById('savedText');

function saveData() {
    localStorage.setItem('text', text.value);
    displaySavedText();
}

function clearData() {
    localStorage.removeItem('text');
    savedText.innerHTML = '';
}

function displaySavedText() {
    const saved = localStorage.getItem('text');
    savedText.innerHTML = saved ? `<h1>${saved}</h1><button class="clear" onclick="clearData()">Clear</button>` : '';
}

document.getElementById('saveBtn').addEventListener('click', saveData);
displaySavedText();