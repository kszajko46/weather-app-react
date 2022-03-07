import React, { useState } from "react";
import axios from "axios";

export default function Search() {
  const [city, setCity] = useState(" ");
  const [loaded, setLoaded] = useState(false);
  const [weather, setWeather] = useState({});

  function displayWeather(response) {
    setLoaded(true);
    setWeather({
      temp: response.data.main.temp,
      wind: response.data.wind.speed,
      humidity: response.data.main.humidity,
      description: response.data.weather[0].description,
      icon: `http://openweathermap.org/img/wn/${response.data.weather[0].icon}@2x.png`,
    });
  }

  function handleSubmit(event) {
    event.preventDefault();
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=1921aa558d6b3e6d5b52f0eeb4ab5751&units=metric`;
    axios.get(apiUrl).then(displayWeather);
  }

  function currentCity(event) {
    setCity(event.target.value);
  }

  let form = (
    <form onSubmit={handleSubmit}>
      <input
        type="search"
        autocomplete="off"
        autofocus="on"
        placeholder="Enter a city"
        id="search-city"
        onChange={currentCity}
      />
      <input type="submit" value="search" />
    </form>
  );
  if (loaded) {
    return (
      <div>
        {form}
        <ul>
          <li>Temperature: {Math.round(weather.temp)}℃</li>
          <li>Wind: {Math.round(weather.wind)}km</li>
          <li>Humidity: {weather.humidity}%</li>
          <li>description: {weather.description}</li>
          <li>
            <img src={weather.icon} alt="Weather Icon" />
          </li>
        </ul>
      </div>
    );
  } else {
    return form;
  }
}
