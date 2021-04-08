import './App.scss';
import React from "react";
import {MapContainer, TileLayer, Marker, Popup, Polyline} from 'react-leaflet'
import 'leaflet/dist/leaflet.css'
import L from 'leaflet';

L.Icon.Default.imagePath = '.';


L.Icon.Default.mergeOptions({
    iconRetinaUrl: require('leaflet/dist/images/marker-icon-2x.png'),
    iconUrl: require('leaflet/dist/images/marker-icon.png'),
    shadowUrl: require('leaflet/dist/images/marker-shadow.png'),
});


const polyline: L.LatLngExpression[] | L.LatLngExpression[][] = [];

const redOptions = { color: 'red' };

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
