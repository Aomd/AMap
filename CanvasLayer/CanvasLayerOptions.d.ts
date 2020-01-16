import { Bounds } from "../Bounds";
import { Map } from "../Map/Map";


/**
 * Canas图层类，用户可以将一个Canvas作为图层添加在地图上，Canvas图层会随缩放级别而自适应缩放
 *
 * @export
 * @class CanvasLayerOptions
 */
export class CanvasLayerOptions{


  /**
   *Creates an instance of CanvasLayerOptions.
   * @param {Bounds} bounds VideoLayer覆盖的范围
   * @param {HTMLCanvasElement} canvas 需要显示的Canvas对象
   * @param {Number} opacity 图层的透明度，[0,1]
   * @param {Boolean} visible 是否显示
   * @param {Map} map 图层所属的地图对象
   * @param {Number} zIndex 层级，缺省为12
   * @param {[Number, Number]} zooms 设置可见级别，[最小级别，最大级别]
   * @memberof CanvasLayerOptions
   */
  constructor(

    bounds: Bounds,


    canvas: HTMLCanvasElement,


    opacity: Number,


    visible: Boolean,


    map: Map,


    zIndex: Number,


    zooms: [Number, Number]

  )
}