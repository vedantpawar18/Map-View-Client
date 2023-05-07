import { MapContainer, TileLayer, Marker, Popup, ZoomControl } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import { useEffect, useState } from 'react';
import L from 'leaflet';
import icon from 'leaflet/dist/images/marker-icon.png';
import iconShadow from 'leaflet/dist/images/marker-shadow.png'; 

function Map({latitude, longitude}) {
  const [currentPosition, setCurrentPosition] = useState(null);
  const [targetPosition, setTargetPosition] = useState([latitude, longitude]);

  useEffect(() => {
    navigator.geolocation.getCurrentPosition(
      position => setCurrentPosition([position.coords.latitude, position.coords.longitude]),
      () => console.log('Error: The Geolocation service failed.')
    );
  }, []);

  const defaultIcon = new L.Icon({
    iconUrl: "https://cdn.rawgit.com/pointhi/leaflet-color-markers/master/img/marker-icon-2x-red.png",
    shadowUrl: iconShadow,
    iconSize: [25, 41],
    iconAnchor: [12, 41],
    className: 'default-marker'
  });

  const currentIcon = new L.Icon({
    iconUrl: icon,
    shadowUrl: iconShadow,
    iconSize: [25, 41],
    iconAnchor: [12, 41],
    className: 'current-marker',
  });

  function handleMapClick(event) {
    setTargetPosition([event.latlng.lat, event.latlng.lng]);
  }

  return (
    <MapContainer
      center={currentPosition || targetPosition}
      zoom={5}
      style={{ height: "100vh", width: "60%", margin: "0 auto" }}
      eventHandlers={{ click: handleMapClick }}
    >
      <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" attribution="OpenStreetMap" />
      {currentPosition && (
        <Marker position={currentPosition} icon={currentIcon}>
          <Popup>Your current location</Popup>
        </Marker>
      )}
      <Marker position={targetPosition} icon={defaultIcon}>
        <Popup>Your target location</Popup>
      </Marker>
      <ZoomControl position="bottomright" />
    </MapContainer>
  );
}


export default Map;