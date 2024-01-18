import React from "react";
import styles from './stationDetails.module.css';

const StationDetails = () => {
  return (
    <>
        <div className={styles.stationDetails}>
            <span>Ime</span>
            <span>Zanr</span>
            <span>Frekvencija</span>
        </div>
    </>
  );
};

export default StationDetails;
