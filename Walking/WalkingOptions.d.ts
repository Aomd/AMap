import { Map } from "../Map/Map";

export class WalkingOptions{

  /**
   *Creates an instance of WalkingOptions.
   * @param {Map} map 展现结果的地图实例
   * @param {(String|HTMLElement)} panel 结果列表的HTML容器id或容器元素
   * @param {Boolean} hideMarkers 设置隐藏路径规划的起始点图标
   * @param {Boolean} isOutline 使用map属性时，绘制的规划线路是否显示描边
   * @param {String} outlineColor 使用map属性时，绘制的规划线路的描边颜色
   * @param {Boolean} autoFitView 用于控制在路径规划结束后，是否自动调整地图视野使绘制的路线处于视口的可见范围
   * @memberof WalkingOptions
   */
  constructor(
    map:Map,
    panel:String|HTMLElement,
    hideMarkers:Boolean,
    isOutline:Boolean,
    outlineColor:String,
    autoFitView:Boolean
  )
}