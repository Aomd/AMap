export class BezierCurveEditorOptions {

  /**
   *Creates an instance of BezierCurveEditorOptions.
   * @param {() => void} getMarkerOptions 用于自定义编辑控制点的样式
   * @param {() => void} getCtrlLineOptions 用于自定义控制线的样式，返回字段同PolylineOptions
   * @memberof BezierCurveEditorOptions
   */
  constructor(
    getMarkerOptions: () => void,
    getCtrlLineOptions: () => void
  )
}