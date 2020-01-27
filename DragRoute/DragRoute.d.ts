import { Map } from "../Map/Map";
import { LngLat } from "../LngLat";
import { DragRouteOptions } from './DragRouteOptions'

type DrivingPolicy =
  'LEAST_TIME' |
  'LEAST_FEE' |
  'LEAST_DISTANCE' |
  'REAL_TRAFFIC';

  type DragRouteEventNames = 
  'addway'|
  'complete';

export class DragRoute {
  constructor(
    map: Map, path: Array<LngLat>, policy: DrivingPolicy, opts: DragRouteOptions |Object
  )


  /**
   * 开始路径导航。支持鼠标拖拽导航路径节点，更改途经点时，系统实时重新计算并显示导航路径
   *
   * @memberof DragRoute
   */
  search()


  /**
   * 返回除了起点和终点之外的所有点
   *
   * @returns {Array<LngLat>}
   * @memberof DragRoute
   */
  getWays(): Array<LngLat>


  /**
   * 返回当前导航路径，即导航路径的经纬度坐标数组，需要在complete回调中执行。
   *
   * @returns {Array<LngLat>}
   * @memberof DragRoute
   */
  getRoute(): Array<LngLat>


  /**
   * 销毁拖拽导航插件。
   *
   * @memberof DragRoute
   */
  destroy()


  on(event: DragRouteEventNames, cb: Function)

}