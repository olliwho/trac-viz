import {LatLng} from "leaflet";

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

    const parser = require('fast-xml-parser');
    
    try{
      let route = parser.parse(routeXml);
      name = route.name;
      coords = this.parseCoordsJson(route.trkseg);
      return new Route(name, coords);
    }catch(error){
      console.log(error.message)
      console.log("Could not parse file!")
    }
  }
  
  private static parseCoordsJson(coords: JSON) {
    //TODO
    return [new LatLng(0, 0)];
  }
}