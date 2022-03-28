import React from "react";
import WeatherIcon from "./WeatherIcon";
import "./Forecast.css";
import axios from "axios";

export default function Forecast(props) {
  function handleResponse(response) {
    console.log(response.data);
  }

  let apiKey = "1921aa558d6b3e6d5b52f0eeb4ab5751";
  let lat = props.coordinates.lat;
  let lon = props.coordinates.lon;
  let apiUrl = `https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&exclude={part}&appid=${apiKey}&units=metric`;

  axios.get(apiUrl).then(handleResponse);

  return (
    <div className="Forecast">
      <div className="row">
        <div className="col">
          <div className="ForecastDay">Thursday</div>

          <WeatherIcon code="01d" size={15} />

          <div className="ForecastTemp">
            <span className="ForecastMax">19°</span>
            <span className="ForecastMin">12°</span>
          </div>
        </div>
      </div>
    </div>
  );
}
