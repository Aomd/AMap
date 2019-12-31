import { Bounds } from "../Bounds";
import { Map } from "../Map/Map";

export class CanvasLayerOptions{
  constructor(

    bounds: Bounds,


    canvas: HTMLCanvasElement,


    opacity: Number,


    visible: Boolean,


    map: Map,


    zIndex: Number,


    zooms: [Number, Number]

  )
}