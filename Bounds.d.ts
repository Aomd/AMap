import { LngLat } from './LngLat'



/**
 * 矩形范围的构造函数.
 *
 * @export
 * @class Bounds
 */
export class Bounds {


  /**
   * Creates an instance of Bounds.
   * 参数southWest、northEast分别代表地物对象西南角经纬度和东北角经纬度值。
   * @param {LngLat} southWest
   * @param {LngLat} northEast
   * @memberof Bounds
   */
  constructor(
    southWest: LngLat,
    northEast: LngLat
  )


  /**
   *指定点坐标是否在矩形范围内  
   *
   * @param {LngLat} point
   * @returns {Boolean}
   * @memberof Bounds
   */
  contains(point: LngLat): Boolean


  /**
   *
   * 获取当前Bounds的中心点经纬度坐标。
   * @returns {LngLat}
   * @memberof Bounds
   */
  getCenter(): LngLat


  /**
   * 获取西南角坐标。
   *
   * @returns {LngLat}
   * @memberof Bounds
   */
  getSouthWest(): LngLat



  /**
   *
   * 获取东北角坐标
   * @returns {LngLat}
   * @memberof Bounds
   */
  getNorthEast(): LngLat


  /**
   * 以字符串形式返回地物对象的矩形范围
   *
   * @returns {String}
   * @memberof Bounds
   */
  toString(): String
}