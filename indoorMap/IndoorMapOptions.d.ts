export class IndoorMapOptions {
  /**
   *Creates an instance of IndoorMapOptions.
   * @param {Number} zIndex 室内图层叠加的顺序值，0表示最底层
   * @param {Number} opacity 图层的透明度，取值范围[0,1]，1代表完全不透明，0代表完全透明
   * @param {String} cursor 指定鼠标悬停到店铺面时的鼠标样式，自定义cursor，IE仅支持cur/ani/ico格式，Opera不支持自定义cursor
   * @param {Boolean} hideFloorBar 是否隐藏楼层切换控件，默认值：false
   * @param {Boolean} alwaysShow 默认false，默认情况下室内图仅在有矢量底图的时候显示
   * @memberof IndoorMapOptions
   */
  constructor(
    zIndex: Number,
    opacity: Number,
    cursor: String,
    hideFloorBar: Boolean,
    alwaysShow: Boolean,
  )
}