import { CircleMarkerOptions } from './CircleMarkerOptions';
import { LngLat } from '../LngLat';
import { Map } from '../Map/Map';

type CircleMarkerEventNames =
  'click' |
  'dblclick' |
  'rightclick' |
  'hide' |
  'show' |
  'mousedown' |
  'mousedown' |
  'mouseover' |
  'mouseout' |
  'change' |
  'touchstart' |
  'touchmove' |
  'touchend';


/**
 *
 *
 * @export
 * @class CircleMarker
 */
export class CircleMarker {


  /**
   *Creates an instance of CircleMarker.
   * @param {(CircleMarkerOptions | Object)} opt 构造圆点标记，通过CircleMarkerOptions设置圆点标记的属性
   * @memberof CircleMarker
   */
  constructor(
    opt: CircleMarkerOptions | Object
  )


  /**
   * 设置圆点中心
   *
   * @param {LngLat} lnglat
   * @memberof CircleMarker
   */
  setCenter(lnglat: LngLat)


  /**
   * 获取圆点中心
   *
   * @returns {LngLat}
   * @memberof CircleMarker
   */
  getCenter(): LngLat


  /**
   * 设置圆点的半径
   *
   * @param {Number} radius
   * @memberof CircleMarker
   */
  setRadius(radius: Number)


  /**
   * 获取圆点的半径
   *
   * @returns {Number}
   * @memberof CircleMarker
   */
  getRadius(): Number



  /**
   * 修改圆点标记的属性（样式风格，包括轮廓线、填充色等。属性详情参看CircleMarkerOptions列表）
   *
   * @param {CircleMarkerOptions} circleopt
   * @memberof CircleMarker
   */
  setOptions(circleopt: CircleMarkerOptions)


  /**
   * 获取圆点的属性
   *
   * @returns {Object}
   * @memberof CircleMarker
   */
  getOptions(): Object


  /**
   * 地图上隐藏圆形
   *
   * @memberof CircleMarker
   */
  hide()


  /**
   * 地图上显示圆形
   *
   * @memberof CircleMarker
   */
  show()


  /**
   * 在指定地图上添加该圆点覆盖物。参数取值为null时，在地图上移除当前圆形
   *
   * @param {Map} map
   * @memberof CircleMarker
   */
  setMap(map: Map)


  /**
   * 设置用户自定义属性，支持JavaScript API任意数据类型，如CircleMarker的id等
   *
   * @param {*} ext
   * @memberof CircleMarker
   */
  setExtData(ext: any)


  /**
   * 获取用户自定义属性
   *
   * @returns {*}
   * @memberof CircleMarker
   */
  getExtData(): any

  on(event: CircleMarkerEventNames, cb: Function)
}