import { IconOptions } from "./IconOptions";


export class Icon{


  /**
   * Creates an instance of Icon.
   * 表示点标记的图标
   * @param {IconOptions} opt
   * @memberof Icon
   */
  constructor(opt:IconOptions)

  

  /**
   * 获取图标图片大小
   *
   * @returns {Size}
   * @memberof IconOptions
   */
  getImageSize():Size

  /**
   * 设置图标图片大小
   *
   * @param {Size} size
   * @memberof IconOptions
   */
  setImageSize(size:Size)
}