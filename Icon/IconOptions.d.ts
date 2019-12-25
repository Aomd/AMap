import { Size } from "../Size";
import { Pixel } from "../Pixel";


/**
 * 表示点标记的图标
 * 用于添加复杂点标记，即在普通点标记的基础上，添加Icon类，通过在Icon表示的大图上截取其中一部分作为标注的图标
 * @export
 * @class IconOptions
 */
export class IconOptions{


  /**
   *Creates an instance of IconOptions.
   * @param {Size} size 图标尺寸，默认值(36,36)
   * @param {Pixel} imageOffset 图标取图偏移量。当image中指定了一个大图时，可通过size和imageOffset配合，显示图标的指定范围
   * @param {String} image 图标的取图地址。默认为蓝色图钉图片
   * @param {Size} imageSize 图标所用图片大小，根据所设置的大小拉伸或压缩图片，等同于CSS中的background-size属性。可用于实现高清屏的高清效果
   * @memberof IconOptions
   */
  constructor(
    size:Size,
    imageOffset:Pixel,
    image:String,
    imageSize:Size
  )

}