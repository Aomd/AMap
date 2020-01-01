import { AdvancedInfoWindowOptions } from "./AdvancedInfoWindowOptions";
import { LngLat } from "../LngLat";
import { Map } from "../Map/Map";


/**
 * 用于在地图上弹出一个详细信息展示窗体
 *
 * @export
 * @class AdvancedInfoWindow
 */
export class AdvancedInfoWindow {

  /**
   * Creates an instance of AdvancedInfoWindow.
   * 构造详细信息展示窗体。
   * @param {(AdvancedInfoWindowOptions | Object)} opt
   * @memberof AdvancedInfoWindow
   */
  constructor(
    opt: AdvancedInfoWindowOptions | Object
  )


  /**
   * 在地图的指定位置打开信息窗体
   *
   * @param {Map} map
   * @param {LngLat} pos
   * @memberof AdvancedInfoWindow
   */
  open(map: Map, pos: LngLat)


  /**
   * 关闭信息窗体
   *
   * @memberof AdvancedInfoWindow
   */
  close()


  /**
   * 获取信息窗体是否打开
   *
   * @returns {Boolean}
   * @memberof AdvancedInfoWindow
   */
  getIsOpen(): Boolean


  /**
   * 设置信息窗体内容，可通过该函数动态更新信息窗体中的信息
   *
   * @param {(String | HTMLElement)} content
   * @memberof AdvancedInfoWindow
   */
  setContent(content: String | HTMLElement)


  /**
   *
   * 获取信息窗体内容 ，结果以字符串方式返回
   * @returns {String}
   * @memberof AdvancedInfoWindow
   */
  getContent(): String


  /**
   * 设置信息窗体显示基点位置
   *
   * @param {LngLat} lnglat
   * @memberof AdvancedInfoWindow
   */
  setPosition(lnglat: LngLat)


  /**
   * 获取信息窗体显示基点位置
   *
   * @returns {LngLat}
   * @memberof AdvancedInfoWindow
   */
  getPosition(): LngLat


  /**
   * 获取信息窗体锚点
   *
   * @returns {String}
   * @memberof AdvancedInfoWindow
   */
  getAnchor(): String


  /**
   *
   * 设置信息窗体锚点
   * 可选值：'top-left'|'top-center'|'top-right'|'middle-left'|'center'|'middle-right'|'bottom-left'|'bottom-center'|'bottom-right'    
   * @memberof AdvancedInfoWindow
   */
  setAnchor()


  /**
   * 清除高级信息窗体在地图上绘制的路线规划或者搜索的结果
   *
   * @memberof AdvancedInfoWindow
   */
  clear()

}