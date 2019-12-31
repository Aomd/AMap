import { Map } from "../Map/Map";
import { LngLat } from "../LngLat";
/**
 * 构造一个灵活点标记对象，通过ElasticMarkerOptions设置点标记对象的属性
 *
 * @export
 * @class ElasticMarkerOptions
 */
export class ElasticMarkerOptions {

  /**
   *Creates an instance of ElasticMarkerOptions.
   * @param {Array<Object>} styles 多个不同样式的数组，每个样式形如：
   * {
   * icon:{},
   * label:{},
   * }
   * @param {Object} zoomStyleMapping 表示地图级别与styles中样式对应关系的映射
   * @param {Map} map 要显示该标记的地图对象
   * @param {LngLat} position 点标记在地图上显示的位置，默认为地图中心点
   * @param {Boolean} topWhenClick 鼠标点击时marker是否置顶，默认false ，不置顶
   * @param {Boolean} bubble 是否将覆盖物的鼠标或touch等事件冒泡到地图上（自v1.3 新增）默认值：false
   * @param {Boolean} draggable 设置点标记是否可拖拽移动，默认为false
   * @param {String} cursor 指定鼠标悬停时的鼠标样式，自定义cursor，IE仅支持cur/ani/ico格式，Opera不支持自定义cursor
   * @param {Boolean} visible 点标记是否可见，默认为true
   * @param {Number} zIndex 点标记的叠加顺序。地图上存在多个点标记叠加时，通过该属性使级别较高的点标记在上层显示默认zIndex：100
   * @param {Boolean} clickable 点标记是否可点击
   * @param {*} extData 用户自定义属性，支持JavaScript API任意数据类型，如Marker的id等
   * @memberof ElasticMarkerOptions
   */
  constructor(
    styles: Array<Object>,
    zoomStyleMapping: Object,
    map: Map,
    position: LngLat,
    topWhenClick: Boolean,
    bubble: Boolean,
    draggable: Boolean,
    cursor: String,
    visible: Boolean,
    zIndex: Number,
    clickable: Boolean,
    extData: any
  )
}