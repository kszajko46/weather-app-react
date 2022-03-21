import React from "react";

import "./App.css";

import Weather from "./Weather";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <div className="weather-app-wrapper">
          <div className="weather-app"></div>
          <Weather defaultCity="Chicago" />
        </div>

        <small>
          <a href="https://github.com/kszajko46" target="_blank">
            Open-source code
          </a>{" "}
          by{" "}
          <a href="https://www.linkedin.com/in/kata-szajko/" target="_blank">
            Kata Szajko
          </a>
        </small>
      </div>
    </div>
  );
}
