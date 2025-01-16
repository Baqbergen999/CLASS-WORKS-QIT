



function getWeather() {
    const city = document.getElementById('city').value;
    const result = document.getElementById('result');

    if (!city) {
        result.innerHTML = '<p class="error">Қала атауын енгізіңіз!</p>';
        return;
    }

    const apiKey = 'fb2cff02b71168e9f0c68fd3f83d168a';
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric&lang=kk`;

    fetch(url)
        .then(response => response.json())
        .then(data => {

            if (data && data.name) {
                result.innerHTML = `
                    <p><b>${data.name}</b></p>
                    <p>Температура: ${data.main.temp}°C</p>
                    <p>Ауа райы: ${data.weather[0].description}</p>
                `;
            } else {
                result.innerHTML = '<p class="error">Қала табылмады!</p>';
            }
        })
        .catch(() => {
            result.innerHTML = '<p class="error">Қате! Байланысты тексеріңіз.</p>';
        });
}