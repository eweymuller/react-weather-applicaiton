import React, { useState } from "react";
import axios from "axios";
import WeatherInfo from "./WeatherInfo";
import WeatherForecast from "./WeatherForecast";
import "./Weather.css";

export default function Weather(props) {
  const [weatherData, setWeatherData] = useState({ ready: false });
  const [city, setCity] = useState(props.defaultCity);
  const [unitCelsius, setUnitCelsius] = useState(true);

  function handleResponse(response) {
    setWeatherData({
      ready: true,
      city: response.data.name,
      country: response.data.sys.country,
      wind: response.data.wind.speed,
      humidity: response.data.main.humidity,
      feel: response.data.main.feels_like,
      tempHigh: response.data.main.temp_max,
      tempLow: response.data.main.temp_min,
      description: response.data.weather[0].description,
      icon: response.data.weather[0].icon,
      iconUrl: `http://openweathermap.org/img/wn/${response.data.weather[0].icon}@2x.png`,
      date: new Date(response.data.dt * 1000),
      coordinates: response.data.coord,
    });
  }
  function search() {
    const apiKey = "baf60817c8949f7c45446dcf8e9fa9aa";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
    axios.get(apiUrl).then(handleResponse);
  }

  function handleSubmit(event) {
    event.preventDefault();
    search();
  }
  function handleCityChange(event) {
    setCity(event.target.value);
  }
  function updateUnit(event) {
    event.preventDefault();
    setUnitCelsius(!unitCelsius);
  }

  if (weatherData.ready) {
    return (
      <div className="Weather">
        <form onSubmit={handleSubmit}>
          <div className="row">
            <div className="col-10">
              <input
                type="search"
                placeholder="Enter a city..."
                className="search-bar"
                onChange={handleCityChange}
              />
              <input type="submit" value="search" className="button-default" />
            </div>
            <div className="col-2">
              {unitCelsius ? (
                <button className="button-default" onClick={updateUnit}>
                  Imperial
                </button>
              ) : (
                <button className="button-default" onClick={updateUnit}>
                  Metric
                </button>
              )}
            </div>
          </div>
        </form>

        <WeatherInfo data={weatherData} />
        <WeatherForecast coordinates={weatherData.coordinates} />
      </div>
    );
  } else {
    search();
    return (
      <div>
        <h6>Loading...</h6>
      </div>
    );
  }
}
