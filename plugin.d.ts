type PluginName =
    | 'AMap.ElasticMarker'
    | 'AMap.ToolBar'
    | 'AMap.Scale'
    | 'AMap.OverView'
    | 'AMap.MapType'
    | 'AMap.Geolocation'
    | 'AMap.AdvancedInfoWindow'
    | 'AMap.Autocomplete'
    | 'AMap.PlaceSearch'
    | 'AMap.PlaceSearchLayer'
    | 'AMap.DistrictSearch'
    | 'AMap.LineSearch'
    | 'AMap.StationSearch'
    | 'AMap.Driving'
    | 'AMap.TruckDriving'
    | 'AMap.Transfer'
    | 'AMap.Walking'
    | 'AMap.Riding'
    | 'AMap.DragRoute'
    | 'AMap.ArrivalRange'
    | 'AMap.Geocoder'
    | 'AMap.CitySearch'
    | 'AMap.IndoorMap'
    | 'AMap.MouseTool'
    | 'AMap.CircleEditor'
    | 'AMap.PolyEditor'
    | 'AMap.MarkerClusterer'
    | 'AMap.RangingTool'
    | 'AMap.CloudDataLayer'
    | 'AMap.CloudDataSearch'
    | 'AMap.Weather'
    | 'AMap.RoadInfoSearch'
    | 'AMap.Hotspot'
    | 'AMap.Heatmap'

export function plugin(
    pluginNames: PluginName | PluginName[],
    callback: () => void
  ): void