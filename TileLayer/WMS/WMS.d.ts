import { WMSOptions } from "./WMSOptions";
import { Map } from "../../Map/Map";

export class WMS {
  constructor(
    opts: WMSOptions | Object
  )

  setMap(map: Map)

  getMap(): Map

  show()

  hide()

  setzIndex(zindex: Number)

  getzIndex(): Number

  setUrl(url: String)

  getUrl(): String

  setParams(params: Object)

  getParams(): Object
}