function updateWeatherData(response) {
    let weatherTemp = document.querySelector("#weather-temp");
    let temperature = response.data.temperature.current
    let cityElement = document.querySelector("#thecity");
    let descriptionElement = document.querySelector("#condition");
    let humidityElement = document.querySelector("#humidity");
    let windElement = document.querySelector("#speed");
    let timeElement = document.querySelector("#time");
    let date = new Date(response.data.time * 1000);

    cityElement.innerHTML = response.data.city;
    timeElement.innerHTML = formatDate(date);
    descriptionElement.innerHTML = response.data.condition.description;
    humidityElement.innerHTML = `${response.data.temperature.humidity}%`;
    windElement.innerHTML = `${response.data.wind.speed}km/h`
    weatherTemp.innerHTML = Math.round(temperature);
}

function formatDate(date) {
    let minutes = date.getMinutes();
    let hours = date.getHours();
    let days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Satureday"];

    let day = days[date.getDay()];

    if (minutes < 10) {
        minutes = `0${minutes}`;
    }

    return `${day} ${hours}:${minutes}`
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

