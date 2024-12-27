import React from "react";
import FormattedDate from "./FormattedDate";

export default function WeatherInfo(props) {
  return (
    <div className="WeatherInfo">
      <br />
      <br />

      <p>
        <FormattedDate date={props.data.date} />
      </p>

      <br />

      <h1 className="ciytitle">{props.data.city}</h1>
      <br />
      <br />

      <p className="text-capitalize"> {props.data.description}</p>

      <img src={props.data.iconUrl} alt={props.data.description} />

      <div className="col-md-offset-3">
        <span className="temperature">
          {" "}
          {Math.round(props.data.temperature)}
        </span>
        <span className="unit">°C </span>
      </div>

      <br />
      <br />

      <div className="Humiditydescription">
        <p>
          Humidity:{props.data.humidity}% Wind:{props.data.wind}km/h
        </p>

        <br />
        <br />
        <br />
        <hr />
        <br />

        <footer>
          <p className="footer-notes">
            Coded by
            <a
              href="https://github.com/victoriaa2"
              target="_blank"
              rel="noreferrer"
            >
              Victoria Adeleke
            </a>
            👩🏾‍💻 with HTML, CSS, Javascript, React and is
            <a
              href="https://github.com/victoriaa2/Weather-app-project-"
              target="_blank"
              rel="noreferrer"
            >
              {" "}
              on GitHub
            </a>
            and
            <a
              href="https://dancing-daffodil-b8503c.netlify.app"
              target="_blank"
              rel="noreferrer"
            >
              hosted on Netlify
            </a>
          </p>
        </footer>
      </div>
    </div>
  );
}
