import { VideoLayerOptions } from "./VideoLayerOptions";
import { Map } from "../Map/Map";

export class VideoLayer{
  constructor(
    opts:VideoLayerOptions|Object
  )


  /**
   * 设置图层所属的地图对象
   *
   * @param {(Map|null)} map
   * @memberof VideoLayer
   */
  setMap(map:Map|null)


  /**
   * 返回图层所属的地图对象
   *
   * @returns {Map}
   * @memberof VideoLayer
   */
  getMap():Map


  /**
   * 显示
   *
   * @memberof VideoLayer
   */
  show()


  /**
   * 隐藏
   *
   * @memberof VideoLayer
   */
  hide()


  /**
   * 设置层级
   *
   * @param {Number} zindex
   * @memberof VideoLayer
   */
  setzIndex(zindex:Number)


  /**
   * 获取层级
   *
   * @returns {Number}
   * @memberof VideoLayer
   */
  getzIndex():Number


  /**
   * 返回Video对象
   *
   * @returns {HTMLVideoElement}
   * @memberof VideoLayer
   */
  getElement():HTMLVideoElement


  /**
   * 修改Video的Url
   *
   * @param {(String|[String])} str
   * @memberof VideoLayer
   */
  setVideoUrl(str:String|[String])


  /**
   * 返回Video的Url
   *
   * @returns {String}
   * @memberof VideoLayer
   */
  getVideoUrl():String
}