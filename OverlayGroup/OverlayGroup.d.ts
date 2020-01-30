import { OverView } from "../OverView/OverView";
import { Map } from "../Map/Map";
import { MarkerEventNames } from "../Marker/Marker";

export class OverlayGroup {
    constructor(
        overlays: Array<OverView | Object>
    )


    /**
     * 添加单个覆盖物到集合中，不支持添加重复的覆盖物
     *
     * @param {(OverView | Object)} overlay
     * @memberof OverlayGroup
     */
    addOverlay(overlay: OverView | Object)


    /**
     * 添加覆盖物数组到集合中，不支持添加重复的覆盖物
     *
     * @param {(Array<OverView | Object>)} overlays
     * @memberof OverlayGroup
     */
    addOverlays(overlays: Array<OverView | Object>)


    /**
     * 返回当前集合中所有的覆盖物
     *
     * @returns {(Array<OverView | Object>)}
     * @memberof OverlayGroup
     */
    getOverlays(): Array<OverView | Object>


    /** 
     * 判断传入的覆盖物实例是否在集合中
     *
     * @param {(Array<OverView | Object>)} overlay
     * @returns {Boolean}
     * @memberof OverlayGroup
     */
    hasOverlay(overlay: Array<OverView | Object>): Boolean


    /**
     * 从集合中删除传入的覆盖物实例
     *
     * @param {(Array<OverView | Object>)} overlay
     * @memberof OverlayGroup
     */
    removeOverlay(overlay: Array<OverView | Object>)

    /**
     * 从集合中删除传入的覆盖物实例数组
     *
     * @param {(Array<OverView | Object>)} overlays
     * @memberof OverlayGroup
     */
    removeOverlays(overlays: Array<OverView | Object>)

    /**
     * 清空集合
     *
     * @memberof OverlayGroup
     */
    clearOverlays()

    /**
     * 对集合中的覆盖物做迭代操作，其中iterator的函数定义是
     *
     * @param {Function} iterator
     * @memberof OverlayGroup
     */
    eachOverlay(iterator: Function)


    /**
     * 指定集合中里覆盖物的显示地图
     *
     * @param {Map} map
     * @returns {Boolean}
     * @memberof OverlayGroup
     */
    setMap(map: Map): Boolean


    /**
     * 修改覆盖物属性(包括线样式、样色等等)
     *
     * @param {Object} opt
     * @memberof OverlayGroup
     */
    setOptions(opt: Object)


    /**
     * 在地图上显示集合中覆盖物
     *
     * @memberof OverlayGroup
     */
    show()

    /**
     * 在地图上隐藏集合中覆盖物
     *
     * @memberof OverlayGroup
     */
    hide()

    on(event: MarkerEventNames, cb: Function)

}