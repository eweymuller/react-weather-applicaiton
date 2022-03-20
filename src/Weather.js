import React from "react";
import "./Weather.css";

export default function Weather() {
  return (
    <div classNameName="Weather">
      <div className="row">
        <div className="col-8">
          <form>
            <div className="col-6">
              <input
                type="search"
                placeholder="Enter a city..."
                className="form-control"
              />
            </div>
            <input type="submit" value="search" className="btn btn-primary" />
          </form>
        </div>
        <div className="col-2">
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

        <div className="col-4">
          <div className="row">
            <div className="col-8">Wind</div>
            <div className="col-4">10kph</div>
          </div>
          <div className="row">
            <div className="col-8">Humidity</div>
            <div className="col-4">30%</div>
          </div>
          <div className="row">
            <div className="col-8">Precipitation</div>
            <div className="col-4">10%</div>
          </div>
        </div>
      </div>
    </div>
  );
}
