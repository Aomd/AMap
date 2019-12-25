import { Pixel } from "../Pixel";
import { LngLat } from "../LngLat";
import { Icon } from "../Icon/Icon";
import { Map } from "../map/Map";

/**
 * 点标记
 *
 * @export
 * @class Marker
 */
export class Marker {


  /**
   * Creates an instance of Marker.
   * @param {MarkerOptions} opt
   * @memberof Marker
   */
  constructor(opt: Object | MarkerOptions)


  /**
   *
   *
   * @param {Object} obj
   * @memberof Marker
   */
  markOnAMAP(obj: Object)

  /**
   *
   *
   * @returns {String}
   * @memberof Marker
   */
  getAnchor(): String

  /**
   *
   *
   * @param {String} anchor
   * @memberof Marker
   */
  setAnchor(anchor: String)

  /**
   *
   *
   * @returns {Pixel}
   * @memberof Marker
   */
  getOffset(): Pixel


  /**
   *
   *
   * @param {Pixel} offset
   * @memberof Marker
   */
  setOffset(offset: Pixel)


  /**
   *
   *
   * @param {String} animate
   * @memberof Marker
   */
  setAnimation(animate: String)


  /**
   *
   *
   * @returns {String}
   * @memberof Marker
   */
  getAnimation(): String


  /**
   *
   *
   * @param {Boolean} clickable
   * @memberof Marker
   */
  setClickable(clickable: Boolean)


  /**
   *
   *
   * @returns {Boolean}
   * @memberof Marker
   */
  getClickable(): Boolean

  getPosition(): LngLat

  setPosition(lnglat: LngLat)

  setAngle(angle: Number)

  setLabel(label: Object)

  getLabel(): Object

  getAngle(): Number

  setzIndex(index: Number)

  getzIndex(): Number

  setIcon(content: String | Icon)

  getIcon(): String | Icon

  setDraggable(draggable: Boolean)

  getDraggable(): Boolean

  hide()

  show()
  setCursor(Cursor: String): String

  setContent(html: String | HTMLDivElement)

  getContent(): String

  moveAlong(path: Array<Array<Number>>, speed: Number, f: Function, circlable: Boolean)

  moveTo(lnglat: LngLat, speed: Number, f: Function)

  stopMove()

  pauseMove()

  resumeMove()

  setMap(map: Map)


  getMap(): Map

  setTitle(title: String): String

  getTitle()

  setTop(isTop: Boolean)

  getTop(): Boolean

  setShadow(icon: Icon)

  getShadow(): Icon


  setShape(shape: MarkerShape)

  getShape(): MarkerShape


  setExtData(ext: Any)

  getExtData(): Any


}