import { TextOptions } from "./TextOptions";
import { Pixel } from "../Pixel";
import { LngLat } from "../LngLat";
import { Map } from "../Map/Map";
import { Icon } from "../Icon/Icon";


type TextEventNames =
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
 * 纯文本标记
 *
 * @export
 * @class Text
 */
export class Text {
    constructor(opt: TextOptions | Object)


    /**
     * 获取文本内容
     *
     * @returns {String}
     * @memberof Text
     */
    getText(): String


    /**
     *  修改文本内容
     *
     * @param {String} str
     * @memberof Text
     */
    setText(str: String)

    /**
     * 设置文本样式
     *
     * @param {Object} obj
     * @memberof Text
     */
    setStyle(obj: Object)

    /**
     * 唤起高德地图客户端标注页
     *
     * @param {Object} obj
     * @memberof Text
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
     * 以指定的速度
     *
     * @param {Array<Number>} path
     * @param {Number} speed
     * @param {Function} f
     * @param {Boolean} circlable
     * @memberof Text
     */
    moveAlong(path:Array<Number>,speed:Number,f:Function,circlable:Boolean)

    /**
     * 以给定速度移动点标记到指定位置
     *
     * @param {LngLat} lnglat
     * @param {Number} speed
     * @param {Function} f
     * @memberof Text
     */
    moveTo(lnglat:LngLat,speed:Number,f:Function)

    /**
     * 点标记停止动画
     *
     * @memberof Text
     */
    stopMove( )

    /**
     * 暂定点标记的动画效果
     *
     * @memberof Text
     */
    pauseMove()

    /**
     * 重新开始点标记的动画效果
     *
     * @memberof Text
     */
    resumeMove()

    /**
     * 为Marker指定目标显示地图
     *
     * @param {Map} map
     * @memberof Text
     */
    setMap(map:Map)

    /**
     * 获取Marker所在地图对象
     *
     * @returns {Map}
     * @memberof Text
     */
    getMap():Map

    /**
     * 鼠标滑过点标时的文字提示
     *
     * @param {String} title
     * @memberof Text
     */
    setTitle(title:String)

    /**
     * 获取点标记的文字提示
     *
     * @memberof Text
     */
    getTitle( )	

    /**
     * 地图上有多个marker时
     *
     * @param {Boolean} isTop
     * @memberof Text
     */
    setTop(isTop:Boolean)

    getTop( )

    /**
     * 设置阴影效果
     *
     * @param {Icon} icon
     * @memberof Text
     */
    setShadow(icon:Icon)

    /**
     * 获取阴影图标
     *
     * @returns {Icon}
     * @memberof Text
     */
    getShadow( ):Icon

    /**
     * 设置用户自定义属性
     *
     * @param {*} ext
     * @memberof Text
     */
    setExtData(ext:any)

    /**
     * 获取用户自定义属性
     *
     * @memberof Text
     */
    getExtData( )

    

    on(event: TextEventNames, cb: Function)
}