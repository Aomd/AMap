import { LngLat } from '../LngLat';

import { TileLayer } from '../TileLayer/TileLayer'

import { IndoorMap } from '../IndoorMap/IndoorMap'


/**
 * 地图初始化参数对象，参数详情参看MapOptions列表。
 *
 * @export
 * @class MapOptions
 */
export class MapOptions {

  /**
   *Creates an instance of MapOptions.
   * @param {Number} [zoom] 地图显示的缩放级别，若center与level未赋值，地图初始化默认显示用户所在城市范围3D地图下，zoom值，可以设置为浮点数。（在V1.3.0版本level参数调整为zoom，3D地图修改自V1.4.0开始生效）
   * @param {LngLat} [center]
   * @param {Array<Number>} [zooms]
   * @param {String} [lang]
   * @param {String} [defaultCursor]
   * @param {String} [crs]
   * @param {Boolean} [animateEnable]
   * @param {Boolean} [isHotspot]
   * @param {TileLayer} [defaultLayer]
   * @param {Boolean} [rotateEnable]
   * @param {Boolean} [resizeEnable]
   * @param {Boolean} [showIndoorMap]
   * @param {IndoorMap} [indoorMap]
   * @param {Boolean} [expandZoomRange]
   * @param {Boolean} [dragEnable]
   * @param {Boolean} [zoomEnable]
   * @param {Boolean} [doubleClickZoom]
   * @param {Boolean} [keyboardEnable]
   * @param {Boolean} [jogEnable]
   * @param {Boolean} [scrollWheel]
   * @param {Boolean} [touchZoom]
   * @param {Number} [touchZoomCenter]
   * @param {String} [mapStyle]
   * @param {Array<String>} [features]
   * @param {Boolean} [showBuildingBlock]
   * @param {String} [viewMode]
   * @param {Number} [pitch]
   * @param {Boolean} [pitchEnable]
   * @param {Boolean} [vbuildingAnimation]
   * @param {String} [skyColor]
   * @param {Array<Array<Number>>} [mask]
   * @memberof MapOptions
   */
  constructor(
    zoom?: Number,
    center?: LngLat,
    zooms?: Array<Number>,
    lang?: String,
    defaultCursor?: String,
    crs?: String,
    animateEnable?: Boolean,
    isHotspot?: Boolean,
    defaultLayer?: TileLayer,
    rotateEnable?: Boolean,
    resizeEnable?: Boolean,
    showIndoorMap?: Boolean,
    indoorMap?: IndoorMap,
    expandZoomRange?: Boolean,
    dragEnable?: Boolean,
    zoomEnable?: Boolean,
    doubleClickZoom?: Boolean,
    keyboardEnable?: Boolean,
    jogEnable?: Boolean,
    scrollWheel?: Boolean,
    touchZoom?: Boolean,
    touchZoomCenter?: Number,
    mapStyle?: String,
    features?: Array<String>,
    showBuildingBlock?: Boolean,
    viewMode?: String,
    pitch?: Number,
    pitchEnable?: Boolean,
    vbuildingAnimation?: Boolean,
    skyColor?: String,
    mask?: Array<Array<Number>>,

  )
}