import { RoadInfoSearchOptions } from './RoadInfoSearchOptions';


type RoadInfoSearchEventNames =
    'complete' |
    'error';

/**
 * 道路及道路交叉口查询服务
 *
 * @export
 * @class RoadInfoSearch
 */
export class RoadInfoSearch {
    constructor(
        opts: RoadInfoSearchOptions | Object
    )


    /**
     * 根据给定的道路ID查询道路信息
     *
     * @param {String} id
     * @param {(status: String, result: Object) => void} callback
     * @memberof RoadInfoSearch
     */
    roadInfoSearchByRoadId(id: String, callback: (status: String, result: Object) => void)


    /**
     * 根据给定的关键字查询道路信息
     *
     * @param {String} keyword
     * @param {(status: String, result: Object) => void} callback
     * @memberof RoadInfoSearch
     */
    roadInfoSearchByRoadName(keyword: String, callback: (status: String, result: Object) => void)


    /**
     * 根据交叉路口ID查询交叉口信息
     *
     * @param {String} id
     * @param {(status: String, result: Object) => void} callback
     * @memberof RoadInfoSearch
     */
    crossInfoSearchByCrossId(id: String, callback: (status: String, result: Object) => void)


    /**
     * 根据道路名称查询交叉口信息
     *
     * @param {String} keyword
     * @param {(status: String, result: Object) => void} callback
     * @memberof RoadInfoSearch
     */
    crossInfoSearchByRoadName(keyword: String, callback: (status: String, result: Object) => void)


    /**
     * 设置单页显示结果条数
     *
     * @param {Number} pageSize
     * @memberof RoadInfoSearch
     */
    setPageSize(pageSize: Number)


    /**
     * 设置查询结果页码
     *
     * @param {Number} pageIndex
     * @memberof RoadInfoSearch
     */
    setPageIndex(pageIndex: Number)


    /**
     * 设置查询城市
     *
     * @param {String} city
     * @memberof RoadInfoSearch
     */
    setCity(city: String)


    on(event: RoadInfoSearchEventNames, cb: Function)
}