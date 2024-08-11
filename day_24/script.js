const apiKey = "ba23ff0903ec436fd3a182fee22f8e37";

document.getElementById("search-btn").addEventListener("click", getWeather);

async function getWeather() {
  const searchBox = document.getElementById("search-box");
  const cityName = searchBox.value;
  searchBox.value = "";

  let geoData;
  try {
    geoData = await fetch(
      `https://api.openweathermap.org/geo/1.0/direct?q=${cityName}&limit=5&appid=${apiKey}`
    );
  } catch (error) {
    console.log("Error : ", error);
  }

  const geoLocation = await geoData.json();

  const lat = geoLocation[0]["lat"];
  const lon = geoLocation[0]["lon"];
  const name = geoLocation[0]["name"];
  const state = geoLocation[0]["state"];
  const country = geoLocation[0]["country"];

  let weatherResponse;
  try {
    weatherResponse =
      await fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&units=metric&appid=${apiKey}
    `);
  } catch (error) {
    console.log("Error : ", error);
  }

  const weatherData = await weatherResponse.json();

  const temprature = weatherData.main.temp;
  const humidity = weatherData.main.humidity;
  const weather = weatherData.weather[0].main;
  const description = weatherData.weather[0].description;
  const windSpeed = weatherData.wind.speed;

  document.getElementById("temperature").innerText = temprature;
  document.getElementById("humidity").innerText = humidity;
  document.getElementById("weather").innerText = weather;
  document.getElementById("description").innerText = description;
  document.getElementById("windSpeed").innerText = windSpeed;
  document.getElementById(
    "location"
  ).innerText = `${name} ,${state} ,${country}`;
}
