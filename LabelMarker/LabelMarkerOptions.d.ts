import { LngLat } from "../LngLat";

export class LabelMarkerOptions{


    /**
     *Creates an instance of LabelMarkerOptions.
     * @param {(String | Array<LngLat> | LngLat)} position 标注的位置
     * @param {Array<Number>} zooms 标注显示级别范围， 可选值：[3,20]
     * @param {Number} opacity 标注透明度
     * @param {Number} rank 用于避让优先级，数字越大优先级越高，默认值为 1
     * @param {Object} icon 配置标注中的图标，Object 取值请参见下方 IconOptions
     * @param {Object} text 配置标注中的文字，Object 取值请参见下方 TextOptions
     * @memberof LabelMarkerOptions
     */
    constructor(
        position:	String | Array<LngLat> | LngLat,

        zooms:	Array<Number>,

        opacity:	Number,

        rank:	Number,

        icon:	Object,
        text:	Object
    )
}