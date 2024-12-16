import React from "react";
import Weather from "./Weather";
import "./styles.css";

export default function App() {
  return (
    <div className="App">
      <Weather />

      <div className="App">
        <div className="container">
          <div class="Weather"></div>
        </div>
      </div>

      <form className="search-form">
        <div class="row">
          <div class="col-9 ">
            <input
              placeholder="Enter a city.."
              class="form-control search-input"
              type="search"
            />{" "}
          </div>
          <input type="submit" value="search" class="search-button" />
        </div>
      </form>
      <br />
      <br />

      <div class="WeatherInfo">
        <h1 className="current-city">London</h1>

        <br />
        <br />

        <div className="temperatureinfo">
          <p>19°C | Cloudy</p>
        </div>
        <img
          src="http://shecodes-assets.s3.amazonaws.com/api/weather/icons/broken-clouds-day.png"
          alt="weather-app-icon"
        />

        <p className="Humiditydescription">
          Humidity: <span id="humidity">41%</span> Wind:
          <span id="wind-speed">2.06km/h</span>
        </p>
        <br />
        <br />
      </div>

      <hr />
      <br />
      <p className="footer-notes">
        Coded by
        <a
          href="https://github.com/victoriaa2"
          target="_blank"
          rel="noopener noreferrer"
        >
          Victoria Adeleke 👩🏾‍💻
        </a>
      </p>
    </div>
  );
}
