import axios from "axios";
import React, { useState } from "react";
import Info from "./Info";
import Temperature from "./Temperature";
import { BsWind } from "react-icons/bs";
import { BiDroplet } from "react-icons/bi";
import { GoLocation } from "react-icons/go";

import NewDate from "./NewDate";
import "./Weather.css";

export default function Weather() {
  let [Weather, setWeather] = useState({ ready: false });
  let [Coords, setCoords] = useState({});
  let [city, SearchCity] = useState("");
  let [date, setDate] = useState(null);
  let url;
  function Change(response) {
    setWeather({
      current: response.data.name,
      temp: Math.round(response.data.main.temp),
      wind: response.data.wind.speed,
      hum: response.data.main.humidity,
      description: response.data.weather[0].description,
      iconUrl: `http://openweathermap.org/img/wn/${response.data.weather[0].icon}@2x.png`,
      sunrise: response.data.sys.sunrise,
      sunset: response.data.sys.sunset,
      min: response.data.main.temp_min,
      max: response.data.main.temp_max,
    });
    setDate(new Date(response.data.dt * 1000));
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
      <div className="container-fluid d-flex hero">
        <div className="row">
          <div className="col-7 container-fluid">
            <img src={Weather.iconUrl} alt="Weather icon" />
            <Temperature celcius={Weather.temp} />
            <NewDate date={date} />
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
          </div>
          <div className="col-5">
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
            <Info weather={Weather} />
          </div>
        </div>
      </div>
    </div>
  );
}
