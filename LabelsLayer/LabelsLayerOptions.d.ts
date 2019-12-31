
/**
 * LabelsLayer 类是用于承载 LabelMarker 对象的图层。
 *
 * @export
 * @class LabelsLayerOptions
 */
export class LabelsLayerOptions {

  /**
   *Creates an instance of LabelsLayerOptions.
   * @param {Boolean} visible 图层是否可见
   * @param {Number} zIndex 图层的层级
   * @param {Number} opacity 图层的透明度
   * @param {Boolean} collision 是否开启碰撞检测，默认为 true
   * @param {Boolean} animation 是否开启标注淡入动画，默认为 true
   * @memberof LabelsLayerOptions
   */
  constructor(
    visible: Boolean,
    zIndex: Number,
    opacity: Number,
    collision: Boolean,
    animation: Boolean,
  )
}