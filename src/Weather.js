import React from "react";
import "./Weather.css";

export default function Weather() {
  return (
    <div classNameName="Weather">
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

      <div className="row">
        <h1 className="city">Chamonix</h1>
        <p className="country">France</p>
        <hr />
      </div>
      <div className="row">
        <div className="col-7">
          <div className="row">
            <div className="col-3">Today</div>
            <div className="col-3">High</div>
            <div className="col-3">Low</div>
          </div>
          <div className="row">
            <div className="col-3">--/--</div>
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
            <div className="col-3">--°C</div>
            <div className="col-3">--°C</div>
          </div>
        </div>
        <div className="col-1"></div>
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
