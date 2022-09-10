import React, { useState } from "react";
import axios from "axios";

export default function Weather(props) {
  const [temperature, setTemperature] = useState(null);
  function showTemperature(response) {
    setTemperature(response.data.main.temp);
  }

  if (temperature) {
    return (
      <h1>
        The temperature in {props.city} is currently {Math.round(temperature)}°C
      </h1>
    );
  } else {
    let apiKey = "3b6b66f380d0f8c6b4889aa8f7d07c34";
    let url = `https://api.openweathermap.org/data/2.5/weather?q=${props.city}&appid=3b6b66f380d0f8c6b4889aa8f7d07c34&units=metric`;
    axios.get(url).then(showTemperature);
    return <h1>Loading temperature for {props.city}..</h1>;
  }
}
