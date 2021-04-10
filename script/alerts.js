function formatDate(timestamp) {
  let date = new Date(timestamp);
  let minutes = date.getMinutes();
  let hours = date.getHours();
  let days = [
    `Monday`,
    `Tuesday`,
    `Wednesday`,
    `Thursday`,
    `Friday`,
    `Saturday`,
    `Sunday`
  ];
  let day = days[date.getDay()];
  return `${day} ${hours}:${minutes}`;
}

function formatDay(daysCycle) {
  let date = new Date(daysCycle * 1000);
  let day = date.getDay();
  let days = [`Sun`, `Mon`, `Tues`, `Wed`, `Thurs`, `Fri`, `Sat`];

  return days[day];
}

function cityInput(bar) {
  bar.preventDefault();
  console.log(bar.data);
  let input = document.querySelector("#city-input");
  let h3 = document.querySelector("h3");
  h3.innerHTML = `${input.value}`;
  let apiKey = "0c9f5772c0f4bd1cd99a1c942c3d0c32";
  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${input.value}&units=imperial`;
  axios.get(`${apiUrl}&appid=${apiKey}`).then(getWeather);
}

function displayForecast(responce) {
  let forecast = responce.data.daily;
  let forecastElement = document.querySelector("#Forecast");
  let forecastHTML = `<div class="row">`;

  forecast.forEach(function (forecastDay, index) {
    if (index < 5) {
      forecastHTML =
        forecastHTML +
        ` 
      
      <div class="col-2">
      <div class="forecast-day">
      ${formatDay(forecastDay.dt)}
      </div>
      <img src="http://openweathermap.org/img/wn/${
        forecastDay.weather[0].icon
      }@2x.png" alt=""
    width="30px"
    >
    <br>
    <span class="forecast-farh">
    ${Math.round(forecastDay.temp.max)}°
    </span>
    <span class="forecast-celcius">
    ${Math.round(forecastDay.temp.min)}°
    </span>
    </div>`;
    }
  });
  forecastHTML = forecastHTML + `</div>`;
  forecastElement.innerHTML = forecastHTML;
}

function getForecast(coordinates) {
  let apiKey = "0c9f5772c0f4bd1cd99a1c942c3d0c32";
  let apiUrl = `https://api.openweathermap.org/data/2.5/onecall?lat=${coordinates.lat}&lon=${coordinates.lon}&appid=${apiKey}&units=imperial`;
  axios.get(apiUrl).then(displayForecast);
}
function getWeather(output) {
  console.log(output.data);
  let currentTemp = Math.round(output.data.main.temp);
  let temperature = document.querySelector(".temp");
  temperature.innerHTML = `${currentTemp}`;
  let decsription = document.querySelector(".descrip");
  decsription.innerHTML = output.data.weather[0].description;
  let humid = document.querySelector(".humidity");
  humid.innerHTML = output.data.main.humidity;
  let windSpeed = document.querySelector(".wind");
  windSpeed.innerHTML = Math.round(output.data.wind.speed);
  let dateElement = document.querySelector("#date");
  dateElement.innerHTML = formatDate(output.data.dt * 1000);
  let iconElement = document.querySelector("#icon");
  iconElement.setAttribute(
    "src",
    `http://openweathermap.org/img/wn/${output.data.weather[0].icon}@2x.png`
  );
  iconElement.setAttribute("alt", output.data.weather[0].description);
  celciusTemp = output.data.main.temp;

  getForecast(output.data.coord);
}

function showFarhrenheit(event) {
  event.preventDefault();
  let farhrenheitTemp = (celciusTemp * 9) / 5 + 32;
  let temperature = document.querySelector(".temp");
  temperature.innerHTML = Math.round(farhrenheitTemp);
}

let celciusTemp = null;

function showCelcuis(event) {
  event.preventDefault();
  let temperature = document.querySelector(".temp");
  temperature.innerHTML = Math.round(celciusTemp);
}

let farh = document.querySelector("#degree");
farh.addEventListener("click", showFarhrenheit);

let celciuslink = document.querySelector("#degreeC");
celciuslink.addEventListener("click", showCelcuis);

let form = document.querySelector("form");
form.addEventListener("submit", cityInput);
