import { Map } from '../Map/Map'
import { LngLat } from '../LngLat';


/**
 * 构造圆形覆盖物，通过CircleOptions设置圆形
 *
 * @export
 * @class CircleOptions
 */
export class CircleOptions {

    /**
     *Creates an instance of CircleOptions.
     * @param {Map} map 要显示该circle的地图对象
     * @param {Number} zIndex 层叠顺序默认zIndex:10
     * @param {LngLat} center 圆心位置
     * @param {Boolean} bubble 是否将覆盖物的鼠标或touch等事件冒泡到地图上
     * @param {String} Boolean 指定鼠标悬停时的鼠标样式，自定义cursor，IE仅支持cur/ani/ico格式，Opera不支持自定义cursor
     * @param {Number} radius 圆半径，单位:米
     * @param {String} strokeColor 线条颜色，使用16进制颜色代码赋值。默认值为#006600
     * @param {Number} strokeOpacity 轮廓线透明度，取值范围[0,1]，0表示完全透明，1表示不透明。默认为0.9
     * @param {Number} strokeWeight 轮廓线宽度
     * @param {String} fillColor 圆形填充颜色,使用16进制颜色代码赋值。默认值为#006600
     * @param {Number} fillOpacity 圆形填充透明度，取值范围[0,1]，0表示完全透明，1表示不透明。默认为0.9
     * @param {String} strokeStyle 轮廓线样式，实线:solid，虚线:dashed
     * @param {*} extData 用户自定义属性，支持JavaScript API任意数据类型，如Circle的id等
     * @param {Array<Number>} strokeDasharray 勾勒形状轮廓的虚线和间隙的样式，此属性在strokeStyle 为dashed 时有效， 此属性在ie9+浏览器有效
     * @memberof CircleOptions
     */
    constructor(
        map: Map,
        zIndex:Number,
        center:LngLat,
        bubble:Boolean,
        Boolean:String,
        radius:Number,
        strokeColor:String,
        strokeOpacity:Number,
        strokeWeight:Number,
        fillColor:String,
        fillOpacity:Number,
        strokeStyle:String,
        extData:any,
        strokeDasharray:Array<Number>
    )
}