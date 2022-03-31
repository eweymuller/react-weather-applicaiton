import React from "react";
import {WiNightClear} from "weather-icons-react"
import {WiNightAltCloudy} from "weather-icons-react"
import {WiCloud} from "weather-icons-react"
import {WiCloudy} from "weather-icons-react"
import {WiNightAltRain} from "weather-icons-react"
import {WiNightAltShowers} from "weather-icons-react"
import {WiNightAltSnowThunderstorm} from "weather-icons-react"
import {WiNightAltSnow} from "weather-icons-react"
import {WiFog} from "weather-icons-react"
import {WiDaySunny} from "weather-icons-react"
import {WiDayRain} from "weather-icons-react"
import {WiDayShowers} from "weather-icons-react"
import {WiDayStormShowers} from "weather-icons-react"
import {WiDaySnow} from "weather-icons-react"
import {WiDaySnow} from "weather-icons-react"


export default function WeatherIcon(props) {
  console.log(props.code);
  const codeMapping :{
    "01n": "WiNightClear",
    "02n": "WiNightAltCloudy",
    "03n": "WiCloud",
    "04n": "WiCloudy",
    "09n": "WiNightAltRain",
    "10n": "WiNightAltShowers",
    "11n": "WiNightAltSnowThunderstorm",
    "13n": "WiNightAltSnow",
    "50n": "WiFog",

    "01d": "WiDaySunny",
    "02d": "WiDayCloudy",
    "03d": "WiCloud",
    "04d": "WiCloudy",
    "09d": "WiDayRain",
    "10d": "WiDayShowers",
    "11d": "WiDayStormShowers",
    "13d": "WiDaySnow",
    "50d": "WiFog"
  }
  return <div>
Hi  </div>;
}
