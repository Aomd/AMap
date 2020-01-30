import { TileLayerOptions } from "./TileLayerOptions";
import { Map } from '../Map/Map'

import { RoadNet } from './RoadNet/RoadNet'

import { Satellite } from './Satellite/Satellite'

import { Traffic } from './Traffic/Traffic'

import { Flexible } from './Flexible/Flexible'

type TileLayerEventNames = 
'complete'


export class TileLayer {

  public static RoadNet: typeof RoadNet;

  public static Satellite: typeof Satellite;

  public static Traffic: typeof Traffic;

  public static Flexible: typeof Flexible;



  constructor(
    tileOpt: Object | TileLayerOptions
  )

  /**
   * 设置图层透明度
   *
   * @param {Number} alpha
   * @memberof TileLayer
   */
  setOpacity(alpha: Number)
  
  
  /**
   * 在地图上显示该图层
   *
   * @memberof TileLayer
   */
  show()
  
  
  /**
   * 隐藏图层
   *
   * @memberof TileLayer
   */
  hide()
  
  
  /**
   *  获取当前图层所有切片号。
   *
   * @returns {Array<Number>}
   * @memberof TileLayer
   */
  getTiles(): Array<Number>
  
  
  /**
   * 重新加载此图层
   *
   * @memberof TileLayer
   */
  reload()


  /**
   * 设置图层的取图地址
   *
   * @memberof TileLayer
   */
  setTileUrl()
  
  
  /**
   * 获取该图层可显示的级别范围
   *
   * @returns {Array<Number>}
   * @memberof TileLayer
   */
  getZooms(): Array<Number>
  
  
  /**
   * 设置图层叠加的顺序值
   *
   * @param {Number} index
   * @memberof TileLayer
   */
  setzIndex(index: Number)
  
  /**
   * 设置要显示图层的地图对象
   *
   * @param {Map} map
   * @memberof TileLayer
   */
  setMap(map: Map)

  on(event: TileLayerEventNames, cb: Function)
}

