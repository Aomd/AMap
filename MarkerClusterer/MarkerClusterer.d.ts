import { Map } from "../Map/Map";
import { Marker } from "../Marker/Marker";

import { MarkerClustererOptions } from './MarkerClustererOptions'

type MarkerClustererEventNames =
    'click';

export class MarkerClusterer {
    constructor(map: Map, markers: Array<Marker>, opts: MarkerClustererOptions | Object)


    /**
     * 添加一个需进行聚合的点标记
     *
     * @param {Marker} marker
     * @memberof MarkerClusterer
     */
    addMarker(marker: Marker)


    /**
     * 删除一个聚合的点标记
     *
     * @param {Marker} marker
     * @memberof MarkerClusterer
     */
    removeMarker(marker: Marker)


    /**
     * 获取聚合点的总数量
     *
     * @returns {Number}
     * @memberof MarkerClusterer
     */
    getClustersCount(): Number


    /**
     * 获取聚合网格的像素大小
     *
     * @returns {Number}
     * @memberof MarkerClusterer
     */
    getGridSize(): Number


    /**
     * 获取地图中点标记的最大聚合级别
     *
     * @returns {Number}
     * @memberof MarkerClusterer
     */
    getMaxZoom(): Number


    /**
     * 获取单个聚合的最小数量
     *
     * @returns {Number}
     * @memberof MarkerClusterer
     */
    getMinClusterSize(): Number


    /**
     * 获取聚合的样式风格集合
     *
     * @returns {Array<Object>}
     * @memberof MarkerClusterer
     */
    getStyles(): Array<Object>


    /**
     * 设置聚合网格的像素大小
     *
     * @param {Number} size
     * @memberof MarkerClusterer
     */
    setGridSize(size: Number)


    /**
     * 设置地图中点标记的最大聚合级别
     *
     * @param {Number} zoom
     * @memberof MarkerClusterer
     */
    setMaxZoom(zoom: Number)


    /**
     * 设置单个聚合的最小数量
     *
     * @param {Number} size
     * @memberof MarkerClusterer
     */
    setMinClusterSize(size: Number)

    /**
     * 设置聚合的样式风格
     *
     * @param {Array<Object>} styles
     * @memberof MarkerClusterer
     */
    setStyles(styles: Array<Object>)


    /**
     * 从地图上彻底清除所有聚合点标记
     *
     * @memberof MarkerClusterer
     */
    clearMarkers()


    /**
     * 设置将进行点聚合的地图对象
     *
     * @param {Map} map
     * @memberof MarkerClusterer
     */
    setMap(map: Map)

    /**
     * 设置将进行点聚合显示的点标记集合
     *
     * @param {Array<Marker>} markers
     * @memberof MarkerClusterer
     */
    setMarkers(markers: Array<Marker>)


    /**
     * 获取该点聚合的地图对象
     *
     * @returns {Map}
     * @memberof MarkerClusterer
     */
    getMap(): Map


    /**
     * 获取该点聚合中的点标记集合
     *
     * @returns {Array<Marker>}
     * @memberof MarkerClusterer
     */
    getMarkers(): Array<Marker>


    /**
     * 添加一组需进行聚合的点标记
     *
     * @param {Array<Marker>} markers
     * @memberof MarkerClusterer
     */
    addMarkers(markers: Array<Marker>)


    /**
     * 删除一组聚合的点标记
     *
     * @param {Array<Marker>} markers
     * @memberof MarkerClusterer
     */
    removeMarkers(markers: Array<Marker>)


    /**
     * 获取单个聚合点位置是否是聚合内所有标记的平均中心
     *
     * @returns {Boolean}
     * @memberof MarkerClusterer
     */
    isAverageCenter(): Boolean


    /**
     * 设置单个聚合点位置是否是聚合内所有标记的平均中心


     *
     * @param {Boolean} averageCenter
     * @memberof MarkerClusterer
     */
    setAverageCenter(averageCenter: Boolean)

    on(event: MarkerClustererEventNames ,cb:Function)

}