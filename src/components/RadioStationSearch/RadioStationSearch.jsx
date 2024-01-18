import React, { useState, useEffect } from "react";
import styles from "./RadioStationSearch.module.css"; // Import the CSS module
import StationDetails from "../stationDetails/stationDetails.jsx";

const RadioStationSearch = () => {
  const [isWindowOpen, setIsWindowOpen] = useState(false);
  const [radioStationInfo, setRadioStationInfo] = useState(null);

  const openWindow = () => {
    setIsWindowOpen(true);
  };

  const closeWindow = () => {
    setIsWindowOpen(false);
  };

//   const fetchRadioStationInfo = () => {

    // fetch("https://api.example.com/radiostations")
    //   .then((response) => response.json())
    //   .then((data) => setRadioStationInfo(data))
    //   .catch((error) => console.error("Error fetching data:", error));
//   };

//   useEffect(() => {
//     fetchRadioStationInfo();
//   }, []);

  return (
    <>
      <button className={styles.openButton} onClick={openWindow}>
        Open Window
      </button>

      {isWindowOpen && (
        <div className={styles.overlay}>
          <div className={styles.window}>
            <div className={styles.stationContainer}>
                <StationDetails />
                <StationDetails />
                <StationDetails />
                <StationDetails />
                <StationDetails />
                <StationDetails />
                <StationDetails />
                <StationDetails />
                <StationDetails />
                <StationDetails />
                <StationDetails />
                <StationDetails />
                <StationDetails />
                <StationDetails />
                <StationDetails />
                <StationDetails />
                <StationDetails />
                <StationDetails />
                <StationDetails />
                <StationDetails />
                <StationDetails />
                <StationDetails />
                <StationDetails />
                <StationDetails />
                <StationDetails />
                <StationDetails />
                <StationDetails />
                <StationDetails />
                <StationDetails />
                <StationDetails />
                <StationDetails />
                <StationDetails />
                <StationDetails />
                <StationDetails />
                <StationDetails />
                <StationDetails />
                <StationDetails />
                <StationDetails />
                <StationDetails />
                <StationDetails />
            </div>
            <button className={styles.exitButton} onClick={closeWindow}>
              Exit
            </button>
            {/* Display radio station info inside the window */}
            {radioStationInfo ? (
              <div>
                <h2>{radioStationInfo.name}</h2>
                <p>{radioStationInfo.description}</p>
                {/* Add more details as needed */}
              </div>
            ) : (
              <p>Loading radio station info...</p>
            )}
          </div>
        </div>
      )}
    </>
  );
};

export default RadioStationSearch;
