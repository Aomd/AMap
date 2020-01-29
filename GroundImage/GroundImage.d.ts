import { Bounds } from "../Bounds";

import { GroundImageOptions } from './GroundImageOptions'
import { Map } from "../Map/Map";

type GroundImageEventNames = 'click'|'dblclick';

export class GroundImage {
  constructor(url: String, bounds: Bounds, opt: GroundImageOptions | Object)


  /**
   * 获取GroundImage的Map对象
   *
   * @returns {Map}
   * @memberof GroundImage
   */
  getMap(): Map


  /**
   * 设置显示GroundImage的Map对象
   *
   * @param {Map} map
   * @memberof GroundImage
   */
  setMap(map: Map)


  /**
   * 获取图片透明度值
   *
   * @returns {Number}
   * @memberof GroundImage
   */
  getOpacity(): Number


  /**
   * 设置图片透明度
   *
   * @param {Number} opacity
   * @memberof GroundImage
   */
  setOpacity(opacity: Number)


  /**
   * 获取GroundImage的覆盖地理范围
   *
   * @returns {Bounds}
   * @memberof GroundImage
   */
  getBounds(): Bounds


  /**
   * 获取图片url
   *
   * @returns {String}
   * @memberof GroundImage
   */
  getImageUrl(): String

  on(event: GroundImageEventNames, cb: Function)
}