import React from "react";
import styles from './MapPage.module.css'
import PrimjerMape from "../../components/map/PrimjerMape";
import AudioPlayer from "../../components/audioPlayer/AudioPlayer";
import RadioStationSearch from "../../components/RadioStationSearch/RadioStationSearch";
import { useEffect, useState } from "react";
import NavBar from "../../components/navBar/navBar";

const MapPage = () => {
    const [radioStations, setRadioStations] = useState([]);

    useEffect(() => {
        const fetchRadioStationInfo = () => {
          fetch('//localhost:5001/radioStations')
            .then((response) => {
              if (!response.ok) {
                throw new Error(`HTTP error! Status: ${response.status}`);
              }
              return response.json();
            })
            .then((data) => {
              const transformedStations = (data.radioStations).map((station) => ({
                stationuuid: station.stationuuid,
                name: station.name,
                url: station.url,
                homepage: station.homepage || null,
                favicon: station.favicon || null,
                tags: station.tags,
                country: station.country,
                lastchangetime_in_radiobrowser: station.lastchangetime_in_radiobrowser,
                codec: station.codec,
                location: {
                  lng: station.lng,
                  lat: station.lat,
                },
                // Add more transformations if needed
              }));
    
              setRadioStations(transformedStations);
              console.log(data);
            })
            .catch((error) => {
              console.error("Error fetching radio station info:", error);
            });
        };
    
        fetchRadioStationInfo();
        
      }, []);
    return (
        <>
            <div className="mapPage-container">
                <PrimjerMape radioStations={radioStations}/>
                <AudioPlayer />
                <NavBar></NavBar>
                <RadioStationSearch radioStations={radioStations}/>
            </div>
        </>
    )
}

export default MapPage