import Map from "../map/Map";
import { useEffect,useState } from "react";

function PrimjerMape(){
  const [radioStanice,setRadioStanice]=useState(null)
    useEffect(()=>{
      fetchStations()
    },[])
    async function fetchStations(){
      const response = await fetch("http://localhost:5001/stations/");
      const stations = await response.json();
      const radioStations = stations.map( s => {
        return {...s, id:s._id}
      })
      setRadioStanice(radioStations)
    }
    if (!radioStanice) {
      return <div>Loading stations...</div>
    }
    return (<Map lng="16.470369012927815" lat="43.51330933410279" zoom="1" radioStanice={radioStanice} apiKey="EyqY6iqRC1RKzlOnWTFD"></Map>)
}

export default PrimjerMape;