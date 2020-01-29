import { Map } from "../Map/Map";
type HotspotEventNames = 
'click'|
'mouseover'|
'mouseout';


export class Hotspot{
  constructor(
      map:Map
  )

  setMap(map:Map)

  on(event: HotspotEventNames, cb: Function)
}