import { Map } from '../../Map/Map'

export class TrafficOptions {
  /**
  *Creates an instance of SatelliteOptions.
  * @param {Map} map 要显示该图层的地图对象
  * @param {Number} zIndex 图层叠加的顺序值，0表示最底层，默认zIndex：2
  * @param {Number} opacity 图层的透明度，取值范围[0,1]，1代表完全不透明，0代表完全透明
  * @param {Array<Number>} zooms 支持的缩放级别范围，默认范围为[3,18],取值范围[3-18]
  * @param {Boolean} detectRetina 是否在高清屏下进行清晰度适配，默认为false。将根据移动设备屏幕设备像素比，采用相应的技术手段，保证图层在不同设备像素比下的清晰度。
  * @param {Boolean} autoRefresh 是否设置可以自动刷新实时路况信息，默认为false
  * @param {Boolean} interval 设置刷新间隔时长，单位：秒默认180s刷新一次
  * @memberof SatelliteOptions
  */
  constructor(
    map: Map,
    zIndex: Number,
    opacity: Number,
    zooms: Array<Number>,
    detectRetina: Boolean,
    autoRefresh: Boolean,
    interval: Number,
  )
}