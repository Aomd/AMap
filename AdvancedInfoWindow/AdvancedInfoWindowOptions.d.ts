import { Pixel } from "../Pixel";
import { LngLat } from "../LngLat";


/**
 *
 *
 * @export
 * @class AdvancedInfoWindowOptions
 */
export class AdvancedInfoWindowOptions {


  /**
   *Creates an instance of AdvancedInfoWindowOptions.
   * @param {Boolean} autoMove 是否自动调整窗体到视野内（当信息窗体超出视野范围时，通过该属性设置是否自动平移地图，使信息窗体完全显示）
   * @param {Boolean} closeWhenClickMap 控制是否在鼠标点击地图后关闭信息窗体，默认false，鼠标点击地图后不关闭信息窗体
   * @param {(String | HTMLElement)} content 显示内容，可以是HTML要素字符串或者HTMLElement对象
   * @param {String} anchor 信息窗体锚点。  默认值：'bottom-center' 可选值：'top-left'|'top-center'|'top-right'|'middle-left'|'center'|'middle-right'|'bottom-left'|'bottom-center'|'bottom-right'（自v1.4.13 新增）
   * @param {Pixel} offset 信息窗体显示位置偏移量。默认基准点为信息窗体的底部中心（若设置了anchor，则以anchor值为基准点）。
   * @param {LngLat} position 信息窗体显示基点位置（自v1.2 新增）         
   * @param {(String | HTMLElement)} panel 结果列表的HTML容器id或容器元素，提供此参数后，结果列表将在此容器中进行展示。可选值
   * @param {Number} searchRadius 设定周边搜索的半径，默认值：5000，单位：米
   * @param {Boolean} placeSearch 是否支持显示周边搜索，默认是true
   * @param {Boolean} driving 是否支持驾车路径规划，默认是true
   * @param {Boolean} walking 是否支持步行路径规划，默认是true
   * @param {Boolean} transit 是否支持公交路径规划，默认是true
   * @param {Boolean} asOrigin 是否支持作为路径规划的起点，默认是true
   * @param {Boolean} asDestination 是否支持作为路径规划的终点，默认是true
   * @memberof AdvancedInfoWindowOptions
   */
  constructor(
    autoMove: Boolean,
    closeWhenClickMap: Boolean,
    content: String | HTMLElement,
    anchor: String,
    offset: Pixel,
    position: LngLat,
    panel: String | HTMLElement,
    searchRadius: Number,
    placeSearch: Boolean,
    driving: Boolean,
    walking: Boolean,
    transit: Boolean,
    asOrigin: Boolean,
    asDestination: Boolean,
  )
}