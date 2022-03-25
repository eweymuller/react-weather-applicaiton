import React from "react";
import "./Weather.css";

export default function Weather() {
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
            <div className="col-3 dark title">Today </div>
            <div className="col-3 dark title">High </div>
            <div className="col-3 dark title">Low </div>
          </div>
          <div className="row">
            <div className="col-3 light">
              <h6>--/--</h6>
            </div>
            <div className="col-5"></div>
            <div className="col-2">
              <img
                className="icon"
                src="http://openweathermap.org/img/wn/02d@2x.png"
                alt="Weather Icon"
              />
            </div>
          </div>
          <div className="row">
            <div className="col-3"></div>
            <div className="col-3 light">
              <h6 className="high-temp">
                <span>--</span>°C
              </h6>
            </div>
            <div className="col-3 light">
              <h6 className="low-temp">
                <span>--</span>°C
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
            <h6 className="wind-value">
              <span>--</span>kph
            </h6>
          </div>
          <div className="row light">
            <h6 className="humidity-value">
              <span>--</span>%
            </h6>
          </div>
          <div className="row light">
            <h6 className="feel-value">
              <span>--</span>°C
            </h6>
          </div>
        </div>
      </div>
      <div className="card forecast"></div>
    </div>
  );
}
