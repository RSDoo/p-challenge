import { useState } from 'react';
import './App.css';
import LocationList from './components/plantationList';
import SearchBar from './components/searchbar';

function App() {
  const [searchedLocation, setSearchedLocation] = useState(undefined);
  const handleSearchChange = (value) => {
    setSearchedLocation(value);
  };

  return (
    <>
      <h1>Challenge</h1>
      <SearchBar onChange={handleSearchChange} />
      <LocationList searchedLocation={
        searchedLocation
      } />
    </>
  );
}

export default App;
