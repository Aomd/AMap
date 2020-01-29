import { InfoWindowOptions } from './InfoWindowOptions'
import { Map } from '../Map/Map';
import { LngLat } from '../LngLat';
import { Size } from '../Size';


type InfoWindowEventNames =
    'change' |
    'open' |
    'close';

export class InfoWindow {
    constructor(opt: InfoWindowOptions | Object)


    /**
     * 在地图的指定位置打开信息窗体
     *
     * @param {Map} map
     * @param {LngLat} pos
     * @memberof InfoWindow
     */
    open(map: Map, pos: LngLat)


    /**
     * 关闭信息窗体
     *
     * @memberof InfoWindow
     */
    close()


    /**
     * 获取信息窗体是否打开
     *
     * @returns {Boolean}
     * @memberof InfoWindow
     */
    getIsOpen(): Boolean


    /**
     * 设置信息窗体内容，可通过该函数动态更新信息窗体中的信息
     *
     * @param {(String|HTMLElement)} content
     * @memberof InfoWindow
     */
    setContent(content: String | HTMLElement)


    /**
     * 获取信息窗体内容 ，结果以字符串方式返回
     *
     * @returns {String}
     * @memberof InfoWindow
     */
    getContent(): String


    /**
     * 设置信息窗体显示基点位置
     *
     * @param {LngLat} lnglat
     * @memberof InfoWindow
     */
    setPosition(lnglat: LngLat)


    /**
     * 获取信息窗体显示基点位置
     *
     * @returns {LngLat}
     * @memberof InfoWindow
     */
    getPosition(): LngLat


    /**
     * 获取信息窗体锚点          
     *  
     * @returns {String}
     * @memberof InfoWindow
     */
    getAnchor(): String


    /**
     * 设置信息窗体锚点
     *
     * @memberof InfoWindow
     */
    setAnchor()


    /**
     * 设置信息窗体大小
     *
     * @param {Size} size
     * @memberof InfoWindow
     */
    setSize(size: Size)


    /**
     * 获取信息窗体大小
     *
     * @returns {Size}
     * @memberof InfoWindow
     */
    getSize(): Size


    on(event: InfoWindowEventNames, cb: Function)

}