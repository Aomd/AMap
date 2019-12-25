import { Map } from "../map/Map";
import { LngLat } from "../LngLat";
import { Pixel } from "../Pixel";
import { Icon } from "../Icon/Icon";

export class MarkerOptions {

  /**
   *Creates an instance of MarkerOptions.
   * @param {Map} map
   * @param {LngLat} position
   * @param {String} anchor
   * @param {Pixel} offset
   * @param {(String|Icon)} icon
   * @param {(String|Object)} content
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
   * @param {MarkerShape} shape
   * @param {Any} extData
   * @param {Object} label
   * @memberof MarkerOptions
   */
  constructor(
    map: Map,
    position: LngLat,
    anchor: String,
    offset: Pixel,
    icon: String | Icon,
    content: String | Object,
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
    shape: MarkerShape,
    extData: Any,
    label: Object
  )
}