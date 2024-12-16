import React from "react";
import FormattedDate from "./FormattedDate";
import FormattedDate from "./WeatherIcon"; // Added import for WeatherIcon
import "./styles.css";

export default function WeatherInfo(props) {
  return (
    <div className="WeatherInfo">
      <div className="row">
        <div className="col-9">
          <h1>{props.data.city}</h1>
          <ul>
            <li>
              <FormattedDate date={props.data.date} />, {props.data.description}
            </li>
            <li>
              {" "}
              {/* Changed <p> to <li> for proper nesting */}
              Humidity: <strong>{props.data.humidity}%</strong>, Wind:{" "}
              <strong>{props.data.wind}km/h</strong>
            </li>
          </ul>
        </div>
        <div className="temperatureinfo">
          <div className="weather-app-icon">
            <WeatherIcon code={props.data.icon} size={52} />
          </div>
          <span className="temperature">
            {Math.round(props.data.temperature)}
          </span>
          <span className="unit">°C</span>
        </div>
      </div>
    </div>
  );
}
