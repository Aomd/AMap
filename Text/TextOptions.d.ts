import { Map } from "../Map/Map";
import { LngLat } from "../LngLat";
import { Pixel } from "../Pixel";
import { Icon } from "../Icon/Icon";

export class TextOptions{

  /**
   *Creates an instance of TextOptions.
   * @param {String} text
   * @param {Map} map
   * @param {LngLat} position
   * @param {String} anchor
   * @param {Pixel} offset
   * @param {Boolean} topWhenClick
   * @param {Boolean} bubble
   * @param {Boolean} draggable
   * @param {Boolean} raiseOnDrag
   * @param {String} cursor
   * @param {Boolean} visible
   * @param {Number} zIndex
   * @param {Number} angle
   * @param {Boolean} autoRotation
   * @param {String} animation
   * @param {Icon} shadow
   * @param {String} title
   * @param {Boolean} clickable
   * @param {*} extData
   * @memberof TextOptions
   */
  constructor(
    text	:String,
    map: Map,
    position: LngLat,
    anchor: String,
    offset: Pixel,
    topWhenClick: Boolean,
    bubble: Boolean,
    draggable: Boolean,
    raiseOnDrag: Boolean,
    cursor: String,
    visible: Boolean,
    zIndex: Number,
    angle: Number,
    autoRotation: Boolean,
    animation: String,
    shadow: Icon,
    title: String,
    clickable: Boolean,
    extData:any
  )
}