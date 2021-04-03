let now = new Date();
let currentTime = document.getElementById("date");

let days = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday"
];
let day = days[now.getDay()];
let hours = now.getHours();
let minutes = now.getMinutes();
minutes = `0${minutes}`.slice(-2);

currentTime.innerHTML = `${day} ${hours}:${minutes}`;

function search(event) {
  event.preventDefault();
  let searchInput = document.getElementById("input-city");
  let h1 = document.querySelector("H1");
  h1.innerHTML = `${searchInput.value}`;
  searchCity(searchInput.value);
}

function searchCity(city) {
  let apiKey = "3ef3d8132df153f5933e2cde2a4d420d";
  let units = "metric";
  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=${units}`;
  axios.get(`${apiUrl}&appid=${apiKey}`).then(showTemperature);
}

let formWeather = document.querySelector("#form-city");
formWeather.addEventListener("submit", search);

function showTemperature(response) {
  let temperatureRound = Math.round(response.data.main.temp);
  let temperatureElement = document.querySelector("#temperatureNow");
  let descriptionWeather = response.data.weather[0].main;
  let descriptionElement = document.querySelector("#weather-description");

  temperatureElement.innerHTML = `${temperatureRound}°`;
  descriptionElement.innerHTML = `${descriptionWeather}`;
}
