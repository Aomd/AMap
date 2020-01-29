import { LabelMarkerOptions } from './LabelMarkerOptions'
import { LngLat } from '../LngLat';
import { TextOptions } from './TextOptions'
import { IconOptions } from '../Icon/IconOptions'

/**
 * 标注类，支持大量点标注和文本标注的绘制
 *
 * @export
 * @class LabelMarker
 */
export class LabelMarker {
    constructor(opt: LabelMarkerOptions | Object)


    /**
     * 获取标注位置
     *
     * @returns {LngLat}
     * @memberof LabelMarker
     */
    getPosition(): LngLat


    /**
     * 设置标注位置
     *
     * @memberof LabelMarker
     */
    setPosition()


    /**
     * 获取显示级别范围
     *
     * @returns {Array<Number>}
     * @memberof LabelMarker
     */
    getZooms(): Array<Number>


    /**
     * 设置显示级别范围
     *
     * @memberof LabelMarker
     */
    setZooms()


    /**
     * 获取透明度
     *
     * @returns {Number}
     * @memberof LabelMarker
     */
    getOpacity(): Number


    /**
     * 设置透明度
     *
     * @returns {Number}
     * @memberof LabelMarker
     */
    setOpacity(): Number


    /** 
     * 设置文字样式和内容
     *
     * @param {(TextOptions | Object)} tpot
     * @memberof LabelMarker
     */
    setText(tpot: TextOptions | Object)


    /**
     * 设置图标样式
     *
     * @param {(IconOptions | Object)} ipot
     * @memberof LabelMarker
     */
    setIcon(ipot: IconOptions | Object)
}