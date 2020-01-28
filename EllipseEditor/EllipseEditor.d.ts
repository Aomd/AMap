import { Map } from "../Map/Map";
import { Ellipse } from "../Ellipse/Ellipse";
type EllipseEditorEventNames = 
'move'|
'adjust'|
'end';
export class EllipseEditor{
  constructor(
    map: Map, ellipse: Ellipse
  )


  /**
   * 打开编辑功能。功能开启后，通关编辑点可调整椭圆的圆心和长短轴半径
   *
   * @memberof EllipseEditor
   */
  open()


  /**
   * 关闭编辑功能
   *
   * @memberof EllipseEditor
   */
  close()

  on(event: EllipseEditorEventNames, cb: Function)
}