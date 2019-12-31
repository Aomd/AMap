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

  reFresh()

  setMap(map: Map | null)

  getMap(): Map

  show()

  hide()

  setzIndex(zindex: Number)

  getzIndex(): Number

  getElement(): HTMLCanvasElement

  setCanvas(coxt: HTMLCanvasElement)


}