import React from "react";
import styles from './MapPage.module.css'
import PrimjerMape from "../../components/map/PrimjerMape";
import AudioPlayer from "../../components/audioPlayer/AudioPlayer";
import RadioStationSearch from "../../components/RadioStationSearch/RadioStationSearch";

const MapPage = () => {

    return (
        <>
            <div className="mapPage-container">
                <PrimjerMape />             
                <AudioPlayer />
                <RadioStationSearch />                
            </div>
        </>
    )
}

export default MapPage