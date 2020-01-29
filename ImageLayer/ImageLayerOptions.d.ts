import { Bounds } from "../Bounds";
import { Map } from "../Map/Map";

export class ImageLayerOptions{

  /**
   *Creates an instance of ImageLayerOptions.
   * @param {Bounds} bounds ImageLayer显示的范围
   * @param {String} url 需要显示的Image的Url
   * @param {Number} opacity 图层的透明度，[0,1]
   * @param {Boolean} visible 是否显示
   * @param {Map} map 图层所属的地图对象
   * @param {Number} zIndex 层级，缺省为12
   * @param {[Number,Number]} zooms 设置可见级别，[最小级别，最大级别]
   * @memberof ImageLayerOptions
   */
  constructor(
    bounds:Bounds,
    url:String,
    opacity:Number,
    visible:Boolean,
    map:Map,
    zIndex:Number,
    zooms:[Number,Number]
  )
}