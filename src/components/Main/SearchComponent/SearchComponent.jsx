import React from "react";
import { useState, useEffect } from 'react'
import axios from "axios"
import WeatherList from '../WeatherList'
import SearchBar from '../SearchBar'

const SearchComponent = () => {

  const [value, setValue] = useState("Madrid"); // Para guardar el dato a buscar
  const [list, setList] = useState([]); // [{}, {}, {}]
  const [country, setCountry] = useState(""); // [{}, {}, {}]

  useEffect(() => {
    async function fetchData() {
      try{
        // Petición HTTP
        const res = await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${value}&APPID=${import.meta.env.VITE_APIKEY}`);

        // Extract latitude and longitude
        const latAndLon = res.data.coord;
        const latitude = latAndLon.lat;
        const longitude = latAndLon.lon;

        // Fetch relevant data (forecast over 5 days)
        const response = await axios.get(`https://api.openweathermap.org/data/2.5/forecast?lat=${latitude}&lon=${longitude}&appid=${import.meta.env.VITE_APIKEY}&units=metric`)
        const city = response.data.city.name;
        const country = response.data.city.country;
        const data = response.data.list;
        // console.log(data);
        const cleanData = data.map((c) => ({
          temperature: c.main.temp,
          weather: c.weather[0].description
        }));
        // console.log(cleanData)

        // Treat data 
        const day1 = cleanData.slice(0, 8)
        const day2 = cleanData.slice(8, 16)
        const day3 = cleanData.slice(16, 24)
        const day4 = cleanData.slice(24, 32)
        const day5 = cleanData.slice(32)

        const weatherIn5Days = [day1, day2, day3, day4, day5]

        // Guarda en el array de posts el resultado. Procesa los datos
        setList(weatherIn5Days);
        setCountry(country)
      } catch(e) {
        setList([]) // No pintes nada 
      }
    }

    fetchData();
  }, [value]); // componentDidUpdate


  return (
  <>
    <h2>Weather App</h2>
    <SearchBar setValue={setValue} />
    <section id="weather-list">
      {list.length > 0 ?
        <><WeatherList data={list} city={value} country={country}/></>
        :<><p>City not found, please try again.</p></>}
    </section>
  </>
  );
};

export default SearchComponent;
