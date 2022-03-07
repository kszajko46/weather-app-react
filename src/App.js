import React from "react";

import "./App.css";

import Search from "./Search";

export default function App() {
  return (
    <div className="App">
      <div class="container">
        <div class="weather-app-wrapper">
          <div class="weather-app">
            <Search />
          </div>
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
