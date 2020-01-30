import { TransferPolicy } from "./Transfer";
import { Map } from "../Map/Map";

export class TransferOptions{

  /**
   *Creates an instance of TransferOptions.
   * @param {String} city 公交换乘的城市
   * @param {TransferPolicy} policy 公交换乘策略
   * @param {Boolean} nightflag 是否计算夜班车，默认为不计算
   * @param {String} cityd 终点城市，跨城公交路径规划时为必填参数
   * @param {String} extensions  返回结果控制
   * @param {Map} map 展现结果的地图实例
   * @param {(String|HTMLElement)} panel 结果列表的HTML容器id或容器元素
   * @param {Boolean} hideMarkers 设置隐藏路径规划的起始点图标
   * @param {Boolean} isOutline 使用map属性时，绘制的规划线路是否显示描边
   * @param {String} outlineColor 使用map属性时，绘制的规划线路的描边颜色
   * @param {Boolean} autoFitView 用于控制在路径规划结束后
   * @memberof TransferOptions
   */
  constructor(
    city:String,
    policy:TransferPolicy,
    nightflag:Boolean,
    cityd:String,
    extensions:String,
    map:Map,
    panel:String|HTMLElement,
    hideMarkers:Boolean,
    isOutline:Boolean,
    outlineColor:String,
    autoFitView:Boolean
  )
}