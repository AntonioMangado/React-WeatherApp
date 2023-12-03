import React from "react";
import './WeatherCard.css'

const WeatherCard = ({index, country, city, h0, h3, h6, h9, h12, h15, h18, h21}) => {
  
  const printTitle = () => {
    let text = ""
    switch (index) {
      case 0:
        text = "Today";
        break;
      case 1:
        text = "Tomorrow";
        break;  
      case 2:
        text = "In 3 days";
        break; 
      case 3:
        text = "In 4 days";
        break; 
      case 4:
        text = "In 5 days";
        break; 
    }

    return text
  }

  return (
    <article className="weather-card">
        <h3>{city}, {country} </h3>
        <h4>{printTitle()}</h4>
        <ul>
          <li><b>00h</b>: Temp {h0.temperature}Cº, {h0.weather}.</li>
          <li><b>03h</b>: Temp {h3.temperature}Cº, {h3.weather}.</li>
          <li><b>06h</b>: Temp {h6.temperature}Cº, {h6.weather}.</li>
          <li><b>09h</b>: Temp {h9.temperature}Cº, {h9.weather}.</li>
          <li><b>12h</b>: Temp {h12.temperature}Cº, {h12.weather}.</li>
          <li><b>15h</b>: Temp {h15.temperature}Cº, {h15.weather}.</li>
          <li><b>18h</b>: Temp {h18.temperature}Cº, {h18.weather}.</li>
          <li><b>21h</b>: Temp {h21.temperature}Cº, {h21.weather}.</li>
        </ul>
    </article>
  );
};

export default WeatherCard;
