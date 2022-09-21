import axios from "axios";
import React, { useMemo } from "react";
import "./Forecast.css";

export default function Forecast(props) {
  let url = `https://api.openweathermap.org/data/2.5/forecast?q=${props.city}&cnt=4&appid=4bef2345e330426bc02f380640dec5ea&units=metric`;
  let week = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri"];
  let element = ``;
  if (props.city !== undefined) {
    function getForecast(response) {
      let days = response.data.list;
      days.forEach(function getDay(d) {
        let day = new Date(d.dt * 1000);
        let weekDay = week[day.getDay()];
        let temp = Math.round(d.main.temp);
        let icon = d.weather[0].icon;
        //   return (
        //     element +
        //     `  <div className="col-3">
        //   <div className="day">
        //     <p>${temp}°C</p>
        //     <img href="http://openweathermap.org/img/wn/${icon}@2x.png" />
        //     <p>${weekDay}</p>
        //   </div>
        // </div>`
        //   );
      });
    }
    useMemo(() => axios.get(url).then(getForecast));
  }
}
