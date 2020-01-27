import { Map } from "../Map/Map";

export class CustomLayerOptions {

  /**
   *Creates an instance of CustomLayerOptions.
   * @param {Map} map 所属的地图对象
   * @param {Number} zIndex 层级
   * @param {Number} opacity 透明度
   * @param {[Number, Number]} zooms 显示级别
   * @memberof CustomLayerOptions
   */
  constructor(
    map: Map,

    zIndex: Number,


    opacity: Number,


    zooms: [Number, Number],

  )
}