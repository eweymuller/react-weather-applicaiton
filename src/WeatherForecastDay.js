import React from "react";
import WeatherIcon from "./WeatherIcon";

export default function WeatherForecastDay(props) {
  function minTemperature() {
    let temperature = Math.round(props.data.temp.min);
    return `${temperature}°C`;
  }
  function maxTemperature() {
    let temperature = Math.round(props.data.temp.max);
    return `${temperature}°C`;
  }
  function day() {
    let date = new Date(props.data.dt * 1000);
    let day = date.getDay();
    let days = [
      "Sunday",
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday",
    ];
    return days[day];
  }

  return (
    <div>
      <div className="row">
        <div className="col">
          <div className="WeatherForecast-day">{day()}</div>
        </div>
        <div className="col WeatherForecast-temperatures">
          <span className="WeatherForecast-min">{minTemperature()}</span>
        </div>
        <div className="col WeatherForecast-temperatures">
          <span className="WeatherForecast-max">{maxTemperature()}</span>
        </div>
        <div className="col">
          <WeatherIcon code={props.data.weather[0].icon} size={36} />
        </div>
      </div>
    </div>
  );
}
