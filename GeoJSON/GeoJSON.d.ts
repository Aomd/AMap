import {GeoJSONOptions} from './GeoJSONOptions'
import { Marker } from '../Marker/Marker';
import { OverlayGroup } from '../OverlayGroup/OverlayGroup';
import { Map } from '../Map/Map';

export class GeoJSON{
  constructor(ops:GeoJSONOptions|Object)


  /**
   * 加载新的GeoJSON对象，转化为覆盖物，旧的覆盖物将移除
   *
   * @param {GeoJSON} feoJSON
   * @memberof GeoJSON
   */
  importData(feoJSON:GeoJSON)


  /**
   * 将当前对象包含的覆盖物转换为GeoJSON对象
   *
   * @returns {GeoJSON}
   * @memberof GeoJSON
   */
  toGeoJSON():GeoJSON


  /**
   * 添加一个覆盖物，如需要在转成GeoJSON的时候将某些信息带给对应GeoJSON对象的properties属性中，可以将信息添加到覆盖物的extData的_geoJsonProperties字段中
   *
   * @param {Marker} overlay
   * @memberof GeoJSON
   */
  addOverlay(overlay:Marker)


  /**
   * 添加多个覆盖物，说明同addOverlay
   *
   * @param {Array<Marker>} overlays
   * @memberof GeoJSON
   */
  addOverlays(overlays: Array<Marker>)


  /**
   * 获取所有覆盖物
   *
   * @memberof GeoJSON
   */
  getOverlays()


  /**
   * 是否包含某个覆盖物
   *
   * @param {OverlayGroup} overlay
   * @memberof GeoJSON
   */
  hasOverlay(overlay: OverlayGroup)


  /**
   * 移除一个覆盖物
   *
   * @param {OverlayGroup} overlay
   * @memberof GeoJSON
   */
  removeOverlay(overlay: OverlayGroup)


  /**
   * 移除多个覆盖物
   *
   * @param {Array<OverlayGroup>} overlays
   * @memberof GeoJSON
   */
  removeOverlays(overlays: Array<OverlayGroup>)


  /**
   * 清空覆盖物
   *
   * @memberof GeoJSON
   */
  clearOverlays()


  /**
   * 遍历覆盖物
   *
   * @param {Function} iterator
   * @memberof GeoJSON
   */
  eachOverlay(iterator: Function)


  /**
   * 设置地图
   *
   * @param {Map} map
   * @memberof GeoJSON
   */
  setMap(map: Map)


  /**
   * 显示所有覆盖物
   *
   * @memberof GeoJSON
   */
  show()


  /**
   * 隐藏所有覆盖物
   *
   * @memberof GeoJSON
   */
  hide()



}