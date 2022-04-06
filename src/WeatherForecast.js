import React, { useState } from "react";
import "./WeatherForecast.css";
import WeatherIcon from "./WeatherIcon";
import Axios from "axios";

export default function WeatherForecast(props) {
  const [loaded, setLoaded] = useState(false);
  const [forecast, setforecast] = useState(null);

  function handleResponse(response) {
    console.log(response.data.daily[0]);
    setforecast(response.data.daily);
    console.log(response.data.daily[0].temp.min);
    setLoaded(true);
  }

  if (loaded) {
    return (
      <div className="WeatherForecast">
        <div className="row">
          <div className="col">
            <div className="WeatherForecast-day">{forecast[0].dt * 1000}</div>
          </div>
          <div className="col WeatherForecast-temperatures">
            <span className="WeatherForecast-min">
              {Math.round(forecast[0].temp.min)}°C
            </span>
          </div>
          <div className="col WeatherForecast-temperatures">
            <span className="WeatherForecast-max">
              {Math.round(forecast[0].temp.max)}°C
            </span>
          </div>
          <div className="col">
            <WeatherIcon code={forecast[0].weather[0].icon} size={36} />
          </div>
        </div>
      </div>
    );
  } else {
    let latitude = props.coordinates.lat;
    let longitude = props.coordinates.lon;
    let apiKey = "4d4b3a75d801ab1da9179263d8ed4edd";
    let apiUrl = `https://api.openweathermap.org/data/2.5/onecall?lat=${latitude}&lon=${longitude}&appid=${apiKey}&units=metric`;

    Axios.get(apiUrl).then(handleResponse);

    return null;
  }
}
