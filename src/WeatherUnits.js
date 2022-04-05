import React from "react";

export default function WeatherUnits(props) {
  return (
    <div className="WeatherUnits">
      <span className="temperature">{props.conversion}</span>
      <span className="unit">°C</span>
    </div>
  );
}
