import { Map } from "../Map/Map";

export class PlaceSearchOptions {


    /**
     *Creates an instance of PlaceSearchOptions.
     * @param {String} city 兴趣点城市
     * @param {Boolean} citylimit 是否强制限制在设置的城市内搜索
     * @param {Number} children 是否按照层级展示子POI数据
     * @param {String} type 兴趣点类别
     * @param {String} lang 检索语言类型
     * @param {Number} pageSize 单页显示结果条数
     * @param {Number} pageIndex 页码
     * @param {String} extensions 返回基本地址信息
     * @param {Map} map AMap.Map对象, 展现结果的地图实例
     * @param {(String|HTMLElement)} panel 结果列表的HTML容器id或容器元素
     * @param {Boolean} showCover 在使用map属性时
     * @param {String} renderStyle 如使用了map或panel属性
     * @param {Boolean} autoFitView 用于控制在搜索结束后
     * @memberof PlaceSearchOptions
     */
    constructor(


        city: String,


        citylimit: Boolean,


        children: Number,



        type: String,



        lang: String,



        pageSize: Number,



        pageIndex: Number,


        extensions: String,



        map: Map,



        panel: String | HTMLElement,



        showCover: Boolean,


        renderStyle: String,



        autoFitView: Boolean,

    )
}