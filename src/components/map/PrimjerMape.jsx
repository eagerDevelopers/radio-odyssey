import Map from "../map/Map";
import stanice from '../../data/stations';
import { useState } from "react";

function svjetskeStanice(){
    return(
      stanice.map(stanica=>{
        return ({
          name:stanica.name,
          id: stanica.stationuuid,
          frekvencija: "97.2",
          lng:stanica.geo_long.toString(),
          lat:stanica.geo_lat.toString()
        })
      })
    )
  }

function PrimjerMape(){
  const [mapApiKey, setMapApiKey] = useState("")
  const radioStanice=svjetskeStanice()

  const response = fetch("//localhost:5001/mapApiKey", {
            method: "GET",
        });

    response
        .then((value) => {
            return value.json();
        })
        .then((valueJSON) => {
            setMapApiKey(valueJSON.mapApiKey)
        })
        .catch((err) => {
            console.error(err);
        })

    return (<Map lng="16.470369012927815" lat="43.51330933410279" zoom="1" radioStanice={radioStanice} apiKey={mapApiKey}></Map>)
}

export default PrimjerMape;