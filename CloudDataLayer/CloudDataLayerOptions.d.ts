import { Map } from "../Map/Map";

import { CloudDataQuery } from './CloudDataQuery';

export class CloudDataLayerOptions {


  /**
   *Creates an instance of CloudDataLayerOptions.
   * @param {Map} map 要叠加该图层的Map对象
   * @param {(CloudDataQuery|Object)} query 要显示云数据的筛选条件
   * @param {Boolean} clickable 该图层是否响应鼠标点击，默认是：true
   * @memberof CloudDataLayerOptions
   */
  constructor(
    map: Map,
    query: CloudDataQuery | Object,
    clickable: Boolean
  )
}