import { HeatmapOptions } from "./HeatmapOptions";
import { Map } from '../Map/Map';
import { LngLat } from "../LngLat";


/**
 * 热力图，基于第三方heatmap.js实现
 *
 * @export
 * @class Heatmap
 */
export class Heatmap {
  constructor(
    map: Map,
    opts: HeatmapOptions
  )


  /**
   * 设置热力图要叠加的地图对象，也可以在Map中的layers属性中设置为默认显示的图层
   *
   * @param {Map} map
   * @memberof Heatmap
   */
  setMap(map: Map)


  /**
   * 设置热力图属性，参考HeatmapOptions列表中的说明
   *
   * @param {HeatmapOptions} opts
   * @memberof Heatmap
   */
  setOptions(opts: HeatmapOptions)


  /**
   * 向热力图数据集中添加坐标点，count不填写时默认：1
   *
   * @param {Number} lng
   * @param {Number} lat
   * @param {Number} count
   * @memberof Heatmap
   */
  addDataPoint(lng: Number, lat: Number, count: Number)

  setDataSet(dataset: Object)


  /**
   * 隐藏热力图
   *
   * @memberof Heatmap
   */
  hide()


  /**
   * 显示热力图
   *
   * @memberof Heatmap
   */
  show()


  /**
   * 获取热力图叠加地图对象
   *
   * @returns {Map}
   * @memberof Heatmap
   */
  getMap(): Map


  /**
   * 获取热力图的属性信息
   *
   * @returns {Object}
   * @memberof Heatmap
   */
  getOptions(): Object


  /**
   * 输出热力图的数据集，数据结构同setDataSet中的数据集
   *
   * @returns {Object}
   * @memberof Heatmap
   */
  getDataSet(): Object
}