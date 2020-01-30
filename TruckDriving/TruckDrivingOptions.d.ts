import { Map } from "../Map/Map";

export class TruckDrivingOptions{
  constructor(
    policy:Number,
    size:Number,
    width:Number,
    height:Number,
    load:Number,
    weight:Number,
    axlesNum:Number,

    extensions:String,
    map:Map,
    panel:String|HTMLElement,
    hideMarkers:Boolean,
    showTraffic:Boolean,
    isOutline:Boolean,
    outlineColor:String,
    autoFitView:Boolean,
    province:String,
    number:Number

  )
}