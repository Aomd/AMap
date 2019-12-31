import { TileLayer} from '../TileLayer/TileLayer'
import {Map} from '../Map/Map'
import { TileLayerOptions } from '../TileLayer/TileLayerOptions'

export class LayerGroup {
  constructor(
    layers: Array<TileLayer>
  )

  addLayer(layer: TileLayer)

  addLayers(layers: Array<TileLayer>)

  getLayers(): Array<TileLayer>

  hasLayer(layer: TileLayer): Boolean	

  removeLayer(layer: TileLayer)

  removeLayers(layers: Array<TileLayer>)

  clearLayers()

  eachLayer(iterator: Function)

  setMap(map: Map): Boolean

  setOptions(opt: Object |TileLayerOptions)

  show()

  hide()
}