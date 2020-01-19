import { Map } from "../Map/Map";
import { LngLat } from "../LngLat";

export class CircleMarkerOptions {

  /**
   *Creates an instance of CircleMarkerOptions.
   * @param {Map} map 要显示该标记的地图对象
   * @param {Number} zIndex 层叠顺序
   * @param {LngLat} center 圆心位置
   * @param {Boolean} bubble 是否将覆盖物的鼠标或touch等事件冒泡到地图上
   * @param {Number} radius 圆点半径，单位:px
   * @param {String} strokeColor 线条颜色，使用16进制颜色代码赋值。默认值为#006600
   * @param {Number} strokeOpacity 轮廓线透明度，取值范围[0,1]，0表示完全透明，1表示不透明。默认为0.9
   * @param {Number} strokeWeight 轮廓线宽度
   * @param {String} fillColor 圆形填充颜色,使用16进制颜色代码赋值。默认值为#006600
   * @param {Number} fillOpacity 圆形填充透明度，取值范围[0,1]，0表示完全透明，1表示不透明。默认为0.9
   * @param {*} extData 用户自定义属性，支持JavaScript API任意数据类型，如Circle的id等
   * @memberof CircleMarkerOptions
   */
  constructor(
    map: Map,

    zIndex: Number,

    center: LngLat,

    bubble: Boolean,

    radius: Number,

    strokeColor: String,

    strokeOpacity: Number,

    strokeWeight: Number,


    fillColor: String,

    fillOpacity: Number,

    extData: any
  )
}