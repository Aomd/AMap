import { MassMarksOptions } from "./MassMarksOptions";
import {Map} from '../Map/Map'
import { StyleObject } from "../StyleObject";


type MassMarksEventNames = 
'complete' | 
'click' | 
'dblclick'|
'mouseout	'|
'mouseup	'|
'mousedown	'|
'touchstart	'|
'touchend	';



/**
 * 此类表示海量点类，利用该类可同时在地图上展示万级别的点，目前仅适用于html5浏览器。
 *
 * @export
 * @class MassMarks
 */
export class MassMarks{

  /**
   *Creates an instance of MassMarks.
   * @param {Array<Object>} data datas为点对象的数组，点对象为包含经纬度lnglat属性的Object，opts为点与点集合的绘制样式。
   * @param {MassMarksOptions} opts
   * @memberof MassMarks
   */
  constructor(
    data:Array<Object>,
    opts:MassMarksOptions
  )

  setMap(map:Map)

  getMap():Map

  setStyle(styleObj:StyleObject|Array<StyleObject>)

  getStyle():Object

  setData(data:Object)	

  getData():Object

  show( )

  hide( )

  clear( )

  on(event: MassMarksEventNames ,cb:Function)
}