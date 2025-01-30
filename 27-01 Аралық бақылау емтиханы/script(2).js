var searchButton = document.getElementById('searchButton');
var searchInput = document.getElementById('search');
var cityList = document.getElementById('cityList');
var errorMessage = document.getElementById('errorMessage');

function fetchCities() {
    return fetch('https://jsonplaceholder.typicode.com/users')
        .then(function(response) {
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            return response.json();
        })
        .then(function(data) {
            return data.map(function(user) {
                return user.address.city;
            });
        })
        .catch(function(error) {
            errorMessage.textContent = 'Кате орын алды: ' + error.message;
            return [];
        });
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

searchButton.addEventListener('click', function() {
    var query = searchInput.value;
    fetchCities().then(function(cities) {
        var filteredCities = searchCities(cities, query);
        displayCities(filteredCities);
    });
});

fetchCities().then(displayCities);
