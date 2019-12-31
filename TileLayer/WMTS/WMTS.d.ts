import { WMTSOptions } from "./WMTSOptions";
import { Map } from "../../Map/Map";

export class WMTS {
  constructor(
    otps: WMTSOptions | Object
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