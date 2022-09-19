import axios from "axios";
import React, { useState } from "react";
import Forecast from "./Forecast";
import Info from "./Info";
import { BsWind } from "react-icons/bs";
import { BiDroplet } from "react-icons/bi";
import { GoLocation } from "react-icons/go";

import "./Weather.css";

export default function Weather() {
  let [Weather, setWeather] = useState({ ready: false });
  let [Coords, setCoords] = useState({});
  let [city, SearchCity] = useState("");
  let iconUrl;
  let url;
  function Change(response) {
    setWeather({
      current: response.data.name,
      temp: Math.round(response.data.main.temp),
      wind: response.data.wind.speed,
      hum: response.data.main.humidity,
      description: response.data.weather[0].description,
      iconUrl: `http://openweathermap.org/img/wn/${response.data.weather[0].icon}@2x.png`,
    });
  }

  if (Weather.ready === false) {
    navigator.geolocation.getCurrentPosition(function(position) {
      setCoords({
        lat: position.coords.latitude,
        lon: position.coords.longitude,
      });
    });

    if (Coords.lat) {
      url = `https://api.openweathermap.org/data/2.5/weather?lat=${Coords.lat}&lon=${Coords.lon}&appid=4bef2345e330426bc02f380640dec5ea&units=metric`;
      function handleUrl(response) {
        Change(response);
      }
      axios.get(url).then(handleUrl);
    }
  }
  function getCity(event) {
    SearchCity(event.target.value);
  }

  function handleSubmit(event) {
    event.preventDefault();
    if (city) {
      setWeather.ready = true;
      let url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=4bef2345e330426bc02f380640dec5ea&units=metric`;
      function ChangeInfo(response) {
        Change(response);
      }
      axios.get(url).then(ChangeInfo);
    }
  }
  return (
    <div className="Weather">
      <div className="container w-50">
        <div className="row">
          <div className="col-8">
            <img src={Weather.iconUrl} alt="Weather icon" />
            <h1>
              {Weather.temp}
              <span className="unit">°C</span>
            </h1>
            <h4>May 3, 2022</h4>
            <h3>
              Monday,<span className="time"> 10:44</span>
            </h3>
            <div className="param">
              <span>
                <BsWind />
                Wind: {Weather.wind} km/h |
              </span>
              <span>
                <BiDroplet />
                Hum: {Weather.hum}% |
              </span>
              <span>{Weather.description}</span>
            </div>
            <Forecast />
          </div>
          <div className="col-4 ">
            <div className="search-field">
              <GoLocation />
              <form onSubmit={handleSubmit}>
                <input
                  className="search"
                  type="search"
                  placeholder={Weather.current}
                  onChange={getCity}
                />
                <input className="search ok" type="submit" value="OK" />
              </form>
            </div>
            <Info />
          </div>
        </div>
      </div>
    </div>
  );
}
