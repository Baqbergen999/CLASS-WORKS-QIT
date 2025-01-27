const apiKey = `https://jsonplaceholder.typicode.com/todos`;
const fetchButton = document.getElementById('fetchButton');
const statusMessage = document.getElementById('statusMessage');
const taskContainer = document.getElementById('taskContainer');

async function fetchData() {
    statusMessage.textContent = 'Деректер алынуда...';
    taskContainer.textContent = '';
    try {
        const response = await fetch(apiKey);
        const data = await response.json();
        if (data.length > 0) {
            const randomTask = data[Math.floor(Math.random() * data.length)];
            taskContainer.textContent = `Task: ${randomTask.title}`;
            statusMessage.textContent = 'Деректер сәтті алынды!';
        } else {
            statusMessage.textContent = 'No tasks found.';
        }
    } catch (error) {
        statusMessage.textContent = 'Қате орын алды: ' + error.message;
    }
}

fetchButton.addEventListener('click', fetchData);