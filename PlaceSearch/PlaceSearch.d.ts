

import { PlaceSearchOptions } from './PlaceSearchOptions'
import { LngLat } from '../LngLat';
import { Bounds } from '../Bounds';
import { Polygon } from '../Polygon/Polygon';

/**
 * 地点搜索服务
 *
 * @export
 * @class PlaceSearch
 */
export class PlaceSearch {
    constructor(
        opts: PlaceSearchOptions | Object
    )



    /**
     * 根据关键字搜索
     *
     * @param {String} keyword
     * @param {(status: String, result: Object) => void} callback
     * @memberof PlaceSearch
     */
    search(keyword: String, callback: (status: String, result: Object) => void)





    /**
     * 根据中心点经纬度
     *
     * @param {String} keyword
     * @param {LngLat} center
     * @param {Number} radius
     * @param {(status: String, result: Object) => void} callback
     * @memberof PlaceSearch
     */
    searchNearBy(keyword: String, center: LngLat, radius: Number, callback: (status: String, result: Object) => void)




    /**
     * 根据范围和关键词进行范围查询
     *
     * @param {String} keyword
     * @param {(Bounds | Polygon)} bounds
     * @param {(status: String, result: Object) => void} callback
     * @memberof PlaceSearch
     */
    searchInBounds(keyword: String, bounds: Bounds | Polygon, callback: (status: String, result: Object) => void)



    /**
     * 根据POIID 查询POI 详细信息
     *
     * @param {String} POIID
     * @param {(status: String, result: Object) => void} callback
     * @memberof PlaceSearch
     */
    getDetails(POIID: String, callback: (status: String, result: Object) => void)





    /**
     * 设置查询类别，多个类别用“|”分割
     *
     * @param {String} type
     * @memberof PlaceSearch
     */
    setType(type: String)




    /**
     * 设置是否强制限制城市
     *
     * @param {*} Boolean
     * @memberof PlaceSearch
     */
    setCityLimit(Boolean)



    /**
     * 设置查询结果特定页数
     *
     * @param {Number} pageIndex
     * @memberof PlaceSearch
     */
    setPageIndex(pageIndex: Number)




    /**
     * 设置查询单页结果数
     *
     * @param {Number} setPageSize
     * @memberof PlaceSearch
     */
    setPageSize(setPageSize: Number)





    /**
     * 设置查询城市
     *
     * @param {String} city
     * @memberof PlaceSearch
     */
    setCity(city: String)




    /**
     * 设置检索语言类型
     *
     * @param {String} lang
     * @returns {String}
     * @memberof PlaceSearch
     */
    setLang(lang: String): String








    /**
     * 获取placeSearch检索语言类型
     *
     * @returns {String}
     * @memberof PlaceSearch
     */
    getLang(): String


    /**
     * 清除搜索结果
     *
     * @memberof PlaceSearch
     */
    clear()




    /**
     * 唤起高德地图客户端marker页
     *
     * @param {Object} obj
     * @memberof PlaceSearch
     */
    poiOnAMAP(obj: Object)




    /**
     * 唤起高德地图客户端POI详情页
     *
     * @param {Object} obj
     * @memberof PlaceSearch
     */
    detailOnAMAP(obj: Object)





}