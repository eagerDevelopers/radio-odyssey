import React, { useRef, useEffect, useState } from 'react';
import * as maptilersdk from '@maptiler/sdk';
import "@maptiler/sdk/dist/maptiler-sdk.css";
import './Map.css';
import DetaljiStanice from './DetaljiStanice';
function Map({lng,lat,zoom,apiKey,radioStanice}){
   
   
    const mapContainer = useRef(null);
    const map = useRef(null);
    maptilersdk.config.apiKey = apiKey;
    const koko = 8
    const [odabranaStanica, setOdabranaStanica] = useState(null)

    useEffect(() => {
        if (map.current) {
            console.log("In useEffect, map.current is set, setting zoom to:", zoom, map.current.repaint)
            //map.current.repaint = true
            map.current.setZoom(zoom)
            map.current.setCenter([lng,lat])
            map.current.redraw()
        } else {
            map.current = new maptilersdk.Map({
                container: mapContainer.current,  //ne mozemo predati hostDiv jer to nije pravi div u domu nego react element u virtualnom domu
                style: maptilersdk.MapStyle.STREETS,
                center: [lng,lat],
                zoom: zoom
                });
            radioStanice.forEach(rs=>{
                const popup=new maptilersdk.Popup({offset: 25})//koliko će popoup biti pomaknut od markera
                    .setHTML(`<div class="popupStyle">${rs.name},${rs.frekvencija} </div>`) //STRING LITERAL-u ovom sl `` omogućuje da korisitimo js u ${}
                    .on("open", (ev) => {          //kada se otvori pop up pozvat ćese f-ja , a ta funkcija postavlja odabranu stanicu
                        console.log("marker poped out!")
                        setOdabranaStanica(rs) //postavlja odabranu staNICU
                    })
                popup.addClassName("popupStyle")
                const marker  = new maptilersdk.Marker({color: "#FF0000"})//novi mrker
                marker.setLngLat([rs.lng,rs.lat])//postavi kordinate markera
                    .setPopup(popup) //doadje popup na marker
                    .addTo(map.current); //dodaje marker na mapu
            })
    
        }
    }, [lng,lat,zoom]);

    return (
        <div>
            <div className="map-wrap">
                <div ref={mapContainer} className="map" />{ /*korisit se za dohvaćanje pravog dom elementa iz virtualnog dom elemnta*/}
            </div>
            <DetaljiStanice stanica={odabranaStanica} /> 
        </div>
    );
}
export default Map;





