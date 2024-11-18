function refreshWeather(response) {
    console.log(response.data.current.temperature);
}

function searchCity(city) {
    let apiKey = "9a9b6ao3534d1b2afb7b49dddt30a6e7";
    let apiUrl = `https://api.shecodes.io/weather/v1/current?query=${city}&key=${apiKey}&units=metric`
    axios.get(apiUrl).then(refreshWeather);
}

function formSubmit(event) {
    event.preventDefault();
    let city = document.querySelector("#input");
    let cityElement = document.querySelector("#thecity");
    cityElement.innerHTML = city.value;
    searchCity(city.value);
}

let searchFormElement = document.querySelector("#search_city");
searchFormElement.addEventListener("submit", formSubmit);

