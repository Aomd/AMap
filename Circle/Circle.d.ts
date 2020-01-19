import { CircleOptions } from './CircleOptions.d';
import { LngLat } from '../LngLat';
import { Bounds } from '../Bounds';
import { Map } from '../Map/Map';

type CircleEventNames =
  'click' |
  'dblclick' |
  'rightclick' |
  'hide' |
  'show' |
  'mousedown' |
  'mouseup' |
  'mouseover' |
  'mouseout' |
  'change' |
  'touchstart' |
  'touchmove' |
  'touchend' |
  'end';


/**
 * Circle类
 *
 * @export
 * @class Circle
 */
export class Circle {
  constructor(opt: CircleOptions | Object)


  /**
   * 设置圆中心点
   *
   * @param {LngLat} lnglat
   * @memberof Circle
   */
  setCenter(lnglat: LngLat)


  /**
   *
   * 获取圆中心点
   * @returns {LngLat}
   * @memberof Circle
   */
  getCenter(): LngLat


  /**
   * 获取圆外切矩形范围
   *
   * @returns {Bounds}
   * @memberof Circle
   */
  getBounds(): Bounds


  /**
   * 设置圆形的半径
   *
   * @param {Number} radius
   * @memberof Circle
   */
  setRadius(radius: Number)


  /**
   * 获取圆形的半径
   *
   * @returns {Number}
   * @memberof Circle
   */
  getRadius(): Number


  /**
   * 修改圆属性（样式风格，包括组成圆形轮廓线的节点、轮廓线样式等。属性详情参看CircleOptions列表）
   *
   * @param {CircleOptions} circleopt
   * @memberof Circle
   */
  setOptions(circleopt: CircleOptions)


  /**
   * 获取圆形的属性
   *
   * @returns {Object}
   * @memberof Circle
   */
  getOptions(): Object


  /**
   * 地图上隐藏圆形
   *
   * @memberof Circle
   */
  hide()


  /**
   * 地图上显示圆形
   *
   * @memberof Circle
   */
  show()


  /**
   * 在指定地图上添加该圆形覆盖物。参数取值为null时，在地图上移除当前圆形
   *
   * @param {Map} map
   * @memberof Circle
   */
  setMap(map: Map)


  /**
   * 设置用户自定义属性，支持JavaScript API任意数据类型，如Circle的id等
   *
   * @param {*} ext
   * @memberof Circle
   */
  setExtData(ext: any)


  /**
   * 获取用户自定义属性
   *
   * @returns {*}
   * @memberof Circle
   */
  getExtData(): any


  /**
   * 判断指定点坐标是否在圆内
   *
   * @param {LngLat} point
   * @returns {Boolean}
   * @memberof Circle
   */
  contains(point: LngLat): Boolean

  on(event: CircleEventNames, cb: Function)
}