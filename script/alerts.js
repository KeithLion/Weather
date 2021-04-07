function cityInput(bar) {
  bar.preventDefault();
  let input = document.querySelector("#city-input");
  let h3 = document.querySelector("h3");
  h3.innerHTML = `${input.value}`;
  let apiKey = "0c9f5772c0f4bd1cd99a1c942c3d0c32";
  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${input.value}&units=metric`;
  axios.get(`${apiUrl}&appid=${apiKey}`).then(getWeather);
}
let form = document.querySelector("form");
form.addEventListener("submit", cityInput);

function getWeather(output) {
  console.log(output.data);
  let currentTemp = Math.round(output.data.main.temp);
  let temperature = document.querySelector(".temp");
  temperature.innerHTML = `${currentTemp}°`;
  let decsription = document.querySelector(".descrip");
  decsription.innerHTML = output.data.weather[0].description;
  let humid = document.querySelector(".humidity");
  humid.innerHTML = output.data.main.humidity;
  let windSpeed = document.querySelector(".wind");
  windSpeed.innerHTML = Math.round(output.data.wind.speed);
}

let current = new Date();
let minute = current.getMinutes();
let hour = current.getHours();
let time = document.querySelector("#time");
time.innerHTML = `${hour}:${minute}`;

let date = current.getDate();
let days = [
  `Sunday`,
  `Monday`,
  `Tuesday`,
  `Wednesday`,
  `Thursday`,
  `Friday`,
  `Saturday`
];
let week = days[current.getDay()];
let months = [
  `Jan`,
  `Feb`,
  `Mar`,
  `Apr`,
  `May`,
  `Jun`,
  `Jul`,
  `Aug`,
  `Sep`,
  `Oct`,
  `Nov`,
  `Dec`
];
let month = months[current.getMonth()];

let today = document.querySelector("#currentDay");
let currentdate = `${week}, ${month} ${date}`;
today.innerHTML = `${currentdate}`;
