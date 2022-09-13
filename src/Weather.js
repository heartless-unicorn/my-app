import React from "react";
import Forecast from "./Forecast";
import Info from "./Info";
import "./Weather.css";

export default function Weather() {
  return (
    <div className="Weather">
      <div className="container w-50">
        <div className="row">
          <div className="col-8">
            <img href="/" alt="Weather icon" />
            <h1>
              26<span className="unit">°C</span>
            </h1>
            <h4>May 3, 2022</h4>
            <h3>
              Monday,<span className="time"> 10:44</span>
            </h3>
            <div className="param">
              <span>Wind: 2 km/h |</span>
              <span>Hum: 30% |</span>
              <span>Rain</span>
            </div>
            <Forecast />
          </div>
          <div className="col-4">
            <form>
              <input type="search" placeholder="Kiev, Ukraine" />
              <input type="submit" value="OK" />
            </form>
            <Info />
          </div>
        </div>
      </div>
    </div>
  );
}
