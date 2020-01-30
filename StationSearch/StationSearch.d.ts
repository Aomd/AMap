
import { StationSearchOptions } from './StationSearchOptions'

/**
 * 公交站点查询服务
 *
 * @export
 * @class StationSearch
 */
export class StationSearch {
    constructor(
        opts: StationSearchOptions | Object
    )


    /**
     * 根据给定的公交站点id进行公交站点详情检索
     *
     * @param {String} id
     * @param {(status: String, result: Object) => void} callback
     * @memberof StationSearch
     */
    searchById(id: String, callback: (status: String, result: Object) => void)


    /**
     * 根据给定公交站点名称进行公交站点详情查询
     *
     * @param {String} keyword
     * @param {(status: String, result: Object) => void} callback
     * @memberof StationSearch
     */
    search(keyword: String, callback: (status: String, result: Object) => void)

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

}