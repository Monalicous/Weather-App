function formSubmit(event) {
    event.preventDefault();
    let city = document.querySelector("#input");
    let cityElement = document.querySelector("#thecity");
    cityElement.innerHTML = city.value;
}

let searchFormElement = document.querySelector("#search_city");
searchFormElement.addEventListener("submit", formSubmit);