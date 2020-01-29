import { LineSearchOptions } from './LineSearchOptions'

import {LineSearchResult} from './LineSearchResult'

type LineSearchEventNames =
    'change' |
    'open' |
    'close';


export class LineSearch {
    constructor(opts: LineSearchOptions | Object)


    /**
     * 根据给定的公交线路id进行公交站点详情检索，id是公交线路的唯一标识
     *
     * @param {String} id
     * @param {((status: String, result: Object | LineSearchResult) => void)} callback
     * @memberof LineSearch
     */
    searchById(id: String,callback: (status: String, result: Object | LineSearchResult) => void)


    /**
     * 根据给定公交线路名称进行公交线路详情查询
     *
     * @param {String} keyword
     * @param {((status: String, result: Object | LineSearchResult) => void)} callback
     * @memberof LineSearch
     */
    search(keyword: String, callback: (status: String, result: Object | LineSearchResult) => void)


    /**
     * 设置查询结果页码，默认值：1
     *
     * @param {Number} pageIndex
     * @memberof LineSearch
     */
    setPageIndex(pageIndex: Number)


    /**
     * 设置单页显示结果条数，默认值：20
     *
     * @param {Number} pageSize
     * @memberof LineSearch
     */
    setPageSize(pageSize: Number)


    /**
     * 设置查询城市，默认值：“全国”
     *
     * @param {String} city
     * @memberof LineSearch
     */
    setCity(city: String)


    on(event: LineSearchEventNames, cb: Function)
}