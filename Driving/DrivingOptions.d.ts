import { DrivingPolicy } from "../DragRoute/DragRoute";
import { Map } from "../Map/Map";


/**
 *
 *
 * @export
 * @class DrivingOptions
 */
export class DrivingOptions{

  /**
   *Creates an instance of DrivingOptions.
   * @param {DrivingPolicy} policy 驾车路线规划策略
   * @param {String} extensions 默认值：base，返回基本地址信息当取值为：all，返回DriveStep基本信息+DriveStep详细信息
   * @param {Number} ferry 默认为0，表示可以使用轮渡，为1的时候表示不可以使用轮渡
   * @param {Map} map AMap.Map对象, 展现结果的地图实例。当指定此参数后，搜索结果的标注、线路等均会自动添加到此地图上。可选
   * @param {(String|HTMLElement)} panel 结果列表的HTML容器id或容器元素，提供此参数后，结果列表将在此容器中进行展示。可选
   * @param {Boolean} hideMarkers 设置隐藏路径规划的起始点图标，设置为true：隐藏图标；设置false：显示图标默认值为：false
   * @param {Boolean} showTraffic 设置是否显示实时路况信息，默认设置为true。
   * @param {String} province 车牌省份的汉字缩写，用于判断是否限行，与number属性组合使用，可选。例如：京
   * @param {String} number 除省份之外车牌的字母和数字，用于判断限行相关，与province属性组合使用，可选。例如:NH1N11
   * @param {Boolean} isOutline 使用map属性时，绘制的规划线路是否显示描边。缺省为true
   * @param {String} outlineColor 使用map属性时，绘制的规划线路的描边颜色。缺省为'white'
   * @param {Boolean} autoFitView 用于控制在路径规划结束后，是否自动调整地图视野使绘制的路线处于视口的可见范围
   * @memberof DrivingOptions
   */
  constructor(
    policy:DrivingPolicy,
    extensions:String,
    ferry:Number,
    map:Map,
    panel:String|HTMLElement,
    hideMarkers:Boolean,
    showTraffic:Boolean,
    province:String,
    number:String,
    isOutline:Boolean,
    outlineColor:String,
    autoFitView:Boolean,
  )
}