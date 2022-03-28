import React from "react";
import WeatherIcon from "./WeatherIcon";
import "./Forecast.css";

export default function Forecast() {
  return (
    <div className="Forecast">
      <div className="row">
        <div className="col">
          <div className="ForecastDay">Thursday</div>

          <WeatherIcon code="01d" />

          <div className="ForecastTemp">
            <span className="ForecastMax">19°</span>
            <span className="ForecastMin">12°</span>
          </div>
        </div>
      </div>
    </div>
  );
}
