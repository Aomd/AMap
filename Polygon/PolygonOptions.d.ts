import { Map } from "../Map/Map"
import { LngLat } from "../LngLat";

/**
 *
 *
 * @export
 * @class PolygonOptions
 */
export class PolygonOptions {

    /**
     *Creates an instance of PolygonOptions.
     * @param {Map} map 要显示该polygon的地图对象
     * @param {Number} zIndex 多边形覆盖物的叠加顺序
     * @param {(Array<LngLat> | Array<Array<LngLat>>)} path 多边形轮廓线的节点坐标数组
     * @param {Boolean} bubble 是否将覆盖物的鼠标或touch等事件冒泡到地图上
     * @param {String} cursor 指定鼠标悬停时的鼠标样式
     * @param {String} strokeColor 线条颜色
     * @param {Number} strokeOpacity 轮廓线透明度，取值范围[0,1]
     * @param {Number} strokeWeight 轮廓线宽度
     * @param {String} fillColor 多边形填充颜色
     * @param {Number} fillOpacity 多边形填充透明度
     * @param {Boolean} draggable 设置多边形是否可拖拽移动
     * @param {*} extData 用户自定义属性
     * @param {String} strokeStyle 轮廓线样式
     * @param {Array<Number>} strokeDasharray 勾勒形状轮廓的虚线和间隙的样式
     * @memberof PolygonOptions
     */
    constructor(
        map: Map,
        zIndex: Number,
        path: Array<LngLat> | Array<Array<LngLat>>,
        bubble: Boolean,
        cursor: String,
        strokeColor: String,
        strokeOpacity: Number,
        strokeWeight: Number,
        fillColor: String,
        fillOpacity: Number,
        draggable: Boolean,
        extData: any,
        strokeStyle: String,
        strokeDasharray: Array<Number>,


    )
}