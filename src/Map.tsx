import React from "react";
import {MapContainer, Polyline, TileLayer} from "react-leaflet";
import L from 'leaflet';
import {Route} from "./Route";

export function Map (props: {
    routes: Route[]
}) {
    
    L.Icon.Default.imagePath = '.';
    L.Icon.Default.mergeOptions({
        iconRetinaUrl: require('leaflet/dist/images/marker-icon-2x.png'),
        iconUrl: require('leaflet/dist/images/marker-icon.png'),
        shadowUrl: require('leaflet/dist/images/marker-shadow.png'),
    });
    
    const redOptions = { color: 'red' };

    return (
        <MapContainer center={[47.067275, 15.442042]} zoom={15} scrollWheelZoom={true}>
            <TileLayer attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
                       url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"/>
            {props.routes && props.routes.map((route, index) =>
                <Polyline key={index} pathOptions={redOptions} positions={route.coords} />
            )}           
            {/*<Polyline pathOptions={redOptions} positions={polyline} />*/}
        </MapContainer>
    );
}