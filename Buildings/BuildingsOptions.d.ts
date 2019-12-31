import { Map } from '../Map/Map'

export class BuildingsOptions {


  /**
   *Creates an instance of BuildingsOptions.
   * @param {[Number, Number]} zooms 可见级别范围
   * @param {Number} opacity 不透明度
   * @param {Number} heightFactor 高度比例系数，可控制3D视图下的楼块高度
   * @param {Boolean} visible 是否可见
   * @param {Map} map 所属的地图对象
   * @param {Number} zIndex 层级，默认8
   * @memberof BuildingsOptions
   */
  constructor(
    zooms: [Number, Number],
    opacity: Number,
    heightFactor: Number,
    visible: Boolean,
    map: Map,
    zIndex: Number,
  )
}