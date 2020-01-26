import { CloudDataLayerOptions } from './CloudDataLayerOptions';
import { Map } from '../Map/Map';

type CloudDataLayerEventNames =
  'click' |
  'mouseover' |
  'mouseout';

export class CloudDataLayer {


  /**
   *Creates an instance of CloudDataLayer.
   * @param {String} tableId
   * @param {CloudDataLayerOptions} Opts
   * @memberof CloudDataLayer
   */
  constructor(
    tableId: String,
    Opts: CloudDataLayerOptions
  )


  /**
   * 设置添加该图层的地图对象
   *
   * @param {Map} map
   * @memberof CloudDataLayer
   */
  setMap(map: Map)


  /**
   * 获取显示图层的地图对象
   *
   * @returns {Map}
   * @memberof CloudDataLayer
   */
  getMap(): Map


  /**
   * 设置云数据图层属性
   *
   * @param {CloudDataLayerOptions} options
   * @memberof CloudDataLayer
   */
  setOptions(options: CloudDataLayerOptions)

  on(event: CloudDataLayerEventNames, cb: Function)
}