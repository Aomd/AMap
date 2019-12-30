import { Pixel } from "../Pixel";
import { LngLat } from "../LngLat";
import { Icon } from "../Icon/Icon";
import { Map } from "../map/Map";

import { MarkerOptions } from './MarkerOptions'
import { MarkerShape } from "../MarkerShape/MarkerShape";


// 字符串字面量类型

type MarkerEventNames =
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
  'moving' |
  'moveend' |
  'movealong' |
  'touchstart' |
  'touchmove' |
  'touchend';

  /**
   * 点标记
   *
   * @export
   * @class Marker
   */
  export class Marker {



  /**
   * Creates an instance of Marker.
   * 构造一个点标记对象，通过MarkerOptions设置点标记对象的属性
   * @param {(Object | MarkerOptions)} opt
   * @memberof Marker
   */
  constructor(opt: Object | MarkerOptions)


  /**
   * 唤起高德地图客户端标注页
   * 其中Object里面包含有{ name:String,name属性 必要参数
   * position: LngLat 坐标点
   * }
   *
   * @param {Object} obj
   * @memberof Marker
   */
  markOnAMAP(obj: Object)

  /**
   * 获取Marker锚点
   *
   * @returns {String}
   * @memberof Marker
   */
  getAnchor(): String

  /**
   * 设置Marker锚点
   * 可选值：'top-left'|'top-center'|'top-right'|'middle-left'|'center'|'middle-right'|'bottom-left'|'bottom-center'|'bottom-right'
   *
   * @param {String} anchor
   * @memberof Marker
   */
  setAnchor(anchor: String)

  /**
   * 获取Marker偏移量
   *
   * @returns {Pixel}
   * @memberof Marker
   */
  getOffset(): Pixel


  /**
   * 设置Marker偏移量
   *
   * @param {Pixel} offset
   * @memberof Marker
   */
  setOffset(offset: Pixel)


  /**
   * 设置点标记的动画效果，默认值：
   * “AMAP_ANIMATION_NONE”
   * 可选值：
   * “AMAP_ANIMATION_NONE”，无动画效果
   * “AMAP_ANIMATION_DROP”，点标掉落效果
   * “AMAP_ANIMATION_BOUNCE”，点标弹跳效果
   *
   * @param {String} animate
   * @memberof Marker
   */
  setAnimation(animate: String)


  /**
   * 获取点标记的动画效果类型
   *
   * @returns {String}
   * @memberof Marker
   */
  getAnimation(): String


  /**
   * 设置点标记是支持鼠标单击事件
   *
   * @param {Boolean} clickable
   * @memberof Marker
   */
  setClickable(clickable: Boolean)


  /**
   *  获取点标记是否支持鼠标单击事件
   *
   * @returns {Boolean}
   * @memberof Marker
   */
  getClickable(): Boolean


  /**
   * 获取点标记的位置
   *
   * @returns {LngLat}
   * @memberof Marker
   */
  getPosition(): LngLat


  /**
   * 设置点标记位置
   *
   * @param {LngLat} lnglat
   * @memberof Marker
   */
  setPosition(lnglat: LngLat)


  /**
   * 设置点标记的旋转角度
   *
   * @param {Number} angle
   * @memberof Marker
   */
  setAngle(angle: Number)


  /**
   * 设置点标记文本标签内容相关示例
   *
   * @param {Object} label
   * @memberof Marker
   */
  setLabel(label: Object)


  /**
   * 获取点标记文本标签内容
   *
   * @returns {Object}
   * @memberof Marker
   */
  getLabel(): Object


  /**
   * 获取点标记的旋转角度
   *
   * @returns {Number}
   * @memberof Marker
   */
  getAngle(): Number


  /**
   * 设置点标记的叠加顺序，默认最先添加的点标记在最底层
   *
   * @param {Number} index
   * @memberof Marker
   */
  setzIndex(index: Number)


  /**
   * 获取点标记的叠加顺序
   *
   * @returns {Number}
   * @memberof Marker
   */
  getzIndex(): Number


  /**
   * 设置点标记的显示图标。
   * 参数image可传入String、Icon两种类型的值。
   * 若为String（图片url），表示点标记以指定图片形式显示；若为Icon，表示点标记以Icon对象形式显示
   *
   * @param {(String | Icon)} content
   * @memberof Marker
   */
  setIcon(content: String | Icon)


  /**
   * 当点标记未自定义图标时，获取Icon内容
   *
   * @returns {(String | Icon)}
   * @memberof Marker
   */
  getIcon(): String | Icon


  /**
   * 设置点标记对象是否可拖拽移动
   *
   * @param {Boolean} draggable
   * @memberof Marker
   */
  setDraggable(draggable: Boolean)


  /**
   * 获取点标记对象是否可拖拽移动
   *
   * @returns {Boolean}
   * @memberof Marker
   */
  getDraggable(): Boolean


  /**
   * 点标记隐藏
   *
   * @memberof Marker
   */
  hide()


  /**
   * 点标记显示
   *
   * @memberof Marker
   */
  show()


  /**
   * 设置鼠标悬停时的光标。 参数cur可为CSS标注中的光标样式，如：
   * setCursor(“pointer”)等；或者自定义的光标样式，如：
   * setCursor("url('https://webapi.amap.com/images/0.png') ,pointer")
   * 注：当浏览器不支持css2，url值不起作用，鼠标样式就按pointer来设置
   *
   * @param {String} Cursor
   * @returns {String}
   * @memberof Marker
   */
  setCursor(Cursor: String): String


  /**
   * 设置点标记显示内容，可以是HTML要素字符串或者HTML DOM对象
   *
   * @param {(String | HTMLDivElement)} html
   * @memberof Marker
   */
  setContent(html: String | HTMLDivElement)


  /**
   * 获取点标记内容
   *
   * @returns {String}
   * @memberof Marker
   */
  getContent(): String


  /**
   * 以指定的速度，点标记沿指定的路径移动。参数path为轨迹路径的经纬度对象的数组；speed为指定速度，单位：千米/小时，不可为0；
   * 回调函数f为变化曲线函数，缺省为function(k){return k}；参数circlable表明是否循环执行动画，默认为false
   *
   * @param {Array<Array<Number>>} path
   * @param {Number} speed
   * @param {Function} f
   * @param {Boolean} circlable
   * @memberof Marker
   */
  moveAlong(path: Array<Array<Number>>, speed: Number, f: Function, circlable: Boolean)


  /**
   * 以给定速度移动点标记到指定位置。参数lnglat为指定位置，必设；speed为指定速度，单位：千米/小时，不可为0；回调函数f为变化曲线函数，缺省为function(k){return k}。
   *
   * @param {LngLat} lnglat
   * @param {Number} speed
   * @param {Function} f
   * @memberof Marker
   */
  moveTo(lnglat: LngLat, speed: Number, f: Function)


  /**
   * 点标记停止动画
   *
   * @memberof Marker
   */
  stopMove()


  /**
   * 暂定点标记的动画效果
   *
   * @memberof Marker
   */
  pauseMove()


  /**
   * 重新开始点标记的动画效果
   *
   * @memberof Marker
   */
  resumeMove()


  /**
   * 为Marker指定目标显示地图。当参数值取null时，地图上移除当前Marker：setMap(null)
   *
   * @param {Map} map
   * @memberof Marker
   */
  setMap(map: Map)


  /**
   * 获取Marker所在地图对象
   *
   * @returns {Map}
   * @memberof Marker
   */
  getMap(): Map


  /**
   * 鼠标滑过点标时的文字提示
   *
   * @param {String} title
   * @returns {String}
   * @memberof Marker
   */
  setTitle(title: String): String


  /**
   * 获取点标记的文字提示
   *
   * @memberof Marker
   */
  getTitle()


  /**
   * 地图上有多个marker时，当isTop为true时，marker将显示在最前面；当为false时，marker取消置顶
   *
   * @param {Boolean} isTop
   * @memberof Marker
   */
  setTop(isTop: Boolean)

  getTop(): Boolean


  /**
   * 为marker设置阴影效果
   *
   * @param {Icon} icon
   * @memberof Marker
   */
  setShadow(icon: Icon)


  /**
   * 获取marker的阴影图标
   *
   * @returns {Icon}
   * @memberof Marker
   */
  getShadow(): Icon


  /**
   * 设置marker的可点击区域
   *
   * @param {MarkerShape} shape
   * @memberof Marker
   */
  setShape(shape: MarkerShape)


  /**
   * 获取marker的可点击区域
   *
   * @returns {MarkerShape}
   * @memberof Marker
   */
  getShape(): MarkerShape


  /**
   * 设置用户自定义属性，支持JavaScript API任意数据类型，如Marker的id等
   *
   * @param {*} ext
   * @memberof Marker
   */
  setExtData(ext: any)


  /**
   * 获取用户自定义属性
   *
   * @returns {*}
   * @memberof Marker
   */
  getExtData(): any


  /**
   *
   *
   * @param {EventNames} event
   * @param {Function} cb
   * @memberof Marker
   */
  on(event: MarkerEventNames, cb: Function)
}