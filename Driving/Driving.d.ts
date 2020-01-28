import { DrivingOptions } from './DrivingOptions';
import { LngLat } from '../LngLat';
import { DrivingPolicy } from '../DragRoute/DragRoute';

type DrivingEventNames = 
'complete'|
'error';

export class Driving {
  constructor(
    opts: DrivingOptions | Object
  )


  /**
   * 根据起点、终点和途经点（可选）坐标或名称，实现驾车路线规划，途经点通过opts设定，最多支持16个途径点
   *
   * @param {LngLat} origin
   * @param {LngLat} destination
   * @param {Object} opts
   * @param {(status: String, result: Object) => void} callback
   * @memberof Driving
   */
  search(origin: LngLat, destination: LngLat, opts: Object, callback: (status: String, result: Object) => void)

  // search(points: Array<Object>, callback: (status: String, result: Object) => void)


  /**
   * 设置驾车路线规划策略
   *
   * @param {DrivingPolicy} policy
   * @memberof Driving
   */
  setPolicy(policy:DrivingPolicy)


  /**
   * 设置避让区域，最大支持三个避让区域，参数为LngLat的二维数组
   *
   * @param {Array<Array<LngLat>>} path
   * @memberof Driving
   */
  setAvoidPolygons(path:Array<Array<LngLat>>)


  /**
   * 设置避让道路名称，只支持一条避让道路                    注：避让道路和避让区域不能同时使用
   *
   * @param {String} road
   * @memberof Driving
   */
  setAvoidRoad(road:String)


  /**
   * 清除避让道路
   *
   * @memberof Driving
   */
  clearAvoidRoad()


  /**
   * 清除避让区域
   *
   * @memberof Driving
   */
  clearAvoidPolygons()


  /**
   * 获取避让区域，返回LngLat的二维数组
   *
   * @memberof Driving
   */
  getAvoidPolygons() :Array<LngLat>


  /**
   * 获取避让道路
   *
   * @memberof Driving
   */
  getAvoidRoad():String


  /**
   * 清除搜索结果
   *
   * @memberof Driving
   */
  clear()


  /**
   * 唤起高德地图客户端驾车路径规划
   *
   * @param {Object} obj
   * @memberof Driving
   */
  searchOnAMAP(obj:Object)


  /**
   * 设置车牌的汉字首字符和首字后的号码，设置后路线规划的结果将考虑该车牌在当前时间的限行路段
   *
   * @param {String} province
   * @param {String} number
   * @memberof Driving
   */
  setProvinceAndNumber(province:String,number:String)

  on(event: DrivingEventNames, cb: Function)
}