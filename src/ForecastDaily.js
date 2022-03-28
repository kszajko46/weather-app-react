import React from "react";
import WeatherIcon from "./WeatherIcon";

export default function ForecastDaily(props) {
  function maxTemp() {
    let temp = Math.round(props.data.temp.max);
    return `${temp}°`;
  }

  function minTemp() {
    let temp = Math.round(props.data.temp.min);
    return `${temp}°`;
  }

  function day() {
    let date = new Date(props.data.dt * 1000);
    let day = date.getDay();

    let days = [
      "Sunday",
      "Monday",
      "Tuseday",
      "Wednesday",
      "Thursday",
      "Friday",
      "saturday",
    ];

    return days[day];
  }

  return (
    <div>
      <div className="ForecastDay">{day()}</div>

      <WeatherIcon code={props.data.weather[0].icon} size={36} />

      <div className="ForecastTemp">
        <span className="ForecastMax">{maxTemp()}</span>

        <span className="ForecastMin">{minTemp()}</span>
      </div>
    </div>
  );
}
