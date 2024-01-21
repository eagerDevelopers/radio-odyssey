import React from "react";
import styles from './stationDetails.module.css';

const StationDetails = ({station}) => {
  return (
    <>
        <div className={styles.stationDetails}>
            <span>{station.name}</span>
            <span>{station.country}</span>
        </div>
    </>
  );
};

export default StationDetails;
