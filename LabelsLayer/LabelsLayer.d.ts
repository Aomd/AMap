import { LabelsLayerOptions } from "./LabelsLayerOptions";

export class LabelsLayer {
  constructor(
    opts: LabelsLayerOptions
  )


  /**
   * 	图层中添加 LabelMarker
   *
   * @param {*} LabelMarker
   * @memberof LabelsLayer
   */
  add(LabelMarker)


  /**
   * 图层中移除 LabelMarker
   *
   * @param {*} LabelMarker
   * @memberof LabelsLayer
   */
  remove(LabelMarker)


  /**
   * 清空图层
   *
   * @memberof LabelsLayer
   */
  clear()


  /**
   *	显示图层
   *
   * @memberof LabelsLayer
   */
  show()


  /**
   *		隐藏图层
   *
   * @memberof LabelsLayer
   */
  hide()

}