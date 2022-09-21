import React, { useState } from "react";

export default function Temperature(props) {
  let [unit, changeUnit] = useState(`celcius`);
  function handleConversion(event) {
    event.preventDefault();

    changeUnit(`fahrenheit`);
  }
  function handleC(event) {
    event.preventDefault();
    changeUnit(`celcius`);
  }
  if (unit === `celcius`) {
    return (
      <div className="Temperature">
        <h1>
          {props.celcius}
          <span className="unit">
            <a>°C</a>|
            <a href="/" onClick={handleConversion}>
              °F
            </a>{" "}
          </span>
        </h1>
      </div>
    );
  } else if (unit === `fahrenheit`) {
    let fahrenheit = (9 / 5) * props.celcius + 32;
    return (
      <div className="Temperature">
        <h1>
          {fahrenheit}
          <span className="unit">
            <a href="/" onClick={handleC}>
              °C
            </a>
            |<a>°F</a>{" "}
          </span>
        </h1>
      </div>
    );
  }
}
