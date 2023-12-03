import React from "react";
import "./SearchBar.css"


const SearchBar = ({value, setValue}) => {
  
  const handleSubmit = (e) => {
    e.preventDefault();
    let city = e.target.city.value;
    setValue(city)
  }

  return (
    <section id="search-bar">
      <form id="weather-form" onSubmit={handleSubmit}>
        <input type="text" name="city" placeholder="Your city here..." value={value}/>
        <button type="submit">Search</button>
      </form>
      
    </section>
  );
};

export default SearchBar;
