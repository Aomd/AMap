import { Pixel } from "../Pixel";
import { Marker } from "../Marker/Marker";

export class ToolbarOptions{

  /**
   *Creates an instance of ToolbarOptions.
   * @param {Pixel} offset 相对于地图容器左上角的偏移量
   * @param {String} position 控件停靠位置
   * @param {Boolean} ruler 标尺键盘是否可见，默认为true
   * @param {Boolean} noIpLocate 定位失败后，是否开启IP定位，默认为false
   * @param {Boolean} locate 是否显示定位按钮，默认为false
   * @param {Boolean} liteStyle 是否使用精简模式，默认为false
   * @param {Boolean} direction 方向键盘是否可见，默认为true
   * @param {Boolean} autoPosition 是否自动定位，即地图初始化加载完成后
   * @param {Boolean} useNative 自定义定位图标，值为Marker对象
   * @param {Marker} locationMarker 是否使用高德定位sdk用来辅助优化定位效果
   * @memberof ToolbarOptions
   */
  constructor(
    offset:Pixel,
    position:String,
    ruler:Boolean,
    noIpLocate:Boolean,
    locate:Boolean,
    liteStyle:Boolean,
    direction:Boolean,
    autoPosition:Boolean,
    useNative:Boolean,
    locationMarker:Marker

  )
}