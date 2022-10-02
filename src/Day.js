import React from "react";
import axios from "axios";

export default function Day(props) {
  let week = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri"];
  let day = new Date(props.data.dt * 1000);
  let weekDay = week[props.data.day.getDay()];
  let temp = Math.round(props.data.main.temp);
  let icon = props.data.weather[0].icon;
  return (
    <div className="day">
      <p>${temp}°C</p>
      <img href="http://openweathermap.org/img/wn/${icon}@2x.png" />
      <p>${weekDay}</p>{" "}
    </div>
  );
}
