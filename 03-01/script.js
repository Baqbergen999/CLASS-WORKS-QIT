document
  .getElementById("search-form")
  .addEventListener("submit", async function (event) {
    event.preventDefault();

    let cityInput = document.querySelector("#search-form input");
    let city = cityInput.value.trim();

    if (city === "") {
      alert("Please enter a city name!");
      return;
    }

    let apiKey = "fb2cff02b71168e9f0c68fd3f83d168a";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric&lang=en`;

    try {
      let response = await fetch(apiUrl);

      if (!response.ok) {
        throw new Error("City not found, please try another name!");
      }

      let weatherData = await response.json();
      displayWeather(weatherData);

      localStorage.setItem("lastWeather", JSON.stringify(weatherData));
    } catch (error) {
      alert(error.message);
    }
  });

function displayWeather(data) {
  let weatherContainer = document.querySelector(".weather");
  let detailsContainer = document.querySelector(".weather-details");

  weatherContainer.innerHTML = `
        <div class="weather-icon">☀️</div>
        <p><strong>Temperature:</strong> ${data.main.temp}°C</p>
        <p>${data.weather[0].description}</p>
    `;

  let windSpeed = data.wind.speed;

  detailsContainer.innerHTML = `
        <div class="weather-card">
            <p>🌡 <strong>High:</strong> ${data.main.temp_max}°C</p>
            <p>❄ <strong>Low:</strong> ${data.main.temp_min}°C</p>
        </div>
        <div class="weather-card">
            <p>💨 <strong>Wind:</strong> ${windSpeed} km/h</p>
            <p>🌫 <strong>Humidity:</strong> ${data.main.humidity}%</p>
        </div>
        <div class="weather-card">
            <p>🌅 <strong>Sunrise:</strong> ${formatTime(
              data.sys.sunrise,
              data.timezone
            )}</p>
            <p class="sunset">🌇 <strong>Sunset:</strong> ${formatTime(
              data.sys.sunset,
              data.timezone
            )}</p>
        </div>
    `;
}

function formatTime(timestamp, timezone) {
  let date = new Date((timestamp + timezone) * 1000);
  return date.toLocaleTimeString("en-US", {
    hour: "2-digit",
    minute: "2-digit",
  });
}

function loadWeather() {
  let savedWeather = localStorage.getItem("lastWeather");
  if (savedWeather) {
    let weatherData = JSON.parse(savedWeather);
    displayWeather(weatherData);
  }
}

window.addEventListener("load", loadWeather);
