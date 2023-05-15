import React, { useEffect, useState } from 'react';
import plantationProjects from '../data/plantationProjects.json';
import { calcDistanceFromLatToKM } from './distanceHelper';

function LocationList(props) {
  const searchedLocation = props.searchedLocation;
  const [locations, setLocations] = useState(searchedLocation);

  useEffect(() => {
    if (searchedLocation && searchedLocation.length > 0) {
      const filtedLocations2 = [];

      searchedLocation.forEach((location) => {
        location.plantations = plantationProjects.map((project) => {
          return {
            ...project,
            distance: calcDistanceFromLatToKM(
              location.latitude,
              location.longitude,
              parseFloat(project.latitude),
              parseFloat(project.longitude),
            )
          };
        }).sort((a, b) => {
          if (a.distance < b.distance) {
            return -1;
          } else if (a.distance > b.distance) {
            return 1;
          } else {
            return 0;
          }
        }).slice(0, 3);

        filtedLocations2.push(location);
      });
      
      setLocations(filtedLocations2);
    } else {
      setLocations([]);
    }

  }, [searchedLocation])

  return (
    <div>
      {
        locations && locations.length > 0 ?

          locations.map((location) => (
            <div key={location.name}>
              <h2>{location.name}</h2>
              <ul>
                {
                  location.plantations.map((plantation) => (
                    <li key={plantation.id}>
                      {plantation.projectName} - Distance: {plantation.distance.toFixed(2)} km
                    </li>

                  ))
                }
              </ul>
            </div>
          )) : 'No location found'
      }
    </div>
  );
}

export default LocationList;
