export class MarkerClustererOptions {


    /**
     *Creates an instance of MarkerClustererOptions.
     * @param {Number} gridSize 聚合计算时网格的像素大小，默认60
     * @param {Number} minClusterSize 聚合的最小数量。默认值为2，即小于2个点则不能成为一个聚合
     * @param {Number} maxZoom 最大的聚合级别，大于该级别就不进行相应的聚合
     * @param {Boolean} averageCenter 聚合点的图标位置是否是所有聚合内点的中心点
     * @param {Array<Object>} styles 指定聚合后的点标记的图标样式，可缺省，缺省时为默认样式；
     * @param {(Object) => void} renderClusterMarker 该方法用来实现聚合点的自定义绘制，由开发者自己实现
     * @param {Boolean} zoomOnClick 点击聚合点时，是否散开，默认值为：true
     * @memberof MarkerClustererOptions
     */
    constructor(

        gridSize: Number,


        minClusterSize: Number,


        maxZoom: Number,


        averageCenter: Boolean,


        styles: Array<Object>,



        renderClusterMarker: (Object) => void,



        zoomOnClick: Boolean

    )
}