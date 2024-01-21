// Map.jsx

import React, { useRef, useEffect, useState } from 'react';
import * as maptilersdk from '@maptiler/sdk';
import '@maptiler/sdk/dist/maptiler-sdk.css';
import './Map.css';
import DetaljiStanice from './DetaljiStanice';

function Map({ lng, lat, zoom, apiKey, radioStanice }) {
  const mapContainer = useRef(null);
  const map = useRef(null);
  maptilersdk.config.apiKey = apiKey;
  const [odabranaStanica, setOdabranaStanica] = useState(null);

  useEffect(() => {
    const markers = [];
    const cleanupListeners = [];

    if (map.current) {
      map.current.setZoom(zoom);
      map.current.setCenter([lng, lat]);
      map.current.redraw();
    } else {
      map.current = new maptilersdk.Map({
        container: mapContainer.current,
        style: maptilersdk.MapStyle.STREETS,
        center: [lng, lat],
        zoom: zoom,
      });

      radioStanice.forEach((rs) => {
        const popup = new maptilersdk.Popup({ offset: 25 }).setHTML(
          `<div class="popupStyle">${rs.name},${rs.frekvencija} </div>`
        ).on('open', (ev) => {
          setOdabranaStanica(rs);
        });
        
        const marker = new maptilersdk.Marker({ color: '#FF0000' });
        marker
          .setLngLat([rs.lng, rs.lat])
          .setPopup(popup)
          .addTo(map.current);

        markers.push(marker);

        const handleMouseOver = () => {
          marker.getElement().classList.add('animated-marker');
        };

        const handleMouseLeave = () => {
          marker.getElement().classList.remove('animated-marker');
        };

        marker.getElement().addEventListener('mouseover', handleMouseOver);
        marker.getElement().addEventListener('mouseleave', handleMouseLeave);

        cleanupListeners.push(() => {
          marker.getElement().removeEventListener('mouseover', handleMouseOver);
          marker.getElement().removeEventListener('mouseleave', handleMouseLeave);
        });
      });
    }
    console.log("Markeri: ")
    console.log(markers)
    return () => {
      cleanupListeners.forEach(cleanup => cleanup());
    };
  }, [lng, lat, zoom]);

  return (
    <div>
     <div className="map-wrap">
  <div ref={mapContainer} className="map"  />
</div>
      <DetaljiStanice stanica={odabranaStanica} />
    </div>
  );
}

export default Map;
