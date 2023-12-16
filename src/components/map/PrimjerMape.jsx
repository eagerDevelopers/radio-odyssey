import Map from "../map/Map";
import stanice from '../../data/stations';

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
    const radioStanice=svjetskeStanice()
    return (<Map lng="16.470369012927815" lat="43.51330933410279" zoom="1" radioStanice={radioStanice} apiKey="EyqY6iqRC1RKzlOnWTFD"></Map>)
}

export default PrimjerMape;