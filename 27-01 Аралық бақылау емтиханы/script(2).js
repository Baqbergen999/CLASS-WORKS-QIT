var searchButton = document.getElementById('searchButton');
var searchInput = document.getElementById('search');
var cityList = document.getElementById('cityList');
var errorMessage = document.getElementById('errorMessage');

async function fetchCities() {
    try {
        let response = await fetch('https://jsonplaceholder.typicode.com/users');
        if (!response.ok) {
            throw new Error('Мәліметтерді алу мүмкін болмады:(');
        }
        let data = await response.json();
        return data.map(user => user.address.city);
    } catch (error) {
        errorMessage.textContent = 'Кате орын алды: ' + error.message;
        return [];
    }
}

function displayCities(cities) {
    cityList.innerHTML = '';
    cities.forEach(function(city) {
        var li = document.createElement('li');
        li.textContent = city;
        cityList.appendChild(li);
    });
}

function searchCities(cities, query) {
    return cities.filter(function(city) {
        return city.toLowerCase().includes(query.toLowerCase());
    });
}

searchButton.addEventListener('click', async function() {
    var query = searchInput.value;
    try {
        let cities = await fetchCities();
        var filteredCities = searchCities(cities, query);
        displayCities(filteredCities);
    } catch (error) {
        errorMessage.textContent = 'Кате орын алды: ' + error.message;
    }
});

async function initializeCities() {
    try {
        let cities = await fetchCities();
        displayCities(cities);
    } catch (error) {
        errorMessage.textContent = 'Кате орын алды: ' + error.message;
    }
}

initializeCities();
