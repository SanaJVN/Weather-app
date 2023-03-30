let now = new Date();
let days = [
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thrsday",
  "Friday",
  "Saturday",
  "Sunday",
];
let day = days[now.getDay()];
let hour = now.getHours();
if (hour < 10) {
  hour = `0${hour}`;
}
let min = now.getMinutes();
if (min < 10) {
  min = `0${min}`;
}
let newDate = document.querySelector("#date");
newDate.innerHTML = `${day} ${hour}:${min}`;

function showTemperature(response) {
  document.querySelector("#city").innerHTML = response.data.name;
  document.querySelector("#mainDegree").innerHTML = Math.round(
    response.data.main.temp
  );
  document.querySelector("#temperature-discription").innerHTML =
    response.data.weather[0].main;
  document.querySelector("#Humidity").innerHTML = response.data.main.humidity;
  document.querySelector("#Wind").innerHTML = Math.round(
    response.data.wind.speed
  );
}

function cityName(city) {
  let apikey = "f1b6473cea33289e1ae480b54c226a58";
  let apiurl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric`;
  axios.get(`${apiurl}&appid=${apikey}`).then(showTemperature);
}

let searchForm = document.querySelector("#searching-form");
searchForm.addEventListener("submit", handleSubmit);
function handleSubmit(event) {
  event.preventDefault();
  let city = document.querySelector("#type-city").value;
  cityName(city);
}

function searchLocation(position) {
  let apikey = "f1b6473cea33289e1ae480b54c226a58";
  let apiurl = `https://api.openweathermap.org/data/2.5/weather?lat=${location.coords.latitude}&lon=${location.coords.longitude}&units=metric`;
  axios.get(`${apiurl}&appid=${apikey}`).then(showTemperature);
}

function getCurrentLocation(event) {
  event.preventDefault();
  navigator.geolocation.getCurrentPosition(searchLocation);
}

let currentLocationButton = document.querySelector("#current-location-button");
currentLocationButton.addEventListener("click", getCurrentLocation);

cityName("Lisbon");
