import { Bounds } from "../Bounds";
import { Map } from "../Map/Map";

export class VideoLayerOptions {
  constructor(
    autoplay:Boolean,
    loop:Boolean,
    bounds:Bounds,
    url:String|Array<String>,
    opacity:Number,
    visible:Boolean,
    map:Map,
    zIndex:Number,
    zooms:[Number,Number]
  )
}