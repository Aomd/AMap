import { StyleObject } from "../StyleObject";


/**
 *
 *
 * @export
 * @class MassMarksOptions
 */
export class MassMarksOptions {

  /**
   *Creates an instance of MassMarksOptions.
   * @param {Number} zIndex 图层叠加的顺序值，0表示最底层。默认zIndex：5
   * @param {Number} opacity 图层的透明度，取值范围[0,1]，1代表完全不透明，0代表完全透明
   * @param {Array<Number>} zooms 支持的缩放级别范围，默认范围[3-18]，在PC上，取值范围为[3-18]；在移动设备上，取值范围为[3-19]
   * @param {String} cursor 指定鼠标悬停时的鼠标样式，自定义cursor，IE仅支持cur/ani/ico格式，Opera不支持自定义cursor
   * @param {Boolean} alwaysRender 表示是否在拖拽缩放过程中实时重绘，默认true，建议超过10000的时候设置false
   * @param {(StyleObject | Array<StyleObject>)} style 用于设置点的样式，当点样式一致时传入StyleObject即可；当需要展示多种点样式时，传入StyleObject的数组，此时需要为Data中每个元素指定 style字段为该元素要显示的样式在StyleObject数组中的索引
   * @memberof MassMarksOptions
   */
  constructor(
    zIndex: Number,	//图层叠加的顺序值，0表示最底层。默认zIndex：5
    opacity: Number,	//图层的透明度，取值范围[0,1]，1代表完全不透明，0代表完全透明
    zooms: Array<Number>,	//支持的缩放级别范围，默认范围[3-18]，在PC上，取值范围为[3-18]；在移动设备上，取值范围为[3-19]
    cursor: String,	//指定鼠标悬停时的鼠标样式，自定义cursor，IE仅支持cur/ani/ico格式，Opera不支持自定义cursor
    alwaysRender: Boolean,//表示是否在拖拽缩放过程中实时重绘，默认true，建议超过10000的时候设置false
    style: StyleObject | Array<StyleObject>	//用于设置点的样式，当点样式一致时传入StyleObject即可；当需要展示多种点样式时，传入StyleObject的数组，此时需要为Data中每个元素指定 style字段为该元素要显示的样式在StyleObject数组中的索引
  )
}