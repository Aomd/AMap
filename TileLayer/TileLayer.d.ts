import { TileLayerOptions } from "./TileLayerOptions";
import { Map } from '../Map/Map'

import { RoadNet } from './RoadNet/RoadNet'

import { Satellite } from './Satellite/Satellite'

import { Traffic } from './Traffic/Traffic'

import { Flexible } from './Flexible/Flexible'


export class TileLayer {

  public static RoadNet: typeof RoadNet;

  public static Satellite: typeof Satellite;

  public static Traffic: typeof Traffic;

  public static Flexible: typeof Flexible;



  constructor(
    tileOpt: Object | TileLayerOptions
  )
  setOpacity(alpha: Number)
  show()
  hide()
  getTiles(): Array<Number>
  reload()
  setTileUrl()
  getZooms(): Array<Number>
  setzIndex(index: Number)
  setMap(map: Map)
}

