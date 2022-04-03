import React from "react";
import "./WeatherForecast.css";
import WeatherIcon from "./WeatherIcon";
import Axios from "axios";

export default function WeatherForecast(props) {
  function handleResponse(response) {
    console.log(response.data);
  }
  let latitude = props.coordinates.lat;
  let longitude = props.coordinates.lon;
  let apiKey = "4d4b3a75d801ab1da9179263d8ed4edd";
  let apiUrl = `https://api.openweathermap.org/data/2.5/onecall?lat=${latitude}&lon=${longitude}&appid=${apiKey}&units=metric`;

  Axios.get(apiUrl).then(handleResponse);

  return (
    <div className="WeatherForecast">
      <div className="row">
        <div className="col">
          <div className="WeatherForecast-day">Sat</div>
        </div>
        <div className="col WeatherForecast-temperatures">
          <span className="WeatherForecast-min">10°</span>
        </div>
        <div className="col WeatherForecast-temperatures">
          <span className="WeatherForecast-max">19°</span>
        </div>
        <div className="col">
          <WeatherIcon code="01d" size={36} />
        </div>
      </div>
    </div>
  );
}
