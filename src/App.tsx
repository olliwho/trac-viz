import './App.scss';
import React, {useEffect, useState} from "react";
import 'leaflet/dist/leaflet.css'
import {Map} from "./Map";
import {Route} from "./Route";
import {FileUpload} from "./FileUpload";

interface AppState {
    routes: Route[]
}

function App() {
    const [state, setState] = useState<AppState>({
        routes: []
    });
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        async function fetchData() {
            setLoading(true);
            //TODO: load routes from db/cache/where ever
            setLoading(false)
        }
        fetchData();
    },[]);
    
    return (
        // <header/>
        <div className="app">
            <div className="map">
                <Map routes={state.routes}/>
            </div>
            <div className="Routes">
                <h1>Routes</h1>
                <FileUpload routes={state.routes}/>
            </div>
        </div>
        // <Footer/>
    );
}

export default App;
