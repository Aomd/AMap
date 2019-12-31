

/**
 *
 *
 * @export
 * @class HeatmapOptions
 */
export class HeatmapOptions{

  /**
   *Creates an instance of HeatmapOptions.
   * @param {Number} radius 热力图中单个点的半径，默认：30，单位：pixel
   * @param {Object} gradient 热力图的渐变区间，热力图按照设置的颜色及间隔显示热力图，例：
   * {
   * 0.4:'rgb(0, 255, 255)',
   * 0.65:'rgb(0, 110, 255)',
   * 0.85:'rgb(100, 0, 255)',
   * 1.0:'rgb(100, 0, 255)'
   * }
   * 其中 key 表示间隔位置，取值范围： [0,1]，value 为颜色值。默认：heatmap.js标准配色方案
   * @param {Array<Number>} opacity 热力图透明度数组，取值范围[0,1]，0表示完全透明，1表示不透明，默认：[0,1]
   * @param {Array<Number>} zooms 支持的缩放级别范围，取值范围[3-18]，默认：[3,18]
   * @memberof HeatmapOptions
   */
  constructor(
    radius:Number , 
    gradient:Object,
    opacity	:Array<Number>,
    zooms	:Array<Number>
  )
}