import React, { useState } from "react";
import axios from "axios";
import WeatherInfo from "./WeatherInfo";
import "./Weather.css";

export default function Weather() {
  const [weatherData, setWeatherData] = useState({ ready: false });
  function handleResponse(response) {
    setWeatherData({
      ready: true,
      wind: response.data.wind.speed,
      humidity: response.data.main.humidity,
      feel: response.data.main.feels_like,
      tempHigh: response.data.main.temp_max,
      tempLow: response.data.main.temp_min,
      country: response.data.sys.country,
      description: response.data.weather[0].description,
      icon: response.data.weather[0].icon,
      iconUrl: "http://openweathermap.org/img/wn/03d@2x.png",
      date: new Date(response.data.dt * 1000),
    });
  }
  if (weatherData.ready) {
    return (
      <div className="Weather">
        <form>
          <div className="row">
            <div className="col-10">
              <input
                type="search"
                placeholder="Enter a city..."
                className="search-bar"
              />
              <input type="submit" value="search" className="button-default" />
            </div>
            <div className="col-2">
              <button className="button-default">Imperial/metric</button>
            </div>
          </div>
        </form>

        <WeatherInfo data={weatherData} />

        <div className="card forecast"></div>
      </div>
    );
  } else {
    const apiKey = "baf60817c8949f7c45446dcf8e9fa9aa";
    let city = "chamonix";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
    axios.get(apiUrl).then(handleResponse);
    return (
      <div>
        <h6>Loading...</h6>
      </div>
    );
  }
}
