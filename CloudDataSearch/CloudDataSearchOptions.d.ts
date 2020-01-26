import { Map } from "../Map/Map";

export class CloudDataSearchOptions {

  /**
   *Creates an instance of CloudDataSearchOptions.
   * @param {String} keywords 云检索关键字，仅支持对建立了文本索引的字段进行模糊检索
   * @param {String} filter 云检索的筛选条件
   * @param {String} orderBy 返回数据的排序规则 1.支持系统预设排序规则：
   * @param {Number} pageSize 单页显示结果数，取值范围[0-100],超过取值范围取默认值
   * @param {Number} pageIndex 当前页码，取值>=1,默认1
   * @param {Map} map AMap.Map对象, 展现结果的地图实例。当指定此参数后，搜索结果的标注、线路等均会自动添加到此地图上。可选值
   * @param {(String|HTMLElement)} panel 结果列表的HTML容器id或容器元素，提供此参数后，结果列表将在此容器中进行展示。可选值
   * @param {Boolean} autoFitView 用于控制在搜索结束后，是否自动调整地图视野使绘制的Marker点都处于视口的可见范围
   * @memberof CloudDataSearchOptions
   */
  constructor(
    keywords:String,
    filter:String,
    orderBy:String,
    pageSize:Number,
    pageIndex:Number,
    map:Map,
    panel:String|HTMLElement,
    autoFitView:Boolean
  )
}