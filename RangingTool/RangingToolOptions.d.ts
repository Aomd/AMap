import { Pixel } from "../Pixel";

export class RangingToolOptions {

    /**
     *Creates an instance of RangingToolOptions.
     * @param {Object} startMarkerOptions 设置量测起始点标记属性对象
     * @param {Object} midMarkerOptions 设置量测中间点标记属性对象
     * @param {Object} endMarkerOptions 设置量测结束点标记属性对象
     * @param {Object} lineOptions 设置距离量测线的属性对象
     * @param {Object} tmpLineOptions 设置距离量测过程中临时量测线的属性对象
     * @param {String} midLabelText 设置量测起始点标签的文字内容
     * @param {String} startLabelText 设置量测中间点处标签的文字内容
     * @param {String} endLabelText 设置量测结束点处标签的文字内容
     * @param {Pixel} startLabelOffset  设置量测起始点标签的偏移量
     * @param {Pixel} midLabelOffset  设置量测结束点标签的偏移量
     * @param {Pixel} endLabelOffset  设置量测结束点标签的偏移量
     * @memberof RangingToolOptions
     */
    constructor(
        startMarkerOptions:Object,
        midMarkerOptions:Object,
        endMarkerOptions:Object,
        lineOptions:Object,
        tmpLineOptions:Object,
        startLabelText:String,
        midLabelText:String,
        endLabelText:String,
        startLabelOffset:Pixel,
        midLabelOffset:Pixel,
        endLabelOffset:Pixel,
    )
}