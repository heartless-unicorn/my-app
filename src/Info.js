import React from "react";

export default function Info() {
  return (
    <div className="Info">
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
  );
}
