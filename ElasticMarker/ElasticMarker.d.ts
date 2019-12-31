import { ElasticMarkerOptions } from "./ElasticMarkerOptions";
import { LngLat } from "../LngLat";

import { Map } from '../map/Map'





type EventNames =
  'click' |
  'dblclick' |
  'rightclick' |
  'mousemove' |
  'mouseover' |
  'mouseout' |
  'mousedown' |
  'mouseup' |
  'dragstart' |
  'dragging' |
  'dragend' |
  'touchstart' |
  'touchmove' |
  'touchend';




/**
 * 灵活点标记，一种可以随着地图级别变化而改变图标和大小的点标记，插件类 (查看示例)[https://lbs.amap.com/api/javascript-api/example/marker/elastic-marker]
 *
 * @export
 * @class ElasticMarker
 */
export class ElasticMarker {

  /**
   *Creates an instance of ElasticMarker.
   * @param {ElasticMarkerOptions} pt
   * @memberof ElasticMarker
   */
  constructor(
    pt: ElasticMarkerOptions
  )


  /**
   * 唤起高德地图客户端标注页
   * 其中Object里面包含有{ name:String,name属性 必要参数
   * position: LngLat 坐标点
   * }
   *
   * @param {Object} obj
   * @memberof ElasticMarker
   */
  markOnAMAP(obj: Object)


  /**
   * 设置点标记是支持鼠标单击事件
   *
   * @param {Boolean} clickable
   * @memberof ElasticMarker
   */
  setClickable(clickable: Boolean)


  /**
   * 获取点标记是否支持鼠标单击事件
   *
   * @returns {Boolean}
   * @memberof ElasticMarker
   */
  getClickable(): Boolean


  /**
   * 获取点标记的位置
   *
   * @returns {LngLat}
   * @memberof ElasticMarker
   */
  getPosition(): LngLat


  /**
   * 设置点标记位置
   *
   * @param {LngLat} lnglat
   * @memberof ElasticMarker
   */
  setPosition(lnglat: LngLat)


  /** 
   * 设置点标记的叠加顺序，默认最先添加的点标记在最底层
   *
   * @param {Number} index
   * @memberof ElasticMarker
   */
  setzIndex(index: Number)


  /**
   * 获取点标记的叠加顺序
   *
   * @returns {Number}
   * @memberof ElasticMarker
   */
  getzIndex(): Number


  /**
   * 设置点标记对象是否可拖拽移动
   *
   * @param {Boolean} draggable
   * @memberof ElasticMarker
   */
  setDraggable(draggable: Boolean)


  /**
   * 获取点标记对象是否可拖拽移动
   *
   * @returns {Boolean}
   * @memberof ElasticMarker
   */
  getDraggable(): Boolean


  /**
   * 点标记隐藏
   *
   * @memberof ElasticMarker
   */
  hide()


  /**
   * 点标记显示
   *
   * @memberof ElasticMarker
   */
  show()


  /**
   * 设置鼠标悬停时的光标。 参数cur可为CSS标注中的光标样式，如：
   * setCursor(“pointer”)等；或者自定义的光标样式，如：
   * setCursor("url('https://webapi.amap.com/images/0.png') ,pointer")
   * 注：当浏览器不支持css2，url值不起作用，鼠标样式就按pointer来设置
   *
   * @param {String} cursor
   * @returns {String}
   * @memberof ElasticMarker
   */
  setCursor(cursor: String): String



  /**
   * 为Marker指定目标显示地图。当参数值取null时，地图上移除当前Marker：setMap(null)
   *
   * @param {Map} map
   * @memberof ElasticMarker
   */
  setMap(map: Map)


  /**
   * 获取Marker所在地图对象
   *
   * @returns {Map}
   * @memberof ElasticMarker
   */
  getMap(): Map


  /**
   * 鼠标滑过点标时的文字提示
   *
   * @param {String} title
   * @memberof ElasticMarker
   */
  setTitle(title: String)


  /**
   * 获取点标记的文字提示
   *
   * @returns {String}
   * @memberof ElasticMarker
   */
  getTitle(): String


  /**
   * 地图上有多个marker时，当isTop为true时，marker将显示在最前面；当为false时，marker取消置顶
   *
   * @param {Boolean} isTop
   * @memberof ElasticMarker
   */
  setTop(isTop: Boolean)


  /**
   *
   *
   * @returns {Boolean}
   * @memberof ElasticMarker
   */
  getTop(): Boolean


  /**
   * 设置用户自定义属性，支持JavaScript API任意数据类型，如Marker的id等
   *
   * @param {*} ext
   * @memberof ElasticMarker
   */
  setExtData(ext: any)


  /**
   * 获取用户自定义属性
   *
   * @memberof ElasticMarker
   */
  getExtData()


  /**
     * map事件监听
     *
     * @param {EventNames} event
     * @param {(Function|Event|Object)} cb
     * @memberof Map
     */
  on(event: EventNames, cb: Function)
}