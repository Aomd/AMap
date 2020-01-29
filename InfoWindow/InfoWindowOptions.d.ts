import { Size } from "../Size";
import { Pixel } from "../Pixel";
import { LngLat } from "../LngLat";

export class InfoWindowOptions{


  /**
   *Creates an instance of InfoWindowOptions.
   * @param {Boolean} isCustom 是否自定义窗体。设为true时
   * @param {Boolean} autoMove 是否自动调整窗体到视野内
   * @param {Boolean} closeWhenClickMap 控制是否在鼠标点击地图后关闭信息窗体，默认false，鼠标点击地图后不关闭信息窗体
   * @param {(String|HTMLElement)} content 显示内容，可以是HTML要素字符串或者HTMLElement对象
   * @param {Size} size 信息窗体尺寸（isCustom为true时，该属性无效）
   * @param {String} anchor 信息窗体锚点。
   * @param {Pixel} offset 信息窗体显示位置偏移量。默认基准点为信息窗体的底部中心
   * @param {LngLat} position 信息窗体显示基点位置
   * @param {Boolean} showShadow Boolean 控制是否显示信息窗体阴影，取值false时不显示窗体阴影，取值true时显示窗体阴影默认值：false
   * @param {Boolean} retainWhenClose 信息窗体关闭时，是否将其Dom元素从页面中移除，默认为false
   * @memberof InfoWindowOptions
   */
  constructor(
    isCustom:Boolean,
    autoMove:Boolean,
    closeWhenClickMap:Boolean,
    content:String|HTMLElement,
    size:Size,
    anchor:String,
    offset:Pixel,
    position:LngLat,
    showShadow:Boolean,
    retainWhenClose:Boolean
  )
}