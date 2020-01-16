import { LngLat } from '../LngLat';
import { Map } from "../Map/Map";


/**
 * 用于创建曲线，ops为初始化构造参数
 *
 * @export
 * @class BezierCurveOptions
 */
export class BezierCurveOptions {
  
  /**
   *Creates an instance of BezierCurveOptions.
   * @param {Array<Array<LngLat>>} path 贝瑟尔曲线的路径。描述为一个二维数组规则
   * @param {Map} map 所属地图
   * @param {String} strokeColor 线条颜色，如‘#000000’、‘red’
   * @param {Number} strokeOpacity 透明度
   * @param {Number} strokeWeight 线宽
   * @param {String} strokeStyle 虚线或者视线，'dashed'、'solid'
   * @param {Array<Number>} strokeDasharray 虚线的分段，如[10,10]
   * @param {Number} zIndex 层级
   * @param {Boolean} showDir 是否显示白色方向箭头
   * @param {Boolean} bubble 事件是否穿透到地图
   * @param {String} cursor 指定鼠标悬停时的鼠标样式，自定义cursor，IE仅支持cur/ani/ico格式，Opera不支持自定义cursor
   * @param {Boolean} isOutline 是否描边
   * @param {String} outlineColor 描边颜色
   * @param {Number} borderWeight 描边宽度
   * @memberof BezierCurveOptions
   */
  constructor(

    path: Array<Array<LngLat>>,

    map: Map,

    strokeColor: String,

    strokeOpacity: Number,

    strokeWeight: Number,

    strokeStyle: String,

    strokeDasharray: Array<Number>,

    zIndex: Number,

    showDir: Boolean,

    bubble: Boolean,

    cursor: String,

    isOutline: Boolean,

    outlineColor: String,

    borderWeight: Number
  )
}