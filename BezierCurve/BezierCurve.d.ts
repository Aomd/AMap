import { BezierCurveOptions } from './BezierCurveOptions'
import { LngLat } from '../LngLat';
import { PolylineOptions } from '../Polyline/PolylineOptions';
import { Bounds } from '../Bounds';
import { Map } from '../Map/Map';


/**
 * 贝瑟尔曲线类
 *
 * @export
 * @class BezierCurve
 */
export class BezierCurve {
  constructor(
    opts: BezierCurveOptions | Object
  )


  /**
   * 设置组成该折线的节点数组
   *
   * @param {Array<Array<LngLat>>} path
   * @memberof BezierCurve
   */
  setPath(path: Array<Array<LngLat>>)


  /**
   * 获取折线路径的节点数组。其中lat和lng是经纬度参数。
   *
   * @returns {Array<Array<LngLat>>}
   * @memberof BezierCurve
   */
  getPath(): Array<Array<LngLat>>


  /**
   * 修改折线属性（包括路径的节点、线样式、是否绘制大地线等。属性详情参看PolylineOptions列表）
   *
   * @param {PolylineOptions} opt
   * @memberof BezierCurve
   */
  setOptions(opt: PolylineOptions)


  /**
   * 获取线的属性
   *
   * @returns {Object}
   * @memberof BezierCurve
   */
  getOptions(): Object


  /**
   * 获取折线的总长度（单位：米）
   *
   * @returns {Number}
   * @memberof BezierCurve
   */
  getLength(): Number


  /**
   * 获取当前折线的矩形范围对象
   *
   * @returns {Bounds}
   * @memberof BezierCurve
   */
  getBounds(): Bounds


  /**
   * 地图上隐藏指定折线
   *
   * @memberof BezierCurve
   */
  hide()


  /**
   * 地图上显示指定折线
   *
   * @memberof BezierCurve
   */
  show()


  /**
   * 设置折线所在的地图。参数map即为目标地图，参数为null时，在地图上移除当前折线
   *
   * @param {Map} map
   * @memberof BezierCurve
   */
  setMap(map: Map)


  /**
   *
   * 设置用户自定义属性，支持JavaScript API任意数据类型，如Polyline的id等
   * @param {*} ext
   * @memberof BezierCurve
   */
  setExtData(ext: any)


  /**
   * 获取用户自定义属性
   *
   * @returns {*}
   * @memberof BezierCurve
   */
  getExtData(): any
}