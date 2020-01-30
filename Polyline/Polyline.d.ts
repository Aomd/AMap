import { PolylineOptions } from "./PolylineOptions";
import { Bounds } from "../Bounds";
import { Map } from "../Map/Map";


type PolylineEventNames = 

'click'|
'dblclick'|
'rightclick'|
'hide'|
'show'|
'mousedown'|
'mouseup'|
'mouseover'|
'mouseout'|
'change'|
'touchstart'|
'touchmove'|
'touchend';

/**
 * 折线
 *
 * @export
 * @class Polyline
 */
export class Polyline {
    constructor(
        opt: PolylineOptions | Object
    )


    /**
     * 设置组成该折线的节点数组
     *
     * @param {Array<Number>} path
     * @memberof Polyline
     */
    setPath(path: Array<Number>)


    /**
     * 获取折线路径的节点数组
     *
     * @returns {Array<Number>}
     * @memberof Polyline
     */
    getPath(): Array<Number>

    /**
     * 修改折线属性
     *
     * @param {(PolylineOptions | Object)} opt
     * @memberof Polyline
     */
    setOptions(opt: PolylineOptions | Object)

    /**
     * 获取线的属性
     *
     * @returns {Object}
     * @memberof Polyline
     */
    getOptions(): Object

    /**
     * 获取折线的总长度
     *
     * @returns {Number}
     * @memberof Polyline
     */
    getLength(): Number

    /**
     * 获取当前折线的矩形范围对象
     *
     * @returns {Bounds}
     * @memberof Polyline
     */
    getBounds(): Bounds

    /**
     * 地图上隐藏指定折线
     *
     * @memberof Polyline
     */
    hide()

    /**
     * 地图上显示指定折线
     *
     * @memberof Polyline
     */
    show()

    /**
     * 设置折线所在的地图
     *
     * @param {Map} map
     * @memberof Polyline
     */
    setMap(map: Map)

    /**
     * 设置用户自定义属性
     *
     * @param {*} ext
     * @memberof Polyline
     */
    setExtData(ext: any)

    /**
     * 获取用户自定义属性
     *
     * @returns {*}
     * @memberof Polyline
     */
    getExtData(): any

    on(event: PolylineEventNames, cb: Function)
}