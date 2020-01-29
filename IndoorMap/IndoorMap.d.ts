import { IndoorMapOptions } from './IndoorMapOptions'
import { Map } from '../Map/Map';
/**
 *构造函数，实例化一个室内地图类
 *
 * @export
 * @class IndoorMap
 */

type IndoorMapEventNames = 
'click'|
'mouseover'|
'mouseout';

export class IndoorMap {
  /**
   *Creates an instance of IndoorMap.
   * @param {IndoorMapOptions} opts
   * @memberof IndoorMap
   */
  constructor(
    opts: Object | IndoorMapOptions,
  )


  /**
   * 显示指定室内地图信息, Indoorid建筑物ID为必填参数，shopid商铺ID为可选参数。如何获取Indoorid和shopid，
   *
   * @param {String} indoorid
   * @param {Number} floor
   * @param {String} shopid
   * @memberof IndoorMap
   */
  showIndoorMap(indoorid:String,floor:Number,shopid:String)


  /**
   * 显示指定的楼层，noMove默认为false,true的时候地图不会放生平移
   *
   * @param {Number} floor
   * @param {Boolean} noMove
   * @memberof IndoorMap
   */
  showFloor(floor:Number,noMove:Boolean)


  /**
   * 设置要显示图层的地图对象
   *
   * @param {Map} map
   * @memberof IndoorMap
   */
  setMap(map:Map)


  /**
   * 显示室内地图
   *
   * @memberof IndoorMap
   */
  show()


  /**
   * 隐藏室内地图
   *
   * @memberof IndoorMap
   */
  hide()


  /**
   * 设置室内图的显示顺序
   *
   * @memberof IndoorMap
   */
  setzIndex()


  /**
   * 显示楼层切换控件
   *
   * @memberof IndoorMap
   */
  showFloorBar()


  /**
   * 隐藏楼层切换控件
   *
   * @memberof IndoorMap
   */
  hideFloorBar()
  

  /**
   * 设置图层透明度
   *
   * @param {Number} alpha
   * @memberof IndoorMap
   */
  setOpacity(alpha:Number)


  
  /**
   * 获取图层的透明度
   *
   * @returns {Number}
   * @memberof IndoorMap
   */
  getOpacity():Number


  /**
   * 显示室内地图标注
   *
   * @memberof IndoorMap
   */
  showLabels()


  /**
   * 隐藏室内地图标注
   *
   * @memberof IndoorMap
   */
  hideLabels()


  
  /**
   * 获取处于被选中状态的室内地图的ID
   *
   * @returns {String}
   * @memberof IndoorMap
   */
  getSelectedBuildingId():String


  
  /**
   * 获取处于被选中状态的室内地图的一些基本信息，包含名称、当前楼层、所有楼层信息、ID等
   *
   * @returns {Object}
   * @memberof IndoorMap
   */
  getSelectedBuilding():Object

  on(event: IndoorMapEventNames, cb: Function)
}
