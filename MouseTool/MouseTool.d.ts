import { Map } from "../Map/Map";
import { MarkerOptions } from "../Marker/MarkerOptions";
import { PolylineOptions } from "../Polyline/PolylineOptions";
import {PolygonOptions} from '../Polygon/PolygonOptions'
import { CircleOptions } from "../Circle/CircleOptions";


type MouseToolEventNames =
    'draw';


export class MouseTool {
    constructor(
        map: Map
    )


    /**
     * 开启鼠标画点标注模式。鼠标在地图上单击绘制点标注，标注样式参考MarkerOptions设置
     *
     * @param {(MarkerOptions | Object)} options
     * @memberof MouseTool
     */
    marker(options: MarkerOptions | Object)

    /**
     * 开启鼠标画折线模式。鼠标在地图上点击绘制折线，鼠标左键双击或右键单击结束绘制，折线样式参考PolylineOptions设置
     *
     * @param {(PolylineOptions | Object)} options
     * @memberof MouseTool
     */
    polyline(options: PolylineOptions | Object)

    /**
     * 开启鼠标画多边形模式。鼠标在地图上单击开始绘制多边形，鼠标左键双击或右键单击结束当前多边形的绘制，多边形样式参考PolygonOptions设置
     *
     * @param {PolygonOptions} options
     * @memberof MouseTool
     */
    polygon( options:PolygonOptions)

    /**
     * 开启鼠标画矩形模式。鼠标在地图上拉框即可绘制相应的矩形。矩形样式参考PolygonOptions设置
     *
     * @param {PolygonOptions} options
     * @memberof MouseTool
     */
    rectangle( options:PolygonOptions)

    /**
     * 开启鼠标画圆模式。鼠标在地图上拖动绘制相应的圆形。圆形样式参考CircleOptions设置
     *
     * @param {CircleOptions} options
     * @memberof MouseTool
     */
    circle( options:CircleOptions)

    /**
     * 开启距离量测模式。鼠标在地图上单击绘制量测节点，并计算显示两两节点之间的距离，鼠标左键双击或右键单击结束当前量测操作。量测线样式参考 PolylineOptions 设置
     *
     * @param {PolylineOptions} options
     * @memberof MouseTool
     */
    rule( options:PolylineOptions)


    /**
     * 开启面积量测模式。鼠标在地图上单击绘制量测区域，鼠标左键双击或右键单击结束当前量测操作，并显示本次量测结果。量测面样式参考PolygonOptions设置
     *
     * @param {PolygonOptions} options
     * @memberof MouseTool
     */
    measureArea( options:PolygonOptions)

  
    /**
     * 
     * 开启鼠标拉框放大模式。鼠标可在地图上拉框放大地图。矩形框样式参考PolygonOptions设置
     *
     * @param {PolygonOptions} options
     * @memberof MouseTool
     */
    rectZoomIn( options:PolygonOptions)


    /**
     * 开启鼠标拉框缩小模式。鼠标可在地图上拉框缩小地图。矩形框样式参考PolygonOptions设置
     *
     * @param {PolygonOptions} options
     * @memberof MouseTool
     */
    rectZoomOut( options:PolygonOptions)

    /**
     * 关闭当前鼠标操作。参数arg设为true时，鼠标操作关闭的同时清除地图上绘制的所有覆盖物对象；设为false时，保留所绘制的覆盖物对象。默认为false
     *
     * @param {*} Boolean
     * @memberof MouseTool
     */
    close( Boolean)

    on(event: MouseToolEventNames, cb: Function)
}