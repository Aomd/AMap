export class StyleOptions {

    /**
     *Creates an instance of StyleOptions.
     * @param {Number} fontSize 文字大小，默认值：12
     * @param {String} fontFamily 文字字体
     * @param {String} fontWeight 文字粗细。 可选值： 'normal'| 'lighter'| 'bold' 。默认值：'normal'
     * @param {String} fillColor 文字颜色
     * @param {String} strokeColor 文字描边颜色
     * @param {Number} strokeWidth 文字描边宽度，注：只有描边颜色没有描边宽度时，默认描边宽度为 1
     * @param {(String | Array<Number>)} padding 文字 padding
     * @param {String} backgroundColor 文字背景颜色
     * @memberof StyleOptions
     */
    constructor(
        fontSize: Number,
        fontFamily: String,
        fontWeight: String,
        fillColor: String,
        strokeColor: String,
        strokeWidth: Number,
        padding: String | Array<Number>,
        backgroundColor: String,
    )
}