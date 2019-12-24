import { LngLat } from '../LngLat';

import { TileLayer } from '../TileLayer'

import { IndoorMap } from '../indoorMap/IndoorMap'


export class MapOptions {
  constructor(
    zoom: Number,
    center: LngLat,
    zooms: Array<Number>,
    lang: String,
    defaultCursor: String,
    crs: String,
    animateEnable: Boolean,
    isHotspot: Boolean,
    defaultLayer: TileLayer,
    rotateEnable: Boolean,
    resizeEnable: Boolean,
    showIndoorMap: Boolean,
    indoorMap: IndoorMap,
    expandZoomRange: Boolean,
    dragEnable: Boolean,
    zoomEnable: Boolean,
    doubleClickZoom: Boolean,
    keyboardEnable: Boolean,
    jogEnable: Boolean,
    scrollWheel: Boolean,
    touchZoom: Boolean,
    touchZoomCenter: Number,
    mapStyle: String,
    features: Array<String>,
    showBuildingBlock: Boolean,
    viewMode: String,
    pitch: Number,
    pitchEnable: Boolean,
    vbuildingAnimation: Boolean,
    skyColor: String,
    mask: Array<Array<Number>>,

  )
}