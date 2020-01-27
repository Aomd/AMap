import { CustomLayerOptions } from "./CustomLayerOptions";
import { Map } from "../Map/Map";

export class CustomLayer {
  constructor(
    ops: CustomLayerOptions | Object
  )


  /**
   * 设置透明度
   *
   * @memberof CustomLayer
   */
  setOpacity()




  /**
   * 设置图层所属的地图对象，传入null时从当前地图移除
   *
   * @param {(Map | null)} map
   * @memberof CustomLayer
   */
  setMap(map: Map | null)


  /**
   * 返回图层所属的地图对象
   *
   * @returns {Map}
   * @memberof CustomLayer
   */
  getMap(): Map


  /**
   * 显示
   *
   * @memberof CustomLayer
   */
  show()


  /**
   * 隐藏
   *
   * @memberof CustomLayer
   */
  hide()


  /**
   * 设置层级
   *
   * @param {Number} zindex
   * @memberof CustomLayer
   */
  setzIndex(zindex: Number)



  /**
   * 获取层级
   *
   * @returns {Number}
   * @memberof CustomLayer
   */
  getzIndex(): Number

}