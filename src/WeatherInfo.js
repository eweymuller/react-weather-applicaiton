import React from "react";
import FormattedDate from "./FormattedDate";
import WeatherIcon from "./WeatherIcon";
import "./Weather.css";

export default function WeatherInfo(props) {

  
  return (
    <div className="WeatherInfo">
      <div className="row col-6">
        <h1 className="city">{props.data.city}</h1>
        <p className="country dark">{props.data.country}</p>
        <hr />
      </div>
      <div className="row">
        <div className="col-7">
          <div className="row">
            <div className="col-3 dark title">Today</div>
            <div className="col-3 dark title">Low</div>
            <div className="col-3 dark title">High</div>
          </div>
          <div className="row">
            <div className="col-3 light">
              <h6>
                <FormattedDate date={props.data.date} />
              </h6>
            </div>
            <div className="col-5"></div>
            <div className="col-2">
              <WeatherIcon
                code={props.data.icon}
                alt={props.data.description}
                size={70}
              />
            </div>
          </div>
          <div className="row">
            <div className="col-3"></div>
            <div className="col-3 light">
              <h6>
                <span>{Math.round(props.data.tempLow)}</span>°C
              </h6>
            </div>
            <div className="col-3 light">
              <h6>
                <span>{Math.round(props.data.tempHigh)}</span>°C
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
              <span>{Math.round(props.data.wind)}</span>kph
            </h6>
          </div>
          <div className="row light">
            <h6>
              <span>{props.data.humidity}</span>%
            </h6>
          </div>
          <div className="row light">
            <h6>
              <span>{Math.round(props.data.feel)}</span>°C
            </h6>
          </div>
        </div>
      </div>
    </div>
  );
}
