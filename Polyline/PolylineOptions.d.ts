import { Map } from "../Map/Map"

/**
 *
 *
 * @export
 * @class PolylineOptions
 */
export class PolylineOptions {

    /**
     *Creates an instance of PolylineOptions.
     * @param {Map} map 要显示该polyline的地图对象
     * @param {Number} zIndex 折线覆盖物的叠加顺序
     * @param {Boolean} bubble 是否将覆盖物的鼠标或touch等事件冒泡到地图上
     * @param {String} cursor 指定鼠标悬停时的鼠标样式
     * @param {Boolean} geodesic 是否绘制成大地线
     * @param {Boolean} isOutline 线条是否带描边
     * @param {Number} borderWeight 描边的宽度
     * @param {String} outlineColor 线条描边颜色
     * @param {Array<Number>} path 折线的节点坐标数组
     * @param {String} strokeColor 线条颜色
     * @param {Number} strokeOpacity 线条透明度
     * @param {Number} strokeWeight 线条宽度
     * @param {String} strokeStyle 线样式
     * @param {Array<Number>} strokeDasharray 勾勒形状轮廓的虚线和间隙的样式
     * @param {String} lineJoin 折线拐点的绘制样式
     * @param {String} lineCap 折线两端线帽的绘制样式
     * @param {Boolean} draggable 设置折线是否可拖拽移动
     * @param {*} extData 用户自定义属性
     * @param {Boolean} showDir 是否延路径显示白色方向箭头
     * @memberof PolylineOptions
     */
    constructor(
        map: Map,
        zIndex: Number,
        bubble: Boolean,
        cursor: String,
        geodesic: Boolean,
        isOutline: Boolean,
        borderWeight: Number,
        outlineColor: String,
        path: Array<Number>,
        strokeColor: String,
        strokeOpacity: Number,
        strokeWeight: Number,
        strokeStyle: String,
        strokeDasharray: Array<Number>,
        lineJoin: String,
        lineCap: String,
        draggable: Boolean,
        extData: any,
        showDir: Boolean,
    )
}