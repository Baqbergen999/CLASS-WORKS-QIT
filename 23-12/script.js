// const myButton = document.getElementById('myButton');
// const text = document.getElementById('text');

// myButton.addEventListener('click', () => {
//     myButton.classList.add('padding');
//     text.classList.remove('text');
// });

// myButton.addEventListener('dblclick' , () => {
//     myButton.classList.add('center');
// });

// const description = document.getElementById('description');
// const toggle = document.getElementById('toggle');

// toggle.addEventListener('click', () => {
//     description.classList.toggle('hide');
// });

// const searchInput = document.getElementById('searchInput');

// const searchButton = document.getElementById('search');

// searchButton.addEventListener('click', () => {
//     searchInput.classList.toggle('search-2');
// });







const myButton = document.getElementById('myButton');
const container = document.querySelector('.container');

myButton.addEventListener('click', () => {
    container.classList.toggle('container-1');
})