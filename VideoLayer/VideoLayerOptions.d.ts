import { Bounds } from "../Bounds";
import { Map } from "../Map/Map";

export class VideoLayerOptions {

  /**
   *Creates an instance of VideoLayerOptions.
   * @param {Boolean} autoplay 加载完成是否自动播放
   * @param {Boolean} loop 是否循环播放
   * @param {Bounds} bounds VideoLayer覆盖的范围
   * @param {(String|Array<String>)} url 需要显示的Video的Url
   * @param {Number} opacity 图层的透明度
   * @param {Boolean} visible 是否显示
   * @param {Map} map 图层所属的地图对象
   * @param {Number} zIndex 层级，缺省为12
   * @param {[Number,Number]} zooms 设置可见级别，[最小级别，最大级别]
   * @memberof VideoLayerOptions
   */
  constructor(
    autoplay:Boolean,
    loop:Boolean,
    bounds:Bounds,
    url:String|Array<String>,
    opacity:Number,
    visible:Boolean,
    map:Map,
    zIndex:Number,
    zooms:[Number,Number]
  )
}