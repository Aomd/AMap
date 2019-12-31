import { ImageLayerOptions } from "./ImageLayerOptions";
import { Map } from "../Map/Map";
import { Bounds } from "../Bounds";

export class ImageLayer {
  constructor(
    opts: Object | ImageLayerOptions
  )

  setMap(map: Map | null)

  getMap(): Map

  getBounds(): Bounds

  setBounds(bounds: Bounds)

  show()

  hide()

  setzIndex(zindex: Number)

  getzIndex(): Number

  getElement(): HTMLCanvasElement

  setImageUrl(str: String)

  getImageUrl(): String

}