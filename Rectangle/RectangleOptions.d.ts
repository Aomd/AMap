import { Map } from "../Map/Map";
import { Bounds } from "../Bounds";

export class RectangleOptions {


    /**
     *Creates an instance of RectangleOptions.
     * @param {Map} map 要显示该rectangle的地图对象
     * @param {Number} zIndex 层叠顺序默认zIndex:10
     * @param {Bounds} bounds 矩形的范围
     * @param {Boolean} bubble 是否将覆盖物的鼠标或touch等事件冒泡到地图上
     * @param {String} cursor 指定鼠标悬停时的鼠标样式
     * @param {String} strokeColor 线条颜色
     * @param {Number} strokeOpacity 轮廓线透明度
     * @param {Number} strokeWeight 轮廓线宽度
     * @param {String} fillColor 矩形填充颜色,使用16进制颜色代码赋值
     * @param {Number} fillOpacity 矩形填充透明度
     * @param {String} strokeStyle 轮廓线样式
     * @param {*} extData 用户自定义属性
     * @param {Array<Number>} strokeDasharray 勾勒形状轮廓的虚线和间隙的样式
     * @memberof RectangleOptions
     */
    constructor(
        map: Map,
        zIndex: Number,
        bounds: Bounds,
        bubble: Boolean,
        cursor: String,
        strokeColor: String,
        strokeOpacity: Number,
        strokeWeight: Number,
        fillColor: String,
        fillOpacity: Number,
        strokeStyle: String,
        extData: any,
        strokeDasharray: Array<Number>,
    )
}