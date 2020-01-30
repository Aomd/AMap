import { MassMarksOptions } from "./MassMarksOptions";
import { Map } from '../Map/Map'
import { StyleObject } from "../StyleObject";


type MassMarksEventNames =
  'complete' |
  'click' |
  'dblclick' |
  'mouseout	' |
  'mouseup	' |
  'mousedown	' |
  'touchstart	' |
  'touchend	';



/**
 * 此类表示海量点类，利用该类可同时在地图上展示万级别的点，目前仅适用于html5浏览器。
 *
 * @export
 * @class MassMarks
 */
export class MassMarks {

  /**
   *Creates an instance of MassMarks.
   * @param {Array<Object>} data datas为点对象的数组，点对象为包含经纬度lnglat属性的Object，opts为点与点集合的绘制样式。
   * @param {MassMarksOptions |Object} opts
   * @memberof MassMarks
   */
  constructor(
    data: Array<Object>,
    opts: MassMarksOptions | Object
  )


  /**
   * 设置显示MassMark的地图对象
   *
   * @param {Map} map
   * @memberof MassMarks
   */
  setMap(map: Map)


  /**
   * 获取Marker所在地图对象
   *
   * @returns {Map}
   * @memberof MassMarks
   */
  getMap(): Map


  /**
   * 设置MassMark的显示样式
   *
   * @param {(StyleObject | Array<StyleObject>)} styleObj
   * @memberof MassMarks
   */
  setStyle(styleObj: StyleObject | Array<StyleObject>)


  /**
   * 获取MassMark的显示样式，数据结构同setStyle中的属性一致
   *
   * @returns {Object}
   * @memberof MassMarks
   */
  getStyle(): Object


  /**
   * 设置MassMark展现的数据集，数据集格式为
   *
   * @param {Object} data
   * @memberof MassMarks
   */
  setData(data: Object)


  /**
   * 输出MassMark的数据集，数据结构同setDatas中的数据集
   *
   * @returns {Object}
   * @memberof MassMarks
   */
  getData(): Object


  /**
   * 显示海量点图层
   *
   * @memberof MassMarks
   */
  show()


  /**
   * 隐藏海量点图层
   *
   * @memberof MassMarks
   */
  hide()


  /**
   *清除海量点
   *
   * @memberof MassMarks
   */
  clear()

  on(event: MassMarksEventNames, cb: Function)
}