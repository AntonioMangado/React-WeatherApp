import WeatherCard from '../WeatherCard'
import React from "react";
import './WeatherList.css'
import { v4 as uuidv4 } from 'uuid';


const WeatherList = ({data, city, country}) => {

  const createCard = () => {
    return data.map((item, i) => (
          <WeatherCard 
              key={uuidv4()}
              index={i}
              city={city}
              country={country}
              h0={item[0]}
              h3={item[1]}
              h6={item[2]}
              h9={item[3]}
              h12={item[4]}
              h15={item[5]}
              h18={item[6]}
              h21={item[7]}
          />
    ));
  };

  return (
    <>
      {createCard()}
    </>
  );
};

export default WeatherList;
