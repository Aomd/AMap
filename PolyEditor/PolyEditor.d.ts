import { Map } from "../Map/Map";


type PolyEditorEventNames =
    'show' |
    'hide' |
    'open' |
    'close';

/**
 * PolyEditor的构造函数，参数Map为指定的地图对象，Object为需要编辑的折线或多边形对象。目前仅支持桌面浏览器
 *
 * @export
 * @class PolyEditor
 */
export class PolyEditor{
  constructor(
    map:Map,obj:Object
  )


  /**
   *
   *
   * @memberof PolyEditor
   */
  open( )


  /**
   *
   *
   * @memberof PolyEditor
   */
  close()


  on(event: PolyEditorEventNames, cb: Function)
}