import React from "react";
import styles from './MapPage.module.css'
import PrimjerMape from "../../components/map/PrimjerMape";
import AudioPlayer from "../../components/audioPlayer/AudioPlayer";

const MapPage = () => {

    return (
        <>
            <div className="mapPage-container">
                <PrimjerMape />
                <AudioPlayer />
            </div>
        </>
    )
}

export default MapPage