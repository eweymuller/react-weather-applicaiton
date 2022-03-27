import React, { useState } from "react";
import axios from "axios";
import "./Weather.css";

export default function Weather() {
  const [weatherData, setWeatherData] = useState({ ready: false });
  function handleResponse(response) {
    console.log(response);
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
              <button className="unitConversion button-default">
                Imperial/metric
              </button>
            </div>
          </div>
        </form>

        <div className="row col-6">
          <h1 className="city">Chamonix</h1>
          <p className="country dark">France</p>
          <hr />
        </div>
        <div className="row">
          <div className="col-7">
            <div className="row">
              <div className="col-3 dark title">Today</div>
              <div className="col-3 dark title">High</div>
              <div className="col-3 dark title">Low</div>
            </div>
            <div className="row">
              <div className="col-3 light">
                <h6>03/25</h6>
              </div>
              <div className="col-5"></div>
              <div className="col-2">
                <img
                  className="icon"
                  src="http://openweathermap.org/img/wn/03d@2x.png"
                  alt="Weather Icon"
                />
              </div>
            </div>
            <div className="row">
              <div className="col-3"></div>
              <div className="col-3 light">
                <h6>
                  <span>{Math.round(weatherData.tempHigh)}</span>°C
                </h6>
              </div>
              <div className="col-3 light">
                <h6>
                  <span>{Math.round(weatherData.tempLow)}</span>°C
                </h6>
              </div>
            </div>
          </div>
          <div className="col-2">
            <div className="row dark title">Wind</div>
            <div className="row dark title">Humidity</div>
            <div className="row dark title">Feels Like</div>
          </div>
          <div className="col-1"></div>
          <div className="col-2">
            <div className="row light">
              <h6>
                <span>{Math.round(weatherData.wind)}</span>kph
              </h6>
            </div>
            <div className="row light">
              <h6>
                <span>{Math.round(weatherData.humidity)}</span>%
              </h6>
            </div>
            <div className="row light">
              <h6>
                <span>{Math.round(weatherData.feel)}</span>°C
              </h6>
            </div>
          </div>
        </div>
        <div className="card forecast"></div>
      </div>
    );
  } else {
    const apiKey = "baf60817c8949f7c45446dcf8e9fa9aa";
    let city = "chamonix";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
    axios.get(apiUrl).then(handleResponse);
    return "Loading...";
  }
}
