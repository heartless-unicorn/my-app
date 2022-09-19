import React, { useState } from "react";

export default function Date(props) {
  if (props.date != null) {
    let days = [
      "Sunday",
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
    ];
    let months = [
      "January",
      "February",
      "March",
      "April",
      "May",
      "June",
      "July",
      "April",
      "September",
      "October",
      "November",
      "December",
    ];
    let day = props.date.getDay();
    let month = props.date.getMonth();
    let number = props.date.getDate();
    let year = props.date.getFullYear();
    let minutes = props.date.getMinutes();
    let hours = props.date.getHours();

    if (minutes < 10) {
      minutes = `0${minutes}`;
    }
    if (hours < 10) {
      hours = `0${hours}`;
    }
    return (
      <div>
        <h4>
          {months[month]} {number}, {year}
        </h4>
        <h3>
          {days[day]},
          <span className="time">
            {" "}
            {hours}:{minutes}
          </span>
        </h3>
      </div>
    );
  }
}
