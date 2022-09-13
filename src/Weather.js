import React from "react";

export default function Weather() {
  return (
    <div className="Weather">
      <div className="container w-50">
        <div className="row">
          <div className="col-8">
            <img href="/" alt="Weather icon" />
            <h1>26°C</h1>
            <h4>May 3, 2022</h4>
            <h3>Monday, 10:44</h3>
            <div>
              <span>Wind; 2 km/h</span>
              <span>Hum: 30%</span>
              <span>Rain</span>
            </div>
            <div className="row">
              <div className="col-3">
                <p>25°C</p>
                <img href="/" />
                <p>Tue</p>
              </div>
              <div className="col-3">
                <p>25°C</p>
                <img href="/" />
                <p>Wed</p>
              </div>
              <div className="col-3">
                <p>25°C</p>
                <img href="/" />
                <p>Thu</p>
              </div>
              <div className="col-3">
                <p>25°C</p>
                <img href="/" />
                <p>Fri</p>
              </div>
            </div>
          </div>
          <div className="col-4">
            <form>
              <input type="search" placeholder="Kiev, Ukraine" />
            </form>
            <div className="d-flex">
              <div>
                <p>Sunrise</p>
                <div>
                  <p>7:30</p>
                  <img href="/" />
                </div>
              </div>
              <div>
                <p>Sunset</p>
                <div>
                  <p>20:30</p>
                  <img href="/" />
                </div>
              </div>
            </div>
            <hr />
            <div className="row">
              <div className="col-6">
                <p>Humidity: 30%</p>
                <p></p>
              </div>
              <div className="col-6">
                <p>Chance of rain:</p>
                <p>10%</p>
              </div>
              <div className="col-6">
                <p>Air quality:</p>
                <p>3/10</p>
              </div>
              <div className="col-6">
                <p>Wind speed:</p>
                <p>3,5 km/h</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
