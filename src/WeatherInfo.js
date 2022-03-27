import React from "react";
import FormattedDate from "./FormattedDate";
import "./Weather.css";

export default function WeatherInfo(props) {
  return (
    <div className="WeatherInfo">
      <div className="row col-6">
        <h1 className="city">Chamonix</h1>
        <p className="country dark"></p>
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
              <h6></h6>
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
                <span></span>°C
              </h6>
            </div>
            <div className="col-3 light">
              <h6>
                <span></span>°C
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
              <span></span>kph
            </h6>
          </div>
          <div className="row light">
            <h6>
              <span></span>%
            </h6>
          </div>
          <div className="row light">
            <h6>
              <span></span>°C
            </h6>
          </div>
        </div>
      </div>
    </div>
  );
}
