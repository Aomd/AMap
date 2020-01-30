import { Map } from "../Map/Map";

export class RidingOptions{

  /**
   *Creates an instance of RidingOptions.
   * @param {Map} map 对象, 展现结果的地图实例
   * @param {Number} policy 骑行路线规划策略
   * @param {(String|HTMLElement)} panel 结果列表的HTML容器id或容器元素
   * @param {Boolean} hideMarkers 设置隐藏路径规划的起始点图标
   * @param {Boolean} isOutline 使用map属性时，绘制的规划线路是否显示描边
   * @param {String} outlineColor 使用map属性时，绘制的规划线路的描边颜色
   * @param {Boolean} autoFitView 用于控制在路径规划结束后
   * @memberof RidingOptions
   */
  constructor(
    map:Map,
    policy:Number,
    panel:String|HTMLElement,
    hideMarkers:Boolean,
    isOutline:Boolean,
    outlineColor:String,
    autoFitView:Boolean
  )
}