import React, { useState, useEffect } from "react";
import styles from "./RadioStationSearch.module.css"; // Import the CSS module
import StationDetails from "../stationDetails/stationDetails.jsx";

const RadioStationSearch = ({radioStations}) => {
  const [isWindowOpen, setIsWindowOpen] = useState(false);

  const openWindow = () => {
    setIsWindowOpen(true);
  };

  const closeWindow = () => {
    setIsWindowOpen(false);
  };

  // useEffect(() => {
  //   const fetchRadioStationInfo = () => {
  //     fetch('//localhost:5001/radioStations')
  //       .then((response) => {
  //         if (!response.ok) {
  //           throw new Error(`HTTP error! Status: ${response.status}`);
  //         }
  //         return response.json();
  //       })
  //       .then((data) => {
  //         const transformedStations = (data.radioStations).map((station) => ({
  //           stationuuid: station.stationuuid,
  //           name: station.name,
  //           url: station.url,
  //           homepage: station.homepage || null,
  //           favicon: station.favicon || null,
  //           tags: station.tags,
  //           country: station.country,
  //           lastchangetime_in_radiobrowser: station.lastchangetime_in_radiobrowser,
  //           codec: station.codec,
  //           location: {
  //             lng: station.lng,
  //             lat: station.lat,
  //           },
  //           // Add more transformations if needed
  //         }));

  //         setRadioStations(transformedStations);
  //         console.log(data);
  //       })
  //       .catch((error) => {
  //         console.error("Error fetching radio station info:", error);
  //       });
  //   };

  //   fetchRadioStationInfo();
  // }, []);

  return (
    <>
      <button className={styles.openButton} onClick={openWindow}>
        Open Window
      </button>

      {isWindowOpen && (
        <div className={styles.overlay}>
          <div className={styles.window}>
            <div className={styles.stationContainer}>
              {radioStations.map((station,i) => (
                <StationDetails station={station} key={station.stationuuid+100*i} />
              ))}
            </div>
            <button className={styles.exitButton} onClick={closeWindow}>
              Exit
            </button>
            {/* { Display radio station info inside the window }
            {radioStationInfo ? (
              <div>
                 { <h2>{radioStationInfo.name}</h2>
                 <p>{radioStationInfo.description}</p> }
                 Add more details as needed
               </div>
             ) : (
               <p>Loading radio station info...</p>
             )} */}
          </div>
        </div>
      )}
    </>
  );
};

export default RadioStationSearch;
