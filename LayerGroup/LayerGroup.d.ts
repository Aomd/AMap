import { TileLayer} from '../TileLayer/TileLayer'
import {Map} from '../Map/Map'
import { TileLayerOptions } from '../TileLayer/TileLayerOptions'

export class LayerGroup {
  constructor(
    layers: Array<TileLayer>
  )


  /**
   * 添加单个图层到集合中，不支持添加重复的图层
   *
   * @param {TileLayer} layer
   * @memberof LayerGroup
   */
  addLayer(layer: TileLayer)


  /**
   * 添加图层数组到集合中，不支持添加重复的图层
   *
   * @param {Array<TileLayer>} layers
   * @memberof LayerGroup
   */
  addLayers(layers: Array<TileLayer>)


  /**
   * 返回当前集合中所有的图层
   *
   * @returns {Array<TileLayer>}
   * @memberof LayerGroup
   */
  getLayers(): Array<TileLayer>


  /**
   * 判断传入的图层实例是否在集合中
   *
   * @param {TileLayer} layer
   * @returns {Boolean}
   * @memberof LayerGroup
   */
  hasLayer(layer: TileLayer): Boolean	


  /**
   * 从集合中删除传入的图层实例
   *
   * @param {TileLayer} layer
   * @memberof LayerGroup
   */
  removeLayer(layer: TileLayer)


  /**
   * 从集合中删除传入的图层实例数组
   *
   * @param {Array<TileLayer>} layers
   * @memberof LayerGroup
   */
  removeLayers(layers: Array<TileLayer>)


  /**
   * 清空集合
   *
   * @memberof LayerGroup
   */
  clearLayers()


  /**
   * 对集合中的图层做迭代操作，其中iterator的函数定义是：
   *
   * @param {Function} iterator
   * @memberof LayerGroup
   */
  eachLayer(iterator: Function)


  /**
   * 指定集合中里图层的显示地图
   *
   * @param {Map} map
   * @returns {Boolean}
   * @memberof LayerGroup
   */
  setMap(map: Map): Boolean


  /**
   * 修改图层属性(包括线样式、样色等等)
   *
   * @param {(Object |TileLayerOptions)} opt
   * @memberof LayerGroup
   */
  setOptions(opt: Object |TileLayerOptions)


  /**
   * 在地图上显示集合中图层
   *
   * @memberof LayerGroup
   */
  show()


  /**
   * 在地图上隐藏集合中图层
   *
   * @memberof LayerGroup
   */
  hide()
}