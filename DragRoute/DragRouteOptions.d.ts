export class DragRouteOptions{


    /**
     *Creates an instance of DragRouteOptions.
     * (详情)[https://lbs.amap.com/api/javascript-api/reference/route-search/?sug_index=1#AMap.DragRoute]
     * @param {Object} polyOptions 设置拖拽路线插件的路线属性对象，包括线样式、宽度、颜色等，参考PolylineOptions列表。
     * @param {Object} startMarkerOptions 设置拖拽路线插件起点点标记属性对象，包括点标记样式、大小等，参考MarkerOptions列表。
     * @param {Object} midMarkerOptions 设置拖拽路线插件途经点点标记属性对象，包括点标记样式、大小等，参考MarkerOptions列表列表。
     * @param {Object} endMarkerOptions 设置拖拽路线插件终点点标记属性对象，包括点标记样式、大小等，参考MarkerOptions列表列表。
     * @param {Boolean} showTraffic 设置显示实时路况信息，true：路线中显示实时路况信息，false：关闭实时路况信息默认值：true
     * @memberof DragRouteOptions
     */
    constructor(
        polyOptions:Object,
        startMarkerOptions:Object,
        midMarkerOptions:Object,
        endMarkerOptions:Object,
        showTraffic:Boolean
    )
}