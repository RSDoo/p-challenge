import React, { useState } from 'react';
import locationData from '../data/customerLocations.json';

function SearchBar(props) {
  const [location, setLocations] = useState(locationData);

  const handleInputChange = (event) => {
    const value = event.target.value;
    props.onChange(filterLocationBySearch(value));
  };

  const filterLocationBySearch = (searchTerm) => {
    return location.filter((location) => {
      return location.name.toLowerCase().includes(searchTerm.toLowerCase());
    });
  }

  return (
    <div>
      <input type="text" placeholder="Search" onChange={handleInputChange} />
    </div>
  );
}

export default SearchBar;
