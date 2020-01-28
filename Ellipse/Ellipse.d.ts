import {EllipseOptions} from './EllipseOptions'
import { LngLat } from '../LngLat';
import { Bounds } from '../Bounds';
import { Map } from '../Map/Map';

type EllipseEventNames = 
'click'|
'dblclick'|
'rightclick'|
'hide'|
'show'|
'mousedown'|
'mouseup'|
'mouseover'|
'mouseout'|
'change'|
'touchstart'|
'touchmove'|
'touchend';

export class Ellipse{
  constructor(
    opt:EllipseOptions|Object
  )


  /**
   * 获取椭圆的中心点
   *
   * @returns {LngLat}
   * @memberof Ellipse
   */
  getCenter():LngLat


  /**
   * 设置椭圆的中心点
   *
   * @param {LngLat} lnglat
   * @memberof Ellipse
   */
  setCenter(lnglat: LngLat)


  /**
   * 获取椭圆范围
   *
   * @returns {Bounds}
   * @memberof Ellipse
   */
  getBounds():Bounds


  /** 
   * 修改椭圆属性
   *
   * @param {EllipseOptions} ellipseOpt
   * @memberof Ellipse
   */
  setOptions(ellipseOpt:EllipseOptions)


  /**
   * 获取椭圆的属性
   *
   * @returns {Object}
   * @memberof Ellipse
   */
  getOptions():Object


  /** 
   * 地图上隐藏椭圆
   *
   * @memberof Ellipse
   */
  hide()


  /**
   * 地图上显示椭圆
   *
   * @memberof Ellipse
   */
  show()


  /**
   * 在指定地图上添加该椭圆覆盖物。参数取值为null时，在地图上移除当前椭圆
   *
   * @param {Map} map
   * @memberof Ellipse
   */
  setMap(map:Map)


  /**
   * 设置用户自定义属性，支持JavaScript API任意数据类型，如Ellipse的id等
   *
   * @param {*} ext
   * @memberof Ellipse
   */
  setExtData(ext:any)


  /**
   * 获取用户自定义属性
   *
   * @returns {*}
   * @memberof Ellipse
   */
  getExtData():any


  /**
   * 判断指定点坐标是否在椭圆内
   *
   * @param {LngLat} point
   * @returns {Boolean}
   * @memberof Ellipse
   */
  contains(point:LngLat):Boolean

  on(event: EllipseEventNames, cb: Function)
}