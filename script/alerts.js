function cityInput(bar) {
  bar.preventDefault();
  let input = document.querySelector("#city-input");
  let h3 = document.querySelector("h3");
  h3.innerHTML = `${input.value}`;
}
let form = document.querySelector("form");
form.addEventListener("submit", cityInput);

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

function temperture(event) {
  if (event.target === Farh) {
    temp.innerHTML = "70";
  } else {
    temp.innerHTML = `50`;
  }
}
let temp = document.querySelector(".temp");
let celcius = document.querySelector(".degreec");
let Farh = document.querySelector(".degreef");
Farh.addEventListener("click", temperture);
celcius.addEventListener("click", temperture);