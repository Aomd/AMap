import { ImageLayerOptions } from "./ImageLayerOptions";
import { Map } from "../Map/Map";
import { Bounds } from "../Bounds";

export class ImageLayer {
  constructor(
    opts: Object | ImageLayerOptions
  )


  /**
   * 设置图层所属的地图对象，传入null时从当前地图移除
   *
   * @param {(Map | null)} map
   * @memberof ImageLayer
   */
  setMap(map: Map | null)


  /**
   * 返回图层所属的地图对象
   *
   * @returns {Map}
   * @memberof ImageLayer
   */
  getMap(): Map


  /**
   * 返回ImageLayer显示的范围
   *
   * @returns {Bounds}
   * @memberof ImageLayer
   */
  getBounds(): Bounds


  /**
   * 设置ImageLayer显示的范围
   *
   * @param {Bounds} bounds
   * @memberof ImageLayer
   */
  setBounds(bounds: Bounds)


  /**
   * 显示
   *
   * @memberof ImageLayer
   */
  show()


  /**
   * 隐藏
   *
   * @memberof ImageLayer
   */
  hide()


  /**
   * 设置层级
   *
   * @param {Number} zindex
   * @memberof ImageLayer
   */
  setzIndex(zindex: Number)


  /**
   * 获取层级
   *
   * @returns {Number}
   * @memberof ImageLayer
   */
  getzIndex(): Number


  /** 
   * 返回Image对象
   *
   * @returns {HTMLCanvasElement}
   * @memberof ImageLayer
   */
  getElement(): HTMLCanvasElement


  /**
   * 修改Image的Url
   *
   * @param {String} str
   * @memberof ImageLayer
   */
  setImageUrl(str: String)


  /**
   * 返回Image的Url
   *
   * @returns {String}
   * @memberof ImageLayer
   */
  getImageUrl(): String

}