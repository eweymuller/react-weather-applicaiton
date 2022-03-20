import React from "react";
import "./Weather.css";

export default function Weather() {
  return (
    <div classNameName="Weather">
      <div className="row">
        <div className="col-6">
          <p>Search City</p>
        </div>
        <div className="col-6">
          <p>Imperial/Metric</p>
        </div>
      </div>

      <div className="row">
        <div className="col-7">
          <div className="row">
            <h1>Chamonix</h1>
            <p>France</p>
          </div>
          <div className="row">
            <div className="col-2">
              <ul>
                <li>Today</li>
                <li>3/19</li>
              </ul>
            </div>
            <div className="col-2">
              <ul>
                <li>High</li>
                <li>20°C</li>
              </ul>
            </div>
            <div className="col-2">
              <ul>
                <li>Low</li>
                <li>10°C</li>
              </ul>
            </div>
            <div className="col-1"></div>
            <div className="col">
              <img
                className="icon"
                src="https://openweathermap.org/themes/openweathermap/assets/img/logo_white_cropped.png"
                alt="Weather Icon"
              />
            </div>
          </div>
        </div>

        <div className="col-5">
          <ul>
            <li>Wind</li>
            <li>Humidity</li>
            <li>Precipitation</li>
          </ul>
        </div>
      </div>
      
    </div>
  );
}
