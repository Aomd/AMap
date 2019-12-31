import { Bounds } from "../Bounds";
import { Map } from "../Map/Map";

export class ImageLayerOptions{
  constructor(
    bounds:Bounds,
    url:String,
    opacity:Number,
    visible:Boolean,
    map:Map,
    zIndex:Number,
    zooms:[Number,Number]
  )
}