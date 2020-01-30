
import { PolygonOptions } from './PolygonOptions'
import { LngLat } from '../LngLat';
import { Bounds } from '../Bounds';
import { Map } from '../Map/Map';



type PolygonEventNames =

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
  'touchend';


/**
 * 多边形
 *
 * @export
 * @class Polygon
 */
export class Polygon {
  constructor(
    opt: PolygonOptions | Object
  )


  /**
   * 设置多边形轮廓线节点数组
   *
   * @param {(Array<LngLat>|Array<Array<LngLat>>)} path
   * @memberof Polygon
   */
  setPath(path: Array<LngLat> | Array<Array<LngLat>>)


  /**
   * 获取多边形轮廓线节点数组
   *
   * @returns {(Array<LngLat>|Array<Array<LngLat>>)}
   * @memberof Polygon
   */
  getPath(): Array<LngLat> | Array<Array<LngLat>>


  /**
   * 修改多边形属性
   *
   * @param {(PolygonOptions|Object)} opt
   * @memberof Polygon
   */
  setOptions(opt: PolygonOptions | Object)

  /**
   * 获取多边形的属性
   *
   * @returns {Object}
   * @memberof Polygon
   */
  getOptions(): Object

  /**
   * 获取当前多边形的矩形范围对象。
   *
   * @returns {Bounds}
   * @memberof Polygon
   */
  getBounds(): Bounds


  /**
   * 获取多边形的面积
   *
   * @returns {Number}
   * @memberof Polygon
   */
  getArea(): Number


  /**
   * 隐藏多边形
   *
   * @memberof Polygon
   */
  hide()


  /**
   * 显示多边形
   *
   * @memberof Polygon
   */
  show()


  /**
   * 在指定地图上显示当前的多边形
   *
   * @param {Map} map
   * @memberof Polygon
   */
  setMap(map: Map)


  /**
   * 设置用户自定义属性
   *
   * @param {*} ext
   * @memberof Polygon
   */
  setExtData(ext: any)


  /**
   * 获取用户自定义属性
   *
   * @returns {*}
   * @memberof Polygon
   */
  getExtData(): any


  /**
   * 判断指定点坐标是否在多边形范围内
   *
   * @param {LngLat} point
   * @returns {Boolean}
   * @memberof Polygon
   */
  contains(point: LngLat): Boolean


  on(event: PolygonEventNames, cb: Function)
}