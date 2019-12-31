import { VideoLayerOptions } from "./VideoLayerOptions";
import { Map } from "../Map/Map";

export class VideoLayer{
  constructor(
    opts:VideoLayerOptions|Object
  )

  setMap(map:Map|null)

  getMap():Map

  show()

  hide()

  setzIndex(zindex:Number)

  getzIndex():Number

  getElement():HTMLVideoElement

  setVideoUrl(str:String|[String])

  getVideoUrl():String
}