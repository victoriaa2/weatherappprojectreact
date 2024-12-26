import React, { useState } from "react";
import FormattedDate from "./ FormattedDate";
import axios from "axios";
import "./Weather.css";

export default function Weather(props) {
  const [weatherData, setWeatherData] = useState({ ready: false });
  function handleResponse(response) {
    setWeatherData({
      ready: true,
      temperature: response.data.temperature.current,
      humidity: response.data.temperature.humidity,
      date: new Date(response.data.time * 1000),
      description: response.data.condition.description,
      iconUrl:
        "http://shecodes-assets.s3.amazonaws.com/api/weather/icons/broken-clouds-day.png",
      wind: response.data.wind.speed,
      city: response.data.city,
    });
  }

  if (weatherData.ready) {
    return (
      <div className="Weather">
        <form className="searchform">
          <div className="row">
            <div className="col-8">
              <input
                type="search"
                placeholder="Enter a city.."
                className="form-control"
                autoFocus="on"
              />
            </div>
            <div className="col-1 gy-1 gx-1">
              <input
                type="submit"
                value="search"
                className="button-primary w-90"
              />
            </div>
          </div>
        </form>

        <br />
        <br />

        <p>
          <FormattedDate date={weatherData.date} />
        </p>

        <br />
        <br />

        <h1 className="ciytitle">{weatherData.city}</h1>
        <br />

        <p className="text-capitalize"> {weatherData.description}</p>

        <img src={weatherData.iconUrl} alt={weatherData.description} />

        <div className="col-md-offset-3">
          <span className="temperature">
            {" "}
            {Math.round(weatherData.temperature)}
          </span>
          <span className="unit">°C </span>
        </div>

        <br />
        <br />

        <div className="Humiditydescription">
          <p>
            Humidity:{weatherData.humidity}% Wind:{weatherData.wind}km/h
          </p>

          <br />
          <br />
          <br />
          <hr />
          <br />

          <footer>
            <p className="footer-notes">
              Coded by
              <a href="https://github.com/victoriaa2" target="_blank">
                Victoria Adeleke
              </a>
              👩🏾‍💻 with HTML, CSS, Javascript, React and is
              <a
                href="https://github.com/victoriaa2/Weather-app-project-"
                target="_blank"
              >
                {" "}
                on GitHub
              </a>
              and
              <a
                href="https://dancing-daffodil-b8503c.netlify.app"
                target="_blank"
              >
                hosted on Netlify
              </a>
            </p>
          </footer>
        </div>
      </div>
    );
  } else {
    const apiKey = "7c3280d84e3ff37at9daa2a38ab9o743";
    let apiUrl = `https://api.shecodes.io/weather/v1/current?query=${props.defaultCity}&key=${apiKey}&units=metric`;
    axios.get(apiUrl).then(handleResponse);

    return "Loading...";
  }
}
