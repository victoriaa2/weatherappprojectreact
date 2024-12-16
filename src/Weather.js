Copy;
import React, { useState, useEffect } from "react";
import axios from "axios";

export default function Weather(props) {
  const [weatherData, setWeatherData] = useState({ ready: false });
  const [city, setCity] = useState(props.defaultCity);

  useEffect(() => {
    search();
  }, [city]); // Call search whenever the city changes

  function handleResponse(response) {
    setWeatherData({
      ready: true,
      coordinates: response.data.coordinates,
      temperature: response.data.temperature.current,
      humidity: response.data.temperature.humidity,
      date: new Date(response.data.time * 1000),
      description: response.data.condition.description,
      icon: response.data.condition.icon,
      wind: response.data.wind.speed,
      city: response.data.city,
    });
  }

  function handleSubmit(event) {
    event.preventDefault();
    search();
  }

  function handleCityChange(event) {
    setCity(event.target.value);
  }

  function search() {
    const apiKey = "8d9838178b5b401f1b4e7cb5af18e210";
    const apiUrl = `https://api.shecodes.io/weather/v1/current?query=${city}&key=${apiKey}&units=metric`;
    axios.get(apiUrl).then(handleResponse);
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input type="text" value={city} onChange={handleCityChange} />
        <input type="submit" value="Search" />
      </form>

      {weatherData.ready && (
        <div>
          <h1>{weatherData.city}</h1>
          <ul>
            <li>Temperature: {weatherData.temperature}°C</li>
            <li>Humidity: {weatherData.humidity}%</li>
            <li>Description: {weatherData.description}</li>
            <li>Wind: {weatherData.wind} m/s</li>
            <li>Date: {weatherData.date.toString()}</li>
          </ul>
          <img src={weatherData.icon} alt={weatherData.description} />
        </div>
      )}
    </div>
  );
}
