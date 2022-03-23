import React from "react";
import "./Weather.css";

export default function Weather() {
  return (
    <div classNamName="Weather">
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
        <p className="country">France</p>
        <hr />
      </div>
      <div className="row">
        <div className="col-7">
          <div className="row">
            <div className="col-3 dark">Today</div>
            <div className="col-3 dark">High</div>
            <div className="col-3 dark">Low</div>
          </div>
          <div className="row">
            <div className="col-3 light">--/--</div>
            <div className="col-5"></div>
            <div className="col-2">
              <img
                className="icon"
                src="https://openweathermap.org/themes/openweathermap/assets/img/logo_white_cropped.png"
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
          <div className="row dark">Wind</div>
          <div className="row dark">Humidity</div>
          <div className="row dark">Feels Like</div>
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
