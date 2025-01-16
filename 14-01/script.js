// fetch('https:/api.example.com/data')
//     .then(respone => respone.json())
//     .then(data => console.log(data))
//     .catch(error => console.error('Қате орын алды', error));








fetch("https://jsonplaceholder.typicode.com/posts/5")
    .then(response => response.json())
    .then(data => {
        document.body.innerHTML = `<h1>Тақырыбы: ${data.title}</h1>
        <p>Мазмұны: ${data.body}</p>`;
    })
    .catch(error => {
        console.error('Қате:', error);
        document.body.innerHTML = '<p>Постты жүктеу сәтсіз болды.</p>';
    });