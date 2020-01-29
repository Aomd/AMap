import { Pixel } from '../Pixel'

export class TextOptions {

    /**
     *Creates an instance of TextOptions.
     * @param {String} content 文字内容
     * @param {String} direction 相对于图标的方位。 可选值： 'top' 'right' 'bottom' 'left' 'center' 。默认值：'top'
     * @param {(Array<Pixel> | Pixel)} offset 相对 direction 的位置偏移
     * @param {Array<Number>} zooms 文字显示范围，可选值：[3,20]
     * @param {Object} style 文字样式，Object 取值见下方 StyleOptions
     * @memberof TextOptions
     */
    constructor(
        content: String,
        direction: String,
        offset: Array<Pixel> | Pixel,
        zooms: Array<Number>,
        style: Object,
    )
}