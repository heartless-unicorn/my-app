import React, { useState } from "react";
import "./Info.css";
import { WiHorizon } from "react-icons/wi";

export default function Info(props) {
  let [data, setTime] = useState({});
  let rise = new Date(props.weather.sunrise * 1000);
  let set = new Date(props.weather.sunset * 1000);
  let riseM = rise.getMinutes();
  let riseH = rise.getHours();
  let setM = set.getMinutes();
  let setH = set.getHours();
  riseM = Bellow(riseM);
  riseH = Bellow(riseH);
  setM = Bellow(setM);
  setH = Bellow(setH);

  function Bellow(value) {
    if (value < 10) {
      return `0${value}`;
    } else {
      return value;
    }
  }

  return (
    <div className="Info">
      <div className="d-flex">
        <div>
          <p>Sunrise</p>
          <div className="sun">
            <p>
              {riseH}:{riseM}
            </p>
            <WiHorizon size={42} />
          </div>
        </div>
        <div>
          <p>Sunset</p>
          <div className="sun">
            <p>
              {setH}:{setM}
            </p>
            <WiHorizon size={42} />
          </div>
        </div>
      </div>
      <hr />
      <div className="row">
        <div className="col-6">
          <p>Humidity: </p>
          <p>{props.weather.hum}%</p>
        </div>
        <div className="col-6">
          <p>Wind speed:</p>
          <p>{props.weather.wind}km/h</p>
        </div>
        <div className="col-6">
          <p>Minimum</p>
          <p>{Math.round(props.weather.min)}°C</p>
        </div>
        <div className="col-6">
          <p>Maximum:</p>
          <p>{Math.round(props.weather.max)}°C</p>
        </div>
      </div>
    </div>
  );
}
