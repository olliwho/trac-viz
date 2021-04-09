import {LatLng} from "leaflet";
import GPX from "gpx-parser-builder";

export interface RouteInterface {
  name: string,
  coords: LatLng[]
}

export class Route implements RouteInterface {
  public readonly name: string;
  public readonly coords: LatLng[];

  constructor(name: string, coords: LatLng[]) {
    this.name = name;
    this.coords = coords;
  }

  public static routeFromGpx(routeXml: string) {
    let name: string;
    let coords: LatLng[];

    const gpx = GPX.parse(routeXml);
    const trackPoints = gpx.trk[0].trkseg[0].trkpt;
    
    name = gpx.trk[0].name;
    coords = this.parseCoordsJson(trackPoints);
    
    return new Route(name, coords);
  }
  
  private static parseCoordsJson(trackPoints : Array<any>) {
    
    let newCoords: LatLng[] = []
    trackPoints.forEach(point => {
      newCoords.push(new LatLng(point.$.lat, point.$.lon))
    });
    return newCoords;
  }
}