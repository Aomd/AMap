import { GeoJSON } from "./GeoJSON";
import { LngLat } from "../LngLat";

export class GeoJSONOptions{
  constructor(
    geoJSON:Object,
    getMarker:(geojson:GeoJSON,lnglat:LngLat)=>void,

    getPolyline:(geojson:GeoJSON,lnglat:LngLat) => void,

    getPolygon:(geojson:GeoJSON,lnglat:LngLat) => void
  )
}