import { Map } from "../Map/Map";
import { Circle } from "../Circle/Circle";

type CircleEditorEventNames =
  'move' |
  'adjust' |
  'end';


/**
 * CircleEditor的构造函数，参数Map为指定的地图对象，Circle为需要编辑的圆形对象。目前仅支持桌面浏览器
 *
 * @export
 * @class CircleEditor
 */
export class CircleEditor {
  constructor(
    map: Map, circle: Circle
  )


  /**
   * 打开编辑功能
   *
   * @memberof CircleEditor
   */
  open()


  /**
   * 关闭编辑功能
   *
   * @memberof CircleEditor
   */
  close()

  on(event: CircleEditorEventNames, cb: Function)
}