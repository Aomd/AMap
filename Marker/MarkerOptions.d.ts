import { Map } from "../map/Map";
import { LngLat } from "../LngLat";
import { Pixel } from "../Pixel";
import { Icon } from "../Icon/Icon";
import { MarkerShape } from "../MarkerShape/MarkerShape";

export class MarkerOptions {

  /**
   *Creates an instance of MarkerOptions.
   * @param {Map} map 要显示该marker的地图对象
   * @param {LngLat} position 点标记在地图上显示的位置，默认为地图中心点
   * @param {String} anchor 	设置点标记锚点。默认值：'top-left' 可选值：'top-left'|'top-center'|'top-right'|'middle-left'|'center'|'middle-right'|'bottom-left'|'bottom-center'|'bottom-right'
   * @param {Pixel} offset 点标记显示位置偏移量，默认值为Pixel(-10,-34)。Marker指定position后，默认以marker左上角位置为基准点（若设置了anchor，则以anchor设置位置为基准点），对准所给定的position位置，若需使marker指定位置对准在position处，需根据marker的尺寸设置一定的偏移量。
   * @param {(String|Icon)} icon 需在点标记中显示的图标。可以是一个本地图标地址，或者Icon对象。有合法的content内容时，此属性无效
   * @param {(String|Object)} content 点标记显示内容，可以是HTML要素字符串或者HTML DOM对象。content有效时，icon属性将被覆盖
   * @param {Boolean} topWhenClick 鼠标点击时marker是否置顶，默认false ，不置顶
   * @param {Boolean} bubble 是否将覆盖物的鼠标或touch等事件冒泡到地图上（自v1.3 新增）默认值：false
   * @param {Boolean} draggable 设置点标记是否可拖拽移动，默认为false
   * @param {Boolean} raiseOnDrag 设置拖拽点标记时是否开启点标记离开地图的效果
   * @param {String} cursor 指定鼠标悬停时的鼠标样式，自定义cursor，IE仅支持cur/ani/ico格式，Opera不支持自定义cursor
   * @param {Boolean} visible 点标记是否可见，默认为true
   * @param {Number} zIndex 点标记的叠加顺序。地图上存在多个点标记叠加时，通过该属性使级别较高的点标记在上层显示默认zIndex：100
   * @param {Number} angle 点标记的旋转角度，广泛用于改变车辆行驶方向注：angle属性是使用CSS3来实现的，支持IE9及以上版本
   * @param {Boolean} autoRotation 是否自动旋转。点标记在使用moveAlong动画时，路径方向若有变化，点标记是否自动调整角度，默认为false。广泛用于自动调节车辆行驶方向。IE8以下不支持旋转，autoRotation属性无效
   * @param {String} animation 点标记的动画效果，默认值：“AMAP_ANIMATION_NONE”可选值：“AMAP_ANIMATION_NONE”，无动画效果“AMAP_ANIMATION_DROP”，点标掉落效果“AMAP_ANIMATION_BOUNCE”，点标弹跳效果
   * @param {Icon} shadow 点标记阴影，不设置该属性则点标记无阴影
   * @param {String} title 鼠标滑过点标记时的文字提示，不设置则鼠标滑过点标无文字提示
   * @param {Boolean} clickable 点标记是否可点击
   * @param {MarkerShape} shape 设置Marker的可点击区域，在定义的区域内可触发Marker的鼠标点击事件
   * @param {any} extData 用户自定义属性，支持JavaScript API任意数据类型，如Marker的id等
   * @param {Object} label 添加文本标注。content 为文本标注的内容。direction 为文本标注方位（自 v1.4.14 新增属性），可选值：'top'|'right'|'bottom'|'left'|'center'，默认值：'top' 。offset 为偏移量（默认基准点为图标左上角），如设置了 direction，以 direction 方位为基准点进行偏移。相关示例
   * @memberof MarkerOptions
   */
  constructor(
    map: Map,
    position: LngLat,
    anchor: String,
    offset: Pixel,
    icon: String | Icon,
    content: String | Object,
    topWhenClick: Boolean,
    bubble: Boolean,
    draggable: Boolean,
    raiseOnDrag: Boolean,
    cursor: String,
    visible: Boolean,
    zIndex: Number,
    angle: Number,
    autoRotation: Boolean,
    animation: String,
    shadow: Icon,
    title: String,
    clickable: Boolean,
    shape: MarkerShape,
    extData: any,
    label: Object
  )
}