import './App.css';
import React from "react";
import {MapContainer, TileLayer, Marker, Popup, Polyline} from 'react-leaflet'
import 'leaflet/dist/leaflet.css'
import L from 'leaflet';
import icon from 'leaflet/dist/images/marker-icon.png';
import iconShadow from 'leaflet/dist/images/marker-shadow.png';

let DefaultIcon = L.icon({
  iconUrl: icon,
  shadowUrl: iconShadow
});

L.Marker.prototype.options.icon = DefaultIcon;

const polyline = []

const redOptions = { color: 'red' }

function App() {
  return (
    <MapContainer center={[47.067275, 15.442042]} zoom={15} scrollWheelZoom={true}>
      <TileLayer
        attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />

      <Polyline pathOptions={redOptions} positions={polyline} />
    </MapContainer>
  );
}

export default App;
