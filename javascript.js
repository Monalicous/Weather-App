function updateWeatherData(response) {
    let weatherTemp = document.querySelector("#weather-temp");
    let temperature = response.data.temperature.current
    let cityElement = document.querySelector("#thecity");

    cityElement.innerHTML = response.data.city;
    weatherTemp.innerHTML = Math.round(temperature);
}

function searchCity(city) {
    let apiKey = "9a9b6ao3534d1b2afb7b49dddt30a6e7";
    let apiUrl = `https://api.shecodes.io/weather/v1/current?query=${city}&key=${apiKey}`;
    axios.get(apiUrl).then(updateWeatherData);
}

function formSubmit(event) {
    event.preventDefault();
    let city = document.querySelector("#input");
    searchCity(city.value);
}
//When user search for a city

let searchFormElement = document.querySelector("#search_city");
searchFormElement.addEventListener("submit", formSubmit);

searchCity("Midrand");

