import { Map } from "../Map/Map";
import { Bounds } from "../Bounds";
import { CanvasLayerOptions } from "./CanvasLayerOptions";


/**
 * Canas图层类，用户可以将一个Canvas作为图层添加在地图上，Canvas图层会随缩放级别而自适应缩放(v1.4.2新增)
 *
 * @export
 * @class CanvasLayer
 */
export class CanvasLayer {
  constructor(
    opts: CanvasLayerOptions | Object
  )


  /**
   * 当canvas的内容发生改变是用于刷新图层，3D视图下调用，2D视图不需要调用
   *
   * @memberof CanvasLayer
   */
  reFresh()


  /**
   * 设置图层所属的地图对象，传入null时从当前地图移除
   *
   * @param {(Map | null)} map
   * @memberof CanvasLayer
   */
  setMap(map: Map | null)


  /**
   * 返回图层所属的地图对象
   *
   * @returns {Map}
   * @memberof CanvasLayer
   */
  getMap(): Map


  /**
   * 显示
   *
   * @memberof CanvasLayer
   */
  show()


  /**
   * 隐藏
   *
   * @memberof CanvasLayer
   */
  hide()


  /**
   * 设置层级
   *
   * @param {Number} zindex
   * @memberof CanvasLayer
   */
  setzIndex(zindex: Number)


  /**
   * 获取层级
   *
   * @returns {Number}
   * @memberof CanvasLayer
   */
  getzIndex(): Number


  /**
   * 返回Canvas对象
   *
   * @returns {HTMLCanvasElement}
   * @memberof CanvasLayer
   */
  getElement(): HTMLCanvasElement


  /**
   * 修改显示的Canvas
   *
   * @param {HTMLCanvasElement} coxt
   * @memberof CanvasLayer
   */
  setCanvas(coxt: HTMLCanvasElement)


}